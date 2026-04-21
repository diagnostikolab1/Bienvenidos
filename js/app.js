(function () {
  function onReady(callback) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callback);
      return;
    }
    callback();
  }

  onReady(function () {
    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    initTheme();
    initMobileMenu();
    initReveal(reduceMotion);
    initCounters(reduceMotion);
    initTilt(reduceMotion);
    initHeroParallax(reduceMotion);
    initSpotlight();
    initScrollProgress();
    initScrollSpy();
    initHeaderAutoHide();
    initFormFeedback();
  });

  function initTheme() {
    var root = document.documentElement;
    var toggles = Array.prototype.slice.call(document.querySelectorAll("[data-theme-toggle]"));

    function applyTheme(theme) {
      root.setAttribute("data-theme", theme);
      try {
        localStorage.setItem("theme", theme);
      } catch (error) {
        return;
      }
    }

    function getTheme() {
      return root.getAttribute("data-theme") === "dark" ? "dark" : "light";
    }

    function refreshToggleLabels() {
      var isDark = getTheme() === "dark";
      toggles.forEach(function (toggle) {
        var label = toggle.querySelector(".theme-toggle-label");
        if (label) {
          label.textContent = isDark ? "Modo claro" : "Modo oscuro";
        }

        var dockText = toggle.querySelector("span");
        if (dockText && toggle.classList.contains("dock-theme")) {
          dockText.textContent = isDark ? "Claro" : "Oscuro";
        }

        toggle.setAttribute("aria-label", isDark ? "Activar modo claro" : "Activar modo oscuro");
      });
    }

    toggles.forEach(function (toggle) {
      toggle.addEventListener("click", function () {
        var current = getTheme();
        applyTheme(current === "dark" ? "light" : "dark");
        refreshToggleLabels();
      });
    });

    refreshToggleLabels();
  }

  function initMobileMenu() {
    var panel = document.getElementById("mobilePanel");
    var overlay = document.querySelector("[data-overlay]");
    var openButton = document.querySelector("[data-menu-toggle]");
    var closeButton = document.querySelector("[data-menu-close]");

    if (!panel || !overlay || !openButton || !closeButton) {
      return;
    }

    function openMenu() {
      panel.classList.add("is-open");
      panel.setAttribute("aria-hidden", "false");
      openButton.setAttribute("aria-expanded", "true");
      overlay.hidden = false;
      document.body.classList.add("menu-open");
      document.body.classList.remove("header-hidden");
    }

    function closeMenu() {
      panel.classList.remove("is-open");
      panel.setAttribute("aria-hidden", "true");
      openButton.setAttribute("aria-expanded", "false");
      overlay.hidden = true;
      document.body.classList.remove("menu-open");
    }

    openButton.addEventListener("click", function () {
      if (panel.classList.contains("is-open")) {
        closeMenu();
        return;
      }
      openMenu();
    });

    closeButton.addEventListener("click", closeMenu);
    overlay.addEventListener("click", closeMenu);

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && panel.classList.contains("is-open")) {
        closeMenu();
      }
    });

    var links = Array.prototype.slice.call(panel.querySelectorAll("[data-nav-link]"));
    links.forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });
  }

  function initReveal(reduceMotion) {
    var elements = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
    if (elements.length === 0) {
      return;
    }

    if (reduceMotion || typeof IntersectionObserver === "undefined") {
      elements.forEach(function (element) {
        element.classList.add("is-visible");
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries, currentObserver) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
          return;
        }
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      });
    }, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });

    elements.forEach(function (element) {
      observer.observe(element);
    });
  }

  function initCounters(reduceMotion) {
    var counters = Array.prototype.slice.call(document.querySelectorAll("[data-count]"));
    if (counters.length === 0) {
      return;
    }

    function animateCounter(node) {
      var target = Number(node.getAttribute("data-count") || 0);
      var duration = 1400;
      var start = null;

      function frame(time) {
        if (!start) {
          start = time;
        }
        var progress = Math.min((time - start) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        node.textContent = String(Math.round(target * eased));
        if (progress < 1) {
          requestAnimationFrame(frame);
        }
      }

      requestAnimationFrame(frame);
    }

    if (reduceMotion || typeof IntersectionObserver === "undefined") {
      counters.forEach(function (counter) {
        counter.textContent = counter.getAttribute("data-count") || "0";
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries, currentObserver) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
          return;
        }
        animateCounter(entry.target);
        currentObserver.unobserve(entry.target);
      });
    }, { threshold: 0.5 });

    counters.forEach(function (counter) {
      observer.observe(counter);
    });
  }

  function initTilt(reduceMotion) {
    var cards = Array.prototype.slice.call(document.querySelectorAll("[data-tilt]"));
    if (cards.length === 0 || reduceMotion) {
      return;
    }

    cards.forEach(function (card) {
      card.addEventListener("pointermove", function (event) {
        var rect = card.getBoundingClientRect();
        var x = (event.clientX - rect.left) / rect.width;
        var y = (event.clientY - rect.top) / rect.height;
        var rotateY = (x - 0.5) * 10;
        var rotateX = (0.5 - y) * 10;
        card.style.transform = "rotateX(" + rotateX.toFixed(2) + "deg) rotateY(" + rotateY.toFixed(2) + "deg)";
      });

      card.addEventListener("pointerleave", function () {
        card.style.transform = "rotateX(0deg) rotateY(0deg)";
      });
    });
  }

  function initHeroParallax(reduceMotion) {
    var media = document.querySelector("[data-parallax-media]");
    var hero = document.querySelector(".hero-intro");
    if (!media || !hero || reduceMotion) {
      return;
    }

    function updateParallax() {
      var rect = hero.getBoundingClientRect();
      var viewportHeight = window.innerHeight || document.documentElement.clientHeight;

      if (rect.bottom < 0 || rect.top > viewportHeight) {
        return;
      }

      var offset = Math.max(-48, Math.min(48, -rect.top * 0.14));
      media.style.transform = "scale(1.08) translate3d(0," + offset.toFixed(2) + "px,0)";
    }

    window.addEventListener("scroll", updateParallax, { passive: true });
    window.addEventListener("resize", updateParallax);
    updateParallax();
  }

  function initSpotlight() {
    var cards = Array.prototype.slice.call(document.querySelectorAll("[data-spotlight]"));
    cards.forEach(function (card) {
      card.addEventListener("pointermove", function (event) {
        var rect = card.getBoundingClientRect();
        var x = ((event.clientX - rect.left) / rect.width) * 100;
        var y = ((event.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty("--spot-x", x.toFixed(2) + "%");
        card.style.setProperty("--spot-y", y.toFixed(2) + "%");
      });
    });
  }

  function initScrollProgress() {
    var bar = document.getElementById("scrollProgress");
    if (!bar) {
      return;
    }

    function updateProgress() {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      var ratio = max > 0 ? window.scrollY / max : 0;
      var width = Math.max(0, Math.min(100, ratio * 100));
      bar.style.width = width.toFixed(2) + "%";
    }

    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    updateProgress();
  }

  function initScrollSpy() {
    var links = Array.prototype.slice.call(document.querySelectorAll("[data-nav-link]"));
    if (links.length === 0) {
      return;
    }

    var seen = {};
    var sections = [];

    links.forEach(function (link) {
      var href = link.getAttribute("href") || "";
      if (!href.startsWith("#")) {
        return;
      }
      var id = href.slice(1);
      if (!id || seen[id]) {
        return;
      }
      seen[id] = true;
      var section = document.getElementById(id);
      if (section) {
        sections.push(section);
      }
    });

    function setActive(id) {
      links.forEach(function (link) {
        var href = link.getAttribute("href") || "";
        link.classList.toggle("active", href === "#" + id);
      });
    }

    function updateActiveSection() {
      var offset = window.scrollY + 130;
      var current = "inicio";

      sections.forEach(function (section) {
        if (section.id === "inicio") {
          return;
        }
        if (offset >= section.offsetTop) {
          current = section.id;
        }
      });

      if (window.scrollY < 120) {
        current = "inicio";
      }

      setActive(current);
    }

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    updateActiveSection();
  }

  function initHeaderAutoHide() {
    var lastY = window.scrollY;

    function updateHeaderState() {
      if (document.body.classList.contains("menu-open")) {
        document.body.classList.remove("header-hidden");
        lastY = window.scrollY;
        return;
      }

      var currentY = window.scrollY;
      var down = currentY > lastY + 8;
      var up = currentY < lastY - 8;

      if (down && currentY > 130) {
        document.body.classList.add("header-hidden");
      } else if (up || currentY < 40) {
        document.body.classList.remove("header-hidden");
      }

      lastY = currentY;
    }

    window.addEventListener("scroll", updateHeaderState, { passive: true });
    window.addEventListener("resize", updateHeaderState);
    updateHeaderState();
  }

  function initFormFeedback() {
    var form = document.getElementById("bookingForm");
    var message = document.getElementById("formMessage");
    if (!form || !message) {
      return;
    }

    var dateInput = form.querySelector("input[type='date']");
    if (dateInput) {
      var now = new Date();
      var month = String(now.getMonth() + 1).padStart(2, "0");
      var day = String(now.getDate()).padStart(2, "0");
      dateInput.min = now.getFullYear() + "-" + month + "-" + day;
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!form.checkValidity()) {
        message.textContent = "Completa los campos requeridos antes de enviar.";
        message.style.color = "#cc5f53";
        form.reportValidity();
        return;
      }

      var button = form.querySelector("button[type='submit']");
      if (button) {
        button.disabled = true;
        button.textContent = "Enviando...";
      }

      window.setTimeout(function () {
        if (button) {
          button.textContent = "Solicitud enviada";
        }
        message.textContent = "Recibimos tu solicitud. Te contactaremos pronto.";
        message.style.color = "var(--good)";
        form.reset();
      }, 520);

      window.setTimeout(function () {
        if (button) {
          button.disabled = false;
          button.textContent = "Enviar solicitud";
        }
      }, 2200);
    });
  }
})();
