/* ================================================
   SHUBH NAMDEO PORTFOLIO — JavaScript & AI Engine
   ================================================ */

// ─── Knowledge Base: Everything about Shubh ───────────────────────
const SHUBH_KNOWLEDGE = {
  name: "Shubh Namdeo",
  pronouns: "He/Him",
  title: "Software Engineer | Full-Stack & Backend Development | Python, Node.js, Java",
  location: "Andheri East, Mumbai, Maharashtra, India",
  email: "shubhnamdeo15@gmail.com",
  phone: "+91 7000312723",
  workPreference: "Open to On-site, Hybrid, and Remote roles across India",
  status: "Actively seeking full-time Graduate Engineer & Software Developer roles",
  github: "https://github.com/Shubhnamdeo",
  linkedin: "https://www.linkedin.com/in/shubh-namdeo",

  about: `Shubh Namdeo is a Results-driven Software Engineer with a strong foundation in full-stack development, backend architecture, and automated business logic. 
  Proficient in Python, Java, Node.js, Express.js, and the MERN stack. Experienced in building scalable commercial applications, designing secure RESTful APIs, 
  and optimizing database performance. Eager to leverage analytical problem-solving skills to build robust, user-centric technology solutions as a Graduate Engineer.`,

  education: {
    degree: "Bachelor of Technology (B.Tech) in Computer Science and Engineering",
    institution: "Gyan Ganga Institute of Technology & Sciences (RGPV), Jabalpur",
    duration: "May 2022 – May 2026",
    cgpa: "7.39",
    skills: ["Data Structures & Algorithms", "Database Management Systems", "Object-Oriented Programming", "Operating Systems"]
  },

  projects: [
    {
      title: "Topper’s Matrix Classes (Paid Freelance Project)",
      url: "https://toppers-matrix-classes.onrender.com",
      tech: ["Node.js", "Express.js", "MongoDB", "Full-Stack Development"],
      description: "Acted as the sole developer to architect, build, and deploy a commercial educational platform. Implemented secure user authentication, class scheduling, and optimized MongoDB query performance."
    },
    {
      title: "Events Hub - Event Management Application",
      tech: ["Cloud Platform", "LWC", "Apex", "Full-Stack"],
      description: "Developed a scalable event management application to streamline user registration, tracking workflows, and large-scale data synchronization with modern frontend components."
    },
    {
      title: "Interactive Professional Portfolio",
      url: "https://shubhnamdeo.github.io/portfolio-shubh",
      tech: ["Frontend Architecture", "Responsive UI", "Git", "Vanilla JS"],
      description: "Developed and deployed a responsive web portfolio featuring custom AI assistant integration and embedded certificate verification matrix."
    }
  ],

  experience: [
    {
      role: "Enterprise Software Developer (Intern)",
      company: "SmartBridge (LastMile Program)",
      duration: "June 2025 – January 2026",
      months: "8 months",
      location: "India",
      current: false,
      highlights: [
        "Developed automated business logic utilizing object-oriented programming, streamlining enterprise user interactions and improving system response efficiency",
        "Configured advanced authentication and Field-Level Security protocols to ensure data privacy and structural integrity",
        "Participated in the software development lifecycle, executing rigorous debugging and optimizing backend algorithmic performance",
        "Collaborated with cross-functional teams to analyze system requirements and implement secure, scalable data processing solutions"
      ],
      techStack: ["Python", "Java", "Apex", "REST APIs", "FLS Security", "Agile Development"]
    }
  ],

  topSkills: ["Python", "Node.js", "Generative AI", "Amazon Web Services (AWS)", "Salesforce Development"],

  skills: {
    aiML: ["Generative AI", "Prompt Engineering", "AI Agents", "Gemini API", "Vertex AI", "RAG Systems", "Einstein Agent", "Machine Learning", "Chain-of-Thought Prompting", "Few-Shot Prompting"],
    languages: ["Python", "Node.js", "JavaScript", "Java", "C++", "Apex (Salesforce)", "Shell/Linux"],
    cloud: ["Amazon Web Services (AWS)", "Salesforce", "MongoDB", "Google Cloud", "Cloud Security (CCSK)"],
    data: ["Data Science", "Power BI", "Cisco Packet Tracer", "Networking", "Cybersecurity"],
    other: ["Backend Development", "REST APIs", "Cloud Infrastructure", "Enterprise Architecture"]
  },

  certifications: [
    { name: "Engineer AI Agents with Agent Development Kit (ADK)", issuer: "Google Cloud", featured: true, category: "AI" },
    { name: "Inspect Rich Documents with Gemini Multimodality and Multimodal RAG", issuer: "Google Cloud", featured: true, category: "AI" },
    { name: "Prompt Design in Vertex AI", issuer: "Google Cloud", featured: true, category: "AI" },
    { name: "Salesforce AI Agent Developer (LastMile Program)", issuer: "SmartBridge × Salesforce", featured: false, category: "Salesforce" },
    { name: "Agentblazer Champion Trail", issuer: "Salesforce Trailhead", featured: false, category: "Salesforce" },
    { name: "Advanced Prompt Engineering", issuer: "Simplilearn", featured: false, category: "AI" },
    { name: "AWS Academy Cloud Foundations", issuer: "Amazon Web Services", featured: false, category: "Cloud" },
    { name: "Certificate of Cloud Security Knowledge (CCSK)", issuer: "Cloud Security Alliance", featured: false, category: "Security" },
    { name: "Cybersecurity Essentials", issuer: "Cisco Networking Academy", featured: false, category: "Security" },
    { name: "Introduction to Cybersecurity", issuer: "Cisco Networking Academy", featured: false, category: "Security" },
    { name: "Oracle Artificial Intelligence with Machine Learning", issuer: "Oracle Academy", featured: false, category: "AI" },
    { name: "Data Fundamentals", issuer: "IBM SkillsBuild", featured: true, category: "Data" },
    { name: "Power BI for Beginners", issuer: "Simplilearn SkillUp", featured: false, category: "Data" },
    { name: "Linux Essentials (NDG)", issuer: "Cisco Networking Academy", featured: false, category: "Systems" },
    { name: "CPA Programming Essentials in C++", issuer: "Cisco", featured: false, category: "Programming" },
    { name: "Java Programming Fundamentals", issuer: "LinkedIn Learning", featured: false, category: "Programming" },
    { name: "Cisco Packet Tracer", issuer: "Cisco Networking Academy", featured: false, category: "Networking" },
    { name: "Introduction to Data Science", issuer: "Cisco", featured: false, category: "Data" },
    { name: "Gemini Academy Workshop", issuer: "upEducators / Google Gemini", featured: false, category: "AI" }
  ],

  googleCloudBadges: [
    "Engineer AI Agents with Agent Development Kit (ADK)",
    "Inspect Rich Documents with Gemini Multimodality and Multimodal RAG",
    "Prompt Design in Vertex AI"
  ],

  interests: [
    "Building AI-powered backend systems",
    "Salesforce Agentic AI / Agentforce",
    "Google Cloud AI and Gemini",
    "Prompt Engineering techniques",
    "Cloud-native architecture",
    "Open-source contribution"
  ],

  contact: {
    github: "https://github.com/Shubhnamdeo",
    linkedin: "https://www.linkedin.com/in/shubh-namdeo"
  },

  quirks: [
    "Loves posting about every certification he earns on LinkedIn (and there are a LOT of them!)",
    "Part of the elite 100K Agentblazer Champions Program",
    "Has over 15 professional certifications across AI, Cloud, Networking, and Programming",
    "Continuously upskilling — learning is a core part of his identity"
  ]
};

