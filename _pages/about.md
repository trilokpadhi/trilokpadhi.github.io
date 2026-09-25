---
layout: about
title: about
permalink: /
banner: banner.jpg
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

<p class="lead-statement">Building multimodal models and agents that can be trusted to act, and to say when they cannot.</p>

I am a fifth-year PhD student in Computer Science at [Georgia State University](https://www.gsu.edu/), advised by [Prof. Ugur Kursuncu](https://www.ugurkursuncu.com/) in the [SWAN AI Research Group](https://www.ugurkursuncu.com/SWAN-AI/).

A vision-language model will describe an image and take actions in the world, yet report confidence its own evidence does not support, and abandon a long task halfway through without ever signaling that it has. My work attacks that gap from three sides: **reasoning and interpretability** methods that expose what a model is doing at each step, **knowledge-grounded training** that lets models under 1B parameters hold their own against far larger ones, and **red-teaming** that reveals how both break under realistic, multi-turn pressure.

I am always happy to talk about multimodal reasoning, agent interpretability, and AI safety, and I actively collaborate with researchers and students. Reach me at [tpadhi1@student.gsu.edu](mailto:tpadhi1@student.gsu.edu).

## research interests

{% include research_areas.liquid %}

## education

{% include affiliations.liquid list="education" %}

## experience

{% include affiliations.liquid list="experience" %}
