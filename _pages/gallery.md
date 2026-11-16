---
layout: page
title: gallery
permalink: /gallery/
description: Photos from talks, conferences and time with collaborators.
nav: true
nav_order: 5
---

<!-- Photos come from _data/gallery.yml: add an entry there (newest first). The homepage strip shows the first three. -->

{% assign years = site.data.gallery | group_by: "year" %}

<div class="gallery">
  {% for y in years %}
    <h2 class="gallery-year">{{ y.name }}</h2>
    {% for p in y.items %}
      {% assign photo_path = 'assets/img/gallery/' | append: p.file %}
      <div class="gallery-item">
        {% include figure.liquid path=photo_path class="img-fluid" alt=p.alt caption=p.caption zoomable=true loading="lazy" %}
      </div>
    {% endfor %}
  {% endfor %}
</div>