// ─── AI Response Engine ────────────────────────────────────────────
function getAIResponse(question) {
  if (!question || typeof question !== 'string') {
    return "Hi! Please feel free to ask me anything about Shubh's skills, projects, experience, or contact details.";
  }

  const rawQ = question.trim();
  const q = rawQ.toLowerCase();
  const kb = SHUBH_KNOWLEDGE;

  // Helper to list certs by category
  const certsByCategory = (cat) =>
    kb.certifications.filter(c => c.category === cat).map(c => `• **${c.name}** — ${c.issuer}`).join('\n');

  // Strip leading conversational phrases (e.g., "can you tell me", "please tell me", "what is", "can I ask about")
  const cleanQ = q
    .replace(/^(hi|hello|hey|greetings|dear ai)\b[,!\s]*/i, '')
    .replace(/^(can i ask|may i ask|i have a question|quick question|ask a question|ask you something|i want to ask)(\s+you)?(\s+something|\s+a question)?\s*(about|regarding)?\s*/i, '')
    .replace(/^(please\s+|can you\s+|could you\s+|do you know\s+|i want to know\s+|tell me\s+|what is\s+|what are\s+|how about\s+)+/i, '')
    .trim();

  // ── 1. Chit-chat & Courtesies
  if (/^(thanks|thank you|thx|tysm|appreciate it)\b/i.test(q)) {
    return `You're very welcome! 😊 Feel free to ask anything else about Shubh, or connect with him directly on LinkedIn at **linkedin.com/in/shubh-namdeo**.`;
  }
  if (/^(bye|goodbye|see you|cya|take care)\b/i.test(q)) {
    return `Thanks for visiting Shubh's portfolio! Have a wonderful day, and don't hesitate to reach out if you'd like to collaborate or discuss opportunities. 👋`;
  }
  if (/^(cool|awesome|great|nice|perfect|super|sounds good|okay|ok|got it)\b/i.test(q) && q.split(' ').length <= 3) {
    return `Glad I could help! Would you like to explore his **projects**, inspect his **certifications**, or get his **contact information**?`;
  }
  if (/\b(who created you|who made you|are you an ai|what are you|who are you)\b/i.test(q)) {
    return `I am **Shubh Namdeo's AI Portfolio Assistant** 🤖! I was built using custom JavaScript and client-side knowledge modeling to help recruiters, engineers, and visitors explore Shubh's technical skillset, projects, experience, and certifications in real-time.`;
  }

  // Pure greetings or standalone "Can I ask a question?" with no topic attached
  const cleanQLetters = cleanQ.replace(/[^a-z0-9]/gi, '');
  if (!cleanQLetters) {
    if (/^(hi|hello|hey|howdy|sup|yo|good morning|good afternoon|good evening)\b/i.test(q)) {
      return `Hey there! 👋 I'm Shubh's interactive AI assistant. I know all about his engineering skills, commercial projects, SmartBridge internship, and 19+ certifications.\n\nWhat would you like to know?\n\n<div class="quick-questions"><button class="quick-q" data-q="What are Shubh's top skills?">Top skills?</button><button class="quick-q" data-q="Tell me about Shubh's projects">Projects?</button><button class="quick-q" data-q="Tell me about his work experience">Experience?</button><button class="quick-q" data-q="What is his contact info?">Contact?</button></div>`;
    }
    if (/^(can i ask|may i ask|i have a question|quick question|ask a question|ask you something|i want to ask)\b/i.test(q)) {
      return `Of course! 😊 Go right ahead and ask me anything about Shubh's projects, technical skills, SmartBridge internship, education, or contact details.\n\n<div class="quick-questions"><button class="quick-q" data-q="What are Shubh's top skills?">Top Skills</button><button class="quick-q" data-q="Tell me about Topper's Matrix Classes">Projects</button><button class="quick-q" data-q="Tell me about his work experience">Experience</button><button class="quick-q" data-q="What is his contact info?">Contact Details</button></div>`;
    }
  }

  // ── 2. Help / Menu / Capabilities (STRICT check so normal questions with "ask" don't trigger this!)
  if (/^(help|help me|what can you do|what can i ask|commands|menu|options|how to use|features)$/i.test(q) ||
      (/^(what can (you|i) (do|ask)|what questions can i ask)/i.test(q) && q.split(' ').length <= 6)) {
    return `Here are some great topics you can ask me about:\n\n💻 **Technical Skills:** "What programming languages does he know?" or "Does he know Python and Node.js?"\n🚀 **Projects:** "Tell me about Topper's Matrix Classes" or "Show me his projects"\n💼 **Experience:** "Tell me about his SmartBridge internship"\n🤖 **AI & GenAI:** "Tell me about his AI experience"\n🎓 **Education:** "Where did he study?" or "What is his CGPA?"\n🏆 **Certifications:** "Show me his Google Cloud and AWS badges"\n📍 **Location & Hiring:** "Where is he based?" or "Is he available for hire?"\n📬 **Contact:** "What is his email or phone number?"\n📄 **Resume:** "Can I see his resume?"\n\n<div class="quick-questions"><button class="quick-q" data-q="What are Shubh's top skills?">Top Skills</button><button class="quick-q" data-q="Tell me about Topper's Matrix Classes">Topper's Matrix</button><button class="quick-q" data-q="Tell me about his work experience">Internship</button><button class="quick-q" data-q="What is his contact info?">Contact Details</button></div>`;
  }

  // ── 3. Resume / CV / Biodata
  if (/\b(resume|cv|curriculum vitae|biodata|profile pdf)\b/i.test(q)) {
    return `📄 **Shubh Namdeo's Resume Summary:**\n\n• **Title:** Results-driven Software Engineer (B.Tech CSE, graduating May 2026)\n• **Core Stack:** Python, Java, Node.js, Express.js, MongoDB, AWS, Salesforce, RESTful APIs\n• **Experience:** Enterprise Software Developer (Intern) at SmartBridge (8 months)\n• **Key Projects:** Topper's Matrix Classes (Commercial Platform) & Events Hub\n• **Contact:** ${kb.email} | ${kb.phone}\n• **Location:** ${kb.location}\n\nYou can review all detailed credentials right here on this portfolio or reach out directly to request the latest PDF copy! 📬`;
  }

  // ── 4. AI & GenAI Experience (Checked before general experience so "AI experience" triggers this)
  if (/\b(ai|genai|generative ai|llm|llms|agent development kit|adk|vertex ai|gemini|rag|prompt engineering|einstein|agentforce)\b/i.test(q)) {
    return `🤖 **AI, GenAI & Prompt Engineering Experience:**\n\nShubh has demonstrated deep hands-on expertise with cutting-edge AI technologies:\n\n• **Google Cloud Skill Badges:**\n  → *Engineer AI Agents with Agent Development Kit (ADK)*\n  → *Inspect Rich Documents with Gemini Multimodality and Multimodal RAG*\n  → *Prompt Design in Vertex AI*\n• **Salesforce Agentic AI:** Selected for the elite **100K Agentblazer Champions Program**, building autonomous AI agent workflows.\n• **Prompt Engineering:** Certified by Simplilearn in advanced techniques including Chain-of-Thought (CoT), Few-Shot prompting, and hallucination reduction.\n• **AI Application Development:** Integrating Gemini and LLM APIs into Python and Node.js backend services.`;
  }

  // ── 5. Specific Projects
  if (/topper|matrix|commercial platform|freelance/i.test(q)) {
    const p = kb.projects[0];
    return `🚀 **${p.title}**\n\n${p.description}\n\n🛠️ **Tech Stack:** ${p.tech.join(' • ')}\n🔗 **Live Demo:** ${p.url}\n\nKey highlights:\n→ Architected, built, and deployed as the sole developer\n→ Implemented secure user authentication and class scheduling workflows\n→ Optimized MongoDB database queries and API response times for high concurrent traffic.`;
  }

  if (/events? hub|event management/i.test(q)) {
    const p = kb.projects[1];
    return `⚡ **${p.title}**\n\n${p.description}\n\n🛠️ **Tech Stack:** ${p.tech.join(' • ')}\n\nKey highlights:\n→ Scalable event management and user registration workflows\n→ Built with modern Lightning Web Components (LWC) and Apex backend controllers\n→ Relational data modeling and high-integrity data processing.`;
  }

  if (/portfolio( project| website)?|this website|shubh.*portfolio/i.test(q)) {
    const p = kb.projects[2];
    return `💻 **${p.title}**\n\n${p.description}\n\n🛠️ **Tech Stack:** ${p.tech.join(' • ')}\n🔗 **Live URL:** ${p.url}\n🐙 **GitHub Repo:** github.com/Shubhnamdeo/portfolio-shubh\n\nBuilt with clean semantic HTML5, modern CSS3 animations, and an intelligent client-side AI knowledge assistant!`;
  }

  // General Projects
  if (/\b(projects?|apps?|applications?|what (did|has) he built|code sample|portfolio work|github repo|repositories)\b/i.test(q)) {
    const pList = kb.projects.map(p => `🚀 **${p.title}**\n${p.description}\n🛠️ **Tech:** ${p.tech.join(' • ')}${p.url ? `\n🔗 [Live Link](${p.url})` : ''}`).join('\n\n');
    return `Here are Shubh's key featured projects 💻\n\n${pList}\n\nCheck out all his open-source work on GitHub at 🐙 **github.com/Shubhnamdeo**!`;
  }

  // ── 6. Experience / Internship / SmartBridge
  if (/\b(experience|internship|intern|smartbridge|smart bridge|lastmile|last mile|work history|career|job history)\b/i.test(q)) {
    const sb = kb.experience[0];
    return `💼 **Professional Experience:**\n\n⚡ **${sb.role}**\n🏢 **${sb.company}**\n📅 **${sb.duration} (${sb.months})**\n\n**Key Contributions:**\n${sb.highlights.map(h => `→ ${h}`).join('\n')}\n\n🛠️ **Technologies Used:** ${sb.techStack.join(', ')}`;
  }

  // ── 7. Job Search / Hiring / Availability
  if (/\b(availab|looking for (a )?job|hire|hiring|open to work|recruit|seeking|salary|notice period|join|roles?)\b/i.test(q)) {
    return `✅ **Yes! Shubh is actively seeking full-time Graduate Engineer & Software Developer roles!**\n\n🎓 Graduating in **May 2026** and open to immediate start or summer 2026 cohorts.\n\n**Target Roles:**\n• Software Engineer / Backend Engineer\n• Full-Stack Developer (MERN Stack)\n• AI / GenAI Software Engineer\n• Cloud & Salesforce Developer\n\n📍 **Work Preferences:** On-site (Mumbai & across India), Hybrid, or Remote.\n📬 **Connect directly:** ${kb.email} | **LinkedIn:** linkedin.com/in/shubh-namdeo`;
  }

  // ── 8. Contact Details (Email, Phone, LinkedIn, GitHub)
  if (/\b(contact|reach|email|mail|phone|mobile|number|call|whatsapp|message|talk|connect|linkedin|github link)\b/i.test(q)) {
    return `📬 **Get in touch with Shubh Namdeo:**\n\n📧 **Email:** ${kb.email}\n📞 **Phone:** ${kb.phone}\n📍 **Location:** ${kb.location}\n🔗 **LinkedIn:** linkedin.com/in/shubh-namdeo\n🐙 **GitHub:** github.com/Shubhnamdeo\n\nHe responds promptly to emails and LinkedIn messages! 😊`;
  }

  // ── 9. Education, College, CGPA & Coursework
  if (/\b(education|college|university|degree|btech|b\.tech|ggits|gyan ganga|rgpv|cgpa|gpa|grades?|marks?|academics?|coursework|study|studies)\b/i.test(q)) {
    const edu = kb.education;
    return `🎓 **Education & Academics:**\n\n• **Degree:** ${edu.degree}\n• **Institution:** ${edu.institution}\n• **Timeline:** ${edu.duration} (Graduation: May 2026)\n• **CGPA:** **${edu.cgpa} / 10.0**\n• **Relevant Coursework:** ${edu.skills.join(', ')}`;
  }

  // ── 10. Location & Relocation
  if (/\b(location|city|mumbai|andheri|jabalpur|relocat|remote|hybrid|onsite|on-site)\b/i.test(q) ||
      /where.*(live|stay|base|located|from)/i.test(q)) {
    return `📍 **Location & Mobility:**\n\nShubh is based in **${kb.location}**.\n\nHe is flexible and open to:\n✅ **On-site** — Mumbai and major tech hubs across India\n✅ **Hybrid** — Blended office & remote\n✅ **Remote** — Worldwide engineering roles`;
  }

  // ── 10. Specific Technical Stack Inquiries
  if (/\b(python)\b/i.test(q)) {
    return `🐍 **Python:** One of Shubh's primary languages! He uses Python for backend REST APIs, automation, object-oriented logic, and integrating AI/ML models. He holds the **Python Essentials** certification from Cisco Networking Academy.`;
  }

  if (/\b(java)\b/i.test(q)) {
    return `☕ **Java:** Core proficiency! Shubh is strong in Java OOP, data structures, backend logic, and holds the **Java Programming Fundamentals** credential from Oracle / LinkedIn Learning.`;
  }

  if (/\b(node|node\.js|express|express\.js|mern)\b/i.test(q)) {
    return `⚡ **Node.js & Express.js:** Shubh is an experienced backend developer in the Node.js ecosystem. He built and deployed the full-stack commercial EdTech platform **Topper's Matrix Classes** with Express.js and MongoDB.`;
  }

  if (/\b(mongo|mongodb|database|databases|dbms|sql)\b/i.test(q)) {
    return `🗄️ **Databases & Data Management:**\n\n• **MongoDB:** Used for scalable NoSQL storage, schema indexing, and fast query execution in his commercial platform Topper's Matrix Classes.\n• **SQL & Relational Databases:** Proficient in SQL queries, schema design, ACID transactions, and relational data modeling.`;
  }

  if (/\b(c\+\+|cpp)\b/i.test(q)) {
    return `⚙️ **C++:** Shubh has a strong algorithmic foundation in C++ for Data Structures & Algorithms, holding the **CPA Programming Essentials in C++** certification from Cisco.`;
  }

  if (/\b(salesforce|apex|lwc|lightning web components|agentforce|agentblazer)\b/i.test(q)) {
    return `⚡ **Salesforce & Cloud Engineering:**\n\n• **Apex & LWC:** Developed automated business logic, secure triggers, and dynamic Lightning Web Components.\n• **Security Protocols:** Configured Field-Level Security (FLS) and granular authentication.\n• **Agentblazer:** Part of the elite Salesforce **100K Agentblazer Champions Program** with hands-on AI agent development.`;
  }

  if (/\b(aws|amazon web services|cloud)\b/i.test(q)) {
    return `☁️ **AWS & Cloud Infrastructure:**\n\n• **AWS Academy Cloud Foundations** certified\n• Hands-on with EC2, S3, cloud security architecture, and database hosting\n• Certified in Cloud Security Knowledge (**CCSK**) by the Cloud Security Alliance.`;
  }

  if (/\b(ai|genai|generative ai|llm|llms|agent development kit|adk|vertex ai|gemini|rag|prompt engineering)\b/i.test(q)) {
    return `🤖 **AI, GenAI & Prompt Engineering:**\n\nShubh has demonstrated deep hands-on expertise with cutting-edge AI:\n• **Google Cloud Skill Badges:** ADK AI Agent Engineering, Gemini Multimodal RAG, and Vertex AI Prompt Design\n• **Prompt Engineering:** Certified by Simplilearn in Chain-of-Thought (CoT), Few-Shot prompting, and hallucination reduction\n• **Salesforce AI:** Enterprise agent workflows and automated business logic.`;
  }

  if (/\b(git|github|tools|postman|linux|agile)\b/i.test(q)) {
    return `🛠️ **Tools & Development Methodologies:**\n\n• **Version Control:** Git, GitHub (branching, PRs, CI/CD deployment)\n• **API Testing:** Postman for REST API verification and debugging\n• **Systems:** Linux command line, Shell scripting (Cisco Linux Essentials)\n• **Process:** Agile development, sprint planning, and secure SDLC.`;
  }

  // ── 11. General Skills & Tech Stack
  if (/\b(skills?|tech stack|technolog(y|ies)|what (can he|does he) do|proficien(t|cy)|stack|languages?)\b/i.test(q)) {
    return `🛠️ **Shubh's Technical Arsenal:**\n\n💻 **Languages:** Python, Java, C++, JavaScript, SQL, Apex\n🌐 **Web & Frameworks:** Node.js, Express.js, RESTful APIs, Lightning Web Components (LWC), HTML/CSS\n🗄️ **Databases & Cloud:** MongoDB, SQL, AWS, Google Cloud, Salesforce\n🤖 **AI & GenAI:** Gemini API, Vertex AI, Multimodal RAG, Prompt Engineering, Agent Development Kit\n🔧 **Tools & Process:** Git/GitHub, Postman, Linux CLI, Agile Development`;
  }

  // ── 12. Certifications
  if (/\b(certif\w*|certs?|badges?|credentials?|licenses?|courses?)\b/i.test(q)) {
    if (/ibm|data fundamentals/i.test(q)) {
      return `📊 **IBM SkillsBuild Certification:**\n\n• **Data Fundamentals** — Issued by IBM SkillsBuild (Nov 2026)\n\nCredential verifies foundational competencies in data architecture, data science concepts, data repositories, and analytics workflows.\n\n🔗 Verify: credly.com/badges/06023c36-5583-43a9-8114-7ce4c911b894`;
    }
    if (/google|gcp|badge/i.test(q)) {
      return `☁️ **Google Cloud Skill Badges (3):**\n\n${kb.googleCloudBadges.map(b => `🏅 ${b}`).join('\n')}\n\nAll verified on Credly / Google Cloud.`;
    }
    if (/cisco|security/i.test(q)) {
      return `🔐 **Cisco & Security Certifications:**\n\n${certsByCategory('Security')}\n${certsByCategory('Systems')}\n${certsByCategory('Networking')}`;
    }
    if (/salesforce/i.test(q)) {
      return `⚡ **Salesforce Certifications:**\n\n${certsByCategory('Salesforce')}`;
    }
    return `🏆 Shubh holds **19+ verified professional certifications** across high-impact domains:\n\n☁️ **Google Cloud:** AI Agent Engineering (ADK), Gemini Multimodality & RAG, Vertex AI\n⚡ **Salesforce:** AI Agent Developer (LastMile Program), Agentblazer Trail\n🌐 **Cloud & Security:** AWS Academy Cloud Foundations, CCSK Cloud Security, Cisco Cybersecurity\n💻 **Programming & Systems:** Cisco C++, Java Fundamentals, Cisco Linux Essentials\n📊 **Data:** IBM Data Fundamentals, Power BI, Introduction to Data Science\n\nAsk me about any specific certification or domain! 🎯`;
  }

  // ── 13. Leadership & Soft Skills
  if (/\b(leader|leadership|club|fusion beats|extracurricular|soft skills|teamwork|communication)\b/i.test(q)) {
    return `🌟 **Leadership & Extracurriculars:**\n\n• **Club Lead (Fusion Beats):** Facilitated cross-functional communication, technical discussions, and event logistics.\n• **Collaborative Problem-Solving:** Experienced in agile teamwork, requirement gathering, and client-facing communication for commercial software projects.`;
  }

  // ── 14. Who is Shubh / About
  if (/\b(who is shubh|about shubh|tell me about (him|yourself)|background|bio|profile|summary)\b/i.test(q)) {
    return `**Shubh Namdeo** is a Results-driven Software Engineer based in **Andheri East, Mumbai, Maharashtra, India** 🇮🇳\n\n${kb.about}\n\n🔑 **Core Stack:** Python, Java, Node.js, Express.js, MongoDB, AWS, RESTful APIs\n🎯 **Status:** Graduating in May 2026 • Actively seeking Graduate Engineer / Software Developer roles across India.`;
  }

  // ── 15. Smart Keyword Scoring Engine (fallback for non-exact queries)
  const tokens = q.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(Boolean);
  const scoreCard = {
    skills: 0,
    projects: 0,
    experience: 0,
    education: 0,
    contact: 0,
    certs: 0
  };

  const skillKeywords = ['code', 'coding', 'program', 'programming', 'developer', 'software', 'backend', 'frontend', 'framework', 'database', 'ai', 'cloud', 'aws', 'python', 'java', 'node', 'mongo', 'sql'];
  const projectKeywords = ['build', 'built', 'project', 'app', 'application', 'topper', 'matrix', 'events', 'hub', 'website', 'portfolio', 'freelance'];
  const expKeywords = ['intern', 'internship', 'smartbridge', 'experience', 'company', 'work', 'job', 'developer'];
  const eduKeywords = ['college', 'university', 'study', 'studying', 'degree', 'cgpa', 'gpa', 'btech', 'gyan', 'ganga', 'rgpv', 'marks'];
  const contactKeywords = ['reach', 'email', 'phone', 'call', 'number', 'connect', 'linkedin', 'talk', 'hire', 'interview'];
  const certKeywords = ['cert', 'certificate', 'badge', 'credential', 'exam', 'cisco', 'google', 'oracle'];

  tokens.forEach(t => {
    if (skillKeywords.includes(t)) scoreCard.skills++;
    if (projectKeywords.includes(t)) scoreCard.projects++;
    if (expKeywords.includes(t)) scoreCard.experience++;
    if (eduKeywords.includes(t)) scoreCard.education++;
    if (contactKeywords.includes(t)) scoreCard.contact++;
    if (certKeywords.includes(t)) scoreCard.certs++;
  });

  const bestTopic = Object.entries(scoreCard).sort((a, b) => b[1] - a[1])[0];
  if (bestTopic && bestTopic[1] > 0) {
    switch (bestTopic[0]) {
      case 'skills':
        return `🛠️ **Shubh's Technical Skills:**\n\n• **Languages:** Python, Java, C++, JavaScript, SQL, Apex\n• **Backend & Web:** Node.js, Express.js, RESTful APIs, LWC, HTML/CSS\n• **Cloud & Databases:** MongoDB, AWS, Google Cloud, Salesforce\n• **AI & GenAI:** Gemini API, Vertex AI, RAG Systems, Prompt Engineering\n\nWant to know about a specific tool or language? Just ask! 😊`;
      case 'projects':
        return `🚀 **Shubh's Featured Projects:**\n\n1. **Topper’s Matrix Classes:** Commercial EdTech platform (Node.js, Express, MongoDB, sole developer)\n2. **Events Hub:** Scalable event management app (LWC, Apex, Cloud)\n3. **Interactive Portfolio:** Responsive web portfolio with custom AI assistant\n\nType any project name for in-depth technical details!`;
      case 'experience':
        return `💼 **Experience:** Shubh completed an 8-month enterprise internship as an **Enterprise Software Developer (Intern)** at **SmartBridge (LastMile Program)**, building automated business logic, configuring FLS security, and optimizing backend systems.`;
      case 'education':
        return `🎓 **Education:** Pursuing B.Tech in Computer Science & Engineering at **Gyan Ganga Institute of Technology & Sciences (RGPV)** (Graduation: May 2026) with a **7.39 CGPA**.`;
      case 'contact':
        return `📬 Reach Shubh directly via **Email:** ${kb.email} or **Phone:** ${kb.phone}. You can also connect on LinkedIn at **linkedin.com/in/shubh-namdeo**!`;
      case 'certs':
        return `🏆 Shubh holds **19+ certifications** including 3 Google Cloud Skill Badges (AI Agents & Gemini RAG), AWS Cloud Foundations, Salesforce Agentblazer, and Cisco Cybersecurity.`;
    }
  }

  // ── 16. Helpful Fallback with One-Click Interactive Chips
  return `I'm happy to help you learn about Shubh! Here is a quick snapshot:\n\n• **Software Engineer** specializing in **Python, Java, Node.js, MongoDB, AWS & AI Agents**\n• **Experience:** Enterprise Software Developer (Intern) at SmartBridge (8 months)\n• **Key Project:** Topper's Matrix Classes (Commercial Platform)\n• **Graduation:** B.Tech CSE (May 2026) with 7.39 CGPA • Based in Mumbai\n\nClick any topic below to explore directly:\n\n<div class="quick-questions"><button class="quick-q" data-q="What are Shubh's top skills?">Top Skills</button><button class="quick-q" data-q="Tell me about Topper's Matrix Classes">Featured Project</button><button class="quick-q" data-q="Tell me about his work experience">Work Experience</button><button class="quick-q" data-q="What is his contact info?">Contact Details</button><button class="quick-q" data-q="Can I see his resume?">Resume Summary</button></div>`;
}

