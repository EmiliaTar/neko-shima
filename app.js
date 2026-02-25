const lessonSets = {
  hiragana: {
    title: "Hiragana",
    subtitle: "Write the symbol in the practice area below.",
    groups: [
      {
        id: "a",
        label: "あ行 (a-i-u-e-o)",
        items: [
          { question: "a", answer: "あ" },
          { question: "i", answer: "い" },
          { question: "u", answer: "う" },
          { question: "e", answer: "え" },
          { question: "o", answer: "お" }
        ]
      },
      {
        id: "ka",
        label: "か行 (ka-ki-ku-ke-ko)",
        items: [
          { question: "ka", answer: "か" },
          { question: "ki", answer: "き" },
          { question: "ku", answer: "く" },
          { question: "ke", answer: "け" },
          { question: "ko", answer: "こ" }
        ]
      },
      {
        id: "sa",
        label: "さ行 (sa-shi-su-se-so)",
        items: [
          { question: "sa", answer: "さ" },
          { question: "shi", answer: "し" },
          { question: "su", answer: "す" },
          { question: "se", answer: "せ" },
          { question: "so", answer: "そ" }
        ]
      },
      {
        id: "ta",
        label: "た行 (ta-chi-tsu-te-to)",
        items: [
          { question: "ta", answer: "た" },
          { question: "chi", answer: "ち" },
          { question: "tsu", answer: "つ" },
          { question: "te", answer: "て" },
          { question: "to", answer: "と" }
        ]
      },
      {
        id: "na",
        label: "な行 (na-ni-nu-ne-no)",
        items: [
          { question: "na", answer: "な" },
          { question: "ni", answer: "に" },
          { question: "nu", answer: "ぬ" },
          { question: "ne", answer: "ね" },
          { question: "no", answer: "の" }
        ]
      },
      {
        id: "ha",
        label: "は行 (ha-hi-fu-he-ho)",
        items: [
          { question: "ha", answer: "は" },
          { question: "hi", answer: "ひ" },
          { question: "fu", answer: "ふ" },
          { question: "he", answer: "へ" },
          { question: "ho", answer: "ほ" }
        ]
      },
      {
        id: "ma",
        label: "ま行 (ma-mi-mu-me-mo)",
        items: [
          { question: "ma", answer: "ま" },
          { question: "mi", answer: "み" },
          { question: "mu", answer: "む" },
          { question: "me", answer: "め" },
          { question: "mo", answer: "も" }
        ]
      },
      {
        id: "ya",
        label: "や行 (ya-yu-yo)",
        items: [
          { question: "ya", answer: "や" },
          { question: "yu", answer: "ゆ" },
          { question: "yo", answer: "よ" }
        ]
      },
      {
        id: "ra",
        label: "ら行 (ra-ri-ru-re-ro)",
        items: [
          { question: "ra", answer: "ら" },
          { question: "ri", answer: "り" },
          { question: "ru", answer: "る" },
          { question: "re", answer: "れ" },
          { question: "ro", answer: "ろ" }
        ]
      },
      {
        id: "wa",
        label: "わ行 (wa-wo-n)",
        items: [
          { question: "wa", answer: "わ" },
          { question: "wo", answer: "を" },
          { question: "n", answer: "ん" }
        ]
      }
    ]
  },
  katakana: {
    title: "Katakana",
    subtitle: "Practice writing katakana in the square.",
    groups: [
      {
        id: "a",
        label: "ア行 (a-i-u-e-o)",
        items: [
          { question: "a", answer: "ア" },
          { question: "i", answer: "イ" },
          { question: "u", answer: "ウ" },
          { question: "e", answer: "エ" },
          { question: "o", answer: "オ" }
        ]
      },
      {
        id: "ka",
        label: "カ行 (ka-ki-ku-ke-ko)",
        items: [
          { question: "ka", answer: "カ" },
          { question: "ki", answer: "キ" },
          { question: "ku", answer: "ク" },
          { question: "ke", answer: "ケ" },
          { question: "ko", answer: "コ" }
        ]
      },
      {
        id: "sa",
        label: "サ行 (sa-shi-su-se-so)",
        items: [
          { question: "sa", answer: "サ" },
          { question: "shi", answer: "シ" },
          { question: "su", answer: "ス" },
          { question: "se", answer: "セ" },
          { question: "so", answer: "ソ" }
        ]
      },
      {
        id: "ta",
        label: "タ行 (ta-chi-tsu-te-to)",
        items: [
          { question: "ta", answer: "タ" },
          { question: "chi", answer: "チ" },
          { question: "tsu", answer: "ツ" },
          { question: "te", answer: "テ" },
          { question: "to", answer: "ト" }
        ]
      },
      {
        id: "na",
        label: "ナ行 (na-ni-nu-ne-no)",
        items: [
          { question: "na", answer: "ナ" },
          { question: "ni", answer: "ニ" },
          { question: "nu", answer: "ヌ" },
          { question: "ne", answer: "ネ" },
          { question: "no", answer: "ノ" }
        ]
      },
      {
        id: "ha",
        label: "ハ行 (ha-hi-fu-he-ho)",
        items: [
          { question: "ha", answer: "ハ" },
          { question: "hi", answer: "ヒ" },
          { question: "fu", answer: "フ" },
          { question: "he", answer: "ヘ" },
          { question: "ho", answer: "ホ" }
        ]
      },
      {
        id: "ma",
        label: "マ行 (ma-mi-mu-me-mo)",
        items: [
          { question: "ma", answer: "マ" },
          { question: "mi", answer: "ミ" },
          { question: "mu", answer: "ム" },
          { question: "me", answer: "メ" },
          { question: "mo", answer: "モ" }
        ]
      },
      {
        id: "ya",
        label: "ヤ行 (ya-yu-yo)",
        items: [
          { question: "ya", answer: "ヤ" },
          { question: "yu", answer: "ユ" },
          { question: "yo", answer: "ヨ" }
        ]
      },
      {
        id: "ra",
        label: "ラ行 (ra-ri-ru-re-ro)",
        items: [
          { question: "ra", answer: "ラ" },
          { question: "ri", answer: "リ" },
          { question: "ru", answer: "ル" },
          { question: "re", answer: "レ" },
          { question: "ro", answer: "ロ" }
        ]
      },
      {
        id: "wa",
        label: "ワ行 (wa-wo-n)",
        items: [
          { question: "wa", answer: "ワ" },
          { question: "wo", answer: "ヲ" },
          { question: "n", answer: "ン" }
        ]
      }
    ]
  },
  kanji: {
    title: "Kanji",
    subtitle: "Write kanji with clear strokes.",
    groups: [
      {
        id: "basic",
        label: "Basic",
        items: [
          {
            question: "tree",
            answer: "木",
            level: "Basic",
            kunyomi: ["ki"],
            onyomi: ["moku", "boku"],
            meaning: ["tree", "wood"],
            examples: [{ word: "木", reading: "き", translation: "tree" }]
          }
        ]
      }
    ]
  },
  words: {
    title: "Words",
    subtitle: "Type the translation with keyboard input.",
    groups: [
      {
        id: "basics",
        label: "Basics",
        items: [
          { en: "cat", jp: "ねこ", jpAlt: ["猫"], association: "pet, purrs, catches mice" },
          { en: "island", jp: "しま", jpAlt: ["島"], association: "land surrounded by water" },
          { en: "teacher", jp: "せんせい", jpAlt: ["先生"], association: "person who teaches students" },
          { en: "water", jp: "みず", jpAlt: ["水"], association: "drink, river, rain" },
          { en: "good morning", jp: "おはよう", jpAlt: ["お早う"], association: "morning greeting" }
        ]
      },
      {
        id: "food",
        label: "Food",
        items: [
          { en: "rice", jp: "ごはん", jpAlt: ["ご飯"], association: "main staple food in Japan" },
          { en: "tea", jp: "おちゃ", jpAlt: ["お茶"], association: "green drink served hot" },
          { en: "fish", jp: "さかな", jpAlt: ["魚"], association: "swims in water, seafood" },
          { en: "apple", jp: "りんご", association: "round fruit, red or green" },
          { en: "bread", jp: "パン", association: "baked food, toast, sandwich" }
        ]
      }
    ]
  }
};

