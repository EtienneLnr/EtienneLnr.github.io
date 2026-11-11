---
permalink: /reviewing/
title: "Reviewing"
kicker: "Service"
intro: "Reviewer for machine learning conferences and journals."
---
{%- assign t = site.data.teaching -%}

<h2 class="block-title">Venues</h2>
<div class="review-grid">
  {%- for r in t.reviewing %}
  <a class="review" href="{{ r.url }}">
    <span class="review__venue">{{ r.venue }}</span>
    <span class="review__years">{{ r.years | join: " · " }}</span>
  </a>
  {%- endfor %}
</div>