// ─── Typewriter Effect ────────────────────────────────────────────
const roles = [
  "Software Engineer 💻",
  "AI Agents Developer 🤖",
  "Backend Engineer ⚙️",
  "Prompt Engineer ✨",
  "Generative AI Enthusiast 🧠",
  "Salesforce Developer ⚡",
  "Cloud Engineer ☁️"
];

let roleIdx = 0;
let charIdx = 0;
let deleting = false;
const typeEl = document.getElementById('typewriter');

function typeNext() {
  const current = roles[roleIdx];
  if (!deleting) {
    typeEl.textContent = current.substring(0, charIdx + 1);
    charIdx++;
    if (charIdx === current.length) {
      deleting = true;
      setTimeout(typeNext, 1800);
      return;
    }
    setTimeout(typeNext, 80);
  } else {
    typeEl.textContent = current.substring(0, charIdx - 1);
    charIdx--;
    if (charIdx === 0) {
      deleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      setTimeout(typeNext, 300);
      return;
    }
    setTimeout(typeNext, 40);
  }
}

// ─── Chat Widget Logic ────────────────────────────────────────────
const chatModal  = document.getElementById('chatModal');
const chatFab    = document.getElementById('chatFab');
const chatClose  = document.getElementById('chatClose');
const chatInput  = document.getElementById('chatInput');
const chatSend   = document.getElementById('chatSend');
const chatMsgs   = document.getElementById('chatMessages');
const chatTyping = document.getElementById('chatTyping');
const openChatBtn   = document.getElementById('openChatBtn');
const heroAskBtn    = document.getElementById('heroAskBtn');
const contactAskBtn = document.getElementById('contactAskBtn');

