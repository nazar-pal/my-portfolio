import { env } from '@/env'
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = env.NEXT_PUBLIC_SITE_URL
  const now = new Date().toISOString()
  return [
    {
      url: `${base}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1
    },
    {
      url: `${base}/cv.json`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.5
    },
    {
      url: `${base}/cv.pdf`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.5
    }
  ]
}
