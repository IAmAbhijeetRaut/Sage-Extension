/* ============================================================
   Sage Tab — Horizontal Cover Flow Feature Showcase
   50 PPT Slide Images with Dynamic Category/Title Transitions,
   Desaturated Side Slides, Glowing Center Card & Touch Controls
   ============================================================ */

(function () {
  const SLIDES = [
    {
      id: 1,
      file: "01_Brand_Cover_Page.jpg",
      category: "WORKSPACE DASHBOARD",
      title: "Sage Tab — Apple Fluid Glass Architecture",
      desc: "A quiet, customizable new tab dashboard crafted in an Apple Fluid Glass interface with modular drag-and-drop widgets."
    },
    {
      id: 2,
      file: "02_New_Tab_Experience.jpg",
      category: "DASHBOARD EXPERIENCE",
      title: "Clean New Tab Canvas",
      desc: "Transforms Chrome's blank new tab into a minimal, distraction-free environment with quick shortcuts and real-time clock."
    },
    {
      id: 3,
      file: "03_Search_Scope_1.jpg",
      category: "SMART SEARCH",
      title: "Smart Search Scope Selector",
      desc: "Instantly target Google, DuckDuckGo, YouTube, GitHub, Reddit, and Wikipedia with single-key shortcuts."
    },
    {
      id: 4,
      file: "04_Search_Scope_2.jpg",
      category: "SMART SEARCH",
      title: "Expanded Search Operators & Engine Filters",
      desc: "Filter searches directly by engine, category, or internal tab history without clicking away."
    },
    {
      id: 5,
      file: "05_Search_AI_Mode.jpg",
      category: "SMART SEARCH",
      title: "AI Research Mode",
      desc: "Toggle AI search queries with customizable prompt templates for deep answers, code generation, and instant summaries."
    },
    {
      id: 6,
      file: "06_Voice_Search.jpg",
      category: "SMART SEARCH",
      title: "Voice Search & Dictation",
      desc: "Hands-free search input with native speech recognition directly from your new tab search bar."
    },
    {
      id: 7,
      file: "07_Search_History.jpg",
      category: "SMART SEARCH",
      title: "Recent Search History & Quick Recall",
      desc: "Search history stored strictly in local browser storage with one-click replay and instant privacy wipe."
    },
    {
      id: 8,
      file: "08_Bookmarks_Sidebar.jpg",
      category: "BOOKMARKS & TABS",
      title: "Slide-Out Bookmarks Drawer",
      desc: "Browse your entire Chrome bookmark tree in a frosted slide-out drawer without leaving your new tab."
    },
    {
      id: 9,
      file: "09_Bookmarks_Integration.jpg",
      category: "BOOKMARKS & TABS",
      title: "Speed Dial Bookmarks Integration",
      desc: "Pin folders and individual bookmarks straight into your speed-dial grid for 1-click launching."
    },
    {
      id: 10,
      file: "10_Speed_Dial_Folders.jpg",
      category: "BOOKMARKS & TABS",
      title: "Speed Dial Nested Folders & Groups",
      desc: "Organize top sites into customizable group folders with live site favicons and color tags."
    },
    {
      id: 11,
      file: "11_Canvas_Toolbar.jpg",
      category: "WIDGETS & WORKSPACES",
      title: "Modular Canvas Toolbar",
      desc: "Top dock providing instant access to workspace switchers, widget drawers, settings, and layout tools."
    },
    {
      id: 12,
      file: "12_Widget_Library.jpg",
      category: "WIDGETS & WORKSPACES",
      title: "Extensive Widget Library",
      desc: "Choose from a full catalog of productivity widgets: Notes, Todos, Habits, Calculators, Clocks, and Alarms."
    },
    {
      id: 13,
      file: "13_Widget_Catalog.jpg",
      category: "WIDGETS & WORKSPACES",
      title: "Drag-and-Drop Widget Catalog",
      desc: "Freely position, resize, and configure widgets across your custom grid layout with live undo/redo."
    },
    {
      id: 14,
      file: "14_Multi_Page_Workspaces.jpg",
      category: "WIDGETS & WORKSPACES",
      title: "Multi-Page Workspace Layouts",
      desc: "Create dedicated pages for Work, Personal, Reading, and Code within a single fluid dashboard."
    },
    {
      id: 15,
      file: "15_Page_Switcher.jpg",
      category: "WIDGETS & WORKSPACES",
      title: "Instant Page Switcher",
      desc: "Seamlessly toggle between workspace pages with smooth animations and persistent layout state."
    },
    {
      id: 16,
      file: "16_Spaces_Manager.jpg",
      category: "WIDGETS & WORKSPACES",
      title: "Spaces & Layout Manager",
      desc: "Save, export, and load complete layout configurations tailored for different monitor setups and workflows."
    },
    {
      id: 17,
      file: "17_Timers_And_Alarms.jpg",
      category: "WIDGETS & WORKSPACES",
      title: "Smart Alarms & Site Overlays",
      desc: "Set alarms that sound gentle audio and optionally appear as overlays across any website so you never miss an appointment."
    },
    {
      id: 18,
      file: "18_Google_Apps_Launcher.jpg",
      category: "WIDGETS & WORKSPACES",
      title: "Google Apps Launcher Drawer",
      desc: "Quick slide-over launcher for Gmail, Calendar, Drive, Docs, Sheets, and Google Meet."
    },
    {
      id: 19,
      file: "19_Keyboard_Navigation.jpg",
      category: "WIDGETS & WORKSPACES",
      title: "Comprehensive Keyboard Shortcuts",
      desc: "Navigate every widget, trigger search scopes, and toggle drawers entirely via hotkeys."
    },
    {
      id: 20,
      file: "20_Settings_Drawer.jpg",
      category: "SETTINGS & PRIVACY",
      title: "Unified Settings & Preferences",
      desc: "Granular controls for performance, data storage, sync, audio, and visual themes with zero cloud tracking."
    },
    {
      id: 21,
      file: "21_Appearance_Controls.jpg",
      category: "SETTINGS & PRIVACY",
      title: "Appearance & Apple Fluid Glass",
      desc: "Customize glass blur, surface opacity, accent colors, and corner radiuses in real time."
    },
    {
      id: 22,
      file: "22_Theme_Gradients.jpg",
      category: "SETTINGS & PRIVACY",
      title: "Dynamic Theme Gradients",
      desc: "Dozens of hand-crafted color palettes and ambient mesh gradients tailored for day and night."
    },
    {
      id: 23,
      file: "23_Custom_Wallpapers.jpg",
      category: "SETTINGS & PRIVACY",
      title: "Custom Wallpaper Library",
      desc: "Upload your own high-res backgrounds or choose from curated nature, architectural, and minimal wallpapers."
    },
    {
      id: 24,
      file: "24_Backup_And_Portability.jpg",
      category: "SETTINGS & PRIVACY",
      title: "Local Backup & Cloud Sync",
      desc: "One-click JSON export/import plus zero-server synchronization through your personal Google Account."
    },
    {
      id: 25,
      file: "25_Focus_Distraction_Free_Space.jpg",
      category: "FOCUS & ZEN HUB",
      title: "Dedicated Focus Sanctuary",
      desc: "Instantly hide widgets and visual clutter with one shortcut to enter a deep, distraction-free work state."
    },
    {
      id: 26,
      file: "26_Focus_Pomodoro_Timer.jpg",
      category: "FOCUS & ZEN HUB",
      title: "Integrated Pomodoro Timer",
      desc: "Configurable focus intervals, short/long breaks, and gentle audio chimes to structure productive work blocks."
    },
    {
      id: 27,
      file: "27_Focus_Ambient_Soundscapes.jpg",
      category: "FOCUS & ZEN HUB",
      title: "Ambient Soundscapes & Natural Noise",
      desc: "Mix rain, forest birds, ocean waves, binaural tones, campfire, and cafe noise—generated 100% locally on-device."
    },
    {
      id: 28,
      file: "28_Focus_Guided_Breathing.jpg",
      category: "FOCUS & ZEN HUB",
      title: "Guided Zen Breathing Widget",
      desc: "Visual pacing circle for Box Breathing and 4-7-8 relaxation exercises to reduce workday stress."
    },
    {
      id: 29,
      file: "29_Minimal_Zen_Dashboard.jpg",
      category: "MINIMAL TAB",
      title: "Minimalist Clock & Atmosphere",
      desc: "An ultra-clean mode featuring only a floating typography clock, serene ambient gradient, and calm atmosphere."
    },
    {
      id: 30,
      file: "30_Minimal_Daily_Inspiration.jpg",
      category: "MINIMAL TAB",
      title: "Daily Curated Inspirational Quotes",
      desc: "Thoughtful daily quotes and philosophical wisdom to keep your day centered, motivated, and grounded."
    },
    {
      id: 31,
      file: "31_News_Smart_RSS_Reader.jpg",
      category: "RSS NEWS READER",
      title: "Built-in Smart RSS News Reader",
      desc: "A clean, ad-free reader aggregating top headlines from your favorite publishers with zero third-party tracking."
    },
    {
      id: 32,
      file: "32_News_Stream_Selector.jpg",
      category: "RSS NEWS READER",
      title: "Stream & Category Selector",
      desc: "Switch between Technology, Business, World News, Science, Design, and Custom feeds with one click."
    },
    {
      id: 33,
      file: "33_News_Topic_Sidebar.jpg",
      category: "RSS NEWS READER",
      title: "Categorized Feed Sidebar",
      desc: "Collapsible sidebar organizing all your subscriptions, source icons, and unread counts cleanly."
    },
    {
      id: 34,
      file: "34_News_Grid_Layout.jpg",
      category: "RSS NEWS READER",
      title: "Visual Card Grid View",
      desc: "Magazine-style article cards displaying featured imagery, reading times, and publication badges."
    },
    {
      id: 35,
      file: "35_News_Single_Column_List.jpg",
      category: "RSS NEWS READER",
      title: "Single-Column Compact List",
      desc: "High-density reader mode for scanning through dozens of top headlines in seconds."
    },
    {
      id: 36,
      file: "36_News_Two_Column_Density.jpg",
      category: "RSS NEWS READER",
      title: "Two-Column Split Layout",
      desc: "Balanced layout combining high reading comfort with efficient screen space utilization."
    },
    {
      id: 37,
      file: "37_News_Display_Density.jpg",
      category: "RSS NEWS READER",
      title: "Custom Display Density",
      desc: "Toggle between spacious, comfortable, and ultra-compact viewing densities to suit your monitor."
    },
    {
      id: 38,
      file: "38_News_Time_Filters.jpg",
      category: "RSS NEWS READER",
      title: "Time & Freshness Filters",
      desc: "Filter articles by past hour, today, this week, or unread status for rapid updates."
    },
    {
      id: 39,
      file: "39_News_In_Feed_Search.jpg",
      category: "RSS NEWS READER",
      title: "In-Feed Instant Search",
      desc: "Instant full-text keyword search across all cached articles without network latency."
    },
    {
      id: 40,
      file: "40_News_Add_Custom_Feeds.jpg",
      category: "RSS NEWS READER",
      title: "Add Custom RSS/Atom Feeds",
      desc: "Subscribe to any blog, Substack, publication, or news source RSS feed in one click."
    },
    {
      id: 41,
      file: "41_News_Feed_Subscription_Modal.jpg",
      category: "RSS NEWS READER",
      title: "Feed Validation & Discovery",
      desc: "Auto-discovers RSS feeds from site URLs and validates feed health before adding."
    },
    {
      id: 42,
      file: "42_News_Feed_Management.jpg",
      category: "RSS NEWS READER",
      title: "Feed Manager & Section Customizer",
      desc: "Reorder feeds, rename sections, and manage background refresh frequencies."
    },
    {
      id: 43,
      file: "43_News_Article_Card_Actions.jpg",
      category: "RSS NEWS READER",
      title: "Interactive Card Action Menu",
      desc: "Bookmark articles, share links, copy summaries, and trigger AI analysis straight from any card."
    },
    {
      id: 44,
      file: "44_News_AI_Research_Prompt.jpg",
      category: "RSS NEWS READER",
      title: "AI News Research Prompts",
      desc: "Auto-generates structured AI prompts with article content pre-formatted for ChatGPT, Claude, or Gemini."
    },
    {
      id: 45,
      file: "45_News_Prompt_Generator_Modal.jpg",
      category: "RSS NEWS READER",
      title: "One-Click Prompt Exporter",
      desc: "Copy rich analytical prompts with sources, claims, and context ready for your favorite LLM."
    },
    {
      id: 46,
      file: "46_News_Prompt_Templates.jpg",
      category: "RSS NEWS READER",
      title: "Customizable Prompt Templates",
      desc: "Choose from built-in templates: Executive Summary, Bias Analysis, Key Takeaways, or Fact-Checking."
    },
    {
      id: 47,
      file: "47_News_Custom_Prompt_Editor.jpg",
      category: "RSS NEWS READER",
      title: "Dynamic Tag & Prompt Editor",
      desc: "Build personalized prompt recipes with dynamic tags like {title}, {source}, {summary}, and {url}."
    },
    {
      id: 48,
      file: "48_News_Connection_Mode.jpg",
      category: "RSS NEWS READER",
      title: "Cross-Story Connection Mode",
      desc: "Identify underlying themes, shared entities, and hidden correlations across separate news stories."
    },
    {
      id: 49,
      file: "49_News_Multi_Select_Bar.jpg",
      category: "RSS NEWS READER",
      title: "Multi-Article Selection Bar",
      desc: "Select multiple articles simultaneously to compare viewpoints and synthesize complex topics."
    },
    {
      id: 50,
      file: "50_News_Cross_Story_Synthesis.jpg",
      category: "RSS NEWS READER",
      title: "AI Story Synthesis & Deep Analysis",
      desc: "Synthesizes multi-source coverage into a cohesive intelligence brief with source citations."
    }
  ];

  let currentIndex = 0;
  let isTransitioning = false;
  let autoPlayTimer = null;
  const AUTO_PLAY_DELAY = 4500;

  // DOM Elements
  const stage = document.getElementById("coverflow-stage");
  const catEl = document.getElementById("showcase-category");
  const titleEl = document.getElementById("showcase-title");
  const descEl = document.getElementById("showcase-desc");
  const counterEl = document.getElementById("showcase-counter");
  const progressEl = document.getElementById("showcase-progress");
  const prevBtn = document.getElementById("showcase-prev");
  const nextBtn = document.getElementById("showcase-next");
  const filterPills = document.querySelectorAll(".showcase-pill");

  if (!stage) return;

  // Preload neighbor images
  function preloadNeighbors(centerIdx) {
    const total = SLIDES.length;
    for (let i = -3; i <= 3; i++) {
      const idx = (centerIdx + i + total) % total;
      const img = new Image();
      img.src = `assets/slides/${SLIDES[idx].file}`;
    }
  }

  // Update Dynamic Header Text
  function updateText(slide, idx) {
    const textWrapper = document.getElementById("showcase-text-wrap");
    if (textWrapper) {
      textWrapper.classList.add("fade-out");
      setTimeout(() => {
        if (catEl) catEl.textContent = slide.category;
        if (titleEl) titleEl.textContent = slide.title;
        if (descEl) descEl.textContent = slide.desc;
        if (counterEl) counterEl.textContent = `${String(idx + 1).padStart(2, "0")} / ${SLIDES.length}`;
        textWrapper.classList.remove("fade-out");
      }, 160);
    } else {
      if (catEl) catEl.textContent = slide.category;
      if (titleEl) titleEl.textContent = slide.title;
      if (descEl) descEl.textContent = slide.desc;
      if (counterEl) counterEl.textContent = `${String(idx + 1).padStart(2, "0")} / ${SLIDES.length}`;
    }
  }

  // Initialize cards in DOM
  function initCards() {
    stage.innerHTML = "";
    SLIDES.forEach((slide, idx) => {
      const card = document.createElement("div");
      card.className = "coverflow-card hidden";
      card.dataset.index = idx;

      const img = document.createElement("img");
      img.src = `assets/slides/${slide.file}`;
      img.alt = slide.title;
      img.loading = idx < 6 ? "eager" : "lazy";

      const gloss = document.createElement("div");
      gloss.className = "card-gloss";

      card.appendChild(img);
      card.appendChild(gloss);

      card.addEventListener("click", () => {
        if (idx !== currentIndex) {
          resetAutoPlay();
          goToSlide(idx);
        }
      });

      stage.appendChild(card);
    });
  }

  // Update card positions, classes, and styles
  function updatePositions(instant = false) {
    const total = SLIDES.length;
    const cards = stage.querySelectorAll(".coverflow-card");

    if (instant) {
      stage.classList.add("no-transition");
    }

    cards.forEach((card) => {
      const idx = parseInt(card.dataset.index, 10);
      let offset = idx - currentIndex;

      // Wrap around 50 slides circular distance
      if (offset > total / 2) offset -= total;
      if (offset < -total / 2) offset += total;

      card.dataset.offset = offset;
      card.className = "coverflow-card";

      if (offset === 0) {
        card.classList.add("active");
      } else if (Math.abs(offset) <= 2) {
        if (offset < 0) {
          card.classList.add("side", "left", `pos-${Math.abs(offset)}`);
        } else {
          card.classList.add("side", "right", `pos-${offset}`);
        }
      } else if (Math.abs(offset) === 3) {
        card.classList.add("side", offset < 0 ? "left" : "right", "pos-3");
      } else {
        card.classList.add("hidden");
      }
    });

    if (instant) {
      void stage.offsetHeight;
      stage.classList.remove("no-transition");
    }

    if (progressEl) {
      const pct = ((currentIndex + 1) / total) * 100;
      progressEl.style.width = `${pct}%`;
    }

    updateText(SLIDES[currentIndex], currentIndex);
    preloadNeighbors(currentIndex);
    highlightActivePill();
  }

  function goToSlide(index) {
    if (isTransitioning) return;
    isTransitioning = true;
    const prev = currentIndex;
    currentIndex = (index + SLIDES.length) % SLIDES.length;
    const diff = Math.abs(currentIndex - prev);
    const instant = diff > 2 && diff < SLIDES.length - 2;
    updatePositions(instant);
    setTimeout(() => {
      isTransitioning = false;
    }, 400);
  }

  function nextSlide() {
    goToSlide(currentIndex + 1);
  }

  function prevSlide() {
    goToSlide(currentIndex - 1);
  }

  // Category filter buttons
  function highlightActivePill() {
    const currentCat = SLIDES[currentIndex].category;
    filterPills.forEach((pill) => {
      const cat = pill.dataset.category;
      if (cat === "ALL") {
        pill.classList.toggle("active", false);
      } else {
        pill.classList.toggle("active", currentCat.includes(cat));
      }
    });
  }

  filterPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      filterPills.forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      const targetCat = pill.dataset.category;
      resetAutoPlay();
      if (targetCat === "ALL") {
        goToSlide(0);
        return;
      }
      const firstMatch = SLIDES.findIndex((s) => s.category.includes(targetCat));
      if (firstMatch !== -1) {
        goToSlide(firstMatch);
      }
    });
  });

  // Controls
  if (prevBtn) prevBtn.addEventListener("click", () => { resetAutoPlay(); prevSlide(); });
  if (nextBtn) nextBtn.addEventListener("click", () => { resetAutoPlay(); nextSlide(); });

  // Auto-play
  function startAutoPlay() {
    stopAutoPlay();
    autoPlayTimer = setInterval(nextSlide, AUTO_PLAY_DELAY);
  }

  function stopAutoPlay() {
    if (autoPlayTimer) {
      clearInterval(autoPlayTimer);
      autoPlayTimer = null;
    }
  }

  function resetAutoPlay() {
    stopAutoPlay();
    startAutoPlay();
  }

  // Pause on hover
  const container = document.querySelector(".coverflow-container");
  if (container) {
    container.addEventListener("mouseenter", stopAutoPlay);
    container.addEventListener("mouseleave", startAutoPlay);
  }

  // Keyboard navigation
  window.addEventListener("keydown", (e) => {
    const rect = stage.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;
    if (inView) {
      if (e.key === "ArrowLeft") {
        resetAutoPlay();
        prevSlide();
      } else if (e.key === "ArrowRight") {
        resetAutoPlay();
        nextSlide();
      }
    }
  });

  // Touch & Swipe for Mobile
  let touchStartX = 0;
  let touchEndX = 0;

  stage.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  stage.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 35) {
      resetAutoPlay();
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  }, { passive: true });

  // Initialize
  initCards();
  updatePositions(true);
  startAutoPlay();
})();
