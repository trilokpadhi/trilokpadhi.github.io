---
layout: about
title: about
permalink: /
banner: banner.jpg
main_heading: about
banner_alt: SWAN AI Research Group and collaborators at USC Viterbi
subtitle: PhD Student, Computer Science · <a href='https://www.gsu.edu/'>Georgia State University</a>

profile:
  align: left
  image: prof_pic.jpg
  image_circular: true # crops the image to make it circular
  links: true # labelled profile links under the photo (see _includes/profile_links.liquid)

news: true # includes a list of news items
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

<p class="lead-statement">I work on interpretability, uncertainty, and safety for multimodal models and agents.</p>

I am a fifth-year PhD student in Computer Science at [Georgia State University](https://www.gsu.edu/), advised by [Prof. Ugur Kursuncu](https://www.ugurkursuncu.com/) in the [SWAN AI Research Group](https://www.ugurkursuncu.com/SWAN-AI/).

Vision-language models and the agents built on them are now good enough to act, and still bad at reporting when they are wrong. I study three parts of that problem: reading a model's internal state to detect failure before a task ends, calibrating stated confidence against evidence the model can actually point to, and red-teaming both under multi-turn adversarial pressure. A second thread asks how much of this can be done with small models, by infusing commonsense and structured knowledge rather than scaling parameters.

During my PhD I have interned at Siemens, SRI International, Bosch, and NVIDIA. Before it I was a data scientist at Rakuten.

I am glad to hear from anyone working on related problems, and I collaborate with students and researchers outside my group. The best way to reach me is [email](mailto:tpadhi1@student.gsu.edu).

## research interests

{% include research_areas.liquid %}

## education

{% include affiliations.liquid list="education" %}

## experience

{% include affiliations.liquid list="experience" %}