function openChat() {
  chatModal.classList.add('open');
  document.body.style.overflow = 'hidden';
  setTimeout(() => chatInput.focus(), 400);
}

function closeChat() {
  chatModal.classList.remove('open');
  document.body.style.overflow = '';
}

chatFab.addEventListener('click', openChat);
openChatBtn?.addEventListener('click', openChat);
heroAskBtn?.addEventListener('click', openChat);
contactAskBtn?.addEventListener('click', openChat);
chatClose.addEventListener('click', closeChat);

// Close on backdrop click
chatModal.addEventListener('click', (e) => {
  if (e.target === chatModal) closeChat();
});

// Quick questions event delegation
chatMsgs.addEventListener('click', (e) => {
  const btn = e.target.closest('.quick-q');
  if (btn && btn.dataset.q) {
    sendMessage(btn.dataset.q);
  }
});

function addMessage(text, role = 'ai') {
  const div = document.createElement('div');
  div.className = `chat-message ${role === 'ai' ? 'ai-message' : 'user-message'}`;

  // Parse basic markdown-like formatting
  const formattedText = text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\n/g, '<br>');

  div.innerHTML = `
    <div class="msg-avatar">${role === 'ai' ? '✦' : 'U'}</div>
    <div class="msg-bubble">${formattedText}</div>
  `;
  chatMsgs.appendChild(div);
  chatMsgs.scrollTop = chatMsgs.scrollHeight;
}

