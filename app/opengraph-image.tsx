import { env } from '@/env'
import { ImageResponse } from 'next/og'

export const size = {
  width: 1200,
  height: 630
}

export const contentType = 'image/png'

export default function Image() {
  const hostname = (() => {
    try {
      return new URL(env.NEXT_PUBLIC_SITE_URL).hostname.replace(/^www\./, '')
    } catch {
      return 'nazar-palamarchuk.com'
    }
  })()
  const gradient =
    'linear-gradient(135deg, oklch(0.65 0.25 264), oklch(0.7 0.2 280))'
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0f0e17'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            background: gradient,
            padding: 64
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: 'white',
              letterSpacing: -1,
              fontFamily: 'sans-serif',
              textAlign: 'center'
            }}
          >
            Nazar Palamarchuk
          </div>
          <div
            style={{
              marginTop: 12,
              fontSize: 36,
              color: 'white',
              opacity: 0.9,
              fontFamily: 'sans-serif',
              textAlign: 'center'
            }}
          >
            Full Stack Web, Mobile, and AI Developer
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 28,
              color: 'white',
              opacity: 0.85,
              fontFamily: 'sans-serif'
            }}
          >
            {hostname}
          </div>
        </div>
      </div>
    ),
    {
      ...size
    }
  )
}
