---
permalink: /supervision/
title: "Supervision"
kicker: "Students"
intro: "PhD students I co-supervise and student research projects."
---
{%- assign t = site.data.teaching -%}

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

<h2 class="block-title">Academic project supervision</h2>
<div class="rows">
  {%- for p in t.projects %}
  <div class="row">
    <div class="row__main">
      <p class="row__title">{{ p.topic }}</p>
      <p class="row__sub">
        <a href="{{ p.course_url }}">{{ p.course }}</a> · <a href="{{ p.school_url }}">{{ p.school }}</a>
        {%- if p.project_url %} · <a href="{{ p.project_url }}">Project page {% include icon.html name="arrow" %}</a>{% endif %}
      </p>
    </div>
    <span class="row__aside">{{ p.year }}</span>
  </div>
  {%- endfor %}
</div>
