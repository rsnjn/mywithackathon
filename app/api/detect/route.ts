import { NextRequest, NextResponse } from 'next/server'

// Mock deepfake detection API endpoint
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { imageUrl, contentType } = body

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Mock detection logic based on keywords and patterns
    const mockDetection = {
      confidence: Math.floor(Math.random() * 40) + 60, // 60-100%
      isDeepfake: true,
      level: contentType === 'political' ? 2 : 1,
      reasons: contentType === 'political' ? [
        'High-impact political figure detected',
        'Claims about real-world policy actions', 
        'Facial artifacts consistent with deepfake generation',
        'Call-to-action to share increases misinformation risk'
      ] : [
        'Facial inconsistencies detected around mouth area',
        'Voice pattern anomalies in audio track',
        'Lighting inconsistencies with background'
      ],
      isHarmful: contentType === 'political'
    }

    return NextResponse.json({
      success: true,
      data: mockDetection
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Detection failed' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'DeepTrust Detection API',
    version: '1.0.0',
    status: 'active'
  })
}