const menuButtons = document.querySelectorAll(".menu-item");
const modeTitle = document.getElementById("mode-title");
const modeSubtitle = document.getElementById("mode-subtitle");
const questionEl = document.getElementById("question");
const hintEl = document.getElementById("hint");
const wordsPanel = document.getElementById("words-panel");
const keyboardRow = document.getElementById("keyboard-row");
const textInput = document.getElementById("text-input");
const resultEl = document.getElementById("result");
const progressMini = document.getElementById("progress-mini");
const hintText = document.getElementById("hint-text");
const associationHintButton = document.getElementById("show-association-hint");
const exampleHintButton = document.getElementById("show-example-hint");
const toggleKanjiPanelButton = document.getElementById("toggle-kanji-panel");
const closeKanjiPanelButton = document.getElementById("close-kanji-panel");
const kanjiSidePanel = document.getElementById("kanji-side-panel");
const kanjiLevel = document.getElementById("kanji-level");
const kanjiKunyomi = document.getElementById("kanji-kunyomi");
const kanjiOnyomi = document.getElementById("kanji-onyomi");
const kanjiMeaning = document.getElementById("kanji-meaning");
const kanjiExamples = document.getElementById("kanji-examples");
const groupPickerLabel = document.getElementById("group-picker-label");

const groupPicker = document.getElementById("group-picker");
const kanjiLevelPicker = document.getElementById("kanji-level-picker");
const kanjiLevelLabel = document.getElementById("kanji-level-label");
const kanjiLevelWrap = document.getElementById("kanji-level-wrap");

const authGuest = document.getElementById("auth-guest");
const authUser = document.getElementById("auth-user");
const authName = document.getElementById("auth-name");
const authStatus = document.getElementById("auth-status");
const authUsername = document.getElementById("auth-username");
const authPassword = document.getElementById("auth-password");
const loginBtn = document.getElementById("login-btn");
const registerBtn = document.getElementById("register-btn");
const logoutBtn = document.getElementById("logout-btn");

const canvas = document.getElementById("draw");
const ctx = canvas.getContext("2d");
const hintButton = document.getElementById("show-hint");
const clearButton = document.getElementById("clear");
const checkButton = document.getElementById("check");
const directionButtons = document.querySelectorAll(".pill");
const canvasWrap = document.querySelector(".canvas-wrap");

