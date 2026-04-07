const body = document.body;
const revealElements = document.querySelectorAll(".reveal");
const themeToggle = document.querySelector(".theme-toggle");
const appearanceWrap = document.querySelector(".appearance-wrap");
const appearancePanel = document.getElementById("appearance-panel");
const themeOptions = document.querySelectorAll(".theme-option");
const fontOptions = document.querySelectorAll(".font-option");
const accentOptions = document.querySelectorAll(".accent-option");
const brutalismToggle = document.getElementById("toggle-brutalism");
const contrastToggle = document.getElementById("toggle-contrast");
const resetButton = document.getElementById("reset-settings");
const fontSizeDown = document.getElementById("font-size-down");
const fontSizeUp = document.getElementById("font-size-up");
const fontSizeDisplay = document.getElementById("font-size-display");
const themeLabel = document.getElementById("theme-label");
const parallaxCard = document.querySelector("[data-parallax-card]");
const avatar = document.querySelector("[data-avatar]");
const visualLayers = document.querySelectorAll("[data-scroll-speed]");
const tiltElements = document.querySelectorAll("[data-tilt]");
const spotlightElements = document.querySelectorAll("[data-spotlight]");
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");
const typedPanelLabel = document.getElementById("typed-panel-label");
const currentYear = document.getElementById("current-year");
const backToTopButton = document.querySelector(".back-to-top");
const scrollIndicator = document.querySelector(".scroll-indicator");
const scrollIndicatorThumb = document.querySelector(".scroll-indicator-thumb");
const cursorDot = document.querySelector(".cursor-dot");
const cursorRing = document.querySelector(".cursor-ring");
const settingsKey = "portfolio-accessibility";

const defaults = {
  theme: "dark",
  font: "sora",
  fontSize: 12,
  accent: "violet",
  brutalism: false,
  highContrast: false
};

const themeNames = {
  day: "Light",
  dark: "Dark",
  read: "Read",
  night: "Night",
  mono: "Mono",
  pixel: "Pixel"
};

const fontMap = {
  sora: '"Sora", sans-serif',
  "dm-sans": '"DM Sans", sans-serif',
  outfit: '"Outfit", sans-serif',
  jakarta: '"Plus Jakarta Sans", sans-serif',
  inter: '"Inter", sans-serif',
  geist: '"Geist", "Inter", sans-serif',
  pixel: '"Press Start 2P", monospace'
};

