const dailyData = {
  "source_access_status": {
    "https://www.bloomberg.com/technology": "Blocked - Captcha verification required",
    "https://www.reuters.com/technology": "Blocked - JavaScript or ad blocker restriction",
    "https://www.ft.com/technology": "Blocked - 403 Forbidden / Challenge verification",
    "https://www.dowjones.com/newswires": "Success - Navigation only (no specific technology news articles found)",
    "https://www.cnbc.com/technology": "Blocked - 403 Forbidden / Access Denied",
    "https://venturebeat.com": "Blocked - Vercel Security Checkpoint",
    "https://www.aibusiness.com": "Blocked - JavaScript and cookies required",
    "https://www.cio.com": "Success - Topic list only (no specific technology news articles found)",
    "https://www.infoworld.com": "Success - Topic list only (no specific technology news articles found)",
    "https://www.techtarget.com": "Success - Articles Extracted",
    "https://www.technologyreview.com": "Success - Articles Extracted",
    "https://spectrum.ieee.org": "Blocked - 403 Forbidden",
    "https://hai.stanford.edu": "Success - Navigation only (no specific technology news articles found)",
    "https://dl.acm.org": "Blocked - JavaScript and cookies required",
    "https://nvidianews.nvidia.com": "Success - Navigation and platform names list only",
    "https://www.tsmc.com/english/news_events": "Blocked - JavaScript and cookies required",
    "https://www.asml.com/en/news": "Success - Navigation only (no specific technology news articles found)",
    "https://www.intel.com/content/www/us/en/newsroom": "Blocked - 403 Forbidden",
    "https://aws.amazon.com/blogs/aws": "Success - Articles Extracted",
    "https://cloud.google.com/blog": "Success - Topic list only (no specific technology news articles found)",
    "https://azure.microsoft.com/en-us/blog": "Success - Navigation and platform features list only",
    "https://openai.com/research": "Blocked - JavaScript and cookies required",
    "https://www.anthropic.com/news": "Success - Articles Extracted",
    "https://deepmind.google/discover": "Success - AI models and updates list extracted",
    "https://ai.meta.com/blog": "Success - Articles Extracted",
    "https://mistral.ai/news": "Success - Articles Extracted",
    "https://www.gartner.com/en/newsroom": "Blocked - JavaScript and cookies verification required",
    "https://www.weforum.org/agenda/technology": "Blocked - 403 Forbidden / Access Denied",
    "https://artificialintelligenceact.eu": "Success - Menu structure only (no specific technology news articles found)"
  },
  "news_articles": [
    {
      "source_url": "https://www.techtarget.com",
      "title": "The AI war IBM isn't fighting -- and the one it thinks it can win",
      "date": "21 May 2026",
      "category": "Cloud Deployment & Architecture / Enterprise AI",
      "description": "IBM wants to differentiate itself in the market by..."
    },
    {
      "source_url": "https://www.technologyreview.com",
      "title": "Tech researchers are suing the Trump administration over the future of online safety",
      "date": "1 day ago (May 2026 approx.)",
      "category": "NewPolicy",
      "description": "In a lawsuit, the Coalition for Independent Technology Research argues the government is using immigration policy to stifle free speech and tech regulation."
    },
    {
      "source_url": "https://www.technologyreview.com",
      "title": "The Enhanced Games fit right in with the rest of 2026’s longevity vibes",
      "date": "36 minutes ago (May 2026)",
      "category": "Biotechnology and health",
      "description": ""
    },
    {
      "source_url": "https://www.technologyreview.com",
      "title": "Green steel startup Boston Metal is doubling down on critical metals",
      "date": "2 days ago (May 2026)",
      "category": "Climate change and energy",
      "description": ""
    },
    {
      "source_url": "https://www.technologyreview.com",
      "title": "Roundtables: Inside the Musk v. Altman Trial",
      "date": "3 days ago (May 2026)",
      "category": "Artificial intelligence",
      "description": ""
    },
    {
      "source_url": "https://aws.amazon.com/blogs/aws",
      "title": "Top announcements of the What’s Next with AWS, 2026",
      "date": "28 APR 2026",
      "category": "Events / News / AI",
      "description": "Top announcements under Amazon Bedrock, Amazon Connect, Amazon Quick Suite, and Artificial Intelligence.",
      "author": "AWS News Blog Team"
    },
    {
      "source_url": "https://www.anthropic.com/news",
      "title": "Introducing Claude Opus 4.7",
      "date": "Apr 16, 2026",
      "category": "Product",
      "description": "Our latest Opus model brings stronger performance across coding, agents, vision, and multi-step tasks, with greater thoroughness and consistency on the work that matters most."
    },
    {
      "source_url": "https://www.anthropic.com/news",
      "title": "Introducing Claude Design by Anthropic Labs",
      "date": "Apr 17, 2026",
      "category": "Product",
      "description": "Today, we’re launching Claude Design, a new Anthropic Labs product that lets you collaborate with Claude to create polished visual work like designs, prototypes, slides, one-pagers, and more."
    },
    {
      "source_url": "https://www.anthropic.com/news",
      "title": "Project Glasswing",
      "date": "Apr 7, 2026",
      "category": "Announcements",
      "description": "A new initiative that brings together Amazon Web Services, Anthropic, Apple, Broadcom, etc."
    },
    {
      "source_url": "https://ai.meta.com/blog",
      "title": "Introducing Muse Spark: Scaling Towards Personal Superintelligence",
      "date": "April 8, 2026",
      "category": "Featured",
      "description": "Personal AI scaling development from Meta."
    },
    {
      "source_url": "https://ai.meta.com/blog",
      "title": "Scaling How We Build and Test Our Most Advanced AI",
      "date": "Apr 8, 2026",
      "category": "Research / Featured",
      "description": "As we build more capable, personalized AI, reliability and scale updates."
    },
    {
      "source_url": "https://ai.meta.com/blog",
      "title": "How Alta Daily Uses Meta’s Segment Anything to Reimagine the Digital Closet",
      "date": "Apr 6, 2026",
      "category": "Computer Vision",
      "description": "Usage of Segment Anything (SAM) for computer vision in consumer-facing tech."
    },
    {
      "source_url": "https://ai.meta.com/blog",
      "title": "SAM 3.1: Faster and More Accessible Real-Time Video Detection and Tracking With Multiplexing and Global Reasoning",
      "date": "Mar 27, 2026",
      "category": "Computer Vision / Featured",
      "description": "Advancements in Meta's real-time video tracking and detection tool."
    },
    {
      "source_url": "https://ai.meta.com/blog",
      "title": "Four MTIA Chips in Two Years: Scaling AI Experiences for Billions",
      "date": "Mar 11, 2026",
      "category": "Featured",
      "description": "Scaling of hardware experiences using custom Meta Training and Inference Accelerator chips."
    },
    {
      "source_url": "https://mistral.ai/news",
      "title": "Remote agents in Vibe. Powered by Mistral Medium 3.5.",
      "date": "Apr 29, 2026",
      "category": "Product",
      "description": "Introducing Mistral Medium 3.5, remote coding agents in Vibe, plus new Work mode in Le Chat for complex tasks."
    }
  ],
  "discovered_ai_models_and_agents": [
    {
      "provider": "Google DeepMind",
      "models": [
        {
          "name": "Gemini",
          "description": "Build intelligent agents"
        },
        {
          "name": "Gemini Omni",
          "description": "Create anything from anything"
        },
        {
          "name": "Nano Banana",
          "description": "Create and edit detailed images"
        },
        {
          "name": "Gemini Audio",
          "description": "Talk, create and control audio"
        },
        {
          "name": "Veo",
          "description": "Generate cinematic video with audio"
        },
        {
          "name": "Imagen",
          "description": "Generate high-quality images from text"
        },
        {
          "name": "Lyria",
          "description": "Generate high fidelity music and audio"
        },
        {
          "name": "Genie 3",
          "description": "Generate and explore interactive worlds"
        },
        {
          "name": "Gemini Robotics",
          "description": "Perceive, reason, use tools and interact"
        },
        {
          "name": "Gemma",
          "description": "Build responsible AI applications at scale"
        },
        {
          "name": "SIMA 2",
          "description": "An agent that plays, reasons, and learns with you"
        }
      ]
    }
  ]
}