let currentMode = "hiragana";
let currentGroupId = lessonSets.hiragana.groups[0].id;
let currentIndex = 0;
let direction = "en-jp";
let currentKanjiLevel = "all";
let currentWordLevel = "all";
let isDrawing = false;
let lastPoint = null;
let isChecking = false;
let currentUser = null;
let isKanjiPanelOpen = false;

const templateCache = new Map();

const api = async (url, options = {}) => {
  const response = await fetch(url, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {})
    },
    ...options
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.error || "Request failed");
  }
  return data;
};

const setCanvasSize = () => {
  const ratio = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * ratio;
  canvas.height = rect.height * ratio;
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.scale(ratio, ratio);
  ctx.lineWidth = 10;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.strokeStyle = "#2b2b26";
};

const clearCanvas = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

const normalize = (value) =>
  value
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/[.,/#!$%^&*;:{}=\-_`~()'"?[\]\\|<>]/g, "");

const getModeSet = () => lessonSets[currentMode];
const getCurrentGroup = () => getModeSet().groups.find((g) => g.id === currentGroupId) || getModeSet().groups[0];
const isWordsJpToEn = () => currentMode === "words" && direction === "jp-en";
const isKanjiMode = () => currentMode === "kanji";
const isWordsMode = () => currentMode === "words";
const KANJI_LEVEL_ORDER = ["N5", "N4", "N3"];
const WORD_LEVEL_ORDER = ["N5", "N4", "N3"];
const WORD_THEME_ORDER = [
  "Animals",
  "People & Family",
  "Time & Dates",
  "Food & Drink",
  "Home & Daily Life",
  "School & Work",
  "Places & Transport",
  "Nature & Weather",
  "Actions & Verbs",
  "Adjectives & Feelings",
  "Abstract & Society",
  "Other"
];

const slugify = (value) =>
  String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "group";

const toArray = (value) => {
  if (!value || value === "—") return [];
  if (Array.isArray(value)) return value.filter(Boolean);
  return String(value)
    .split("/")
    .map((x) => x.trim())
    .filter(Boolean);
};

const inferKanjiLevelByCategory = (categoryName) => {
  const key = slugify(categoryName);
  const n5 = new Set(["numbers", "time", "family-and-friends", "body-parts", "nature", "basic"]);
  const n4 = new Set(["adjectives", "nouns"]);
  const n3 = new Set(["verbs"]);
  if (n5.has(key)) return "N5";
  if (n4.has(key)) return "N4";
  if (n3.has(key)) return "N3";
  return "N5";
};

const normalizeWordLevel = (value) => {
  const raw = String(value || "").toUpperCase().trim();
  if (raw === "N5" || raw === "N4" || raw === "N3") return raw;
  return "N5";
};

const autoWordExample = (item) => {
  const jp = item.jp || item.furigana || "ことば";
  const en = item.en || "word";
  if (item.example) return item.example;
  return `${jp} を つかいます。(${en})`;
};

const normalizeKanjiLevel = (value, fallbackCategory) => {
  const raw = String(value || "").trim().toUpperCase();
  if (raw === "N5" || raw === "N4" || raw === "N3") return raw;
  if (raw === "BASIC") return inferKanjiLevelByCategory(fallbackCategory);
  return inferKanjiLevelByCategory(fallbackCategory);
};

const normalizeKanjiEntry = (entry, categoryName) => {
  const meanings = Array.isArray(entry.meaning)
    ? entry.meaning
    : String(entry.meaning || "")
        .split(",")
        .map((x) => x.trim())
        .filter(Boolean);
  return {
    question: (meanings[0] || "meaning").toLowerCase(),
    answer: entry.kanji,
    level: normalizeKanjiLevel(entry.level, categoryName),
    kunyomi: toArray(entry.kunyomi),
    onyomi: toArray(entry.onyomi),
    meaning: meanings,
    examples: Array.isArray(entry.examples) ? entry.examples : []
  };
};

const normalizeWordEntry = (entry) => {
  const jp = String(entry.jp || entry.word || "").trim();
  const en = String(entry.en || entry.meaning || "").trim();
  const furigana = String(entry.furigana || jp).trim();
  const romaji = String(entry.romaji || "").trim();
  const level = normalizeWordLevel(entry.level);
  return {
    jp,
    en,
    furigana,
    romaji,
    level,
    theme: String(entry.theme || "").trim(),
    association: entry.association || "",
    example: entry.example || ""
  };
};

const escapeRegExp = (value) => String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const hasAny = (text, words) => {
  const normalizedText = ` ${String(text || "").toLowerCase()} `;
  return words.some((word) => {
    const token = String(word || "").toLowerCase().trim();
    if (!token) return false;
    const pattern = new RegExp(`\\b${escapeRegExp(token)}\\b`, "i");
    return pattern.test(normalizedText);
  });
};

const inferWordTheme = (item) => {
  if (item.theme) return item.theme;
  const text = `${item.en} ${item.association}`.toLowerCase();
  const en = String(item.en || "").toLowerCase().trim();

  if (en.startsWith("to ")) return "Actions & Verbs";

  if (hasAny(text, ["animal", "cat", "dog", "bird", "fish", "pet", "insect", "horse"])) {
    return "Animals";
  }
  if (hasAny(text, ["mother", "father", "brother", "sister", "family", "child", "man", "woman", "friend", "people", "person", "baby", "guest", "doctor"])) {
    return "People & Family";
  }
  if (hasAny(text, ["today", "tomorrow", "yesterday", "morning", "evening", "night", "week", "month", "year", "day", "time", "clock", "date", "now", "after", "tonight", "recently", "first"])) {
    return "Time & Dates";
  }
  if (hasAny(text, ["eat", "drink", "tea", "rice", "food", "breakfast", "lunch", "dinner", "sweet", "bread", "fish", "meat", "fruit", "milk", "delicious", "taste", "meal"])) {
    return "Food & Drink";
  }
  if (hasAny(text, ["house", "home", "room", "kitchen", "door", "chair", "table", "bed", "bath", "toilet", "window", "key", "bag", "paper", "money", "clothes", "shoe", "umbrella", "entrance", "pencil", "stamp", "color"])) {
    return "Home & Daily Life";
  }
  if (hasAny(text, ["school", "student", "teacher", "class", "study", "lesson", "homework", "book", "dictionary", "company", "work", "office", "meeting", "education", "classroom", "research", "technology", "kanji character"])) {
    return "School & Work";
  }
  if (hasAny(text, ["station", "train", "bus", "car", "subway", "airport", "street", "road", "river", "bridge", "park", "city", "country", "travel", "go", "come", "island", "factory", "bank", "traffic", "north"])) {
    return "Places & Transport";
  }
  if (hasAny(text, ["rain", "wind", "cloud", "sky", "sun", "moon", "mountain", "sea", "tree", "flower", "weather", "hot", "cold", "autumn", "spring", "summer", "winter", "grass", "air", "pond"])) {
    return "Nature & Weather";
  }
  if (hasAny(text, ["walk", "run", "write", "read", "listen", "speak", "play", "buy", "sell", "open", "close", "send", "swim", "remember", "learn", "make", "use", "meet"])) {
    return "Actions & Verbs";
  }
  if (hasAny(text, ["blue", "red", "bright", "dark", "black", "big", "small", "new", "old", "beautiful", "clean", "dirty", "interesting", "heavy", "light", "good", "bad", "quiet", "busy", "dangerous", "cute", "strict", "scary"])) {
    return "Adjectives & Feelings";
  }
  if (hasAny(text, ["meaning", "language", "society", "culture", "international", "future", "problem", "reason", "rule", "freedom", "history", "economy", "industry", "cause", "era", "introduction", "preparation", "competition", "interest", "accident", "earthquake", "failure", "breakdown", "regretful"])) {
    return "Abstract & Society";
  }
  return "Other";
};

const getCurrentItems = () => {
  const items = getCurrentGroup().items;
  if (isKanjiMode()) {
    return currentKanjiLevel === "all"
      ? items
      : items.filter((item) => normalizeKanjiLevel(item.level) === currentKanjiLevel);
  }
  if (isWordsMode()) {
    return currentWordLevel === "all"
      ? items
      : items.filter((item) => normalizeWordLevel(item.level) === currentWordLevel);
  }
  return items;
};

const getCurrentItem = () => getCurrentItems()[currentIndex];

const loadKanjiDatabase = async () => {
  try {
    const data = await fetch("/data/kanji-db.json").then((r) => r.json());
    if (!data || !Array.isArray(data.categories)) return;

    const groups = data.categories
      .filter((category) => Array.isArray(category.entries) && category.entries.length > 0)
      .map((category) => ({
        id: slugify(category.id || category.name),
        label: category.name || "Kanji",
        items: category.entries.map((entry) => normalizeKanjiEntry(entry, category.name))
      }));

    if (groups.length > 0) {
      lessonSets.kanji.groups = groups;
    }
  } catch {
    // Keep fallback kanji set if DB file is unavailable.
  }
};

const loadWordsDatabase = async () => {
  try {
    const data = await fetch("/data/words-db.json").then((r) => r.json());
    if (!data || !Array.isArray(data.entries)) return;

    const dedupe = new Set();
    const normalized = data.entries
      .map(normalizeWordEntry)
      .filter((item) => item.jp && item.en)
      .filter((item) => {
        const key = `${item.level}|${item.jp}|${item.en}`.toLowerCase();
        if (dedupe.has(key)) return false;
        dedupe.add(key);
        return true;
      });

    const bucket = new Map();
    normalized.forEach((item) => {
      const theme = inferWordTheme(item);
      const id = slugify(theme);
      const label = theme;
      if (!bucket.has(id)) bucket.set(id, { id, label, items: [] });
      bucket.get(id).items.push({
        en: item.en,
        jp: item.jp,
        furigana: item.furigana,
        romaji: item.romaji,
        level: item.level,
        theme,
        association: item.association,
        example: autoWordExample(item)
      });
    });

    lessonSets.words.groups = Array.from(bucket.values()).sort((a, b) => {
      const themeA = (a.items[0]?.theme || "Other");
      const themeB = (b.items[0]?.theme || "Other");
      const themeDiff = WORD_THEME_ORDER.indexOf(themeA) - WORD_THEME_ORDER.indexOf(themeB);
      if (themeDiff !== 0) return themeDiff;
      return themeA.localeCompare(themeB);
    });
  } catch {
    // Keep fallback words when DB file is missing.
  }
};

const getExpectedAnswers = () => {
  const item = getCurrentItem();
  if (!item) return [];
  if (currentMode === "words") {
    if (direction === "en-jp") return [item.jp, ...(item.jpAlt || [])];
    return [item.en, ...(item.enAlt || [])];
  }
  return [item.answer];
};

const setAuthStatus = (text) => {
  authStatus.textContent = text || "";
};

const renderAuth = () => {
  if (currentUser) {
    authGuest.hidden = true;
    authUser.hidden = false;
    authName.textContent = `User: ${currentUser.username}`;
  } else {
    authGuest.hidden = false;
    authUser.hidden = true;
  }
};

const loadSession = async () => {
  try {
    const data = await api("/api/me", { method: "GET" });
    currentUser = data.user;
    renderAuth();
    setAuthStatus("");
  } catch {
    currentUser = null;
    renderAuth();
  }
};

const login = async () => {
  const username = authUsername.value.trim();
  const password = authPassword.value;
  if (!username || !password) {
    setAuthStatus("Enter username and password.");
    return;
  }
  try {
    const data = await api("/api/login", {
      method: "POST",
      body: JSON.stringify({ username, password })
    });
    currentUser = data.user;
    renderAuth();
    setAuthStatus("Logged in.");
    await refreshProgress();
  } catch (err) {
    setAuthStatus(err.message);
  }
};

const register = async () => {
  const username = authUsername.value.trim();
  const password = authPassword.value;
  if (!username || !password) {
    setAuthStatus("Enter username and password.");
    return;
  }
  try {
    const data = await api("/api/register", {
      method: "POST",
      body: JSON.stringify({ username, password })
    });
    currentUser = data.user;
    renderAuth();
    setAuthStatus("Account created.");
    await refreshProgress();
  } catch (err) {
    setAuthStatus(err.message);
  }
};

const logout = async () => {
  await api("/api/logout", { method: "POST", body: "{}" });
  currentUser = null;
  renderAuth();
  setAuthStatus("Logged out.");
  progressMini.textContent = "Log in to save progress";
};

const refreshProgress = async () => {
  if (!currentUser) {
    progressMini.textContent = "Log in to save progress";
    return;
  }
  try {
    const data = await api(`/api/progress?mode=${encodeURIComponent(currentMode)}&group=${encodeURIComponent(currentGroupId)}`, {
      method: "GET"
    });
    const attempts = data.progress?.attempts || 0;
    const correct = data.progress?.correct || 0;
    const rate = attempts ? Math.round((correct / attempts) * 100) : 0;
    progressMini.textContent = `Group progress: ${correct}/${attempts} (${rate}%)`;
  } catch {
    progressMini.textContent = "Could not load progress";
  }
};

const updateProgress = async (isCorrect) => {
  if (!currentUser) return;
  try {
    await api("/api/progress", {
      method: "POST",
      body: JSON.stringify({
        mode: currentMode,
        group: currentGroupId,
        attemptsDelta: 1,
        correctDelta: isCorrect ? 1 : 0
      })
    });
    await refreshProgress();
  } catch {
    progressMini.textContent = "Could not save progress";
  }
};

const populateGroupPicker = () => {
  const groups = getModeSet().groups;
  if (!groups.some((g) => g.id === currentGroupId)) {
    currentGroupId = groups[0].id;
  }

  groupPicker.innerHTML = "";
  groups.forEach((group) => {
    const option = document.createElement("option");
    option.value = group.id;
    option.textContent = group.label;
    if (group.id === currentGroupId) option.selected = true;
    groupPicker.appendChild(option);
  });
};

const populateKanjiLevelPicker = () => {
  const show = isKanjiMode() || isWordsMode();
  kanjiLevelWrap.hidden = !show;
  kanjiLevelPicker.hidden = !show;
  kanjiLevelLabel.hidden = !show;
  if (!show) return;

  const levelsSet = new Set();
  getCurrentGroup().items.forEach((item) => {
    if (isKanjiMode()) levelsSet.add(normalizeKanjiLevel(item.level));
    if (isWordsMode()) levelsSet.add(normalizeWordLevel(item.level));
  });
  const levels = (isKanjiMode() ? KANJI_LEVEL_ORDER : WORD_LEVEL_ORDER).filter((level) => levelsSet.has(level));
  const options = ["all", ...levels];

  if (isKanjiMode() && !options.includes(currentKanjiLevel)) currentKanjiLevel = "all";
  if (isWordsMode() && !options.includes(currentWordLevel)) currentWordLevel = "all";

  kanjiLevelPicker.innerHTML = "";
  options.forEach((level) => {
    const option = document.createElement("option");
    option.value = level;
    option.textContent = level === "all" ? "All levels" : level;
    if (isKanjiMode() && level === currentKanjiLevel) option.selected = true;
    if (isWordsMode() && level === currentWordLevel) option.selected = true;
    kanjiLevelPicker.appendChild(option);
  });
};

const renderKanjiMeta = () => {
  if (!isKanjiMode()) {
    kanjiSidePanel.hidden = true;
    return;
  }

  const item = getCurrentItem();
  if (!item) {
    kanjiSidePanel.hidden = !isKanjiPanelOpen;
    kanjiLevel.textContent = currentKanjiLevel === "all" ? "All levels" : currentKanjiLevel;
    kanjiKunyomi.textContent = "—";
    kanjiOnyomi.textContent = "—";
    kanjiMeaning.textContent = "No entries in this group for selected level";
    kanjiExamples.innerHTML = "";
    return;
  }

  kanjiSidePanel.hidden = !isKanjiPanelOpen;
  kanjiLevel.textContent = normalizeKanjiLevel(item.level, getCurrentGroup().label);
  kanjiKunyomi.textContent = (item.kunyomi || []).join(", ") || "—";
  kanjiOnyomi.textContent = (item.onyomi || []).join(", ") || "—";
  kanjiMeaning.textContent = (item.meaning || []).join(", ") || "—";

  kanjiExamples.innerHTML = "";
  const examples = Array.isArray(item.examples) ? item.examples : [];
  if (examples.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No examples";
    kanjiExamples.appendChild(li);
    return;
  }

  examples.forEach((example) => {
    const li = document.createElement("li");
    li.textContent = `${example.word} (${example.reading}) — ${example.translation}`;
    kanjiExamples.appendChild(li);
  });
};

const syncKanjiPanelUI = () => {
  const showKanjiControls = isKanjiMode();
  toggleKanjiPanelButton.hidden = !showKanjiControls;
  if (!showKanjiControls) {
    isKanjiPanelOpen = false;
    kanjiSidePanel.hidden = true;
    return;
  }
  toggleKanjiPanelButton.textContent = isKanjiPanelOpen ? "Hide Kanji info" : "Show Kanji info";
  kanjiSidePanel.hidden = !isKanjiPanelOpen;
};

const applyInputModeUI = () => {
  const wordsMode = currentMode === "words";
  canvasWrap.hidden = wordsMode;
  clearButton.hidden = wordsMode;
  keyboardRow.hidden = !wordsMode;
  if (groupPickerLabel) {
    groupPickerLabel.textContent = isKanjiMode() || isWordsMode() ? "Theme" : "Group";
  }
  syncKanjiPanelUI();
  populateKanjiLevelPicker();

  if (wordsMode) {
    hintButton.textContent =
      direction === "jp-en" ? "Hint: show answer" : "Hint: show Japanese";
    associationHintButton.hidden = !isWordsJpToEn();
    exampleHintButton.hidden = false;
  } else {
    hintButton.textContent = "Hint: show correct answer";
    associationHintButton.hidden = true;
    exampleHintButton.hidden = true;
  }
};

const updateQuestion = async () => {
  const mode = getModeSet();
  modeTitle.textContent = mode.title;
  modeSubtitle.textContent = mode.subtitle;
  resultEl.textContent = "";
  hintText.textContent = "";
  hintEl.classList.remove("is-visible");
  checkButton.disabled = false;
  hintButton.disabled = false;

  if (currentMode === "words") {
    const item = getCurrentItem();
    if (!item) {
      questionEl.textContent = "—";
      hintEl.textContent = "";
      resultEl.textContent = "No entries for selected level.";
      checkButton.disabled = true;
      hintButton.disabled = true;
    } else {
      questionEl.textContent = direction === "en-jp" ? item.en : item.jp;
      hintEl.textContent = direction === "en-jp" ? item.jp : item.en;
    }
    wordsPanel.hidden = false;
  } else {
    const item = getCurrentItem();
    if (!item) {
      questionEl.textContent = "—";
      hintEl.textContent = "";
      resultEl.textContent = "No entries for selected level.";
      checkButton.disabled = true;
      hintButton.disabled = true;
    } else {
      questionEl.textContent = item.question;
      hintEl.textContent = item.answer;
    }
    wordsPanel.hidden = true;
  }

  applyInputModeUI();
  renderKanjiMeta();
  await refreshProgress();
};

const nextItem = async () => {
  const items = getCurrentItems();
  if (items.length === 0) return;
  currentIndex = (currentIndex + 1) % items.length;
  await updateQuestion();
  clearCanvas();
  textInput.value = "";
};

const blobToBase64 = (blob) =>
  new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });

