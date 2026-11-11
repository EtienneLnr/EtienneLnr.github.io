(function () {
  "use strict";

  var root = document.documentElement;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  /* ---------- Theme toggle ---------- */

  function isDark() {
    var t = root.getAttribute("data-theme");
    return t ? t === "dark" : darkQuery.matches;
  }

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
  if (darkQuery.addEventListener) darkQuery.addEventListener("change", emitTheme);

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
  var GAP = [0.33, 0.43];    // missing-value window, as width fractions

  function readColors() {
    var s = getComputedStyle(root);
    colors.obs = s.getPropertyValue("--signal-obs").trim();
    colors.fc = s.getPropertyValue("--signal-fc").trim();
    colors.band = s.getPropertyValue("--signal-band").trim();
    colors.grid = s.getPropertyValue("--signal-grid").trim();
    colors.muted = s.getPropertyValue("--ink-3").trim();
    colors.bg = s.getPropertyValue("--bg").trim();
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

  // Ground-truth signal (seasonal + faster components).
  function signal(t) {
    return 0.52 * Math.sin(0.9 * t)
      + 0.24 * Math.sin(2.3 * t + 1.1)
      + 0.11 * Math.sin(5.3 * t + 2.0)
      + 0.05 * Math.sin(11.7 * t + 0.4);
  }
  // What a model would "see": the smooth part only.
  function smooth(t) {
    return 0.52 * Math.sin(0.9 * t) + 0.24 * Math.sin(2.3 * t + 1.1);
  }

  function tAt(x) { return (x / W) * 11 + phase; }

  function yAt(v) {
    var pad = 22;
    return H / 2 - v * (H / 2 - pad) / 0.95;
  }

  function strokePath(x0, x1, fn, step) {
    ctx.beginPath();
    for (var x = x0; x <= x1 + 0.01; x += step) {
      var y = yAt(fn(x));
      if (x === x0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.stroke();
  }

  function draw() {
    if (!W || !H) return;
    ctx.clearRect(0, 0, W, H);

    var xNow = W * NOW;
    var gx0 = W * GAP[0], gx1 = W * GAP[1];
    var step = 2;

    // Grid
    ctx.strokeStyle = colors.grid;
    ctx.lineWidth = 1;
    for (var i = 1; i < 4; i++) {
      var gy = Math.round((H * i) / 4) + 0.5;
      ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(W, gy); ctx.stroke();
    }

    var obs = function (x) { return signal(tAt(x)); };

    // Forecast: smooth extrapolation anchored at the last observation.
    var tNow = tAt(xNow);
    var offset = signal(tNow) - smooth(tNow);
    var decay = W * 0.06;
    var fc = function (x) {
      return smooth(tAt(x)) + offset * Math.exp(-(x - xNow) / decay);
    };
    var spread = function (x) { return 0.04 + 0.32 * Math.pow((x - xNow) / (W - xNow), 0.8); };

    // Uncertainty band
    ctx.fillStyle = colors.band;
    ctx.beginPath();
    for (var x = xNow; x <= W; x += step) ctx.lineTo(x, yAt(fc(x) + spread(x)));
    for (x = W; x >= xNow; x -= step) ctx.lineTo(x, yAt(fc(x) - spread(x)));
    ctx.closePath();
    ctx.fill();

    ctx.lineJoin = "round";
    ctx.lineCap = "round";

    // Observed (two pieces around the gap)
    ctx.strokeStyle = colors.obs;
    ctx.lineWidth = 1.75;
    ctx.setLineDash([]);
    strokePath(0, gx0, obs, step);
    strokePath(gx1, xNow, obs, step);

    // Imputed gap: dotted reconstruction
    ctx.strokeStyle = colors.muted;
    ctx.lineWidth = 1.75;
    ctx.setLineDash([1.5, 5]);
    strokePath(gx0, gx1, obs, step);

    // Forecast line
    ctx.strokeStyle = colors.fc;
    ctx.lineWidth = 1.75;
    ctx.setLineDash([6, 5]);
    strokePath(xNow, W, fc, step);
    ctx.setLineDash([]);

    // Gap brackets
    ctx.strokeStyle = colors.grid;
    ctx.lineWidth = 1;
    [gx0, gx1].forEach(function (gx) {
      ctx.beginPath(); ctx.moveTo(Math.round(gx) + 0.5, 10); ctx.lineTo(Math.round(gx) + 0.5, H - 10); ctx.stroke();
    });

    // "Now" marker
    ctx.strokeStyle = colors.muted;
    ctx.globalAlpha = 0.5;
    ctx.setLineDash([2, 4]);
    ctx.beginPath(); ctx.moveTo(Math.round(xNow) + 0.5, 18); ctx.lineTo(Math.round(xNow) + 0.5, H - 4); ctx.stroke();
    ctx.setLineDash([]);
    ctx.globalAlpha = 1;

    ctx.fillStyle = colors.muted;
    ctx.font = '11px "Geist Mono", ui-monospace, monospace';
    ctx.textBaseline = "top";
    ctx.fillText("t₀", Math.round(xNow) + 6, 4);

    var yNow = yAt(obs(xNow));
    ctx.fillStyle = colors.bg;
    ctx.beginPath(); ctx.arc(xNow, yNow, 4.5, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = colors.fc;
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(xNow, yNow, 4.5, 0, Math.PI * 2); ctx.stroke();

    // Fade the left edge into the page.
    var fade = ctx.createLinearGradient(0, 0, W * 0.12, 0);
    fade.addColorStop(0, "rgba(0,0,0,0)");
    fade.addColorStop(1, "rgba(0,0,0,1)");
    ctx.globalCompositeOperation = "destination-in";
    ctx.fillStyle = fade;
    ctx.fillRect(0, 0, W, H);
    ctx.globalCompositeOperation = "source-over";
  }

  function frame(ts) {
    if (!running) return;
    var dt = last ? Math.min((ts - last) / 1000, 0.1) : 0;
    last = ts;
    phase += dt * 0.35;
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