function showTyping() {
  chatTyping.classList.add('show');
  chatMsgs.scrollTop = chatMsgs.scrollHeight;
}

function hideTyping() {
  chatTyping.classList.remove('show');
}

function sendMessage(text) {
  const msg = (text || chatInput.value).trim();
  if (!msg) return;

  addMessage(msg, 'user');
  chatInput.value = '';

  showTyping();

  // Simulate thinking delay (300–900ms)
  const delay = 300 + Math.random() * 600;
  setTimeout(() => {
    hideTyping();
    const response = getAIResponse(msg);
    addMessage(response, 'ai');
  }, delay);
}

chatSend.addEventListener('click', () => sendMessage());

chatInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
});

// ─── Navbar scroll effect ─────────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ─── Hamburger mobile menu ────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('mobile-open');
});

// Close mobile menu on link click
navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('mobile-open'));
});

// ─── Scroll reveal animations ─────────────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

function setupReveal() {
  const targets = document.querySelectorAll(
    '.info-card, .skill-category, .cert-card, .contact-card, .timeline-card, .about-text, .about-cards'
  );
  targets.forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
  });
}

// ─── Active nav link highlight ────────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinkEls = document.querySelectorAll('.nav-link');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinkEls.forEach(link => {
        link.style.color = link.getAttribute('href') === `#${id}`
          ? 'var(--accent-2)'
          : '';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(sec => navObserver.observe(sec));

