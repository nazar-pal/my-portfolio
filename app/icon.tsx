import { ImageResponse } from 'next/og'

export const size = {
  width: 32,
  height: 32
}

export const contentType = 'image/png'

export default function Icon() {
  // Simple monogram icon with NP initials over gradient circle
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'radial-gradient(circle at 30% 30%, #7c3aed, #4338ca)',
          borderRadius: 9999
        }}
      >
        <div
          style={{
            fontSize: 18,
            fontWeight: 800,
            letterSpacing: -0.5,
            color: 'white',
            fontFamily: 'sans-serif'
          }}
        >
          NP
        </div>
      </div>
    ),
    {
      ...size
    }
  )
}
