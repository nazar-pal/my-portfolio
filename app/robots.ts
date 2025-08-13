import { env } from '@/env'
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const base = env.NEXT_PUBLIC_SITE_URL
  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    sitemap: [`${base}/sitemap.xml`]
  }
}