const accentMap = {
  violet: {
    primary: "#b56cff",
    strong: "#8e47ff",
    secondary: "#88d8ff",
    accent: "#ff76cb"
  },
  pink: {
    primary: "#ff6bb5",
    strong: "#ff3f8d",
    secondary: "#ffd0f4",
    accent: "#ff9b6b"
  },
  peach: {
    primary: "#ff9d76",
    strong: "#ff7340",
    secondary: "#ffd5b4",
    accent: "#ffb6d9"
  },
  lavender: {
    primary: "#c07cff",
    strong: "#965dff",
    secondary: "#e8c9ff",
    accent: "#ff9fe5"
  },
  aqua: {
    primary: "#66d9ff",
    strong: "#00a9ff",
    secondary: "#b4f0ff",
    accent: "#8b7dff"
  },
  lime: {
    primary: "#9ce54f",
    strong: "#6fc72e",
    secondary: "#dfffb2",
    accent: "#58e3b5"
  },
  emerald: {
    primary: "#45e2b0",
    strong: "#12b981",
    secondary: "#a7ffde",
    accent: "#2bd4ff"
  },
  sky: {
    primary: "#41a0ff",
    strong: "#006aff",
    secondary: "#8fd4ff",
    accent: "#7a7cff"
  },
  coral: {
    primary: "#ff7f6e",
    strong: "#ff4d7d",
    secondary: "#ffd0c7",
    accent: "#ff99b3"
  },
  gold: {
    primary: "#ffc94a",
    strong: "#ff9f1c",
    secondary: "#ffe69a",
    accent: "#ffd36a"
  },
  mint: {
    primary: "#63f0c5",
    strong: "#1fc8a0",
    secondary: "#baffea",
    accent: "#5dd9d4"
  },
  royal: {
    primary: "#6d82ff",
    strong: "#415aff",
    secondary: "#b9c7ff",
    accent: "#9c6dff"
  },
  ruby: {
    primary: "#ff4f7b",
    strong: "#d7285f",
    secondary: "#ffd2df",
    accent: "#b832ff"
  },
  sunset: {
    primary: "#ff9f43",
    strong: "#ff5f6d",
    secondary: "#ffd9a6",
    accent: "#ff7b8a"
  },
  ocean: {
    primary: "#27c2ff",
    strong: "#0066ff",
    secondary: "#a8ecff",
    accent: "#003b8e"
  },
  neon: {
    primary: "#00f5a0",
    strong: "#00c7c7",
    secondary: "#baffef",
    accent: "#00d9f5"
  },
  prism: {
    primary: "#8f6dff",
    strong: "#ff6bcb",
    secondary: "#b8f6ff",
    accent: "#ffb347"
  },
  aurora: {
    primary: "#5ef0b0",
    strong: "#1cb8ff",
    secondary: "#d4fff0",
    accent: "#8b6dff"
  },
  galaxy: {
    primary: "#7f5cff",
    strong: "#5023b8",
    secondary: "#d9ccff",
    accent: "#ff6bd6"
  },
  midnight: {
    primary: "#1e88ff",
    strong: "#0a3d91",
    secondary: "#abedff",
    accent: "#16c5d8"
  },
  obsidian: {
    primary: "#6b7285",
    strong: "#2b2f3a",
    secondary: "#d5d9e4",
    accent: "#8f98b3"
  },
  ember: {
    primary: "#ff7a18",
    strong: "#a61b1b",
    secondary: "#ffd2a8",
    accent: "#ff9d5c"
  },
  holo: {
    primary: "#6d5cff",
    strong: "#2adcff",
    secondary: "#e6fbff",
    accent: "#ff7bc4"
  },
  candy: {
    primary: "#ff5fa2",
    strong: "#ff9f5a",
    secondary: "#ffe0f0",
    accent: "#9a6bff"
  },
  festival: {
    primary: "#ff5f6d",
    strong: "#ffc371",
    secondary: "#fff2c2",
    accent: "#3de0ff"
  },
  carbon: {
    primary: "#7d879a",
    strong: "#2f3440",
    secondary: "#d8dce6",
    accent: "#5b6477"
  },
  deepsea: {
    primary: "#00b4d8",
    strong: "#0f4c75",
    secondary: "#b8efff",
    accent: "#063b69"
  },
  wine: {
    primary: "#b84b8e",
    strong: "#5c1730",
    secondary: "#ffd9ec",
    accent: "#8d3b7a"
  }
};

const motionState = {
  hoverX: 0,
  hoverY: 0,
  scrollY: window.scrollY
};

const scrollDragState = {
  isDragging: false,
  pointerId: null,
  thumbOffset: 0
};

const loadSettings = () => {
  try {
    const raw = localStorage.getItem(settingsKey);
    if (!raw) {
      return { ...defaults };
    }

    return { ...defaults, ...JSON.parse(raw) };
  } catch {
    return { ...defaults };
  }
};

let settings = loadSettings();

const saveSettings = () => {
  localStorage.setItem(settingsKey, JSON.stringify(settings));
};

const hexToRgb = (hexColor) => {
  const normalized = hexColor.replace("#", "");
  const safeHex =
    normalized.length === 3
      ? normalized
          .split("")
          .map((char) => `${char}${char}`)
          .join("")
      : normalized;

  const value = Number.parseInt(safeHex, 16);

  return {
    r: (value >> 16) & 255,
    g: (value >> 8) & 255,
    b: value & 255
  };
};

