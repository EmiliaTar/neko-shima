const http = require("http");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { URL } = require("url");

const ROOT = __dirname;
const PORT = process.env.PORT || 3000;
const DB_DIR = path.join(ROOT, "data");
const DB_FILE = path.join(DB_DIR, "users.json");
const SESSION_TTL_SECONDS = 60 * 60 * 24 * 14;

const sessions = new Map();

const loadEnv = () => {
  const envPath = path.join(ROOT, ".env");
  if (!fs.existsSync(envPath)) return;
  const content = fs.readFileSync(envPath, "utf8");
  content.split(/\r?\n/).forEach((line) => {
    if (!line || line.trim().startsWith("#")) return;
    const idx = line.indexOf("=");
    if (idx === -1) return;
    const key = line.slice(0, idx).trim();
    const value = line.slice(idx + 1).trim();
    if (!process.env[key]) process.env[key] = value;
  });
};

const ensureDb = () => {
  if (!fs.existsSync(DB_DIR)) fs.mkdirSync(DB_DIR, { recursive: true });
  if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify({ users: [] }, null, 2));
  }
};

const readDb = () => {
  ensureDb();
  const raw = fs.readFileSync(DB_FILE, "utf8");
  return JSON.parse(raw || "{\"users\":[]}");
};

const writeDb = (data) => {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
};

loadEnv();
ensureDb();

const getApiKey = () => process.env.OCR_SPACE_KEY || "";

const mimeTypes = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".svg": "image/svg+xml"
};

const send = (res, status, body, type = "text/plain", extraHeaders = {}) => {
  res.writeHead(status, {
    "Content-Type": type,
    ...extraHeaders
  });
  res.end(body);
};

const parseJson = (req) =>
  new Promise((resolve, reject) => {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
      if (data.length > 5_000_000) {
        reject(new Error("Payload too large"));
      }
    });
    req.on("end", () => {
      try {
        resolve(JSON.parse(data || "{}"));
      } catch (err) {
        reject(err);
      }
    });
  });

const parseCookies = (req) => {
  const cookieHeader = req.headers.cookie || "";
  return cookieHeader.split(";").reduce((acc, pair) => {
    const [key, ...rest] = pair.trim().split("=");
    if (!key) return acc;
    acc[key] = decodeURIComponent(rest.join("="));
    return acc;
  }, {});
};

const hashPassword = (password, salt) =>
  crypto.pbkdf2Sync(password, salt, 100000, 64, "sha512").toString("hex");

const createSession = (userId) => {
  const token = crypto.randomBytes(24).toString("hex");
  sessions.set(token, {
    userId,
    expiresAt: Date.now() + SESSION_TTL_SECONDS * 1000
  });
  return token;
};

const getSessionUser = (req) => {
  const cookies = parseCookies(req);
  const token = cookies.session_token;
  if (!token) return null;
  const session = sessions.get(token);
  if (!session) return null;
  if (session.expiresAt < Date.now()) {
    sessions.delete(token);
    return null;
  }
  const db = readDb();
  const user = db.users.find((u) => u.id === session.userId);
  if (!user) return null;
  return { user, token };
};

const toPublicUser = (user) => ({
  id: user.id,
  username: user.username
});

const normalizeProgressPath = (mode, group) => {
  if (!mode || !group) return null;
  const cleanMode = String(mode).trim();
  const cleanGroup = String(group).trim();
  if (!cleanMode || !cleanGroup) return null;
  return { cleanMode, cleanGroup };
};

const resolveLanguage = (mode, direction) => {
  if (mode === "words" && direction === "jp-en") return "eng";
  return "jpn";
};

