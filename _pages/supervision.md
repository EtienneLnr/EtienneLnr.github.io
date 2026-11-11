---
permalink: /supervision/
title: "Supervision"
kicker: "Students"
intro: "PhD students I co-supervise."
---
<h2 class="block-title">PhD students</h2>
<div class="rows">
  {%- for s in site.data.supervision.phd %}
  <div class="row">
    <div class="row__main">
      <p class="row__title">{% if s.url %}<a href="{{ s.url }}">{{ s.name }} {% include icon.html name="arrow" %}</a>{% else %}{{ s.name }}{% endif %}</p>
      <p class="row__sub">{{ s.topic }}</p>
    </div>
    <span class="row__aside">{{ s.years }}</span>
  </div>
  {%- endfor %}
</div>
