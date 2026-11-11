---
permalink: /teaching/
title: "Teaching & Service"
kicker: "Teaching · Reviewing"
intro: "Student projects, teaching assistant positions and reviewing for ML venues."
---
{%- assign t = site.data.teaching -%}

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

<h2 class="block-title">Teaching assistant · <a href="{{ t.assistant.school_url }}">{{ t.assistant.school }}</a></h2>
<div class="rows">
  {%- for c in t.assistant.courses %}
  <div class="row">
    <div class="row__main">
      <p class="row__title">{% if c.url %}<a href="{{ c.url }}">{{ c.name }}</a>{% else %}{{ c.name }}{% endif %}</p>
    </div>
    <span class="row__aside">{{ c.year }}</span>
  </div>
  {%- endfor %}
</div>

<h2 class="block-title">Reviewing</h2>
<div class="review-grid">
  {%- for r in t.reviewing %}
  <a class="review" href="{{ r.url }}">
    <span class="review__venue">{{ r.venue }}</span>
    <span class="review__years">{{ r.years | join: " · " }}</span>
  </a>
  {%- endfor %}
</div>