const handleRegister = async (req, res) => {
  let body;
  try {
    body = await parseJson(req);
  } catch (err) {
    send(res, 400, JSON.stringify({ error: "Invalid JSON" }), "application/json");
    return;
  }

  const username = String(body.username || "").trim();
  const password = String(body.password || "");
  if (username.length < 3 || password.length < 4) {
    send(
      res,
      400,
      JSON.stringify({ error: "Username >= 3 symbols, password >= 4 symbols." }),
      "application/json"
    );
    return;
  }

  const db = readDb();
  const exists = db.users.some((u) => u.username.toLowerCase() === username.toLowerCase());
  if (exists) {
    send(res, 409, JSON.stringify({ error: "User already exists." }), "application/json");
    return;
  }

  const salt = crypto.randomBytes(16).toString("hex");
  const passwordHash = hashPassword(password, salt);
  const user = {
    id: crypto.randomUUID(),
    username,
    salt,
    passwordHash,
    progress: {}
  };
  db.users.push(user);
  writeDb(db);

  const token = createSession(user.id);
  send(
    res,
    201,
    JSON.stringify({ user: toPublicUser(user) }),
    "application/json",
    {
      "Set-Cookie": `session_token=${token}; HttpOnly; Path=/; Max-Age=${SESSION_TTL_SECONDS}; SameSite=Lax`
    }
  );
};

const handleLogin = async (req, res) => {
  let body;
  try {
    body = await parseJson(req);
  } catch (err) {
    send(res, 400, JSON.stringify({ error: "Invalid JSON" }), "application/json");
    return;
  }

  const username = String(body.username || "").trim();
  const password = String(body.password || "");
  const db = readDb();
  const user = db.users.find((u) => u.username.toLowerCase() === username.toLowerCase());
  if (!user) {
    send(res, 401, JSON.stringify({ error: "Wrong username or password." }), "application/json");
    return;
  }

  const currentHash = hashPassword(password, user.salt);
  if (currentHash !== user.passwordHash) {
    send(res, 401, JSON.stringify({ error: "Wrong username or password." }), "application/json");
    return;
  }

  const token = createSession(user.id);
  send(
    res,
    200,
    JSON.stringify({ user: toPublicUser(user) }),
    "application/json",
    {
      "Set-Cookie": `session_token=${token}; HttpOnly; Path=/; Max-Age=${SESSION_TTL_SECONDS}; SameSite=Lax`
    }
  );
};

const handleLogout = (req, res) => {
  const cookies = parseCookies(req);
  if (cookies.session_token) sessions.delete(cookies.session_token);
  send(
    res,
    200,
    JSON.stringify({ ok: true }),
    "application/json",
    { "Set-Cookie": "session_token=; HttpOnly; Path=/; Max-Age=0; SameSite=Lax" }
  );
};

const handleMe = (req, res) => {
  const auth = getSessionUser(req);
  if (!auth) {
    send(res, 401, JSON.stringify({ error: "Unauthorized" }), "application/json");
    return;
  }
  send(res, 200, JSON.stringify({ user: toPublicUser(auth.user) }), "application/json");
};

const handleGetProgress = (req, res, url) => {
  const auth = getSessionUser(req);
  if (!auth) {
    send(res, 401, JSON.stringify({ error: "Unauthorized" }), "application/json");
    return;
  }

  const mode = url.searchParams.get("mode");
  const group = url.searchParams.get("group");
  if (!mode || !group) {
    send(res, 400, JSON.stringify({ error: "mode and group are required" }), "application/json");
    return;
  }

  const userProgress = auth.user.progress || {};
  const groupData = userProgress[mode]?.[group] || { attempts: 0, correct: 0 };
  send(res, 200, JSON.stringify({ progress: groupData }), "application/json");
};

