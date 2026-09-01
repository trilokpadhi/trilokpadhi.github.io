// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Full list of publications in reverse chronological order. Click any figure to enlarge it.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "A short research CV. The full PDF is linked above.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-enhancing-cross-modal-contextual-congruence-for-crowdfunding-success-was-presented-at-ieee-bigdata-2024-acceptance-rate-18-7-supported-by-the-ieee-bigdata-student-travel-award",
          title: 'Enhancing Cross-Modal Contextual Congruence for Crowdfunding Success was presented at IEEE BigData 2024...',
          description: "",
          section: "News",},{id: "news-just-kiddin-knowledge-infusion-and-distillation-for-detection-of-indecent-memes-has-been-accepted-to-acl-2025-findings-acceptance-rate-19-1-grateful-for-the-acl-student-travel-award-tada",
          title: 'Just KIDDIN’: Knowledge Infusion and Distillation for Detection of INdecent Memes has been...',
          description: "",
          section: "News",},{id: "news-started-as-an-applied-scientist-intern-at-siemens-genai-r-amp-amp-d-in-seattle-on-the-data-amp-amp-ai-research-team-working-on-multimodal-industrial-foundation-models",
          title: 'Started as an Applied Scientist Intern at Siemens GenAI R&amp;amp;amp;D in Seattle, on...',
          description: "",
          section: "News",},{id: "news-new-preprint-echoes-of-human-malice-in-agents-a-benchmark-for-multi-turn-online-harassment-attacks-on-llm-agents",
          title: 'New preprint: Echoes of Human Malice in Agents, a benchmark for multi-turn online...',
          description: "",
          section: "News",},{id: "news-new-preprint-with-collaborators-at-kaist-and-amazon-co-evolving-agents-learning-from-failures-as-hard-negatives",
          title: 'New preprint with collaborators at KAIST and Amazon: Co-Evolving Agents: Learning from Failures...',
          description: "",
          section: "News",},{id: "news-playing-devil-s-advocate-unmasking-toxicity-and-vulnerabilities-in-large-vision-language-models-has-been-accepted-at-acm-transactions-on-intelligent-systems-and-technology-tist",
          title: 'Playing Devil’s Advocate: Unmasking Toxicity and Vulnerabilities in Large Vision-Language Models has been...',
          description: "",
          section: "News",},{id: "news-new-preprint-from-actions-to-understanding-conformal-interpretability-of-temporal-concepts-in-llm-agents-on-step-wise-conformal-probes-for-early-failure-detection-in-llm-agents-chart-with-upwards-trend",
          title: 'New preprint: From Actions to Understanding: Conformal Interpretability of Temporal Concepts in LLM...',
          description: "",
          section: "News",},{id: "news-excited-to-be-spending-the-summer-in-seattle-washington-for-my-second-stint-at-siemens-data-amp-amp-ai-lab-i-m-looking-forward-to-collaborating-on-physical-ai-initiatives-to-help-design-and-develop-the-next-generation-of-ai-systems-if-you-re-in-the-seattle-area-please-feel-free-to-reach-out-tada",
          title: 'Excited to be spending the summer in Seattle, Washington, for my second stint...',
          description: "",
          section: "News",},{id: "news-excited-to-share-that-our-tutorial-knowledge-infused-multimodal-learning-has-been-accepted-at-icwsm-26-the-20th-international-aaai-conference-on-web-and-social-media-i-will-be-presenting-at-the-university-of-southern-california-usc-information-sciences-institute-los-angeles-alongside-agnik-saha-and-professor-ugur-kursuncu-we-will-discuss-some-of-our-lab-s-recent-work-on-knowledge-graph-construction-and-how-to-design-vision-language-knowledge-guided-frameworks-for-more-reliable-and-interpretable-multimodal-ai-systems-tutorial-website",
          title: 'Excited to share that our tutorial, “Knowledge-Infused Multimodal Learning,” has been accepted at...',
          description: "",
          section: "News",},{id: "news-from-actions-to-understanding-conformal-interpretability-of-temporal-concepts-in-llm-agents-has-been-accepted-at-the-mechanistic-interpretability-workshop-icml-2026-in-seoul-south-korea-tada",
          title: 'From Actions to Understanding: Conformal Interpretability of Temporal Concepts in LLM Agents has...',
          description: "",
          section: "News",},{id: "news-echoes-of-human-malice-in-agents-benchmarking-llms-for-multi-turn-online-harassment-attacks-has-been-accepted-at-icwsm-2027-aaai-international-conference-on-web-and-social-media-see-you-in-edinburgh-scotland-tada",
          title: 'Echoes of Human Malice in Agents: Benchmarking LLMs for Multi-Turn Online Harassment Attacks...',
          description: "",
          section: "News",},{id: "news-attending-acm-ai-leadership-summit-2026-in-atlanta-georgia-from-august-31-to-september-2-2026-looking-forward-to-connecting-with-fellow-researchers-and-industry-leaders-in-ai-tada",
          title: 'Attending ACM AI Leadership Summit 2026 in Atlanta, Georgia from August 31 to...',
          description: "",
          section: "News",},{id: "news-cross-modal-grounding-for-calibrated-confidence-in-vision-language-models-has-been-accepted-at-emnlp-2026-groundlm-workshop-conference-on-empirical-methods-in-natural-language-processing-see-you-in-budapest-hungary-tada",
          title: 'Cross-Modal Grounding for Calibrated Confidence in Vision Language Models has been accepted at...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%74%70%61%64%68%69%31@%73%74%75%64%65%6E%74.%67%73%75.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/trilokpadhi", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/trilok-padhi-bb809b147", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Trilok-Padhi/", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=TwY8frYAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/trilokpadhi_", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
