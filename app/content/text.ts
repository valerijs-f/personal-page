/**
 * Centralized copy for the site. Replace or add locale keys here when adding translations.
 */

export type AboutSegment = string | { link: true; href: string; text: string }

export const text = {
  home: {
    name: 'Valerijs Farbtuhs',
    tagline: 'Medior Full Stack developer',
    subtitle: 'I build responsive, scalable and accessible applications.',
    about: {
      title: 'About me',
      paragraph1:
        "I discovered my passion for creating things through code when I took Harvard's CS50 course — a general introduction to computer science where I built my very first web app as a final project. That moment of turning an idea into something real, something interactive, instantly hooked me. Since then, I've been fascinated by how web development blends logic and creativity to shape experiences that people actually use.",
      paragraph2Parts: [
        'During my university years, I dove deeper into programming, constantly learning and experimenting to bring my ideas to life. After graduating, I was lucky to turn this passion into a career, applying my skills across diverse projects and domains — from ',
        { link: true, href: 'https://www.thuisbezorgd.nl/en/courier', text: 'recruitment' },
        ' and ',
        { link: true, href: 'https://zorgselect.nl/', text: 'healtcare' },
        ' to ',
        { link: true, href: 'https://vrm.victronenergy.com/', text: 'energy management' },
        ' — each one teaching me something new about people, technology, and impact.',
      ] as AboutSegment[],
      paragraph3:
        'Outside of work, I enjoy staying active through sports, particularly beach volleyball, going to the gym, and occasionally playing racket sports.',
    },
    experience: {
      title: 'Experience',
    },
    projects: {
      title: 'Projects',
    },
    experiences: [
      {
        period: '2023 - present',
        role: 'Fullstack Developer',
        company: 'El Niño',
        companyUrl: 'https://elnino.tech/',
        location: 'Enschede, Netherlands',
        skills: [
          'Vue',
          'React',
          'Angular',
          'Laravel',
          'PHP',
          'Python',
          'MySQL',
          'Tailwind',
          'Cypress',
          'Docker',
        ],
        description: `I build and maintain responsive web applications using Vue, while also working with Angular and React on various projects. Alongside frontend development, I occasionally contribute to backend tasks using Laravel, Laravel Nova, and PHP, as well as Python for internal administration and support tools. Collaborating closely with designers, developers, and product owners, I focus on delivering clean, accessible, and user-centered digital experiences.`,
      },
      {
        period: '2022 - 2024',
        role: 'Teaching Assistant',
        company: 'University of Twente',
        companyUrl: 'https://www.utwente.nl/en/',
        location: 'Enschede, Netherlands',
        skills: ['Java', 'UML', 'OOP'],
        description: `I supported students in developing strong programming and problem-solving skills through hands-on Java labs and personalized guidance. I provided real-time debugging help, explained core object-oriented programming concepts, and gave detailed feedback on assignments to help students improve both their technical and analytical thinking.`,
      },
    ],
    projectsList: [
      {
        role: 'Local-first shared lists',
        company: 'Common Lists',
        companyUrl: 'https://common-list.valerijs.dev/',
        skills: ['Vue', 'Tailwind', 'Jazz Cloud', 'Vercel'],
        icon: 'CommonListIcon',
        repository: {
          link: 'https://github.com/valerijs-f/common-list',
        },
        description: `A collaborative list app where changes ripple across tabs and devices in real time, yet works offline usable when the network drops. Features include passkey sign-in, shareable URLs, and drag-and-drop ordering on top of Jazz’s synced CoValues. The app is inspired by the presentation of Alexander Opalic at Vue.js Amsterdam 2026.`,
      },
      {
        role: 'Portfolio Site',
        skills: ['Nuxt.js', 'Vue', 'Tailwind'],
        icon: 'LogoMinimalIcon',
        repository: {
          link: 'https://github.com/valerijs-f/personal-page',
        },
        description: `This very portfolio site is my first publicly available project, built to showcase my skills, experience, and personal approach to development. I implemented it from scratch, focusing on clean UI, accessibility, responsive layout, and a smooth user experience. It serves as both a practical demonstration of my abilities and a foundation I plan to expand as I grow professionally.`,
      },
      {
        role: 'Telegram Expense Tracker',
        company: 'Telegram Bot',
        companyUrl: 'https://t.me/valcodes_expense_tracker_bot',
        skills: [
          'Nuxt.js',
          'TypeScript',
          'Telegram Mini App',
          'Google Sheets API',
          'Service Accounts',
        ],
        image: 'tracker-logo',
        repository: {
          link: 'https://github.com/valerijs-f/expense-tracker',
        },
        description: `A personal Telegram Mini App created to simplify everyday expense tracking for me and my girlfriend. It replaces a manual Google Sheets workflow we had been using for years, making it faster and easier to log expenses in daily life. The project is built around convenience and consistency, turning a repetitive task into a lightweight, habit-friendly process.`,
      },
    ],
  },
  header: {
    ariaHome: 'Go to homepage',
    ariaGitHub: 'GitHub profile',
    ariaLinkedIn: 'LinkedIn profile',
    ariaEmail: 'Contact via email',
    ariaToggleTheme: 'Toggle theme',
  },
  footer: {
    codedIn: 'This website was coded in',
    using: 'using',
    with: 'with',
    andJavaScript: 'and JavaScript',
    styledWith: 'styled with',
    andBuiltWith: 'and built with',
    deploymentHandledBy: 'Deployment is handled by',
    ariaVsCode: 'Link to VS Code',
    ariaNuxt: 'Link to Nuxt',
    ariaVue: 'Link to Vue',
    ariaTailwind: 'Link to Tailwind',
    ariaVite: 'Link to Vite',
    ariaNetlify: 'Link to Netlify',
    linkText: {
      vsCode: 'VS Code',
      nuxt: 'Nuxt',
      vue: 'Vue',
      tailwind: 'Tailwind CSS',
      vite: 'Vite',
      netlify: 'Netlify',
    },
    links: {
      vsCode: { href: 'https://code.visualstudio.com/', labelKey: 'ariaVsCode' },
      nuxt: { href: 'https://nuxt.com/', labelKey: 'ariaNuxt' },
      vue: { href: 'https://vuejs.org/', labelKey: 'ariaVue' },
      tailwind: { href: 'https://tailwindcss.com/', labelKey: 'ariaTailwind' },
      vite: { href: 'https://vite.dev/', labelKey: 'ariaVite' },
      netlify: { href: 'https://www.netlify.com/', labelKey: 'ariaNetlify' },
    },
  },
  experienceCard: {
    ariaEmployerLink: "Link to employer's site",
    ariaRepositoryLink: 'Repository link',
    repositoryDefault: 'Repository',
  },
} as const
