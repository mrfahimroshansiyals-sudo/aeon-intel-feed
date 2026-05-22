const dailyData = [
  {
    "source": "https://www.bloomberg.com/technology",
    "status": "blocked",
    "details": "Unusual activity detected / Bot challenge screen displayed"
  },
  {
    "source": "https://www.reuters.com/technology",
    "status": "blocked",
    "details": "JavaScript required / Ad blocker warning"
  },
  {
    "source": "https://www.ft.com/technology",
    "status": "blocked",
    "details": "Security Verification / Status Code 403"
  },
  {
    "source": "https://www.dowjones.com/newswires",
    "status": "success",
    "content_type": "navigational",
    "details": "Page loaded successfully, navigation and categories extracted"
  },
  {
    "source": "https://www.cnbc.com/technology",
    "status": "blocked",
    "details": "Access Denied / Status 403"
  },
  {
    "source": "https://venturebeat.com",
    "status": "blocked",
    "details": "Vercel Security Checkpoint"
  },
  {
    "source": "https://www.aibusiness.com",
    "status": "blocked",
    "details": "Security check challenge"
  },
  {
    "source": "https://www.cio.com",
    "status": "success",
    "content_type": "navigational",
    "details": "CIO IT Leadership topic taxonomy extracted"
  },
  {
    "source": "https://www.infoworld.com",
    "status": "success",
    "content_type": "navigational",
    "details": "Enterprise technology categories crawled"
  },
  {
    "source": "https://www.techtarget.com",
    "status": "success",
    "articles": [
      {
        "title": "Disrupted by AI, SAP grapples with exposing its ERP data",
        "date": "2026-05-22",
        "category": "Products & Vendors",
        "summary": "Customers enticed by third-party AI apps might go elsewhere for ERP if SAP..."
      }
    ]
  },
  {
    "source": "https://www.technologyreview.com",
    "status": "success",
    "articles": [
      {
        "title": "Google I/O showed how the path for AI-driven science is shifting",
        "date": "9 hours ago",
        "category": "Artificial intelligence",
        "summary": "Two years ago, an AI tool won Google DeepMind a Nobel. Researchers are now climbing toward a new goal."
      },
      {
        "title": "The Enhanced Games fit right in with the rest of 2026’s longevity vibes",
        "date": "10 hours ago",
        "category": "Biotechnology and health",
        "summary": ""
      },
      {
        "title": "Tech researchers are suing the Trump administration over the future of online safety",
        "date": "1 day ago",
        "category": "Policy",
        "summary": ""
      },
      {
        "title": "Green steel startup Boston Metal is doubling down on critical metals",
        "date": "2 days ago",
        "category": "Climate change and energy",
        "summary": ""
      },
      {
        "title": "Roundtables: Inside the Musk v. Altma",
        "date": "3 days ago",
        "category": "Artificial intelligence",
        "summary": ""
      }
    ]
  },
  {
    "source": "https://spectrum.ieee.org",
    "status": "blocked",
    "details": "403 Forbidden (Varnish cache server error)"
  },
  {
    "source": "https://hai.stanford.edu",
    "status": "success",
    "content_type": "navigational",
    "details": "Stanford HAI institute departments and taxonomy mapped"
  },
  {
    "source": "https://dl.acm.org",
    "status": "blocked",
    "details": "JavaScript check challenge"
  },
  {
    "source": "https://nvidianews.nvidia.com",
    "status": "success",
    "content_type": "navigational",
    "details": "Platform taxonomy and newsroom filters extracted"
  },
  {
    "source": "https://www.tsmc.com/english/news_events",
    "status": "blocked",
    "details": "JavaScript required security wall"
  },
  {
    "source": "https://www.asml.com/en/news",
    "status": "success",
    "content_type": "navigational",
    "details": "ASML corporate newsroom directories mapped"
  },
  {
    "source": "https://www.intel.com/content/www/us/en/newsroom",
    "status": "blocked",
    "details": "403 Forbidden (nginx server limit)"
  },
  {
    "source": "https://aws.amazon.com/blogs/aws",
    "status": "success",
    "articles": [
      {
        "title": "Top announcements of the What’s Next with AWS, 2026",
        "date": "2026-04-28",
        "author": "AWS News Blog Team",
        "categories": [
          "Amazon Bedrock",
          "Amazon Connect",
          "Amazon Quick Suite",
          "Artificial Intelligence",
          "Events",
          "News"
        ]
      }
    ]
  },
  {
    "source": "https://cloud.google.com/blog",
    "status": "success",
    "content_type": "navigational",
    "details": "Google Cloud blog directories mapped"
  },
  {
    "source": "https://azure.microsoft.com/en-us/blog",
    "status": "success",
    "content_type": "navigational",
    "details": "Microsoft Azure blog interface crawled"
  },
  {
    "source": "https://openai.com/research",
    "status": "blocked",
    "details": "JavaScript security check"
  },
  {
    "source": "https://www.anthropic.com/news",
    "status": "success",
    "articles": [
      {
        "title": "Introducing Claude Opus 4.7",
        "date": "2026-04-16",
        "category": "Product",
        "summary": "Our latest Opus model brings stronger performance across coding, agents, vision, and multi-step tasks, with greater thoroughness and consistency on the work that matters most."
      },
      {
        "title": "Introducing Claude Design by Anthropic Labs",
        "date": "2026-04-17",
        "category": "Product",
        "summary": "Today, we’re launching Claude Design, a new Anthropic Labs product that lets you collaborate with Claude to create polished visual work like designs, prototypes, slides, one-pagers, and more."
      },
      {
        "title": "Project Glasswing",
        "date": "2026-04-07",
        "category": "Announcements",
        "summary": "A new initiative that brings together Amazon Web Services, Anthropic, Apple, Broadcom, Ci..."
      }
    ]
  },
  {
    "source": "https://deepmind.google/discover",
    "status": "success",
    "highlights": {
      "models": [
        "Gemini",
        "Gemini Omni",
        "Nano Banana",
        "Gemini Audio",
        "Veo",
        "Imagen",
        "Lyria",
        "Genie 3",
        "Gemma"
      ],
      "research": [
        "SIMA 2: An agent that plays, reasons, and learns with you",
        "Genie 3: Generate and exp..."
      ]
    }
  },
  {
    "source": "https://ai.meta.com/blog",
    "status": "success",
    "articles": [
      {
        "title": "Introducing Muse Spark: Scaling Towards Personal Superintelligence",
        "date": "2026-04-08",
        "category": "FEATURED"
      },
      {
        "title": "Scaling How We Build and Test Our Most Advanced AI",
        "date": "2026-04-08",
        "category": "Research / FEATURED",
        "summary": "As we build more capable, personalized AI, reliab..."
      },
      {
        "title": "How Alta Daily Uses Meta’s Segment Anything to Reimagine the Digital Closet",
        "date": "2026-04-06",
        "category": "Computer Vision"
      },
      {
        "title": "SAM 3.1: Faster and More Accessible Real-Time Video Detection and Tracking With Multiplexing and Global Reasoning",
        "date": "2026-03-27",
        "category": "Computer Vision / FEATURED"
      },
      {
        "title": "Four MTIA Chips in Two Years: Scaling AI Experiences for Billions",
        "date": "2026-03-11",
        "category": "FEATURED"
      }
    ]
  },
  {
    "source": "https://mistral.ai/news",
    "status": "success",
    "articles": [
      {
        "title": "Introducing Mistral Medium 3.5, remote coding agents in Vibe, plus new Work mode in Le Chat for complex tasks.",
        "date": "2026-04-29",
        "category": "Product",
        "summary": "Remote agents in Vibe. Powered by Mistral Medium 3.5."
      }
    ]
  },
  {
    "source": "https://www.gartner.com/en/newsroom",
    "status": "blocked",
    "details": "Cloudflare Ray ID challenge verification required"
  },
  {
    "source": "https://www.weforum.org/agenda/technology",
    "status": "blocked",
    "details": "Access Denied / Status 403"
  },
  {
    "source": "https://artificialintelligenceact.eu",
    "status": "success",
    "content_type": "informational",
    "details": "EU Artificial Intelligence Act directories, timelines, and guides indexed"
  }
]