const extractBinaryFromCanvas = (sourceCanvas, size = 64) => {
  const sourceCtx = sourceCanvas.getContext("2d");
  const sourceWidth = sourceCanvas.width;
  const sourceHeight = sourceCanvas.height;
  const imageData = sourceCtx.getImageData(0, 0, sourceWidth, sourceHeight);
  const pixels = imageData.data;

  let minX = sourceWidth;
  let minY = sourceHeight;
  let maxX = -1;
  let maxY = -1;

  for (let y = 0; y < sourceHeight; y += 1) {
    for (let x = 0; x < sourceWidth; x += 1) {
      const i = (y * sourceWidth + x) * 4;
      const alpha = pixels[i + 3];
      if (alpha < 30) continue;
      const darkness = 255 - ((pixels[i] + pixels[i + 1] + pixels[i + 2]) / 3);
      if (darkness < 20) continue;

      if (x < minX) minX = x;
      if (y < minY) minY = y;
      if (x > maxX) maxX = x;
      if (y > maxY) maxY = y;
    }
  }

  if (maxX === -1 || maxY === -1) return null;

  const cropWidth = maxX - minX + 1;
  const cropHeight = maxY - minY + 1;
  const outCanvas = document.createElement("canvas");
  outCanvas.width = size;
  outCanvas.height = size;
  const outCtx = outCanvas.getContext("2d");
  outCtx.fillStyle = "#ffffff";
  outCtx.fillRect(0, 0, size, size);

  const scale = Math.min((size - 8) / cropWidth, (size - 8) / cropHeight);
  const drawWidth = cropWidth * scale;
  const drawHeight = cropHeight * scale;
  const drawX = (size - drawWidth) / 2;
  const drawY = (size - drawHeight) / 2;

  outCtx.drawImage(sourceCanvas, minX, minY, cropWidth, cropHeight, drawX, drawY, drawWidth, drawHeight);

  const outData = outCtx.getImageData(0, 0, size, size).data;
  const vector = new Float32Array(size * size);
  let idx = 0;
  for (let i = 0; i < outData.length; i += 4) {
    const avg = (outData[i] + outData[i + 1] + outData[i + 2]) / 3;
    vector[idx] = avg < 210 ? 1 : 0;
    idx += 1;
  }
  return vector;
};

