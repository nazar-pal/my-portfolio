import { ImageResponse } from 'next/og'

export const size = {
  width: 180,
  height: 180
}

export const contentType = 'image/png'

export default function AppleIcon() {
  // Pinned-tab / apple touch icon style
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
          borderRadius: 32
        }}
      >
        <div
          style={{
            fontSize: 80,
            fontWeight: 900,
            letterSpacing: -1,
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
