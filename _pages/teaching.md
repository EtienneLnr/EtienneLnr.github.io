---
permalink: /teaching/
title: "Teaching"
kicker: "Courses"
intro: "Teaching assistant positions."
---
{%- assign t = site.data.teaching -%}

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
