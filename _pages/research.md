---
permalink: /research/
title: "Research"
kicker: "Publications"
intro: "Papers on deep learning for time series: continuous modeling, imputation, forecasting and foundation models. * denotes equal contribution."
---
<div class="filters" role="group" aria-label="Filter publications" data-filters>
  <button type="button" class="filter is-active" data-filter="all" aria-pressed="true">All</button>
  <button type="button" class="filter" data-filter="journal" aria-pressed="false">Journal</button>
  <button type="button" class="filter" data-filter="conference" aria-pressed="false">Conference</button>
  <button type="button" class="filter" data-filter="workshop" aria-pressed="false">Workshop</button>
  <button type="button" class="filter" data-filter="preprint" aria-pressed="false">Preprint</button>
</div>

<div class="entries entries--filterable" data-filter-list>
  {%- for pub in site.data.publications %}
  <div data-type="{{ pub.type }}">{% include publication.html pub=pub %}</div>
  {%- endfor %}
</div>

<div class="card card--feature card--spaced">
  <p class="card__eyebrow">Doctoral thesis · Sorbonne University · 2024</p>
  <p class="card__title">Learning Neural Representations for Time Series</p>
  <div class="card__actions">
    <a class="btn" href="https://theses.hal.science/tel-04747432/file/143669_LE_NAOUR_2024_archivage.pdf">Manuscript (HAL) {% include icon.html name="arrow" %}</a>
  </div>
</div>
