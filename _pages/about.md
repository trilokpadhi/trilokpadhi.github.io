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

I am a Ph.D. Candidate in Computer Science at [Georgia State University](https://www.gsu.edu/), USA, advised by [Prof. Ugur Kursuncu](https://www.ugurkursuncu.com/) in the [SWAN AI Research Group](https://www.ugurkursuncu.com/SWAN-AI/). I also work closely with Prof. Yi Ding, Prof. Valerie Shalin, and Dr. Yaman Kumar Singla.

I build multimodal AI systems that can ground, verify, and report their own uncertainty: anchoring the empirical power of large vision-language models (LVLMs) in structured knowledge and statistical guarantees, with the long-term goal of agents that are not just capable, but can tell you when they are wrong.

My research lies at the intersection of multimodal machine learning and trustworthy AI, developing knowledge-infused and neuro-symbolic techniques that strengthen vision-language models at both the training and inference stage. I specialize in combining knowledge graphs, conformal prediction, and visual grounding with LLMs through knowledge infusion, distillation, and calibration to advance their reliability in interpretability (step-wise failure detection in agents), uncertainty quantification (calibrated confidence for multimodal LLMs), and safety (multi-turn red-teaming of agents). My work has appeared at ACL, ICWSM, IEEE BigData, ACM TIST, and the ICML and EMNLP workshops.

## research interests

{% include research_areas.liquid %}

Previously, I earned my Bachelor's degree in Electronics and Communication Engineering from [Veer Surendra Sai University of Technology](https://www.vssut.ac.in/) (2020). In Summers 2025 and 2026, I interned at **Siemens** (Data & AI Research, Seattle) as an Applied Scientist, working on synthetic data generation and pretraining for Physical AI foundation models. In Summer 2024, I interned at **SRI International** with the Neuro-Symbolic Computing and Intelligence group on uncertainty quantification for multimodal LLMs. Before my Ph.D., I was a Data Scientist at **Rakuten**, and I have held research internships at **Bosch Research** and **NVIDIA Research**. I am also a recipient of the ACL Student Travel Award (2025) and the IEEE BigData Student Travel Award (2024), and was National Champion at the Smart India Hackathon (2018). Here is my [CV]({{ '/cv/' | relative_url }}).

## education

{% include affiliations.liquid list="education" %}

## experience

{% include affiliations.liquid list="experience" %}