const withAlpha = (hexColor, alpha) => {
  const { r, g, b } = hexToRgb(hexColor);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const applyAccent = (accentName) => {
  const palette = accentMap[accentName] || accentMap[defaults.accent];
  const isLightTheme = ["day", "read"].includes(settings.theme);

  body.style.setProperty("--primary", palette.primary);
  body.style.setProperty("--primary-strong", palette.strong);
  body.style.setProperty("--secondary", palette.secondary);
  body.style.setProperty("--accent", palette.accent);
  body.style.setProperty("--accent-radial-a", withAlpha(palette.primary, isLightTheme ? 0.12 : 0.22));
  body.style.setProperty("--accent-radial-b", withAlpha(palette.secondary, isLightTheme ? 0.08 : 0.14));
  body.style.setProperty("--accent-radial-c", withAlpha(palette.accent, isLightTheme ? 0.08 : 0.14));
  body.style.setProperty("--accent-radial-d", withAlpha(palette.primary, isLightTheme ? 0.08 : 0.18));
  body.style.setProperty("--accent-radial-e", withAlpha(palette.secondary, isLightTheme ? 0.08 : 0.16));
  body.style.setProperty("--accent-radial-f", withAlpha(palette.accent, isLightTheme ? 0.08 : 0.14));
  body.style.setProperty("--ambient-one", withAlpha(palette.primary, isLightTheme ? 0.16 : 0.28));
  body.style.setProperty("--ambient-two", withAlpha(palette.secondary, isLightTheme ? 0.12 : 0.22));
  body.style.setProperty("--ambient-three", withAlpha(palette.accent, isLightTheme ? 0.12 : 0.2));
  body.style.setProperty("--scrollbar-thumb", withAlpha(palette.accent, isLightTheme ? 0.32 : 0.52));
  body.style.setProperty("--scrollbar-thumb-hover", withAlpha(palette.primary, isLightTheme ? 0.48 : 0.72));
  body.style.setProperty("--scroll-indicator-glow", withAlpha(palette.accent, isLightTheme ? 0.18 : 0.3));
  body.style.setProperty(
    "--hero-gradient",
    `linear-gradient(180deg, ${withAlpha(palette.primary, isLightTheme ? 0.08 : 0.16)}, transparent 50%)`
  );
};

const applySettings = () => {
  body.dataset.theme = themeNames[settings.theme] ? settings.theme : defaults.theme;
  body.classList.toggle("is-brutalism", settings.brutalism);
  body.classList.toggle("is-high-contrast", settings.highContrast);
  body.classList.toggle("is-pixel-theme", settings.theme === "pixel");

  const activeFont =
    settings.theme === "pixel"
      ? fontMap.pixel
      : fontMap[settings.font] || fontMap[defaults.font];

  body.style.setProperty("--font-body", activeFont);
  body.style.setProperty("--font-display", activeFont);
  document.documentElement.style.fontSize = `${settings.fontSize}px`;

  applyAccent(settings.accent);

  if (themeLabel) {
    themeLabel.textContent = themeNames[settings.theme];
  }

  if (fontSizeDisplay) {
    fontSizeDisplay.textContent = `${settings.fontSize}px`;
  }

  themeOptions.forEach((option) => {
    option.classList.toggle("is-active", option.dataset.themeValue === settings.theme);
  });

  fontOptions.forEach((option) => {
    option.classList.toggle("is-active", option.dataset.fontValue === settings.font);
  });

  accentOptions.forEach((option) => {
    option.classList.toggle("is-active", option.dataset.accentValue === settings.accent);
  });

  brutalismToggle?.classList.toggle("is-active", settings.brutalism);
  brutalismToggle?.setAttribute("aria-pressed", String(settings.brutalism));
  contrastToggle?.classList.toggle("is-active", settings.highContrast);
  contrastToggle?.setAttribute("aria-pressed", String(settings.highContrast));
};

applySettings();

if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}

const toggleAppearancePanel = (forceOpen) => {
  if (!appearancePanel || !themeToggle) {
    return;
  }

  const shouldOpen =
    typeof forceOpen === "boolean" ? forceOpen : appearancePanel.hidden;

  appearancePanel.hidden = !shouldOpen;
  themeToggle.setAttribute("aria-expanded", String(shouldOpen));
};

themeToggle?.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleAppearancePanel();
});

themeOptions.forEach((option) => {
  option.addEventListener("click", () => {
    settings.theme = option.dataset.themeValue || defaults.theme;
    saveSettings();
    applySettings();
  });
});

fontOptions.forEach((option) => {
  option.addEventListener("click", () => {
    settings.font = option.dataset.fontValue || defaults.font;
    saveSettings();
    applySettings();
  });
});

accentOptions.forEach((option) => {
  option.addEventListener("click", () => {
    settings.accent = option.dataset.accentValue || defaults.accent;
    saveSettings();
    applySettings();
  });
});

brutalismToggle?.addEventListener("click", () => {
  settings.brutalism = !settings.brutalism;
  saveSettings();
  applySettings();
});

contrastToggle?.addEventListener("click", () => {
  settings.highContrast = !settings.highContrast;
  saveSettings();
  applySettings();
});

fontSizeDown?.addEventListener("click", () => {
  settings.fontSize = Math.max(10, settings.fontSize - 1);
  saveSettings();
  applySettings();
});

fontSizeUp?.addEventListener("click", () => {
  settings.fontSize = Math.min(18, settings.fontSize + 1);
  saveSettings();
  applySettings();
});

resetButton?.addEventListener("click", () => {
  settings = { ...defaults };
  saveSettings();
  applySettings();
});

