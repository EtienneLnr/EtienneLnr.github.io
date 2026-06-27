---
permalink: /teaching/
layout: single
classes: wide
author_profile: true
title: "Teaching and Service"
header:
  overlay_image: /assets/images/overlay.jpg
  overlay_filter: 0.01
---

<div class="teaching-block">

  <section class="tb-section">
    <h2 class="tb-heading">Project Supervision</h2>
    <div class="tb-cards">

      <div class="tb-card">
        <div class="tb-card-body">
          <span class="tb-topic">Few-Shot Learning for Time Series Classification in the Energy Domain</span>
          <span class="tb-meta">
            <a href="https://www.ensae.fr/courses/1408-groupe-de-statistique-appliquee">Applied Statistics Projects</a>
            &thinsp;·&thinsp;
            <a href="https://www.ensae.fr">ENSAE Paris</a>
            &thinsp;·&thinsp;
            <a href="https://github.com/EtienneLnr/StatApp_ENSAE">Project page ↗</a>
          </span>
        </div>
        <span class="tb-year">2025</span>
      </div>

      <div class="tb-card">
        <div class="tb-card-body">
          <span class="tb-topic">Time Series Completion with Covariates</span>
          <span class="tb-meta">
            <a href="https://www.ensae.fr/courses/1017-seminaire-de-modelisation-statistique">Statistics Modelisation Seminar</a>
            &thinsp;·&thinsp;
            <a href="https://www.ensae.fr">ENSAE Paris</a>
          </span>
        </div>
        <span class="tb-year">2026</span>
      </div>

    </div>
  </section>

  <section class="tb-section">
    <h2 class="tb-heading">Teaching Assistant</h2>
    <div class="tb-ta-group">
      <div class="tb-ta-inst"><a href="https://www.ensae.fr">ENSAE Paris</a></div>
      <ul class="tb-ta-list">
        <li>
          <span class="tb-ta-course">Numerical Analysis and Applications</span>
          <span class="tb-year-sm">2022</span>
        </li>
        <li>
          <a href="https://www.ensae.fr/courses/4432-introduction-aux-processus">Introduction to Stochastic Processes</a>
          <span class="tb-year-sm">2021</span>
        </li>
      </ul>
    </div>
  </section>

  <section class="tb-section">
    <h2 class="tb-heading">Reviewing</h2>
    <div class="tb-review-grid">
      <div class="tb-review-row">
        <a href="https://iclr.cc/Conferences/2025" class="tb-venue">ICLR</a>
        <span class="tb-review-years">2024 &middot; 2025 &middot; 2026</span>
      </div>
      <div class="tb-review-row">
        <a href="https://jmlr.org/tmlr/" class="tb-venue">TMLR</a>
        <span class="tb-review-years">2024 &middot; 2025 &middot; 2026</span>
      </div>
      <div class="tb-review-row">
        <a href="https://icml.cc" class="tb-venue">ICML</a>
        <span class="tb-review-years">2024</span>
      </div>
      <div class="tb-review-row">
        <a href="https://neurips.cc" class="tb-venue">NeurIPS</a>
        <span class="tb-review-years">2023 &middot; 2026</span>
      </div>
    </div>
  </section>

</div>

<style>
.page__content {
  font-size: 0.82rem;
  line-height: 1.65;
  max-width: clamp(700px, 90%, 1500px);
  margin: 0 auto;
  padding: 0 1rem;
}

/* ---------- sections ---------- */
.tb-section {
  margin-bottom: 2.4rem;
}

.tb-heading {
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #888;
  margin: 0 0 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e8e8e8;
}

/* ---------- supervision cards ---------- */
.tb-cards {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.tb-card {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.2rem;
  padding: 0.75rem 1rem;
  border-left: 3px solid #2a4cff;
  background: #f7f8ff;
  border-radius: 0 6px 6px 0;
}

.tb-card-body {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.tb-topic {
  font-style: italic;
  font-weight: 500;
  color: #1a1a2e;
  line-height: 1.4;
}

.tb-meta {
  font-size: 0.76rem;
  color: #666;
}

.tb-meta a {
  color: #2a4cff;
  text-decoration: none;
}
.tb-meta a:hover {
  text-decoration: underline;
}

.tb-year {
  flex-shrink: 0;
  font-size: 0.7rem;
  font-weight: 600;
  font-family: monospace;
  color: #2a4cff;
  background: #e6eaff;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  white-space: nowrap;
  align-self: center;
}

/* ---------- teaching assistant ---------- */
.tb-ta-group {
  padding-left: 0;
}

.tb-ta-inst {
  font-weight: 600;
  color: #1a1a2e;
  margin-bottom: 0.4rem;
}
.tb-ta-inst a {
  color: inherit;
  text-decoration: none;
}
.tb-ta-inst a:hover {
  color: #2a4cff;
}

.tb-ta-list {
  list-style: none;
  padding-left: 1rem;
  margin: 0;
  border-left: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.tb-ta-list li {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  color: #333;
}

.tb-ta-list a {
  color: #2a4cff;
  text-decoration: none;
}
.tb-ta-list a:hover {
  text-decoration: underline;
}

.tb-year-sm {
  flex-shrink: 0;
  font-size: 0.7rem;
  font-family: monospace;
  color: #999;
}

/* ---------- reviewing ---------- */
.tb-review-grid {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.tb-review-row {
  display: flex;
  align-items: baseline;
  gap: 1rem;
  padding: 0.35rem 0;
  border-bottom: 1px solid #f0f0f0;
}
.tb-review-row:first-child {
  border-top: 1px solid #f0f0f0;
}

.tb-venue {
  font-weight: 600;
  color: #2a4cff;
  text-decoration: none;
  min-width: 5rem;
  font-size: 0.8rem;
}
.tb-venue:hover {
  text-decoration: underline;
}

.tb-review-years {
  font-size: 0.76rem;
  color: #666;
  font-family: monospace;
  letter-spacing: 0.03em;
}
</style>