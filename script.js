/* ================================================
   SHUBH NAMDEO PORTFOLIO — JavaScript & AI Engine
   ================================================ */

// ─── Knowledge Base: Everything about Shubh ───────────────────────
const SHUBH_KNOWLEDGE = {
  name: "Shubh Namdeo",
  pronouns: "He/Him",
  title: "Software Engineer | AI Agents & Backend Development | Python, Node.js, GenAI",
  location: "Greater Jabalpur Area, India",
  workPreference: "Open to On-site, Hybrid, and Remote roles across India",
  status: "Actively seeking full-time opportunities",
  github: "https://github.com/Shubhnamdeo",
  linkedin: "https://www.linkedin.com/in/shubh-namdeo",

  about: `Shubh Namdeo is a Software Engineer specializing in backend architecture, cloud infrastructure, and Generative AI integration. 
  Through a recent 6-month enterprise internship and his B.Tech in Computer Science, he has built scalable, AI-powered applications 
  that handle real-time data for hundreds of users. He is passionate about Generative AI and actively seeks to push boundaries 
  in AI agent development and cloud-native backend systems.`,

  education: {
    degree: "Bachelor of Technology (B.Tech) in Computer Science",
    institution: "Gyan Ganga Institute of Technology Sciences (GGITS)",
    duration: "May 2022 – June 2026",
    cgpa: "7.39",
    skills: ["Programming", "Communication", "Data Structures", "Algorithms"]
  },

  experience: [
    {
      role: "Sales Associate",
      company: "Learning Routes Pvt. Ltd.",
      duration: "2026 – Present",
      location: "India",
      current: true,
      highlights: [
        "Managed client communications, lead pipelines, and consultative advisory for higher education solutions",
        "Utilized CRM platforms to track customer data, analyze sales conversion metrics, and maintain lead databases",
        "Demonstrated high adaptability, strategic communication, and enterprise negotiation skills"
      ],
      techStack: ["Consultative Sales", "CRM Systems", "Client Relationship", "Data Management"]
    },
    {
      role: "Salesforce AI Agent Developer Trainee",
      company: "SmartBridge (LastMile Program)",
      duration: "April 2025 – January 2026",
      months: "6 months",
      location: "India",
      current: false,
      highlights: [
        "Developed automated business logic utilizing Salesforce AI and Apex, streamlining user interactions and significantly improving system response efficiency",
        "Navigated complex cloud environments to ensure all system actions rigorously complied with procedural guidelines and enterprise architecture standards",
        "Configured Field-Level Security (FLS) protocols to guarantee data privacy and structural integrity, aligning with modern data protection standards",
        "Participated in the 100K Agentblazer Champions Program, actively configuring and deploying Salesforce AI agents",
        "Attended a 3-Day National Workshop to expand Agentforce expertise",
        "Completed a Capstone Project demonstrating the real-world application of AI Agents in Salesforce"
      ],
      techStack: ["Salesforce", "Apex", "AI Agents", "Agentforce", "FLS Security", "Einstein Agent"]
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
  const q = question.toLowerCase().trim();
  const kb = SHUBH_KNOWLEDGE;

  // Helper to list certs by category
  const certsByCategory = (cat) =>
    kb.certifications.filter(c => c.category === cat).map(c => `• **${c.name}** — ${c.issuer}`).join('\n');

  // ── Greeting / intro
  if (/^(hi|hello|hey|howdy|sup|yo)\b/.test(q)) {
    return `Hey there! 👋 I'm Shubh's AI assistant. I know all about his skills, experience, certifications, and career journey.\n\nFeel free to ask me anything — like "What are his skills?", "Tell me about his internship", or "Is he looking for a job?"`;
  }

  // ── Name / who
  if (/who (is|are) (shubh|he|you)|tell me about (shubh|him|yourself)/.test(q) || /about shubh/.test(q)) {
    return `**Shubh Namdeo** is a Software Engineer from Greater Jabalpur, India 🇮🇳\n\n${kb.about}\n\n🔑 **Core Stack:** Python, Node.js, AWS, MongoDB, Salesforce, Prompt Engineering\n\n📍 Open to On-site, Hybrid & Remote opportunities across India.`;
  }

  // ── Skills
  if (/skill|tech|stack|know|proficient|good at|expertise|language|framework/.test(q)) {
    return `Here's Shubh's technical arsenal 🛠️\n\n🤖 **AI & GenAI:** ${kb.skills.aiML.slice(0,6).join(', ')}\n\n💻 **Languages:** ${kb.skills.languages.join(', ')}\n\n☁️ **Cloud & Infra:** ${kb.skills.cloud.join(', ')}\n\n📊 **Data & Analytics:** ${kb.skills.data.join(', ')}\n\n**Top 5 LinkedIn Skills:** ${kb.topSkills.join(' • ')}`;
  }

  // ── Experience / internship / work
  if (/experience|internship|work|job|employ|smartbridge|salesforce developer|agentblazer|lastmile|last.mile/.test(q)) {
    const exp = kb.experience[0];
    return `**${exp.role}** @ ${exp.company} ✅ Current\n📅 ${exp.duration} (${exp.months})\n\n**Key Achievements:**\n${exp.highlights.map(h => `→ ${h}`).join('\n')}\n\n🛠️ **Tech Used:** ${exp.techStack.join(', ')}`;
  }

  // ── Certifications
  if (/certif|cert|badge|credential|award|completed|course/.test(q)) {
    const total = kb.certifications.length;
    if (/google|gcp|cloud skill/.test(q)) {
      return `☁️ **Google Cloud Skill Badges (3):**\n\n${kb.googleCloudBadges.map(b => `🏅 ${b}`).join('\n')}\n\nAll issued by **Google Cloud** via Credly.`;
    }
    if (/ai|machine learning|ml|prompt|gemini|genai/.test(q)) {
      return `🤖 **AI & ML Certifications:**\n\n${certsByCategory('AI')}\n\nShubh is deeply committed to mastering AI — from prompt engineering to building full AI agents!`;
    }
    if (/salesforce|agentforce|einstein/.test(q)) {
      return `⚡ **Salesforce Certifications:**\n\n${certsByCategory('Salesforce')}\n\nHe completed the prestigious LastMile Program and the 100K Agentblazer Champions Program!`;
    }
    if (/aws|amazon|cloud/.test(q)) {
      return `☁️ **Cloud Certifications:**\n\n${certsByCategory('Cloud')}\n${certsByCategory('Security')}\n\nAWS Academy Graduate + CCSK certified.`;
    }
    return `🏆 Shubh has earned **${total}+ certifications** across multiple domains!\n\n🤖 **AI/ML:** Google Cloud ADK, Vertex AI, Gemini RAG, Prompt Engineering\n⚡ **Salesforce:** AI Developer, Agentblazer Champion\n☁️ **Cloud:** AWS, CCSK Cloud Security\n🔐 **Security:** Cisco Cybersecurity Essentials, Intro to Cybersecurity\n💻 **Programming:** C++, Java, Linux Essentials\n📊 **Data:** Power BI, Data Science\n\nAsk me about any specific category! 🎯`;
  }

  // ── Education
  if (/education|study|college|university|degree|btech|b\.tech|ggits|gyan ganga|cgpa|grade/.test(q)) {
    const edu = kb.education;
    return `🎓 **${edu.degree}**\n🏫 ${edu.institution}\n📅 ${edu.duration}\n📊 CGPA: **${edu.cgpa}**\n\nSkills developed: ${edu.skills.join(', ')}`;
  }

  // ── Location / remote
  if (/location|where|city|india|jabalpur|remote|hybrid|onsite|on.site/.test(q)) {
    return `📍 Shubh is based in **Greater Jabalpur, India**.\n\nHe is open to all work arrangements:\n✅ **On-site** — Jabalpur and anywhere in India\n✅ **Hybrid** — Flexible schedule\n✅ **Remote** — Fully remote opportunities worldwide`;
  }

  // ── Availability / job search
  if (/availab|looking|hire|job|opportunit|open to|recruit|seek|employ/.test(q)) {
    return `✅ **Yes! Shubh is actively looking for full-time opportunities!**\n\nHe is graduating in June 2026 and ready to bring his skills to a high-impact team.\n\n**Ideal Roles:**\n• Backend Engineer / Software Engineer\n• AI Engineer / GenAI Developer\n• Salesforce Developer\n• Full-Stack Developer\n\n📬 **Best way to reach him:**\n🔗 LinkedIn: linkedin.com/in/shubh-namdeo\n🐙 GitHub: github.com/Shubhnamdeo`;
  }

  // ── AI Agent specific
  if (/ai agent|agentic|agent dev|agent build|einstein|agentforce/.test(q)) {
    return `🤖 **AI Agents are Shubh's specialty!**\n\nHe has hands-on experience:\n• **Google Cloud ADK** — Engineered AI agents with the Agent Development Kit\n• **Salesforce Einstein/Agentforce** — Built and deployed enterprise AI agents via the 100K Agentblazer Champions Program\n• **Gemini Multimodality** — Worked with multimodal RAG systems\n• **Prompt Engineering** — Advanced techniques including Chain-of-Thought and Few-Shot methods\n\nHe's not just studying AI agents — he's building them! 🚀`;
  }

  // ── Prompt engineering
  if (/prompt|engineering|chain.of.thought|few.shot|hallucin|cot/.test(q)) {
    return `✨ **Prompt Engineering — Shubh's Core Skill!**\n\nHe holds multiple certifications in this domain:\n• **Advanced Prompt Engineering** (Simplilearn)\n• **Prompt Design in Vertex AI** (Google Cloud Skill Badge)\n• **Gemini Multimodality & Multimodal RAG** (Google Cloud)\n\nTechniques mastered:\n→ Chain-of-Thought (CoT) Prompting\n→ Few-Shot Prompting\n→ Minimizing AI hallucinations\n→ Structuring prompts for coding & automation tasks`;
  }

  // ── Python / Node.js
  if (/python/.test(q)) {
    return `🐍 **Python** is one of Shubh's primary languages!\n\nHe uses Python for:\n• AI/ML model integration\n• Backend API development\n• Automation scripts\n• GenAI application development\n\nIt's listed as his #1 top skill on LinkedIn.`;
  }

  if (/node(\.js)?/.test(q)) {
    return `⚡ **Node.js** is a core part of Shubh's stack!\n\nHe uses Node.js for:\n• Backend server development\n• RESTful API design\n• Real-time applications\n• Microservice architecture`;
  }

  // ── AWS
  if (/aws|amazon web|cloud service/.test(q)) {
    return `☁️ **AWS (Amazon Web Services)** — Shubh is an AWS Academy Graduate!\n\nCertification: **AWS Academy Cloud Foundations**\nIssued by: Amazon Web Services Training & Certification\n\nHe has hands-on knowledge of:\n• EC2 instances & compute services\n• Cloud storage and databases\n• Cloud architecture principles\n• Security best practices on AWS`;
  }

  // ── GitHub / projects
  if (/github|project|portfolio|code|repo|repository/.test(q)) {
    return `🐙 **Check out Shubh's GitHub!**\n\n🔗 github.com/Shubhnamdeo\n\nHis GitHub profile showcases his projects and code. He regularly commits and builds real-world applications combining AI with backend development.\n\nYou can also find his LinkedIn featured section highlighting his open-source work!`;
  }

  // ── Contact
  if (/contact|reach|email|message|connect|talk/.test(q)) {
    return `📬 **How to reach Shubh:**\n\n🔗 **LinkedIn:** linkedin.com/in/shubh-namdeo (Best way!)\n🐙 **GitHub:** github.com/Shubhnamdeo\n\n💡 He's very responsive on LinkedIn. Don't hesitate to send a connection request and a message — he's actively looking for opportunities!`;
  }

  // ── Interests / hobbies
  if (/interest|passion|hobby|like|love|enjoy/.test(q)) {
    return `💡 **Shubh's Passions:**\n\n${kb.interests.map(i => `• ${i}`).join('\n')}\n\nHe's driven by continuous learning — just look at his 15+ certifications! He posts regularly on LinkedIn about his learning journey and achievements. 🚀`;
  }

  // ── LinkedIn / stats
  if (/linkedin|follower|connection|post|network/.test(q)) {
    return `📊 **Shubh on LinkedIn:**\n\n👥 **338 followers** | **248 connections**\n📝 Active poster — regularly shares certifications, learning milestones, and insights about AI\n\n🔗 linkedin.com/in/shubh-namdeo\n\nHis recent posts cover Google Cloud skill badges, Salesforce Agentblazer, Advanced Prompt Engineering, and more!`;
  }

  // ── Fun facts
  if (/fun fact|surprising|interesting|unique|special/.test(q)) {
    return `🎉 **Fun Facts about Shubh:**\n\n• He has earned **15+ certifications** — and counting!\n• Part of the elite **100K Agentblazer Champions Program** by Salesforce\n• Earned **3 Google Cloud Skill Badges** in AI/ML in 2025\n• His LinkedIn post on Einstein Agent got **1,555 impressions!**\n• He started his B.Tech in 2022 and is graduating in 2026 — in that time, he's packed in an incredible amount of upskilling 💪`;
  }

  // ── What can you ask
  if (/what can|what should|help|ask|question/.test(q)) {
    return `Here are things you can ask me about Shubh:\n\n🎯 **Career:** "Is he looking for a job?" / "What roles suit him?"\n💻 **Skills:** "What programming languages does he know?"\n🤖 **AI:** "Tell me about his AI experience"\n🏆 **Certs:** "What certifications does he have?"\n🎓 **Education:** "Where did he study?"\n📬 **Contact:** "How can I reach Shubh?"\n📍 **Location:** "Where is he based?"\n\nJust type your question and I'll answer! 😊`;
  }

  // ── Default fallback
  return `Great question! Based on what I know about Shubh:\n\nHe's a **Software Engineer** specializing in **AI Agents, Backend Development, Python, Node.js, and GenAI**. With 15+ certifications and a 10-month enterprise internship at SmartBridge, he's currently seeking full-time opportunities.\n\n📬 For a direct conversation, reach him on **LinkedIn**: linkedin.com/in/shubh-namdeo\n\nOr try asking me something more specific like:\n• "What are his top skills?"\n• "Tell me about his certifications"\n• "Is he open to remote work?"`;
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

// Quick questions
document.querySelectorAll('.quick-q').forEach(btn => {
  btn.addEventListener('click', () => {
    sendMessage(btn.dataset.q);
  });
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
