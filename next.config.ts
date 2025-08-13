import type { NextConfig } from 'next'
import './env.ts'

const nextConfig: NextConfig = {
  experimental: {
    // dynamicIO: true,
    // ppr: 'incremental',
    reactCompiler: true
  }
}

export default nextConfig