document.addEventListener("click", (event) => {
  if (!appearanceWrap?.contains(event.target)) {
    toggleAppearancePanel(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    toggleAppearancePanel(false);
  }
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18
  }
);

revealElements.forEach((element) => revealObserver.observe(element));

const spotlightObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("is-active", entry.isIntersecting);
    });
  },
  {
    threshold: 0.35
  }
);

spotlightElements.forEach((element) => spotlightObserver.observe(element));

const renderHeroMotion = () => {
  const translateY = Math.min(motionState.scrollY * 0.1, 30) - 30;
  const baseRotateX = Math.max(motionState.scrollY * 0.008, 1.5);
  const baseRotateY = Math.sin(motionState.scrollY * 0.006) * 4;
  const totalRotateX = baseRotateX + motionState.hoverX;
  const totalRotateY = baseRotateY + motionState.hoverY;

  if (parallaxCard) {
    parallaxCard.style.transform =
      `perspective(1400px) rotateX(${totalRotateX}deg) rotateY(${totalRotateY}deg)`;
  }

  if (avatar) {
    const avatarX = motionState.hoverY * 1.2;
    avatar.style.transform =
      `translate3d(${avatarX}px, ${translateY}px, 0) rotateY(${totalRotateY * 0.8}deg)`;
  }

  visualLayers.forEach((layer, index) => {
    const speed = Number(layer.dataset.scrollSpeed || 0);
    const baseRotate = Number(layer.dataset.baseRotate || 0);
    const scrollOffset = motionState.scrollY * speed * 0.72;
    const waveOffset = Math.sin(motionState.scrollY * 0.004 + index) * 6;

    layer.style.transform =
      `translate3d(${waveOffset}px, ${scrollOffset}px, 0) rotate(${baseRotate}deg)`;
  });
};

const getScrollIndicatorMetrics = () => {
  if (!scrollIndicator) {
    return null;
  }

  const doc = document.documentElement;
  const scrollRange = doc.scrollHeight - window.innerHeight;
  const trackHeight = scrollIndicator.clientHeight;
  const visibleRatio = window.innerHeight / doc.scrollHeight;
  const thumbHeight = Math.max(trackHeight * visibleRatio, 48);
  const maxOffset = Math.max(trackHeight - thumbHeight, 0);

  return {
    doc,
    scrollRange,
    trackHeight,
    thumbHeight,
    maxOffset
  };
};

const updateScrollIndicator = () => {
  if (!scrollIndicator || !scrollIndicatorThumb) {
    return;
  }

  const metrics = getScrollIndicatorMetrics();

  if (!metrics) {
    return;
  }

  if (metrics.scrollRange <= 0) {
    scrollIndicator.style.opacity = "0";
    return;
  }

  scrollIndicator.style.opacity = "0.88";

  const progress = Math.min(Math.max(window.scrollY / metrics.scrollRange, 0), 1);
  const offset = metrics.maxOffset * progress;

  scrollIndicatorThumb.style.height = `${metrics.thumbHeight}px`;
  scrollIndicatorThumb.style.transform = `translateY(${offset}px)`;
};

const moveScrollIndicatorToPointer = (clientY, alignToCenter = false) => {
  if (!scrollIndicator || !scrollIndicatorThumb) {
    return;
  }

  const metrics = getScrollIndicatorMetrics();

  if (!metrics || metrics.scrollRange <= 0) {
    return;
  }

  const rect = scrollIndicator.getBoundingClientRect();
  const anchorOffset = alignToCenter
    ? metrics.thumbHeight / 2
    : scrollDragState.thumbOffset;

  const rawOffset = clientY - rect.top - anchorOffset;
  const nextOffset = Math.min(Math.max(rawOffset, 0), metrics.maxOffset);
  const progress = metrics.maxOffset > 0 ? nextOffset / metrics.maxOffset : 0;

  window.scrollTo({
    top: metrics.scrollRange * progress,
    behavior: "auto"
  });
};

const updateBackToTopVisibility = () => {
  if (!backToTopButton) {
    return;
  }

  backToTopButton.classList.toggle("is-visible", window.scrollY > 320);
};

renderHeroMotion();
updateScrollIndicator();
updateBackToTopVisibility();

const heroVisual = document.querySelector(".hero-visual");

heroVisual?.addEventListener("mousemove", (event) => {
  const rect = heroVisual.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width - 0.5;
  const y = (event.clientY - rect.top) / rect.height - 0.5;

  motionState.hoverX = -y * 7;
  motionState.hoverY = x * 8;
  renderHeroMotion();
});