const renderTemplateVector = (char) => {
  const key = `tpl:${char}`;
  if (templateCache.has(key)) return templateCache.get(key);

  const c = document.createElement("canvas");
  c.width = 256;
  c.height = 256;
  const cctx = c.getContext("2d");
  cctx.fillStyle = "#ffffff";
  cctx.fillRect(0, 0, c.width, c.height);
  cctx.fillStyle = "#000000";
  cctx.textAlign = "center";
  cctx.textBaseline = "middle";
  cctx.font = "190px 'Hiragino Sans', 'Yu Gothic', 'Noto Sans JP', sans-serif";
  cctx.fillText(char, 128, 136);

  const vector = extractBinaryFromCanvas(c, 64);
  templateCache.set(key, vector);
  return vector;
};

const cosine = (a, b) => {
  if (!a || !b) return 0;
  let dot = 0;
  let aa = 0;
  let bb = 0;
  for (let i = 0; i < a.length; i += 1) {
    dot += a[i] * b[i];
    aa += a[i] * a[i];
    bb += b[i] * b[i];
  }
  if (!aa || !bb) return 0;
  return dot / (Math.sqrt(aa) * Math.sqrt(bb));
};

const classifyDrawnSymbol = () => {
  if (currentMode === "words") return null;
  const input = extractBinaryFromCanvas(canvas, 64);
  if (!input) return null;

  const candidates = getCurrentItems().map((item) => item.answer);
  if (candidates.length === 0) return null;
  let best = { char: "", score: -1 };
  let second = { char: "", score: -1 };

  candidates.forEach((char) => {
    const tpl = renderTemplateVector(char);
    const score = cosine(input, tpl);
    if (score > best.score) {
      second = best;
      best = { char, score };
    } else if (score > second.score) {
      second = { char, score };
    }
  });

  return {
    predicted: best.char,
    score: best.score,
    margin: best.score - second.score
  };
};

