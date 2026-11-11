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
</div>

<div class="entries entries--filterable" data-filter-list>
  {%- for pub in site.data.publications %}
  <div data-type="{{ pub.type }}">{% include publication.html pub=pub %}</div>
  {%- endfor %}
</div>