const handlePostProgress = async (req, res) => {
  const auth = getSessionUser(req);
  if (!auth) {
    send(res, 401, JSON.stringify({ error: "Unauthorized" }), "application/json");
    return;
  }

  let body;
  try {
    body = await parseJson(req);
  } catch (err) {
    send(res, 400, JSON.stringify({ error: "Invalid JSON" }), "application/json");
    return;
  }

  const pathData = normalizeProgressPath(body.mode, body.group);
  if (!pathData) {
    send(res, 400, JSON.stringify({ error: "mode and group are required" }), "application/json");
    return;
  }

  const attemptsDelta = Number(body.attemptsDelta || 0);
  const correctDelta = Number(body.correctDelta || 0);

  const db = readDb();
  const user = db.users.find((u) => u.id === auth.user.id);
  if (!user) {
    send(res, 401, JSON.stringify({ error: "Unauthorized" }), "application/json");
    return;
  }

  if (!user.progress[pathData.cleanMode]) user.progress[pathData.cleanMode] = {};
  if (!user.progress[pathData.cleanMode][pathData.cleanGroup]) {
    user.progress[pathData.cleanMode][pathData.cleanGroup] = { attempts: 0, correct: 0 };
  }

  const current = user.progress[pathData.cleanMode][pathData.cleanGroup];
  current.attempts = Math.max(0, current.attempts + attemptsDelta);
  current.correct = Math.max(0, current.correct + correctDelta);

  writeDb(db);
  send(res, 200, JSON.stringify({ progress: current }), "application/json");
};

const handleOcr = async (req, res) => {
  const apiKey = getApiKey();
  if (!apiKey) {
    send(res, 500, JSON.stringify({ error: "API key missing" }), "application/json");
    return;
  }

  let body;
  try {
    body = await parseJson(req);
  } catch (err) {
    send(res, 400, JSON.stringify({ error: "Invalid JSON" }), "application/json");
    return;
  }

  if (!body.image) {
    send(res, 400, JSON.stringify({ error: "Image missing" }), "application/json");
    return;
  }

  const mode = typeof body.mode === "string" ? body.mode : "";
  const direction = typeof body.direction === "string" ? body.direction : "";
  const params = new URLSearchParams();
  params.append("apikey", apiKey);
  params.append("base64image", body.image);
  params.append("language", resolveLanguage(mode, direction));
  params.append("isOverlayRequired", "false");
  params.append("OCREngine", "2");
  params.append("scale", "true");
  params.append("detectOrientation", "true");

  try {
    const response = await fetch("https://api.ocr.space/parse/image", {
      method: "POST",
      body: params
    });
    const data = await response.json();

    if (data.IsErroredOnProcessing) {
      const message = Array.isArray(data.ErrorMessage)
        ? data.ErrorMessage.join(", ")
        : data.ErrorMessage || "OCR failed";
      send(res, 500, JSON.stringify({ error: message }), "application/json");
      return;
    }

    const text = data.ParsedResults?.[0]?.ParsedText || "";
    send(res, 200, JSON.stringify({ text }), "application/json");
  } catch (err) {
    send(res, 500, JSON.stringify({ error: "OCR request failed" }), "application/json");
  }
};

const serveStatic = (res, pathname) => {
  const relativePath = pathname === "/" ? "index.html" : pathname.replace(/^\/+/, "");
  const fullPath = path.join(ROOT, relativePath);

  if (!fullPath.startsWith(ROOT)) {
    send(res, 403, "Forbidden");
    return;
  }

  fs.readFile(fullPath, (err, content) => {
    if (err) {
      send(res, 404, "Not found");
      return;
    }
    const ext = path.extname(fullPath);
    send(res, 200, content, mimeTypes[ext] || "application/octet-stream");
  });
};

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (req.method === "POST" && url.pathname === "/api/ocr") return void handleOcr(req, res);
  if (req.method === "POST" && url.pathname === "/api/register") return void handleRegister(req, res);
  if (req.method === "POST" && url.pathname === "/api/login") return void handleLogin(req, res);
  if (req.method === "POST" && url.pathname === "/api/logout") return void handleLogout(req, res);
  if (req.method === "GET" && url.pathname === "/api/me") return void handleMe(req, res);
  if (req.method === "GET" && url.pathname === "/api/progress") return void handleGetProgress(req, res, url);
  if (req.method === "POST" && url.pathname === "/api/progress") return void handlePostProgress(req, res);

  if (req.method !== "GET") {
    send(res, 405, "Method not allowed");
    return;
  }

  serveStatic(res, url.pathname);
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
