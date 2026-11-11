---
permalink: /talk/
title: "Talks"
kicker: "Presentations & posters"
intro: "Conference talks, posters and my PhD defense, with slides."
---
<div class="entries">
  {%- for t in site.data.talks %}
  <article class="entry{% if t.type == 'defense' %} entry--award{% endif %}">
    <span class="entry__year">{{ t.year }}</span>
    <div class="entry__body">
      <h3 class="entry__title">{{ t.title }}</h3>
      <p class="entry__meta">
        {%- if t.event_url %}<a href="{{ t.event_url }}">{{ t.event }}</a>{% else %}{{ t.event }}{% endif %} · {{ t.place }}
      </p>
      <div class="entry__foot">
        <span class="tag tag--{{ t.type }}">{% case t.type %}{% when "defense" %}★ PhD defense{% when "poster" %}Poster{% else %}Talk{% endcase %}</span>
        {% include links.html links=t.links %}
      </div>
    </div>
  </article>
  {%- endfor %}
</div>
