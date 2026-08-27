---
layout: page.njk
title: Documents
lede: Reports, notes and presentations, when there is something worth posting.
permalink: /documents/
---

{% if documents.length %}
<ul class="doc-list">
  {% for doc in documents %}
  <li>
    <a href="{{ doc.file }}">{{ doc.title }}</a>
    {% if doc.date %}<time datetime="{{ doc.date }}">{{ doc.date | readableDate }}</time>{% endif %}
    {% if doc.summary %}<p>{{ doc.summary }}</p>{% endif %}
  </li>
  {% endfor %}
</ul>
{% else %}
<p>Nothing is posted here yet. When a note, report or deck is fit to share, it will be listed on this page as a file you can download.</p>
{% endif %}
