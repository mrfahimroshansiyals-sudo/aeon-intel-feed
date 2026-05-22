const dailyData = {
  "sources": [
    {
      "source_name": "Bloomberg Technology",
      "url": "https://www.bloomberg.com/technology",
      "status": "Blocked",
      "error_type": "Bot Detection",
      "articles": []
    },
    {
      "source_name": "Reuters Technology",
      "url": "https://www.reuters.com/technology",
      "status": "Blocked",
      "error_type": "Javascript/Ad-blocker Required",
      "articles": []
    },
    {
      "source_name": "Financial Times Technology",
      "url": "https://www.ft.com/technology",
      "status": "Blocked",
      "error_type": "Security Verification / 403 Forbidden",
      "articles": []
    },
    {
      "source_name": "Dow Jones Newswires",
      "url": "https://www.dowjones.com/newswires",
      "status": "Success",
      "details": "Navigational/Corporate Landing Page",
      "articles": []
    },
    {
      "source_name": "CNBC Technology",
      "url": "https://www.cnbc.com/technology",
      "status": "Blocked",
      "error_type": "Access Denied / 403 Forbidden",
      "articles": []
    },
    {
      "source_name": "VentureBeat",
      "url": "https://venturebeat.com",
      "status": "Blocked",
      "error_type": "Vercel Security Checkpoint",
      "articles": []
    },
    {
      "source_name": "AI Business",
      "url": "https://www.aibusiness.com",
      "status": "Blocked",
      "error_type": "Javascript/Cookies Required",
      "articles": []
    },
    {
      "source_name": "CIO.com",
      "url": "https://www.cio.com",
      "status": "Success",
      "details": "Topic and Navigation Directory Only",
      "articles": []
    },
    {
      "source_name": "InfoWorld",
      "url": "https://www.infoworld.com",
      "status": "Success",
      "details": "Topic and Navigation Directory Only",
      "articles": []
    },
    {
      "source_name": "TechTarget",
      "url": "https://www.techtarget.com",
      "status": "Success",
      "articles": [
        {
          "title": "The AI war IBM isn't fighting -- and the one it thinks it can win",
          "date": "21 May 2026",
          "category": "Cloud Deployment & Architecture",
          "summary": "IBM wants to differentiate itself in the market by..."
        }
      ]
    },
    {
      "source_name": "MIT Technology Review",
      "url": "https://www.technologyreview.com",
      "status": "Success",
      "articles": [
        {
          "title": "Google I/O showed how the path for AI-driven science is shifting",
          "date": "2 hours ago",
          "category": "Artificial intelligence",
          "summary": "Two years ago, an AI tool won Google DeepMind a Nobel. Researchers are now climbing toward a new goal."
        },
        {
          "title": "The Download: coding’s future, the ‘Steroid Olympics,’ and AI-driven science",
          "date": "10 minutes ago",
          "category": "The Download",
          "summary": ""
        },
        {
          "title": "Climate tech companies are pivoting to critical minerals",
          "date": "1 day ago",
          "category": "Climate change and energy",
          "summary": ""
        },
        {
          "title": "Tech researchers are suing the Trump administration over the future of online safety",
          "date": "1 day ago",
          "category": "Policy",
          "summary": ""
        },
        {
          "title": "Green steel startup Boston Metal is doubling down on",
          "date": "2 days ago",
          "category": "Climate change and energy",
          "summary": ""
        }
      ]
    },
    {
      "source_name": "IEEE Spectrum",
      "url": "https://spectrum.ieee.org",
      "status": "Blocked",
      "error_type": "403 Forbidden (Varnish Cache Server)",
      "articles": []
    },
    {
      "source_name": "Stanford HAI",
      "url": "https://hai.stanford.edu",
      "status": "Success",
      "details": "Institutional Directory/Navigation Only",
      "articles": []
    },
    {
      "source_name": "ACM Digital Library",
      "url": "https://dl.acm.org",
      "status": "Blocked",
      "error_type": "Javascript/Cookies Required",
      "articles": []
    },
    {
      "source_name": "NVIDIA Newsroom",
      "url": "https://nvidianews.nvidia.com",
      "status": "Success",
      "details": "Directory Navigation List Only",
      "articles": []
    },
    {
      "source_name": "TSMC",
      "url": "https://www.tsmc.com/english/news_events",
      "status": "Blocked",
      "error_type": "Javascript/Cookies Required",
      "articles": []
    },
    {
      "source_name": "ASML",
      "url": "https://www.asml.com/en/news",
      "status": "Success",
      "details": "Directory Navigation List Only",
      "articles": []
    },
    {
      "source_name": "Intel Newsroom",
      "url": "https://www.intel.com/content/www/us/en/newsroom",
      "status": "Blocked",
      "error_type": "403 Forbidden (nginx)",
      "articles": []
    },
    {
      "source_name": "AWS News Blog",
      "url": "https://aws.amazon.com/blogs/aws",
      "status": "Success",
      "articles": [
        {
          "title": "Top announcements of the What’s Next with AWS, 2026",
          "date": "28 APR 2026",
          "author": "AWS News Blog Team",
          "category": "News & Events",
          "tags": ["Amazon Bedrock", "Amazon Connect", "Amazon Quick Suite", "Artificial Intelligence"]
        }
      ]
    },
    {
      "source_name": "Google Cloud Blog",
      "url": "https://cloud.google.com/blog",
      "status": "Success",
      "details": "Topic Directory and Navigation Only",
      "articles": []
    },
    {
      "source_name": "Microsoft Azure Blog",
      "url": "https://azure.microsoft.com/en-us/blog",
      "status": "Success",
      "details": "Products list (Foundry Models, Agent Service, Cosmos DB, Azure Arc, Fabric)",
      "articles": []
    },
    {
      "source_name": "OpenAI Research",
      "url": "https://openai.com/research",
      "status": "Blocked",
      "error_type": "Javascript/Cookies Required",
      "articles": []
    },
    {
      "source_name": "Anthropic News",
      "url": "https://www.anthropic.com/news",
      "status": "Success",
      "articles": [
        {
          "title": "Introducing Claude Opus 4.7",
          "date": "Apr 16, 2026",
          "category": "Product",
          "summary": "Our latest Opus model brings stronger performance across coding, agents, vision, and multi-step tasks, with greater thoroughness and consistency."
        },
        {
          "title": "Introducing Claude Design by Anthropic Labs",
          "date": "Apr 17, 2026",
          "category": "Product",
          "summary": "A new Anthropic Labs product that lets you collaborate with Claude to create polished visual work like designs, prototypes, slides, and one-pagers."
        },
        {
          "title": "Project Glasswing",
          "date": "Apr 7, 2026",
          "category": "Announcements",
          "summary": "A new initiative that brings together Amazon Web Services, Anthropic, Apple, Broadcom, etc."
        }
      ]
    },
    {
      "source_name": "Google DeepMind",
      "url": "https://deepmind.google/discover",
      "status": "Success",
      "models_highlighted": [
        "Gemini",
        "Gemini Omni",
        "Nano Banana",
        "Gemini Audio",
        "Veo",
        "Imagen",
        "Lyria",
        "Genie 3",
        "Gemini Robotics",
        "Gemma"
      ],
      "research_highlights": [
        {
          "title": "SIMA 2",
          "description": "An agent that plays, reasons, and learns with you"
        },
        {
          "title": "Genie 3",
          "description": "Generate and explore interactive worlds"
        }
      ]
    },
    {
      "source_name": "AI at Meta Blog",
      "url": "https://ai.meta.com/blog",
      "status": "Success",
      "articles": [
        {
          "title": "Introducing Muse Spark: Scaling Towards Personal Superintelligence",
          "date": "April 8, 2026",
          "category": "Featured"
        },
        {
          "title": "Scaling How We Build and Test Our Most Advanced AI",
          "date": "Apr 8, 2026",
          "category": "Research"
        },
        {
          "title": "How Alta Daily Uses Meta’s Segment Anything to Reimagine the Digital Closet",
          "date": "Apr 6, 2026",
          "category": "Computer Vision"
        },
        {
          "title": "SAM 3.1: Faster and More Accessible Real-Time Video Detection and Tracking With Multiplexing and Global Reasoning",
          "date": "Mar 27, 2026",
          "category": "Computer Vision / Featured"
        },
        {
          "title": "Four MTIA Chips in Two Years: Scaling AI Experiences for Billions",
          "date": "Mar 11, 2026",
          "category": "Featured"
        }
      ]
    },
    {
      "source_name": "Mistral AI News",
      "url": "https://mistral.ai/news",
      "status": "Success",
      "articles": [
        {
          "title": "Remote agents in Vibe. Powered by Mistral Medium 3.5.",
          "date": "Apr 29, 2026",
          "category": "Product",
          "summary": "Introducing Mistral Medium 3.5, remote coding agents in Vibe, plus new Work mode in Le Chat for complex tasks."
        }
      ]
    },
    {
      "source_name": "Gartner Newsroom",
      "url": "https://www.gartner.com/en/newsroom",
      "status": "Blocked",
      "error_type": "Javascript/Cookies Required (Security Validation)",
      "articles": []
    },
    {
      "source_name": "World Economic Forum Agenda Technology",
      "url": "https://www.weforum.org/agenda/technology",
      "status": "Blocked",
      "error_type": "Access Denied / 403 Forbidden",
      "articles": []
    },
    {
      "source_name": "EU Artificial Intelligence Act",
      "url": "https://artificialintelligenceact.eu",
      "status": "Success",
      "details": "Structure framework, timeline, guidelines, and general-purpose AI information directory.",
      "articles": []
    }
  ]
}