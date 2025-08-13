import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod/mini'

export const env = createEnv({
  client: {
    // Site
    NEXT_PUBLIC_SITE_URL: z.url(),

    // Contact
    NEXT_PUBLIC_CONTACT_EMAIL: z.email(),
    NEXT_PUBLIC_CONTACT_PHONE_E164: z
      .string()
      .check(z.regex(/^\+[1-9]\d{1,14}$/)),
    NEXT_PUBLIC_CONTACT_PHONE_DISPLAY: z.string().check(z.minLength(1)),

    // Social
    NEXT_PUBLIC_GITHUB_URL: z.url(),
    NEXT_PUBLIC_LINKEDIN_URL: z.url(),

    // Project Links
    NEXT_PUBLIC_TIMECRAFT_URL: z.url(),
    NEXT_PUBLIC_WORKINEURO_URL: z.url()
  },

  runtimeEnv: {
    // Site
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,

    // Social
    NEXT_PUBLIC_GITHUB_URL: process.env.NEXT_PUBLIC_GITHUB_URL,
    NEXT_PUBLIC_LINKEDIN_URL: process.env.NEXT_PUBLIC_LINKEDIN_URL,

    // Contact
    NEXT_PUBLIC_CONTACT_EMAIL: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
    NEXT_PUBLIC_CONTACT_PHONE_E164: process.env.NEXT_PUBLIC_CONTACT_PHONE_E164,
    NEXT_PUBLIC_CONTACT_PHONE_DISPLAY:
      process.env.NEXT_PUBLIC_CONTACT_PHONE_DISPLAY,

    // Project Links
    NEXT_PUBLIC_TIMECRAFT_URL: process.env.NEXT_PUBLIC_TIMECRAFT_URL,
    NEXT_PUBLIC_WORKINEURO_URL: process.env.NEXT_PUBLIC_WORKINEURO_URL
  },

  emptyStringAsUndefined: true
})