const prepareOcrImage = () => {
  const sourceWidth = canvas.width;
  const sourceHeight = canvas.height;
  const imageData = ctx.getImageData(0, 0, sourceWidth, sourceHeight);
  const pixels = imageData.data;

  let minX = sourceWidth;
  let minY = sourceHeight;
  let maxX = -1;
  let maxY = -1;

  for (let y = 0; y < sourceHeight; y += 1) {
    for (let x = 0; x < sourceWidth; x += 1) {
      const i = (y * sourceWidth + x) * 4;
      const alpha = pixels[i + 3];
      if (alpha < 30) continue;
      const darkness = 255 - ((pixels[i] + pixels[i + 1] + pixels[i + 2]) / 3);
      if (darkness < 20) continue;

      if (x < minX) minX = x;
      if (y < minY) minY = y;
      if (x > maxX) maxX = x;
      if (y > maxY) maxY = y;
    }
  }

  if (maxX === -1 || maxY === -1) return null;

  const cropWidth = maxX - minX + 1;
  const cropHeight = maxY - minY + 1;
  const targetSize = 512;
  const scale = Math.min((targetSize - 24) / cropWidth, (targetSize - 24) / cropHeight);
  const drawWidth = cropWidth * scale;
  const drawHeight = cropHeight * scale;
  const drawX = (targetSize - drawWidth) / 2;
  const drawY = (targetSize - drawHeight) / 2;

  const outCanvas = document.createElement("canvas");
  outCanvas.width = targetSize;
  outCanvas.height = targetSize;
  const outCtx = outCanvas.getContext("2d");
  outCtx.fillStyle = "#ffffff";
  outCtx.fillRect(0, 0, targetSize, targetSize);
  outCtx.drawImage(canvas, minX, minY, cropWidth, cropHeight, drawX, drawY, drawWidth, drawHeight);

  return new Promise((resolve) => outCanvas.toBlob(resolve, "image/png"));
};

