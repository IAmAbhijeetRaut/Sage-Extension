/* ============================================================
   Satori Tab — Horizontal Cover Flow Feature Showcase
   5 Tab View Showcase Images with Dynamic Category/Title Transitions,
   Desaturated Side Slides, Glowing Center Card & Touch Controls
   ============================================================ */

(function () {
  const SLIDES = [
    {
      id: 1,
      file: "01_Brand_Cover_Page.jpg",
      category: "WORKSPACE DASHBOARD",
      title: "Satori Tab — Apple Fluid Glass Architecture",
      desc: "A quiet, customizable new tab dashboard crafted in an Apple Fluid Glass interface with modular drag-and-drop widgets."
    },
    {
      id: 2,
      file: "02_Dashboard_Tab.jpg",
      category: "WORKSPACE DASHBOARD",
      title: "Modular Productivity Dashboard",
      desc: "Customizable widgets, real-time clock, quick bookmarks, alarms, and search bar with fluid glass aesthetics."
    },
    {
      id: 3,
      file: "03_Focus_Tab.jpg",
      category: "FOCUS & ZEN",
      title: "Dedicated Focus Sanctuary",
      desc: "Pomodoro timer, guided breathing cycles, and ambient local soundscapes to maintain deep flow."
    },
    {
      id: 4,
      file: "04_Minimal_Tab.jpg",
      category: "MINIMAL ZEN",
      title: "Minimal Zen Atmosphere",
      desc: "Distraction-free floating clock and curated inspirational quotes set against calming ambient gradients."
    },
    {
      id: 5,
      file: "05_News_Tab.jpg",
      category: "RSS NEWS READER",
      title: "Ad-Free Smart RSS Reader",
      desc: "Clean headline feeds, topic channels, and multi-story AI research prompt synthesis with zero tracking."
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
    for (let i = -2; i <= 2; i++) {
      const idx = (centerIdx + i + total) % total;
      const img = new Image();
      img.src = `assets/slides/${SLIDES[idx].file}`;
    }
  }

  // Update Dynamic Header Text
  function updateText(slide, idx) {
    const textWrapper = document.getElementById("showcase-text-wrap");
    const counterText = `${String(idx + 1).padStart(2, "0")} / ${String(SLIDES.length).padStart(2, "0")}`;

    if (textWrapper) {
      textWrapper.classList.add("fade-out");
      setTimeout(() => {
        if (catEl) catEl.textContent = slide.category;
        if (titleEl) titleEl.textContent = slide.title;
        if (descEl) descEl.textContent = slide.desc;
        if (counterEl) counterEl.textContent = counterText;
        textWrapper.classList.remove("fade-out");
      }, 160);
    } else {
      if (catEl) catEl.textContent = slide.category;
      if (titleEl) titleEl.textContent = slide.title;
      if (descEl) descEl.textContent = slide.desc;
      if (counterEl) counterEl.textContent = counterText;
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
      img.loading = "eager";

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

      // Wrap around 5 slides circular distance
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
    currentIndex = (index + SLIDES.length) % SLIDES.length;
    updatePositions(false);
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
        pill.classList.toggle("active", currentIndex === 0);
      } else {
        pill.classList.toggle("active", currentCat === cat);
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
      const firstMatch = SLIDES.findIndex((s) => s.category === targetCat);
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