// ─── Smooth scroll for all anchor links ──────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ─── Floating badges animation override (avoid overlap on mobile) ─
function positionBadges() {
  const w = window.innerWidth;
  if (w < 768) {
    document.querySelectorAll('.floating-badge').forEach(b => b.style.display = 'none');
  } else {
    document.querySelectorAll('.floating-badge').forEach(b => b.style.display = '');
  }
}

// ─── Dynamic animated background particles ───────────────────────
function createParticles() {
  const canvas = document.getElementById('bgCanvas');
  const count = window.innerWidth < 768 ? 15 : 30;

  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    const size = 1 + Math.random() * 2;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const dur = 10 + Math.random() * 20;
    const del = Math.random() * -20;

    p.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      background: rgba(99,120,255,${0.2 + Math.random() * 0.5});
      border-radius: 50%;
      left: ${x}%;
      top: ${y}%;
      animation: floatParticle ${dur}s ${del}s ease-in-out infinite alternate;
      box-shadow: 0 0 ${size * 4}px rgba(99,120,255,0.4);
    `;
    canvas.appendChild(p);
  }

  // Add CSS for particle animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes floatParticle {
      0%   { transform: translate(0, 0) scale(1); opacity: 0.3; }
      33%  { transform: translate(${randPx()}, ${randPx()}) scale(1.2); opacity: 0.8; }
      66%  { transform: translate(${randPx()}, ${randPx()}) scale(0.9); opacity: 0.5; }
      100% { transform: translate(${randPx()}, ${randPx()}) scale(1.1); opacity: 0.4; }
    }
  `;
  document.head.appendChild(style);
}