heroVisual?.addEventListener("mouseleave", () => {
  motionState.hoverX = 0;
  motionState.hoverY = 0;
  renderHeroMotion();
});

let ticking = false;

window.addEventListener(
  "scroll",
  () => {
    motionState.scrollY = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        renderHeroMotion();
        updateScrollIndicator();
        updateBackToTopVisibility();
        ticking = false;
      });
      ticking = true;
    }
  },
  { passive: true }
);

window.addEventListener(
  "resize",
  () => {
    updateScrollIndicator();
    updateBackToTopVisibility();
  },
  { passive: true }
);

scrollIndicatorThumb?.addEventListener("pointerdown", (event) => {
  if (!scrollIndicator || !scrollIndicatorThumb) {
    return;
  }

  scrollDragState.isDragging = true;
  scrollDragState.pointerId = event.pointerId;
  scrollDragState.thumbOffset = event.clientY - scrollIndicatorThumb.getBoundingClientRect().top;
  scrollIndicatorThumb.classList.add("is-dragging");
  document.body.classList.add("is-dragging-scroll");
  scrollIndicatorThumb.setPointerCapture(event.pointerId);
  event.preventDefault();
});

scrollIndicator?.addEventListener("pointerdown", (event) => {
  if (!scrollIndicator || !scrollIndicatorThumb || event.target === scrollIndicatorThumb) {
    return;
  }

  const metrics = getScrollIndicatorMetrics();

  if (!metrics) {
    return;
  }

  moveScrollIndicatorToPointer(event.clientY, true);
  event.preventDefault();
});

window.addEventListener("pointermove", (event) => {
  if (!scrollDragState.isDragging || scrollDragState.pointerId !== event.pointerId) {
    return;
  }

  moveScrollIndicatorToPointer(event.clientY);
  event.preventDefault();
});

window.addEventListener("pointerup", (event) => {
  if (scrollDragState.pointerId !== event.pointerId) {
    return;
  }

  scrollDragState.isDragging = false;
  scrollDragState.pointerId = null;
  scrollIndicatorThumb?.classList.remove("is-dragging");
  document.body.classList.remove("is-dragging-scroll");
});

window.addEventListener("pointercancel", () => {
  scrollDragState.isDragging = false;
  scrollDragState.pointerId = null;
  scrollIndicatorThumb?.classList.remove("is-dragging");
  document.body.classList.remove("is-dragging-scroll");
});

tiltElements.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    element.style.transform = "translate3d(0, -8px, 0)";
  });

  element.addEventListener("mousemove", (event) => {
    const rect = element.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    const rotateX = -y * 8;
    const rotateY = x * 8;

    element.style.transform =
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate3d(0, -8px, 0)`;
  });

  element.addEventListener("mouseleave", () => {
    element.style.transform = "";
  });
});

if (window.matchMedia("(pointer: fine)").matches) {
  const interactiveElements = document.querySelectorAll(
    "a, button, input, textarea"
  );

  window.addEventListener("mousemove", (event) => {
    const x = event.clientX;
    const y = event.clientY;

    if (cursorDot) {
      cursorDot.style.left = `${x}px`;
      cursorDot.style.top = `${y}px`;
    }

    if (cursorRing) {
      cursorRing.style.left = `${x}px`;
      cursorRing.style.top = `${y}px`;
    }
  });

  interactiveElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      cursorRing?.classList.add("is-hover");
    });

    element.addEventListener("mouseleave", () => {
      cursorRing?.classList.remove("is-hover");
    });
  });
}

if (typedPanelLabel) {
  const typingPhrase = "I am Durgesh Nikam";
  let charIndex = 0;
  let isDeleting = false;

  const runTypingLoop = () => {
    typedPanelLabel.textContent = typingPhrase.slice(0, charIndex);

    if (!isDeleting && charIndex < typingPhrase.length) {
      charIndex += 1;
      window.setTimeout(runTypingLoop, 100);
      return;
    }

    if (!isDeleting && charIndex === typingPhrase.length) {
      isDeleting = true;
      window.setTimeout(runTypingLoop, 1400);
      return;
    }

    if (isDeleting && charIndex > 0) {
      charIndex -= 1;
      window.setTimeout(runTypingLoop, 50);
      return;
    }

    isDeleting = false;
    window.setTimeout(runTypingLoop, 320);
  };

  typedPanelLabel.textContent = "";
  runTypingLoop();
}

contactForm?.addEventListener("submit", () => {
  if (formStatus) {
    formStatus.textContent = "Sending your message to my inbox...";
  }
});
