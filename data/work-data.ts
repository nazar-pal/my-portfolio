import { env } from '@/env'

export interface Project {
  title: string
  description: string
  tech: string[]
  status: string
  type: 'mobile' | 'web'
  badges: string[]
  image: string
  details: string
  link?: string
}

export const projects: Project[] = [
  {
    title: 'Breadly',
    description:
      'SaaS mobile application for tracking budgets and expenses with AI integration for receipt scanning and voice expense entry. Designed to be the first app on the market capable of automatically categorizing expenses from long receipts, saving users significant manual entry time.',
    tech: [
      'Expo',
      'React Native',
      'tRPC',
      'Zod',
      'TanStack Query',
      'Drizzle ORM',
      'PostgreSQL',
      'SQLite',
      'PowerSync',
      'Clerk Auth',
      'AI SDK',
      'RevenueCat',
      'Paddle',
      'TypeScript'
    ],
    status: 'In Development',
    type: 'mobile',
    badges: ['Mobile App', 'Local First'],
    image: '/images/breadly-screenshot.png',
    details:
      'Currently in late development, preparing for early adopter release. Features AI-powered receipt scanning and voice expense entry system.'
  },
  {
    title: 'TimeCraft',
    description:
      'Fully functional SaaS application for tracking work time and measuring performance. Actively used daily by a group of beta testers, helping them gain clear insights into how time is distributed across projects. Supports Ukrainian, Russian, and English languages.',
    tech: [
      'React 19',
      'Next.js 15',
      'App Router',
      'Route Handlers',
      'Server Actions',
      'Server Components',
      'PPR',
      'TanStack Query',
      'TanStack Tables',
      'TailwindCSS',
      'Shadcn',
      'PostgreSQL',
      'Drizzle',
      'Clerk Auth',
      'TypeScript',
      'Zod'
    ],
    link: env.NEXT_PUBLIC_TIMECRAFT_URL,
    status: 'Live',
    type: 'web',
    badges: ['MVP Live'],
    image: '/images/timecraft-screenshot.png',
    details:
      'Deployed MVP with stable core features and multi-language support. Currently preparing to integrate payment features.'
  },
  {
    title: 'Workineuro',
    description:
      'Platform helping Ukrainians find employment in the EU, featuring a custom CMS with static generation and automatic rebuilds. Integrated deeply with Telegram Messenger - job postings from admin panel are automatically published to Telegram channel, and applications trigger instant notifications.',
    tech: [
      'React 19',
      'Next.js 15',
      'App Router',
      'Route Handlers',
      'Server Actions',
      'Server Components',
      'SSR',
      'SSG',
      'TanStack Query',
      'TanStack Tables',
      'TailwindCSS',
      'Shadcn',
      'MongoDB',
      'Mongoose',
      'Clerk Auth',
      'TypeScript'
    ],
    link: env.NEXT_PUBLIC_WORKINEURO_URL,
    status: 'Live',
    type: 'web',
    badges: ['Freelance Work', 'Custom CMS'],
    image: '/images/workineuro-screenshot.png',
    details:
      'Around 100 monthly visitors with ~50 job applications submitted. Reduced admin posting time by automating Telegram job announcements.'
  }
]
