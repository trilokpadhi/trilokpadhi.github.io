---
layout: about
title: about
permalink: /
main_heading: about
hero_rotate: true
# Hero headline: a fixed lead followed by a rotating phrase and a full stop.
# Each phrase may carry a `link` (shown under the headline once it has typed
# out); /publications/?topic=<key> opens the list filtered to a theme in
# _data/themes.yml.
hero_lead: Making Multimodal Agents and World Action Models
hero_phrases:
  - text: safer at test time
    link: /publications/?topic=safety
    link_text: See the agent safety papers
  - text: interpretable in their decisions
    link: /publications/?topic=uncertainty
    link_text: See the uncertainty and interpretability papers
  - text: recursively self-improving
    link: /publications/?topic=self-improving
    link_text: See the self-improvement papers
  - text: knowledge grounded in evidence
    link: /publications/?topic=grounding
    link_text: See the grounded reasoning papers
collaborators: true
subtitle: Ph.D. Candidate, Computer Science · <a href='https://www.gsu.edu/'>Georgia State University</a>

profile:
  align: left
  image: prof_pic.jpg
  image_circular: false # square portrait, as on the reference
  links: true # labelled profile links under the photo (see _includes/profile_links.liquid)

news: false # rendered inline after research interests instead of at the layout's default position
selected_papers: true # includes a list of papers marked as "selected={true}"
social: false # the sidebar carries labelled links instead of a bottom icon row

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true
  limit: 3
---

{% assign hero_p = page.hero_phrases %}
{% assign hero_texts = hero_p | map: "text" %}
{% assign hero_first = hero_p | first %}
<h1 class="hero-headline">
  <span class="sr-only">{{ page.hero_lead }} {{ hero_texts | join: ", " }}.</span>
  <span class="rotate-stack" aria-hidden="true">
    <span class="rotate-live">{{ page.hero_lead }} <em class="rotate rotate-word" data-words="{{ hero_texts | join: '|' }}" data-links="{{ hero_p | map: 'link' | join: '|' }}" data-link-texts="{{ hero_p | map: 'link_text' | join: '|' | escape }}">{{ hero_first.text }}</em>.</span>
  </span>
</h1>
<p class="hero-link-line"><a class="hero-link{% if hero_first.link %} is-shown{% endif %}" href="{{ hero_first.link | default: '#' }}">{{ hero_first.link_text }}</a></p>

I am a fifth-year Ph.D. candidate in Computer Science at [Georgia State University](https://www.gsu.edu/), USA, advised by [Prof. Ugur Kursuncu](https://www.ugurkursuncu.com/) in the [SWAN AI Research Group](https://www.ugurkursuncu.com/SWAN-AI/). During my Ph.D., I spent the summers of 2025 and 2026 as an Applied Scientist Intern on **Siemens' Data & AI Research team** in Seattle, working on multimodal industrial foundation models and synthetic data generation and evaluation for Physical AI. In summer 2024, I interned with the **Neuro-Symbolic Computing and Intelligence group at SRI International**, researching uncertainty quantification for multimodal LLMs through an ARPA-H-funded project.

My research focuses on building **reliable multimodal AI models and agents** that learn at test time, ground their reasoning in evidence, improve from their own experience, and remain safe as tasks and environments change. This work has appeared at **ACL**, **AAAI ICWSM**, **IEEE BigData** and **ACM TIST**.

{% include research_themes.liquid %}

I am also exploring **world-action models for Physical AI**, **multi-agent simulation and alignment with human behavior**, and **enterprise agents that help users discover, access, and reason over organizational data**.

## research interests

{% include research_areas.liquid %}

{% include collaborators.liquid %}

## [news]({{ '/news/' | relative_url }})

{% include news.liquid limit=true %}

## [gallery]({{ '/gallery/' | relative_url }})

{% include photo_strip.liquid %}

I earned my Bachelor's degree in Electronics and Communication Engineering from [Veer Surendra Sai University of Technology](https://www.vssut.ac.in/) in 2020. Before starting my Ph.D., I was a Data Scientist in **Rakuten's Data Science Consulting team**, working on business impact estimation, customer acquisition, and funnel analysis across the Rakuten group. I collaborated with an international team and developed interpretable churn prediction models to inform customer retention strategies. I also held research internships at **Bosch Research** and **NVIDIA Research**.

## education

{% include affiliations.liquid list="education" %}

## experience

{% include affiliations.liquid list="experience" scrollable=true %}
