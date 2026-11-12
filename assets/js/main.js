(function () {
  "use strict";

  var root = document.documentElement;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Theme toggle ---------- */

  // Light is the default; dark only when chosen with the toggle.
  function isDark() { return root.getAttribute("data-theme") === "dark"; }

  var themeListeners = [];
  function onThemeChange(fn) { themeListeners.push(fn); }
  function emitTheme() { themeListeners.forEach(function (fn) { fn(); }); }

  document.querySelectorAll("[data-theme-toggle]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var next = isDark() ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      emitTheme();
    });
  });

  /* ---------- Header border on scroll ---------- */

  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () { header.classList.toggle("is-scrolled", window.scrollY > 4); };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Publication filters ---------- */

  var filters = document.querySelector("[data-filters]");
  var list = document.querySelector("[data-filter-list]");
  if (filters && list) {
    filters.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-filter]");
      if (!btn) return;
      var value = btn.getAttribute("data-filter");
      filters.querySelectorAll("[data-filter]").forEach(function (b) {
        var on = b === btn;
        b.classList.toggle("is-active", on);
        b.setAttribute("aria-pressed", on ? "true" : "false");
      });
      Array.prototype.forEach.call(list.children, function (item) {
        item.hidden = value !== "all" && item.getAttribute("data-type") !== value;
      });
    });
  }

  /* ---------- Copy to clipboard (BibTeX) ---------- */

  function copyText(text, btn) {
    var label = btn.textContent;
    var done = function (ok) {
      btn.textContent = ok ? "Copied ✓" : "Press ⌘C / Ctrl+C";
      setTimeout(function () { btn.textContent = label; }, 1600);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { done(true); }, function () { done(false); });
    } else {
      done(false);
    }
  }

  document.addEventListener("click", function (e) {
    var toggle = e.target.closest("[data-bibtex-toggle]");
    if (toggle) {
      var panel = toggle.closest(".entry__body").querySelector("[data-bibtex]");
      var open = panel.hidden;
      panel.hidden = !open;
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      return;
    }
    var copyBib = e.target.closest("[data-bibtex-copy]");
    if (copyBib) {
      copyText(copyBib.parentNode.querySelector("code").textContent, copyBib);
    }
  });

  /* ---------- Reveal on scroll ---------- */

  if (!reduceMotion && "IntersectionObserver" in window) {
    var fold = window.innerHeight;
    var targets = Array.prototype.filter.call(document.querySelectorAll(".section"), function (el) {
      return el.getBoundingClientRect().top > fold; // only animate what starts below the fold
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    targets.forEach(function (el) {
      el.classList.add("reveal");
      io.observe(el);
    });
  }

  /* ---------- Signal: observed series, imputed gap, forecast with uncertainty ---------- */

  var canvas = document.querySelector("[data-signal]");
  if (!canvas || !canvas.getContext) return;

  var ctx = canvas.getContext("2d");
  var colors = {};
  var W = 0, H = 0, dpr = 1;
  var phase = 0;
  var running = false;
  var visible = true;
  var last = 0;

  var NOW = 0.74;            // fraction of width where "now" (t0) sits
  var GAP = [0.31, 0.43];    // missing-value window, as width fractions
  var STEP = 2;

  function readColors() {
    var s = getComputedStyle(root);
    ["obs", "fc", "band", "area", "gap", "imp", "grid"].forEach(function (k) {
      colors[k] = s.getPropertyValue("--signal-" + k).trim();
    });
    colors.muted = s.getPropertyValue("--ink-3").trim();
    colors.bg = s.getPropertyValue("--bg").trim();
    colors.font = s.getPropertyValue("--font-sans").trim();
  }

  function resize() {
    var rect = canvas.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = rect.width;
    H = rect.height;
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  // Ground-truth signal: two seasonal components plus a little texture.
  function signal(t) {
    return 0.52 * Math.sin(0.9 * t)
      + 0.24 * Math.sin(2.3 * t + 1.1)
      + 0.07 * Math.sin(5.3 * t + 2.0);
  }
  // What a model would "see": the smooth part only.
  function smooth(t) {
    return 0.52 * Math.sin(0.9 * t) + 0.24 * Math.sin(2.3 * t + 1.1);
  }

  function tAt(x) { return (x / W) * 11 + phase; }

  function yAt(v) {
    var top = 26, bottom = 14;
    return top + (1 - (v + 0.9) / 1.8) * (H - top - bottom);
  }

  function trace(x0, x1, fn, moveFirst) {
    for (var x = x0; x <= x1 + 0.01; x += STEP) {
      var xx = Math.min(x, x1), y = yAt(fn(xx));
      if (x === x0 && moveFirst) ctx.moveTo(xx, y); else ctx.lineTo(xx, y);
    }
  }
  function strokePath(x0, x1, fn) {
    ctx.beginPath();
    trace(x0, x1, fn, true);
    ctx.stroke();
  }
  function fillUnder(x0, x1, fn, top, bottom) {
    var g = ctx.createLinearGradient(0, top, 0, bottom);
    g.addColorStop(0, colors.area);
    g.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.moveTo(x0, bottom);
    trace(x0, x1, fn, false);
    ctx.lineTo(x1, bottom);
    ctx.closePath();
    ctx.fill();
  }

  function label(text, x, y, color, align) {
    ctx.fillStyle = color;
    ctx.font = '500 11px ' + (colors.font || "sans-serif");
    ctx.textAlign = align || "left";
    ctx.textBaseline = "top";
    ctx.fillText(text, x, y);
    ctx.textAlign = "left";
  }

  function draw() {
    if (!W || !H) return;
    ctx.clearRect(0, 0, W, H);
    ctx.lineJoin = "round";
    ctx.lineCap = "round";

    var xNow = W * NOW;
    var gx0 = W * GAP[0], gx1 = W * GAP[1];
    var obs = function (x) { return signal(tAt(x)); };

    // Forecast: smooth extrapolation anchored at the last observation.
    var tNow = tAt(xNow);
    var offset = signal(tNow) - smooth(tNow);
    var decay = W * 0.05;
    var fc = function (x) { return smooth(tAt(x)) + offset * Math.exp(-(x - xNow) / decay); };
    var spread = function (x) { return 0.03 + 0.3 * Math.pow(Math.max(0, x - xNow) / (W - xNow), 0.75); };

    // Missing window: soft column + label
    ctx.fillStyle = colors.gap;
    ctx.beginPath();
    if (ctx.roundRect) ctx.roundRect(gx0, 4, gx1 - gx0, H - 8, 8); else ctx.rect(gx0, 4, gx1 - gx0, H - 8);
    ctx.fill();
    label("missing", (gx0 + gx1) / 2, 10, colors.muted, "center");

    // Soft area under the observed history
    fillUnder(0, xNow, obs, yAt(0.9), H);

    // Uncertainty band, fading out to the right
    var bandFade = ctx.createLinearGradient(xNow, 0, W, 0);
    bandFade.addColorStop(0, colors.band);
    bandFade.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = bandFade;
    ctx.beginPath();
    for (var x = xNow; x <= W; x += STEP) ctx.lineTo(x, yAt(fc(x) + spread(x)));
    for (x = W; x >= xNow; x -= STEP) ctx.lineTo(x, yAt(fc(x) - spread(x)));
    ctx.closePath();
    ctx.fill();

    // Observed series (around the gap)
    ctx.strokeStyle = colors.obs;
    ctx.lineWidth = 2;
    ctx.setLineDash([]);
    strokePath(0, gx0, obs);
    strokePath(gx1, xNow, obs);

    // Imputed values in the gap
    ctx.strokeStyle = colors.imp;
    ctx.lineWidth = 2;
    ctx.setLineDash([0.1, 5]);
    strokePath(gx0, gx1, obs);

    // Forecast
    ctx.strokeStyle = colors.fc;
    ctx.lineWidth = 2;
    ctx.setLineDash([7, 6]);
    strokePath(xNow, W, fc);
    ctx.setLineDash([]);

    // "Now" marker
    ctx.strokeStyle = colors.grid;
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(Math.round(xNow) + 0.5, 26); ctx.lineTo(Math.round(xNow) + 0.5, H); ctx.stroke();
    label("now", xNow, 10, colors.muted, "center");

    var yNow = yAt(obs(xNow));
    ctx.fillStyle = colors.band;
    ctx.beginPath(); ctx.arc(xNow, yNow, 9, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = colors.bg;
    ctx.beginPath(); ctx.arc(xNow, yNow, 5, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = colors.fc;
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(xNow, yNow, 5, 0, Math.PI * 2); ctx.stroke();

    // Fade both edges into the page.
    var fade = ctx.createLinearGradient(0, 0, W, 0);
    fade.addColorStop(0, "rgba(0,0,0,0)");
    fade.addColorStop(0.08, "rgba(0,0,0,1)");
    fade.addColorStop(0.95, "rgba(0,0,0,1)");
    fade.addColorStop(1, "rgba(0,0,0,0)");
    ctx.globalCompositeOperation = "destination-in";
    ctx.fillStyle = fade;
    ctx.fillRect(0, 0, W, H);
    ctx.globalCompositeOperation = "source-over";
  }

  function frame(ts) {
    if (!running) return;
    var dt = last ? Math.min((ts - last) / 1000, 0.1) : 0;
    last = ts;
    phase += dt * 0.3;
    draw();
    requestAnimationFrame(frame);
  }

  function start() {
    if (running || reduceMotion || !visible || document.hidden) return;
    running = true;
    last = 0;
    requestAnimationFrame(frame);
  }
  function stop() { running = false; }

  readColors();
  resize();
  draw();
  start();

  onThemeChange(function () {
    // Wait a tick so the new custom properties are applied.
    requestAnimationFrame(function () { readColors(); draw(); });
  });

  var resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () { resize(); draw(); }, 100);
  });

  document.addEventListener("visibilitychange", function () {
    if (document.hidden) stop(); else start();
  });

  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      visible = entries[0].isIntersecting;
      if (visible) start(); else stop();
    }).observe(canvas);
  }

  if (document.fonts && document.fonts.ready) document.fonts.ready.then(draw);
})();