const evaluate = async () => {
  if (isChecking) return false;
  if (!getCurrentItem()) {
    resultEl.textContent = "No item available for this level.";
    return false;
  }
  isChecking = true;
  resultEl.textContent = "Checking...";

  let ok = false;

  try {
    if (currentMode === "words") {
      const value = textInput.value.trim();
      if (!value) {
        resultEl.textContent = "Type an answer first.";
        return false;
      }

      const answers = getExpectedAnswers().map(normalize);
      ok = answers.includes(normalize(value));
      const canonical = getExpectedAnswers()[0];
      resultEl.textContent = ok ? "Correct!" : `Incorrect. Correct answer: ${canonical}`;
      return ok;
    }

    const blob = await prepareOcrImage();
    if (!blob) {
      resultEl.textContent = "The drawing area is empty.";
      return false;
    }

    const base64 = await blobToBase64(blob);
    const data = await api("/api/ocr", {
      method: "POST",
      body: JSON.stringify({ image: base64, mode: currentMode, direction })
    });

    const recognized = normalize((data.text || "").trim());
    const answers = getExpectedAnswers().map(normalize);
    ok = answers.some((answer) => recognized.includes(answer));

    if (!ok && currentMode !== "words") {
      const local = classifyDrawnSymbol();
      const expected = getExpectedAnswers()[0];
      ok =
        !!local &&
        local.predicted === expected &&
        local.score >= 0.34 &&
        local.margin >= 0.015;
    }

    resultEl.textContent = ok ? "Correct!" : "Not quite. Try again.";
    return ok;
  } catch {
    resultEl.textContent = "Server unavailable.";
    return false;
  } finally {
    isChecking = false;
    await updateProgress(ok);
  }
};

