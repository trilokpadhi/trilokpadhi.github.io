---
layout: about
title: about
permalink: /
banner: banner.jpg
main_heading: about
banner_alt: SWAN AI Research Group and collaborators at USC Viterbi
subtitle: Ph.D. Candidate, Computer Science · <a href='https://www.gsu.edu/'>Georgia State University</a>

profile:
  align: left
  image: prof_pic.jpg
  image_circular: false # square portrait, as on the reference
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

<p class="hero-eyebrow">Ph.D. Candidate · Georgia State University · Atlanta</p>

<h1 class="hero-headline">Multimodal agents that <em>know when they're wrong</em>.</h1>

I'm a Ph.D. Candidate in Computer Science at [Georgia State University](https://www.gsu.edu/), advised by [Prof. Ugur Kursuncu](https://www.ugurkursuncu.com/) in the [SWAN AI Research Group](https://www.ugurkursuncu.com/SWAN-AI/). I also work with Prof. Yi Ding, Prof. Valerie Shalin, and Dr. Yaman Kumar Singla.

**What I'm working on.** A vision-language model can describe a scene and act on it. It is much worse at knowing when it should not. I work on closing that gap three ways: reading what a model is doing internally so a failure is visible before the task ends, tying its stated confidence to evidence it can actually point at, and pushing it until it breaks so that someone else does not do it first. A fourth thread asks how much of this survives at small scale, when you add structured knowledge instead of parameters.

## research interests

{% include research_areas.liquid %}

**Where I'm coming from.** Before the Ph.D. I spent a year as a Data Scientist at **Rakuten** in Bengaluru, and earned my B.Tech. in Electronics and Communication Engineering from [Veer Surendra Sai University of Technology](https://www.vssut.ac.in/). Since starting, I have interned at **Siemens** (Data & AI Research, Seattle) on synthetic data and pretraining for Physical AI foundation models, at **SRI International** on uncertainty quantification for multimodal LLMs, and earlier at **Bosch Research** and **NVIDIA Research**.

The through-line is measurement. Most of these projects end in a number that says how much you should trust the system, not only how well it scores. That work has appeared at ACL, ICWSM, IEEE BigData, ACM TIST, and workshops at ICML and EMNLP, and carried student travel awards from ACL and IEEE BigData.

You can reach me at [tpadhi1@student.gsu.edu](mailto:tpadhi1@student.gsu.edu), read my [CV]({{ '/cv/' | relative_url }}), or browse my [publications]({{ '/publications/' | relative_url }}).

## education

{% include affiliations.liquid list="education" %}

## experience

{% include affiliations.liquid list="experience" %}
