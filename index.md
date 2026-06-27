---
layout: single
classes: wide
author_profile: true
title: "Bio"
header:
  overlay_image: /assets/images/overlay.jpg
  overlay_filter: 0.01
---

<div class="bp">

  <!-- ══ About ══ -->
  <section class="bp-section bp-about">
    <p class="bp-lead">
      I am an <strong>AI Research Scientist</strong> specialising in
      <em>deep learning for time series and temporal data</em>.
      My research explores advanced <strong>neural architectures</strong> designed to capture
      complex temporal dependencies, with applications ranging from
      <strong>time series forecasting</strong> to <strong>representation learning</strong>.
    </p>
  </section>

  <!-- ══ Research Interests ══ -->
  <section class="bp-section">
    <h2 class="bp-heading">Research Interests</h2>
    <div class="bp-tags">
      <span class="bp-tag">Time series &amp; spatio-temporal modeling</span>
      <span class="bp-tag">Foundation models for time series</span>
      <span class="bp-tag">Large-scale pretraining &amp; inference adaptation</span>
      <span class="bp-tag">Representation &amp; self-supervised learning</span>
      <span class="bp-tag">Imputation &amp; forecasting</span>
      <span class="bp-tag">Scientific &amp; industrial AI applications</span>
    </div>
  </section>

  <!-- ══ PhD Thesis ══ -->
  <section class="bp-section">
    <h2 class="bp-heading">PhD Thesis</h2>
    <div class="bp-thesis">
      <div class="bp-thesis-body">
        <span class="bp-thesis-label">Sorbonne University · Deep Learning</span>
        <p class="bp-thesis-title">Learning Neural Representations for Time Series</p>
      </div>
      <div class="bp-thesis-links">
        <a class="bp-btn" href="https://theses.hal.science/tel-04747432/file/143669_LE_NAOUR_2024_archivage.pdf">Manuscript ↗</a>
        <a class="bp-btn bp-btn--ghost" href="http://etiennelnr.github.io/assets/files/PhD_defense.pdf">Defense slides ↗</a>
      </div>
    </div>
  </section>

  <!-- ══ Research & Talks ══ -->
  <section class="bp-section">
    <h2 class="bp-heading">Publications &amp; Talks</h2>
    <div class="bp-ctas">
      <a class="bp-cta-card" href="https://etiennelnr.github.io/research/">
        <span class="bp-cta-icon">◈</span>
        <span class="bp-cta-text">
          <strong>Research</strong>
          <span>Papers, preprints &amp; manuscript</span>
        </span>
        <span class="bp-cta-arrow">→</span>
      </a>
      <a class="bp-cta-card" href="https://etiennelnr.github.io/talk/">
        <span class="bp-cta-icon">◎</span>
        <span class="bp-cta-text">
          <strong>Talks</strong>
          <span>Presentations &amp; invited lectures</span>
        </span>
        <span class="bp-cta-arrow">→</span>
      </a>
    </div>
  </section>

  <!-- ══ Contact ══ -->
  <section class="bp-section">
    <h2 class="bp-heading">Contact</h2>
    <p class="bp-contact">
      Always open to discussions about research and collaboration —
      feel free to get in touch.
    </p>
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

/* ── layout ── */
.bp { display: flex; flex-direction: column; }

.bp-section { margin-bottom: 2.2rem; }

.bp-heading {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  color: #9ca3af;
  margin: 0 0 1rem;
  padding-bottom: 0.45rem;
  border-bottom: 1px solid #e5e7eb;
}

/* ── about lead ── */
.bp-about { margin-bottom: 2.6rem; }

.bp-lead {
  font-size: 0.92rem;
  line-height: 1.75;
  color: #1a1a2e;
  margin: 0;
  padding: 1.4rem 1.6rem;
  border-left: 4px solid #2a4cff;
  background: #f5f7ff;
  border-radius: 0 8px 8px 0;
}

/* ── research interest tags ── */
.bp-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.bp-tag {
  font-size: 0.74rem;
  font-weight: 500;
  color: #1e3aaf;
  background: #eef1ff;
  border: 1px solid #c7d0ff;
  padding: 0.3rem 0.75rem;
  border-radius: 20px;
  line-height: 1.4;
}

/* ── thesis card ── */
.bp-thesis {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 1.2rem 1.4rem;
  background: #f0f3ff;
  border-left: 4px solid #2a4cff;
  border-radius: 0 8px 8px 0;
}

.bp-thesis-label {
  display: inline-block;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #2a4cff;
  background: #dde3ff;
  padding: 0.15rem 0.5rem;
  border-radius: 3px;
  margin-bottom: 0.45rem;
}

.bp-thesis-title {
  font-size: 0.88rem;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0;
  line-height: 1.35;
}

.bp-thesis-links {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  flex-shrink: 0;
}

/* ── buttons ── */
.bp-btn {
  display: inline-block;
  font-size: 0.74rem;
  font-weight: 600;
  color: #2a4cff;
  background: white;
  border: 1.5px solid #2a4cff;
  padding: 0.38rem 0.85rem;
  border-radius: 5px;
  text-decoration: none;
  white-space: nowrap;
  text-align: center;
  transition: background 0.15s, color 0.15s;
}
.bp-btn:hover {
  background: #2a4cff;
  color: white;
  text-decoration: none;
}
.bp-btn--ghost {
  color: #6b7280;
  border-color: #d1d5db;
}
.bp-btn--ghost:hover {
  background: #6b7280;
  color: white;
  border-color: #6b7280;
}

/* ── CTA cards ── */
.bp-ctas {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.bp-cta-card {
  flex: 1;
  min-width: 180px;
  display: flex;
  align-items: center;
  gap: 0.9rem;
  padding: 0.9rem 1.1rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  text-decoration: none;
  color: inherit;
  transition: border-color 0.15s, background 0.15s;
}
.bp-cta-card:hover {
  border-color: #2a4cff;
  background: #f5f7ff;
  text-decoration: none;
}

.bp-cta-icon {
  font-size: 1.3rem;
  color: #2a4cff;
  flex-shrink: 0;
  line-height: 1;
}

.bp-cta-text {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  flex: 1;
}
.bp-cta-text strong {
  font-size: 0.82rem;
  color: #1a1a2e;
}
.bp-cta-text span {
  font-size: 0.72rem;
  color: #9ca3af;
}

.bp-cta-arrow {
  color: #d1d5db;
  font-size: 1rem;
  transition: color 0.15s, transform 0.15s;
}
.bp-cta-card:hover .bp-cta-arrow {
  color: #2a4cff;
  transform: translateX(3px);
}

/* ── contact ── */
.bp-contact {
  color: #6b7280;
  margin: 0;
  font-style: italic;
}

/* ── global links ── */
a { color: #2a4cff; text-decoration: none; }
a:hover { text-decoration: underline; }
</style>