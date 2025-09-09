import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DeepTrust - Instagram Deepfake Detection Demo',
  description: 'AI-powered deepfake detection system for Instagram - WIT Hackathon Demo',
  keywords: 'deepfake, detection, AI, Instagram, trust, verification',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">{children}</body>
    </html>
  )
}