const toggleHint = () => {
  if (currentMode === "words") {
    const answer = getExpectedAnswers()[0] || "—";
    hintText.textContent = `Answer: ${answer}`;
    return;
  }
  hintEl.classList.toggle("is-visible");
};

const showAssociationHint = () => {
  if (!isWordsJpToEn()) return;
  const item = getCurrentItem();
  hintText.textContent = `Association: ${item.association || "No association yet."}`;
};

const showExampleHint = () => {
  if (!isWordsMode()) return;
  const item = getCurrentItem();
  hintText.textContent = `Example: ${item.example || autoWordExample(item)}`;
};

const setActiveMenu = (mode) => {
  menuButtons.forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.mode === mode);
  });
};

const setDirection = async (value) => {
  direction = value;
  directionButtons.forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.direction === value);
  });
  await updateQuestion();
};

const getPoint = (event) => {
  const rect = canvas.getBoundingClientRect();
  const clientX = event.touches ? event.touches[0].clientX : event.clientX;
  const clientY = event.touches ? event.touches[0].clientY : event.clientY;
  return { x: clientX - rect.left, y: clientY - rect.top };
};

const startDrawing = (event) => {
  isDrawing = true;
  lastPoint = getPoint(event);
};

const draw = (event) => {
  if (!isDrawing) return;
  const point = getPoint(event);
  ctx.beginPath();
  ctx.moveTo(lastPoint.x, lastPoint.y);
  ctx.lineTo(point.x, point.y);
  ctx.stroke();
  lastPoint = point;
};

const stopDrawing = () => {
  isDrawing = false;
  lastPoint = null;
};

menuButtons.forEach((btn) => {
  btn.addEventListener("click", async () => {
    currentMode = btn.dataset.mode;
    setActiveMenu(currentMode);
    currentGroupId = getModeSet().groups[0].id;
    currentKanjiLevel = "all";
    currentWordLevel = "all";
    isKanjiPanelOpen = false;
    currentIndex = 0;
    populateGroupPicker();
    await updateQuestion();
    clearCanvas();
    textInput.value = "";
  });
});

groupPicker.addEventListener("change", async () => {
  currentGroupId = groupPicker.value;
  currentIndex = 0;
  clearCanvas();
  textInput.value = "";
  await updateQuestion();
});

kanjiLevelPicker.addEventListener("change", async () => {
  if (isKanjiMode()) currentKanjiLevel = kanjiLevelPicker.value;
  if (isWordsMode()) currentWordLevel = kanjiLevelPicker.value;
  currentIndex = 0;
  clearCanvas();
  textInput.value = "";
  await updateQuestion();
});

hintButton.addEventListener("click", toggleHint);
associationHintButton.addEventListener("click", showAssociationHint);
exampleHintButton.addEventListener("click", showExampleHint);
toggleKanjiPanelButton.addEventListener("click", () => {
  isKanjiPanelOpen = !isKanjiPanelOpen;
  syncKanjiPanelUI();
  renderKanjiMeta();
});
closeKanjiPanelButton.addEventListener("click", () => {
  isKanjiPanelOpen = false;
  syncKanjiPanelUI();
});

clearButton.addEventListener("click", () => {
  clearCanvas();
  resultEl.textContent = "";
});

checkButton.addEventListener("click", async () => {
  const isOk = await evaluate();
  if (isOk) setTimeout(() => void nextItem(), 650);
});

directionButtons.forEach((btn) => {
  btn.addEventListener("click", () => void setDirection(btn.dataset.direction));
});

loginBtn.addEventListener("click", () => void login());
registerBtn.addEventListener("click", () => void register());
logoutBtn.addEventListener("click", () => void logout());

authPassword.addEventListener("keydown", (event) => {
  if (event.key === "Enter") void login();
});

canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseleave", stopDrawing);
canvas.addEventListener("touchstart", startDrawing, { passive: false });
canvas.addEventListener(
  "touchmove",
  (event) => {
    event.preventDefault();
    draw(event);
  },
  { passive: false }
);
canvas.addEventListener("touchend", stopDrawing);

window.addEventListener("resize", () => {
  setCanvasSize();
  clearCanvas();
});

const init = async () => {
  setCanvasSize();
  await loadKanjiDatabase();
  await loadWordsDatabase();
  renderAuth();
  populateGroupPicker();
  await loadSession();
  await updateQuestion();
};

void init();
