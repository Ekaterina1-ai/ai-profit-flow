import type { Messages } from '../types';

const messages = {
  nav: {
    solutions: 'Solutions',
    cases: 'Cases',
    contacts: 'Contacts',
    consultation: 'Consultation',
    writeUs: 'Write to us',
    openMenu: 'Open menu',
  },
  hero: {
    status: 'AI systems online · automation ready',
    titleLine1: 'SMART TECHNOLOGIES',
    titleLine2: 'FOR YOUR BUSINESS',
    subtitle: 'We automate routine work, increase sales, and save your time with custom AI solutions.',
    cta: 'Learn more',
  },
  workBoost: {
    titleBefore: 'How to simplify work and',
    titleAccent: 'reduce costs',
    titleAfter: 'with smart technologies?',
    card1Title: 'Get rid of routine tasks',
    card1Text: 'The system processes documents, answers customer questions, and speeds up work on its own.',
    card2Title: 'More data means more profit',
    card2Text: 'Automated analysis helps find new growth opportunities and make the right decisions.',
  },
  solutions: {
    title: 'Our Solutions',
    subtitle: 'The solution feed moves on its own. Hover over an icon to pause it, or open the full list.',
    showAll: 'Show all',
    hideList: 'Hide list',
    priceFrom: 'Price from',
    details: 'Details',
  },
  automationHelp: {
    titleBefore: 'How automation helps your employees',
    titleAccent: 'work faster and more efficiently',
    items: [
      {
        t: 'Work without delays',
        d: 'Automation takes over recurring processes, so employees spend less time on these tasks.',
      },
      {
        t: 'Fewer errors',
        d: 'The human factor is reduced: the system checks, analyzes, and provides accurate data by itself.',
      },
      {
        t: 'More output',
        d: 'Employees are freed from routine work and can focus on business growth and new ideas.',
      },
    ],
  },
  income: {
    titleBefore: 'How automation increases',
    titleAccent: 'revenue',
    titleAfter: 'for your business',
    steps: [
      {
        n: '01',
        t: 'Smart business',
        d: 'modern AI solutions make your company much stronger than competitors.',
      },
      {
        n: '02',
        t: 'Faster operations',
        d: 'process automation reduces time losses to a minimum.',
      },
      {
        n: '03',
        t: 'Higher sales',
        d: 'many more customers and deals without expanding your current team.',
      },
      {
        n: '04',
        t: 'Profit growth',
        d: 'the final result comes from lower costs and a multiple increase in efficiency.',
      },
    ],
  },
  cases: {
    title: 'Our Projects',
    subtitle: 'Successful automation solutions for different businesses',
    learnMore: 'Learn more',
    hide: 'Hide',
    benefits: 'Benefits',
    productUi: 'Product interface',
    watchPresentation: 'Watch presentation',
    sitePrefix: 'Site',
  },
  experts: {
    title: 'Our Experts',
    subtitle: 'A team of professionals in AI and automation',
    more: 'More details',
  },
  aiIntegration: {
    title: 'Embedding AI technologies into business processes',
    steps: [
      {
        t: 'Run an audit',
        d: 'We identify bottlenecks where AI will bring the most value.',
      },
      {
        t: 'Agree on a solution',
        d: 'Tailored individually to your company.',
      },
      {
        t: 'Integration',
        d: 'Smooth implementation of AI into existing systems.',
      },
      {
        t: 'Training',
        d: 'We train employees to work with the new tools.',
      },
      {
        t: 'Support',
        d: 'Technical support and specialist consultations.',
      },
    ],
  },
  plan: {
    titleBefore: 'Step-by-step work plan for',
    titleAccent: 'your tasks',
    show: 'Open the step-by-step plan',
    hide: 'Hide plan',
    steps: [
      {
        t: 'You submit a request',
        d: 'we contact you and discuss your tasks',
      },
      {
        t: 'We run an audit',
        d: 'we identify bottlenecks where AI will bring the most value',
      },
      {
        t: 'We agree on a solution',
        d: 'individually tailored to your company',
      },
      {
        t: 'We test and implement',
        d: 'we minimize risks and train your team',
      },
      {
        t: 'We support and optimize',
        d: 'we help you adapt to a new level of automation',
      },
    ],
    footerNote:
      'If your business has complex processes and many routine tasks, AI will help make work faster and more efficient.',
  },
  cta: {
    titleLine1: 'READY FOR DIGITAL',
    titleLine2: 'TRANSFORMATION?',
    subtitle:
      'Leave a request, and we will analyze your business processes for free to find at least 3 growth points with AI.',
    namePh: 'What is your name?',
    phonePh: '+7 (___) ___-__-__',
    agreePrefix: 'I agree to',
    agreeLink: 'the consent to personal data processing',
    submit: 'Submit request',
    submitting: 'Sending...',
    orWrite: 'Or write to us',
  },
  footer: {
    blurb: 'Professional integration of AI technologies into business. Smart solutions for those who value time.',
    contacts: 'Contacts',
    messengers: 'Messengers',
    rights: '© 2025 All rights reserved.',
    privacy: 'Data processing policy',
    legalName: 'Individual Entrepreneur Georgieva E.V.',
    inn: 'Tax ID 344692466070',
  },
  faq: {
    support: 'Support',
    online: 'Online · FAQ',
    leaveRequest: 'Leave a request',
    haveQuestions: 'Have questions?',
    close: 'Close',
    openAria: 'Open frequently asked questions',
    closeAria: 'Close support',
    items: [
      {
        q: 'Where does the work start?',
        a: 'With a free review of your processes: we look at where time and money are being lost and suggest 2-3 AI growth points. After approval, we launch a pilot or full implementation.',
      },
      {
        q: 'How much does implementation cost?',
        a: 'An audit starts from 15,000 RUB. Ready-made solutions (HR, analytics, bots, integrations) range from 30,000 to 75,000 RUB. The exact estimate depends on the scope of tasks and current systems.',
      },
      {
        q: 'How quickly will we see results?',
        a: 'The first effects are usually visible within the first month: less routine work, faster customer replies, and clearer reports. A full implementation cycle takes from 1 to 4 weeks depending on the task.',
      },
      {
        q: 'Do we need to replace our CRM or website?',
        a: 'No. We embed AI into what you already use: Bitrix24, AmoCRM, Telegram, spreadsheets, and your internal services. Moving to new platforms is not required.',
      },
      {
        q: 'Is this suitable for small businesses?',
        a: 'Yes. We start with one specific pain point, such as leads, hiring, support, or reporting, and scale only what truly saves time and increases profit.',
      },
      {
        q: 'What about data security?',
        a: 'We work only with the access that is needed, do not store unnecessary data, and configure roles so employees see only their area of responsibility. All details are fixed in the contract.',
      },
      {
        q: 'Do you train employees?',
        a: 'Yes. After implementation, we conduct training and leave simple instructions. If needed, we add monthly technical support and solution updates.',
      },
      {
        q: 'How can we contact you?',
        a: 'Write in Telegram, Max, or VK, call +7 (961) 675-06-54, or leave a request in the website form. We will reply during business hours the same day.',
      },
    ],
  },
  forms: {
    fillBoth: 'Please fill in both fields',
    agreeRequired: 'Please agree to personal data processing',
    sendError: 'Sending error',
    thankYou: '✅ Thank you! Your request has been sent. We will contact you soon.',
    serviceApplication: 'Service request',
    serviceCallHint: 'Leave your contacts. We will call you back and discuss the launch',
    launchProcess: 'Launch this process',
    backToDesc: '← Back to description',
    orWriteNow: 'Or write right away',
    applicationSent: 'Request sent',
    thanksService: 'Thank you! We will contact you about the service soon.',
  },
  services: [
    {
      id: 1,
      title: 'Process audit',
      shortDesc: 'We identify bottlenecks where AI will bring the most value to your business.',
      features: [
        'Analysis of current document workflows',
        'Search for routine manager tasks',
        'Assessment of time-saving potential',
        'Report with implementation recommendations',
      ],
    },
    {
      id: 2,
      title: 'HR and Hiring (AI)',
      shortDesc: 'Applications and resumes processed in seconds. An AI assistant for hiring quality control.',
      features: [
        'Automatic candidate scoring',
        'AI interviewer for initial screening',
        'Sentiment analysis of recruiter calls',
        'Result: +30% hiring efficiency',
      ],
    },
    {
      id: 3,
      title: 'AI Integration',
      shortDesc: 'Smooth implementation of AI technologies into your existing CRM and business systems.',
      features: [
        'Connecting AI with Bitrix24 / AmoCRM',
        'Setting up automatic replies in messengers',
        'Automation of incoming request processing',
        'Minimization of human errors',
      ],
    },
    {
      id: 4,
      title: 'Sales analytics',
      shortDesc: 'AI analyzes customer behavior and provides accurate profit forecasts.',
      features: [
        'Dashboards with key metrics',
        'Analysis of customer refusal reasons',
        'Personal recommendations for upsells',
        'Automated management reporting',
      ],
    },
    {
      id: 5,
      title: 'Staff training',
      shortDesc: 'We teach your team to work with new tools and neural networks.',
      features: [
        'Prompt engineering workshops',
        'Instructions for working with AI bots',
        'Employee support during adaptation',
        'Knowledge base built on your data',
      ],
    },
    {
      id: 6,
      title: 'E-commerce AI',
      shortDesc: 'Smart product recommendations. +15% to average order value with an AI assistant.',
      features: [
        'Personalized offers on the website',
        'Automatic database segmentation',
        'AI bot for return processing',
        'Dynamic price management',
      ],
    },
    {
      id: 7,
      title: 'Tour assistant',
      shortDesc: 'Instant tour selection by budget and route. Frees up 50% of managers’ time.',
      features: [
        'Integration with tour operator databases',
        'Automatic excursion selection',
        'AI consultant in Telegram 24/7',
        'Visa support through a bot',
      ],
    },
    {
      id: 8,
      title: 'Technical support',
      shortDesc: 'Maintenance and optimization of implemented solutions. Continuous monitoring.',
      features: [
        'Monthly model updates',
        'Specialist consultations',
        'Technical failure fixes',
        'Additional AI training for new tasks',
      ],
    },
  ],
  caseItems: [
    {
      id: 1,
      name: 'HR platform',
      result: 'Recruitment automation',
      text: 'A unified hiring ecosystem: applicants from different sources in one window, AI scoring, and interview preparation without manual routine.',
      benefits: [
        'All HR tools in one AI platform',
        'Unified candidate database from different sources',
        'AI resume scoring and support for initial screening',
        'Automatic selection of interview questions for each vacancy',
        'Transparent hiring funnel and candidate status tracking',
      ],
      screenshotsAlt: [
        'Main screen of the KadroAI HR platform',
        'HR platform section',
        'Hiring ecosystem interface',
        'Recruitment workspace screen',
      ],
    },
    {
      id: 2,
      name: 'AI logistics manager',
      result: 'Autonomous logistics',
      text: '24Logist controls drivers through WhatsApp, MAX, and SMS by itself: from departure to cargo handover, without endless dispatcher calls.',
      benefits: [
        'Automatic notification funnel for drivers at every trip stage',
        'Kanban trip board updated every 10 seconds',
        'One-click import of trips and drivers from Excel',
        'WhatsApp / MAX / SMS from one window, bulk messaging',
        'Reliability analytics for drivers, transport companies, and manager activity',
        'Company data isolation and action log',
      ],
      screenshotsAlt: ['24Logist website, main screen', '24Logist capabilities'],
    },
    {
      id: 3,
      name: 'AI procurement manager',
      result: 'Procurement optimization',
      text: 'AI ProfitFlow finds suppliers and sales channels in minutes: contacts, AI analysis, commercial offers, and Gmail sending in one workspace.',
      benefits: [
        'Two modes: supplier search and sales channel search',
        'AI queries plus regional search with clean results',
        'Parsing phone numbers and emails from websites',
        'AI offer scoring: pros, cons, and risks',
        'One-click commercial offer and Gmail OAuth sending',
        'Excel export and local search history',
      ],
      screenshotsAlt: ['Supplier search interface', 'AI analysis and commercial offer', 'AI ProfitFlow desktop'],
    },
    {
      id: 4,
      name: 'Beauty service',
      result: 'Comprehensive solution for salons',
      text: 'A custom platform for a salon brand: website, online booking, client account, admin panel, bonuses, referrals, and reminders.',
      benefits: [
        'Branded service website instead of a template widget',
        'Online booking 24/7: service, specialist, time slot',
        'Client account: bonuses, promotions, referrals, chat',
        'Admin panel: clients, schedule, specialists, push notifications, and chat',
        'You own the code, server, and data instead of renting a CRM',
        'Responsive layout and PWA for beauty clients on smartphones',
      ],
      screenshotsAlt: ['Norma Tela salon website', 'Beauty platform section', 'Mobile version', 'Client account'],
    },
  ],
  expertItems: [
    {
      id: 1,
      name: 'Ekaterina Georgieva',
      title: 'AI Programmer',
      shortDesc: 'Specialist in artificial intelligence programming and automation of complex processes.',
      fullDesc: `She turns data chaos into a clear system: from millions of rows, she builds one accurate, structured report with ready calculations.
She sees business processes deeper than the surface, finds where time, money, and resources are lost, and turns this into automated solutions. She will show what can be simplified, automated, and strengthened right now. She does not just implement a system, but also teaches how to work with it so you get the maximum result.
She creates services for company tasks and has ready-made solutions that can be quickly adapted and implemented.
Key skills:
• AI programming and process automation
• Creating systems for reports and calculations
• Business process analysis and optimization
• Developing services for company tasks
• Training and automation implementation
• Ready-made solutions for a quick start
Work result:
You get a system that replaces manual labor, reduces errors, and turns complex processes into a simple and clear mechanism.`,
    },
    {
      id: 2,
      name: 'Daria Lemeshevskaya',
      title: 'AI Bot Developer',
      shortDesc: 'Specialist in developing intelligent bots and automating business processes based on artificial intelligence.',
      fullDesc: `She creates solutions that truly work: from an idea to a complete system embedded in your business. She writes code, builds logic and architecture, so bots work stably, without failures or fragile workarounds.
She has completed more than 100 projects, from simple assistants to complex AI agents that automate sales, HR processes, data processing, and customer service.
Key skills:
• Developing AI bots for business tasks
• Programming and creating system logic
• Integrations with APIs, CRM, and Google services
• Process automation for sales, HR, and analytics
• Creating stable solutions without failures
Work result:
You get not just a bot, but a tool that saves time, reduces team workload, and increases profit.`,
    },
    {
      id: 3,
      name: 'Evgeniya Kirillova',
      title: 'AI Service Architect',
      shortDesc: 'Specialist in creating and developing neural network based services, turning ideas into thoughtful, stable, scalable solutions.',
      fullDesc: `She constantly studies new AI capabilities and implements them in projects, so you receive not just a working tool, but a modern system with room to grow. She can build a service structure from scratch, design its logic, and add features you may not have thought of, but that critically strengthen the result.
She creates services that work stably without failures and can scale easily for business tasks.
She has delivered projects in different niches: HR, medicine including dentistry, service businesses, and commercial fields.
Key skills:
• Designing and developing AI services
• Deep understanding of neural network capabilities
• Building product structure and logic
• Adding functionality that strengthens efficiency
• Creating stable and scalable solutions
Work result:
You get not just a service, but a thoughtful system that grows with your business, strengthens processes, and gives you a competitive advantage.`,
    },
  ],
  common: {
    close: 'Close',
    currency: '₽',
  },
  lang: {
    label: 'Language',
    choose: 'Choose language',
  },
} satisfies Messages;

export default messages;
