---
permalink: /supervision/
layout: single
classes: wide
author_profile: true
title: "Supervision"
header:
  overlay_image: /assets/images/overlay.jpg
  overlay_filter: 0.01
---

<div class="sv-block">

  <section class="sv-section">
    <h2 class="sv-heading">PhD Supervision</h2>
    <div class="sv-cards">

      <div class="sv-card">
        <div class="sv-card-body">
          <span class="sv-name">Amine Razig</span>
          <span class="sv-topic">Deep Learning for Spatio-Temporal Aggregation in Weather Forecasting</span>
        </div>
        <span class="sv-years">2025–2028</span>
      </div>

      <div class="sv-card">
        <div class="sv-card-body">
          <span class="sv-name"><a href="https://3gaspo.github.io">Gaspard Berthelier ↗</a></span>
          <span class="sv-topic">Federated Learning for Time Series</span>
        </div>
        <span class="sv-years">2025–2028</span>
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
.sv-section {
  margin-bottom: 2.4rem;
}

.sv-heading {
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
.sv-cards {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.sv-card {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.2rem;
  padding: 0.75rem 1rem;
  border-left: 3px solid #2a4cff;
  background: #f7f8ff;
  border-radius: 0 6px 6px 0;
}

.sv-card-body {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.sv-name {
  font-weight: 600;
  color: #1a1a2e;
  line-height: 1.4;
}

.sv-name a {
  color: #1a1a2e;
  text-decoration: none;
}
.sv-name a:hover {
  color: #2a4cff;
  text-decoration: underline;
}

.sv-topic {
  font-style: italic;
  font-size: 0.78rem;
  color: #666;
}

.sv-years {
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
</style>