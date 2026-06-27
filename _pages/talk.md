---
permalink: /talk/
layout: single
classes: wide
author_profile: true
title: "Talks"
header:
  overlay_image: /assets/images/overlay.jpg
  overlay_filter: 0.01
---

<div class="tk">

  <div class="tk-ledger">

    <div class="tk-row tk-row--featured">
      <span class="tk-year">2025</span>
      <div class="tk-content">
        <p class="tk-title">Learning Neural Representations for Time Series</p>
        <p class="tk-meta">Paris, France</p>
        <div class="tk-footer">
          <span class="tk-badge tk-badge--defense">★ PhD Defense</span>
          <a class="tk-link" href="http://etiennelnr.github.io/assets/files/PhD_defense.pdf">slides ↗</a>
          <a class="tk-link" href="https://www.youtube.com/watch?v=0KbYjcaSjf4">youtube ↗</a>
        </div>
      </div>
    </div>

    <div class="tk-row">
      <span class="tk-year">2025</span>
      <div class="tk-content">
        <p class="tk-title">MoTM: Towards a Foundation Model for Time Series Imputation based on Continuous Modeling</p>
        <p class="tk-meta"><a href="https://ecml-aaltd.github.io/aaltd2025/">ECML, AALTD</a> &middot; Porto, Portugal</p>
        <div class="tk-footer">
          <span class="tk-badge tk-badge--talk">Talk</span>
          <a class="tk-link" href="http://etiennelnr.github.io/assets/files/Prez_MOTM.pdf">slides ↗</a>
        </div>
      </div>
    </div>

    <div class="tk-row">
      <span class="tk-year">2024</span>
      <div class="tk-content">
        <p class="tk-title">Interpretable Time Series Neural Representation for Classification Purposes</p>
        <p class="tk-meta"><a href="https://conferences.sigappfr.org/dsaa2023/">IEEE DSAA</a> &middot; Thessaloniki, Greece</p>
        <div class="tk-footer">
          <span class="tk-badge tk-badge--talk">Talk</span>
          <a class="tk-link" href="http://etiennelnr.github.io/assets/files/Prez_DSAA.pdf">slides ↗</a>
        </div>
      </div>
    </div>

    <div class="tk-row">
      <span class="tk-year">2024</span>
      <div class="tk-content">
        <p class="tk-title">Time Series Continuous Modeling with Implicit Neural Representations</p>
        <p class="tk-meta"><a href="https://caprfiap2024.sciencesconf.org">CAp 2024</a> &middot; Lille, France</p>
        <div class="tk-footer">
          <span class="tk-badge tk-badge--poster">Poster</span>
          <a class="tk-link" href="http://etiennelnr.github.io/assets/files/Poster_TimeFlow.pdf">poster ↗</a>
        </div>
      </div>
    </div>

    <div class="tk-row">
      <span class="tk-year">2024</span>
      <div class="tk-content">
        <p class="tk-title">WindDragon: Enhancing Wind Power Forecasting with Automated Deep Learning</p>
        <p class="tk-meta"><a href="https://iclr.cc/Conferences/2024">ICLR 2024</a> &middot; Vienna, Austria</p>
        <div class="tk-footer">
          <span class="tk-badge tk-badge--poster">Poster</span>
          <a class="tk-link" href="http://etiennelnr.github.io/assets/files/Poster_WindDragon.pdf">poster ↗</a>
        </div>
      </div>
    </div>

  </div>
</div>

<style>
.page__content {
  font-size: 0.82rem;
  line-height: 1.65;
  max-width: clamp(700px, 90%, 1500px);
  margin: 0 auto;
  padding: 0 1rem;
}

/* ── ledger ── */
.tk-ledger {
  display: flex;
  flex-direction: column;
}

.tk-row {
  display: flex;
  gap: 1.4rem;
  padding: 0.9rem 0;
  border-top: 1px solid #f0f0f0;
}
.tk-row:last-child {
  border-bottom: 1px solid #f0f0f0;
}

/* PhD defense highlight */
.tk-row--featured {
  background: #fffdf5;
  margin: 0 -0.8rem;
  padding-left: 0.8rem;
  padding-right: 0.8rem;
  border-left: 3px solid #d97706;
  border-top-color: #f5edcc;
  border-bottom-color: #f5edcc;
}

/* ── year gutter ── */
.tk-year {
  flex-shrink: 0;
  width: 2.6rem;
  font-size: 0.7rem;
  font-family: monospace;
  font-weight: 600;
  color: #9ca3af;
  padding-top: 0.15rem;
  text-align: right;
}

/* ── content ── */
.tk-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.tk-title {
  font-size: 0.82rem;
  font-weight: 600;
  color: #1a1a2e;
  margin: 0 0 0.18rem;
  line-height: 1.4;
}

.tk-meta {
  font-size: 0.75rem;
  color: #6b7280;
  margin: 0 0 0.4rem;
}
.tk-meta a {
  color: #6b7280;
  text-decoration: none;
  font-weight: 500;
}
.tk-meta a:hover {
  color: #2a4cff;
  text-decoration: underline;
}

.tk-footer {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

/* ── type badges ── */
.tk-badge {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  padding: 0.18rem 0.5rem;
  border-radius: 3px;
}
.tk-badge--talk   { background: #e6eaff; color: #1e3aaf; }
.tk-badge--poster { background: #e6f7f5; color: #0d6e63; }
.tk-badge--defense {
  background: #fef3c7;
  color: #92400e;
  border: 1px solid #f5d173;
}

/* ── links ── */
.tk-link {
  font-size: 0.72rem;
  font-weight: 500;
  color: #2a4cff;
  text-decoration: none;
  padding: 0.15rem 0.45rem;
  border: 1px solid #c7d0ff;
  border-radius: 3px;
  transition: background 0.12s;
}
.tk-link:hover {
  background: #eef0ff;
  text-decoration: none;
}

a { color: #2a4cff; text-decoration: none; }
a:hover { text-decoration: underline; }
</style>