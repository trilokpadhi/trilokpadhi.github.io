---
layout: about
title: about
permalink: /
banner: banner.jpg
main_heading: about
hero_rotate: true
collaborators: true
banner_alt: SWAN AI Research Group and collaborators at USC Viterbi
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

<p class="hero-eyebrow">Ph.D. Candidate · Georgia State University · Atlanta</p>

<h1 class="hero-headline">Making Multimodal Agents and World Action Models <em class="rotate" data-words="reliable|interpretable|grounded|better at causal reasoning|better at test-time discovery">reliable</em>.</h1>

I am a fifth-year Ph.D. candidate in Computer Science at [Georgia State University](https://www.gsu.edu/), USA, advised by [Prof. Ugur Kursuncu](https://www.ugurkursuncu.com/) in the [SWAN AI Research Group](https://www.ugurkursuncu.com/SWAN-AI/). During my Ph.D., I spent the summers of 2025 and 2026 as an Applied Scientist Intern on **Siemens' Data & AI Research team** in Seattle, working on multimodal industrial foundation models and synthetic data generation and evaluation for Physical AI. In summer 2024, I interned with the **Neuro-Symbolic Computing and Intelligence group at SRI International**, researching uncertainty quantification for multimodal LLMs through an ARPA-H-funded project.

My research focuses on building **reliable, self-improving multimodal AI models and agents** that learn from experience, ground their reasoning in evidence, and remain safe as tasks and environments change.

- **Grounded Multimodal Reasoning:** Combining structured knowledge, visual grounding, and knowledge distillation to improve contextual understanding in vision-language models ([ACL Findings '25](https://arxiv.org/abs/2411.12174), [IEEE BigData '24](https://arxiv.org/abs/2402.03607)).
- **Agent Safety:** Investigating vulnerabilities through multi-turn red-teaming, adversarial interactions, and theory-guided behavioral evaluation ([AAAI ICWSM '27, accepted](https://arxiv.org/abs/2510.14207), [ACM TIST '26](https://arxiv.org/abs/2501.09039)).
- **Uncertainty and Interpretability:** Calibrating multimodal confidence using visual evidence ([EMNLP GroundLM Workshop '26](https://arxiv.org/abs/2505.03788)) and combining conformal prediction with representation probing for early failure detection in agents ([ICML Workshop '26](https://arxiv.org/abs/2604.19775)).
- **Self-Improving Agents:** Learning from failures through preference optimization and co-evolving agents ([Preprint](https://arxiv.org/abs/2511.22254)).

I am also exploring **world-action models for Physical AI**, **multi-agent simulation and alignment with human behavior**, and **enterprise agents that help users discover, access, and reason over organizational data**.

## research interests

{% include research_areas.liquid %}

{% include collaborators.liquid %}

## [news]({{ '/news/' | relative_url }})

{% include news.liquid limit=true %}

I earned my Bachelor's degree in Electronics and Communication Engineering from [Veer Surendra Sai University of Technology](https://www.vssut.ac.in/) in 2020. Before starting my Ph.D., I was a Data Scientist in **Rakuten's Data Science Consulting team**, working on business impact estimation, customer acquisition, and funnel analysis across the Rakuten group. I collaborated with an international team and developed interpretable churn prediction models to inform customer retention strategies. I also held research internships at **Bosch Research** and **NVIDIA Research**.

## education

{% include affiliations.liquid list="education" %}

## experience

{% include affiliations.liquid list="experience" scrollable=true %}
