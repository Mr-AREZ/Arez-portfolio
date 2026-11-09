/* Portfolio — behavior: icons, language switcher (EN/FA + RTL), mobile menu, contact form */

(function () {
  "use strict";

  /* ---------- config: edit these ---------- */
  var CONFIG = {
    // Create a form at https://formspree.io and paste its endpoint here, e.g. "https://formspree.io/f/abcdwxyz"
    formEndpoint: "https://formspree.io/f/YOUR_FORM_ID"
  };

  /* ---------- icons ---------- */
  var ICONS = {
    github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>',
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
    telegram: '<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>',
    mail: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>',
    arrow: '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
    chevron: '<polyline points="6 9 12 15 18 9"/>',
    menu: '<line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/>',
    close: '<line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/>',
    live: '<polyline points="15 8 19 12 15 16"/><polyline points="9 8 5 12 9 16"/>'
  };

  function renderIcons(root) {
    (root || document).querySelectorAll("[data-icon]").forEach(function (el) {
      var name = el.getAttribute("data-icon");
      if (!ICONS[name] || el.querySelector("svg")) return;
      var flip = el.hasAttribute("data-flip") ? " icon-flip" : "";
      el.insertAdjacentHTML(
        "afterbegin",
        '<svg class="icon' + flip + '" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' + ICONS[name] + "</svg>"
      );
    });
  }

  /* ---------- language ---------- */
  var STORAGE_KEY = "lang";
  var SUPPORTED = ["en", "fa"];

  function detectLang() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (SUPPORTED.indexOf(saved) !== -1) return saved;
    } catch (e) {}
    var nav = (navigator.language || "en").toLowerCase();
    return nav.indexOf("fa") === 0 ? "fa" : "en";
  }

  function t(lang, key) {
    var dict = window.I18N[lang] || {};
    return dict[key] != null ? dict[key] : window.I18N.en[key];
  }

  function applyLang(lang) {
    var root = document.documentElement;
    root.lang = lang;
    root.dir = lang === "fa" ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = t(lang, el.getAttribute("data-i18n"));
      if (v != null) el.textContent = v;
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var v = t(lang, el.getAttribute("data-i18n-html"));
      if (v != null) el.innerHTML = v; // trusted, static strings from i18n.js
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var v = t(lang, el.getAttribute("data-i18n-placeholder"));
      if (v != null) el.setAttribute("placeholder", v);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var v = t(lang, el.getAttribute("data-i18n-aria"));
      if (v != null) el.setAttribute("aria-label", v);
    });

    var page = document.body.getAttribute("data-page");
    if (page) {
      document.title = t(lang, "meta.title." + page);
      var meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", t(lang, "meta.desc." + page));
    }

    document.querySelectorAll(".lang-current").forEach(function (el) { el.textContent = lang.toUpperCase(); });
    document.querySelectorAll(".lang-menu button").forEach(function (b) {
      b.setAttribute("aria-current", b.getAttribute("data-lang") === lang ? "true" : "false");
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    document.dispatchEvent(new CustomEvent("langchange", { detail: lang }));
  }

  function setupLangSwitchers() {
    document.querySelectorAll(".lang").forEach(function (box) {
      var btn = box.querySelector(".lang-btn"); // absent in the mobile panel
      if (btn) {
        btn.addEventListener("click", function (e) {
          e.stopPropagation();
          var open = box.classList.toggle("open");
          btn.setAttribute("aria-expanded", open ? "true" : "false");
        });
      }
      box.querySelectorAll(".lang-menu button").forEach(function (b) {
        b.addEventListener("click", function () {
          applyLang(b.getAttribute("data-lang"));
          box.classList.remove("open");
          if (btn) btn.setAttribute("aria-expanded", "false");
        });
      });
    });
    document.addEventListener("click", function () {
      document.querySelectorAll(".lang.open").forEach(function (b) { b.classList.remove("open"); });
    });
  }

  /* ---------- mobile menu ---------- */
  function setupMenu() {
    var panel = document.getElementById("mobile-panel");
    var openBtn = document.getElementById("burger-open");
    var closeBtn = document.getElementById("burger-close");
    if (!panel || !openBtn || !closeBtn) return;

    function toggle(open) {
      panel.classList.toggle("open", open);
      openBtn.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
    }
    openBtn.addEventListener("click", function () { toggle(true); });
    closeBtn.addEventListener("click", function () { toggle(false); });
    panel.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", function () { toggle(false); }); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") toggle(false); });
  }

  /* ---------- contact form ---------- */
  function setupForm() {
    var form = document.getElementById("contact-form");
    if (!form) return;
    var status = form.querySelector(".form-status");
    var btn = form.querySelector("button[type=submit]");

    function show(key, cls) {
      status.className = "form-status " + (cls || "");
      status.setAttribute("data-i18n", key);
      status.textContent = t(document.documentElement.lang, key);
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (form.querySelector("[name=_gotcha]").value) return; // bot trap
      if (/YOUR_FORM_ID/.test(CONFIG.formEndpoint)) { show("form.setup", "err"); return; }

      btn.disabled = true;
      show("form.sending");
      fetch(CONFIG.formEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form)
      })
        .then(function (res) {
          if (!res.ok) throw new Error("bad status");
          form.reset();
          show("form.ok", "ok");
        })
        .catch(function () { show("form.err", "err"); })
        .then(function () { btn.disabled = false; });
    });
  }

  /* ---------- init ---------- */
  function init() {
    renderIcons();
    setupLangSwitchers();
    setupMenu();
    setupForm();

    var current = (document.body.getAttribute("data-page") || "");
    document.querySelectorAll(".nav-link[data-page]").forEach(function (a) {
      if (a.getAttribute("data-page") === current) a.classList.add("active");
    });
    document.querySelectorAll(".year").forEach(function (el) { el.textContent = new Date().getFullYear(); });

    applyLang(detectLang());
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