function randPx() {
  return `${(Math.random() - 0.5) * 80}px`;
}

// ─── PDF Lightbox ─────────────────────────────────────────────────
const pdfLightbox = document.getElementById('pdfLightbox');
const pdfBackdrop = document.getElementById('pdfBackdrop');
const pdfClose    = document.getElementById('pdfClose');
const pdfFrame    = document.getElementById('pdfFrame');
const pdfTitle    = document.getElementById('pdfTitle');
const pdfDownload = document.getElementById('pdfDownload');

function openPDF(path, title) {
  pdfFrame.src = path;
  pdfTitle.textContent = title;
  pdfDownload.href = path;
  pdfDownload.setAttribute('download', title + '.pdf');
  pdfLightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closePDF() {
  pdfLightbox.classList.remove('open');
  document.body.style.overflow = '';
  setTimeout(() => { pdfFrame.src = ''; }, 400);
}

pdfClose?.addEventListener('click', closePDF);
pdfBackdrop?.addEventListener('click', closePDF);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (pdfLightbox?.classList.contains('open')) closePDF();
    if (chatModal?.classList.contains('open')) closeChat();
  }
});

function initCertCards() {
  document.querySelectorAll('.cert-card[data-pdf]').forEach(card => {
    card.addEventListener('click', () => {
      const path  = card.dataset.pdf;
      const title = card.dataset.title || 'Certificate';
      openPDF(path, title);
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });
}

// ─── Init ─────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  typeNext();
  setupReveal();
  createParticles();
  positionBadges();
  initCertCards();

  window.addEventListener('resize', positionBadges);

  // Entrance animation for hero elements
  document.querySelector('.hero-content')?.classList.add('visible');

  // Log welcome message
  console.log(
    '%c✦ Shubh Namdeo Portfolio%c\nBuilt with 💜 and AI\nInspect away!',
    'color: #6378ff; font-size: 18px; font-weight: bold;',
    'color: #94a3b8; font-size: 12px;'
  );
});
