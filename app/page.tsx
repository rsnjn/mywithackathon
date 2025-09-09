'use client'

import { useState, useEffect } from 'react'
import { 
  Heart, 
  MessageCircle, 
  Send, 
  Bookmark, 
  MoreHorizontal, 
  Shield, 
  AlertTriangle, 
  Info, 
  X, 
  Play,
  Camera,
  Search,
  Home,
  Compass,
  User
} from 'lucide-react'

interface Post {
  id: string
  user: {
    username: string
    avatar: string
    verified?: boolean
  }
  content: {
    type: 'image' | 'video'
    url: string
    caption: string
  }
  deepfakeInfo?: {
    level: 1 | 2
    confidence: number
    reasons: string[]
    isHarmful: boolean
  }
  likes: number
  comments: number
  timestamp: string
}

const mockPosts: Post[] = [
  {
    id: '1',
    user: {
      username: 'celebrity_fan_page',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face'
    },
    content: {
      type: 'video',
      url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=600&fit=crop',
      caption: 'OMG Hugh Jackman just said he loves my fan art! 😍 #wolverine #hughjackman'
    },
    deepfakeInfo: {
      level: 1,
      confidence: 76,
      reasons: [
        'Facial inconsistencies detected around mouth area',
        'Voice pattern anomalies in audio track',
        'Lighting inconsistencies with background'
      ],
      isHarmful: false
    },
    likes: 1249,
    comments: 87,
    timestamp: '2h ago'
  },
  {
    id: '2',
    user: {
      username: 'political_insider',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    content: {
      type: 'video',
      url: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=400&h=600&fit=crop',
      caption: 'BREAKING: Senator announces new policy changes affecting healthcare! Share this important message! 🚨'
    },
    deepfakeInfo: {
      level: 2,
      confidence: 89,
      reasons: [
        'High-impact political figure detected',
        'Claims about real-world policy actions',
        'Facial artifacts consistent with deepfake generation',
        'Call-to-action to share increases misinformation risk'
      ],
      isHarmful: true
    },
    likes: 542,
    comments: 156,
    timestamp: '4h ago'
  },
  {
    id: '3',
    user: {
      username: 'lifestyle_blogger',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b125b461?w=150&h=150&fit=crop&crop=face'
    },
    content: {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=400&h=600&fit=crop',
      caption: 'Beautiful sunset from my vacation! 🌅 #nofilter #authentic'
    },
    likes: 892,
    comments: 23,
    timestamp: '6h ago'
  }
]

export default function HomePage() {
  const [posts] = useState<Post[]>(mockPosts)
  const [selectedPost, setSelectedPost] = useState<Post | null>(null)
  const [showEducation, setShowEducation] = useState(false)
  const [blockedContent, setBLockedContent] = useState<string | null>(null)

  const handleDeepfakeClick = (post: Post) => {
    setSelectedPost(post)
    setShowEducation(true)
  }

  const handlePlayBlocked = (postId: string) => {
    setBLockedContent(null)
    // In real implementation, this would play the video
  }

  const handleSkipBlocked = (postId: string) => {
    // Remove the post from view or mark as skipped
    setBLockedContent(null)
  }

  useEffect(() => {
    // Auto-show level 2 warning for harmful content
    const harmfulPost = posts.find(p => p.deepfakeInfo?.level === 2)
    if (harmfulPost) {
      setBLockedContent(harmfulPost.id)
    }
  }, [posts])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Instagram-like Header */}
      <header className="bg-white border-b border-gray-300 sticky top-0 z-50">
        <div className="max-w-md mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-2xl font-bold instagram-gradient bg-clip-text text-transparent">
            DeepTrust Demo
          </h1>
          <div className="flex items-center gap-4">
            <Shield className="w-6 h-6 text-instagram-primary" />
            <Search className="w-6 h-6 text-gray-600" />
            <Heart className="w-6 h-6 text-gray-600" />
          </div>
        </div>
      </header>

      {/* Stories Section */}
      <div className="bg-white border-b border-gray-300 py-4">
        <div className="max-w-md mx-auto px-4">
          <div className="flex gap-4 overflow-x-auto">
            <div className="flex flex-col items-center gap-1 min-w-0">
              <div className="story-ring">
                <div className="w-14 h-14 bg-white rounded-full p-0.5">
                  <img 
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=60&h=60&fit=crop&crop=face" 
                    alt="Your story" 
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              <span className="text-xs text-gray-600">Your Story</span>
            </div>
            {[1,2,3,4,5].map(i => (
              <div key={i} className="flex flex-col items-center gap-1 min-w-0">
                <div className="story-ring">
                  <div className="w-14 h-14 bg-white rounded-full p-0.5">
                    <img 
                      src={`https://images.unsplash.com/photo-${1500000000000 + i}?w=60&h=60&fit=crop&crop=face`} 
                      alt={`Story ${i}`} 
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
                <span className="text-xs text-gray-600">user{i}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Posts Feed */}
      <main className="max-w-md mx-auto pb-20">
        {posts.map((post) => (
          <div key={post.id} className="post-container relative">
            {/* Post Header */}
            <div className="flex items-center justify-between p-3">
              <div className="flex items-center gap-3">
                <img 
                  src={post.user.avatar} 
                  alt={post.user.username}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="font-semibold text-sm">{post.user.username}</span>
              </div>
              <MoreHorizontal className="w-5 h-5 text-gray-600" />
            </div>

            {/* Post Content */}
            <div className="relative">
              {blockedContent === post.id && post.deepfakeInfo?.level === 2 ? (
                // Level 2: Freeze-frame interstitial
                <div className="aspect-square bg-black relative flex items-center justify-center">
                  <div className="text-center p-6 bg-white/90 rounded-lg mx-4">
                    <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                    <h3 className="font-bold text-lg mb-2">⚠ {post.deepfakeInfo.confidence}% likely deepfake</h3>
                    <p className="text-gray-600 mb-4">This content may spread misinformation</p>
                    <div className="flex gap-3">
                      <button 
                        onClick={() => handlePlayBlocked(post.id)}
                        className="bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                      >
                        <Play className="w-4 h-4" />
                        Show Video
                      </button>
                      <button 
                        onClick={() => handleSkipBlocked(post.id)}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg"
                      >
                        Skip Video
                      </button>
                    </div>
                    <button 
                      onClick={() => handleDeepfakeClick(post)}
                      className="text-instagram-primary text-sm mt-3 underline"
                    >
                      See Why Detected + Educational Toolkit
                    </button>
                  </div>
                </div>
              ) : (
                <div className="aspect-square relative">
                  <img 
                    src={post.content.url} 
                    alt="Post content"
                    className="w-full h-full object-cover"
                  />
                  {post.content.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black/50 rounded-full p-3">
                        <Play className="w-8 h-8 text-white fill-white" />
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Level 1: Sliding subtitle warning */}
              {post.deepfakeInfo?.level === 1 && blockedContent !== post.id && (
                <div className="absolute bottom-0 left-0 right-0 deepfake-warning-level1 p-3">
                  <button 
                    onClick={() => handleDeepfakeClick(post)}
                    className="flex items-center gap-2 text-sm text-yellow-800 w-full text-left"
                  >
                    <AlertTriangle className="w-4 h-4" />
                    <span>⚠ Possible Deepfake — This content may not be authentic.</span>
                    <Info className="w-4 h-4 ml-auto" />
                  </button>
                </div>
              )}
            </div>

            {/* Post Actions */}
            <div className="p-3">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-4">
                  <Heart className="w-6 h-6 text-gray-700 hover:text-red-500 cursor-pointer" />
                  <MessageCircle className="w-6 h-6 text-gray-700 cursor-pointer" />
                  <Send className="w-6 h-6 text-gray-700 cursor-pointer" />
                </div>
                <Bookmark className="w-6 h-6 text-gray-700 cursor-pointer" />
              </div>

              <div className="text-sm">
                <p className="font-semibold mb-1">{post.likes.toLocaleString()} likes</p>
                <p>
                  <span className="font-semibold">{post.user.username}</span>{' '}
                  {post.content.caption}
                </p>
                <p className="text-gray-500 mt-1">View all {post.comments} comments</p>
                <p className="text-gray-400 text-xs mt-1">{post.timestamp}</p>
              </div>
            </div>
          </div>
        ))}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300">
        <div className="max-w-md mx-auto px-4 py-2">
          <div className="flex items-center justify-around">
            <Home className="w-6 h-6 text-gray-900" />
            <Search className="w-6 h-6 text-gray-500" />
            <div className="relative">
              <Camera className="w-6 h-6 text-gray-500" />
            </div>
            <Compass className="w-6 h-6 text-gray-500" />
            <User className="w-6 h-6 text-gray-500" />
          </div>
        </div>
      </nav>

      {/* Education Modal */}
      {showEducation && selectedPost && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-lg font-bold">Why This Was Flagged</h2>
              <button 
                onClick={() => setShowEducation(false)}
                className="p-1 hover:bg-gray-100 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 space-y-4">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-full ${
                  selectedPost.deepfakeInfo?.level === 2 ? 'bg-red-100' : 'bg-yellow-100'
                }`}>
                  {selectedPost.deepfakeInfo?.level === 2 ? 
                    <AlertTriangle className="w-5 h-5 text-red-600" /> : 
                    <Info className="w-5 h-5 text-yellow-600" />
                  }
                </div>
                <div>
                  <h3 className="font-semibold">
                    {selectedPost.deepfakeInfo?.confidence}% Confidence Score
                  </h3>
                  <p className="text-sm text-gray-600">
                    {selectedPost.deepfakeInfo?.isHarmful ? 'Harmful/Misinformational' : 'Non-harmful/Troublesome'}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Detection Signals:</h4>
                <ul className="space-y-2">
                  {selectedPost.deepfakeInfo?.reasons.map((reason, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <div className="w-2 h-2 bg-instagram-primary rounded-full mt-2 flex-shrink-0" />
                      {reason}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">🛡️ How to Protect Yourself:</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Always verify news from official sources</li>
                  <li>• Look for inconsistencies in facial features</li>
                  <li>• Be skeptical of sensational claims</li>
                  <li>• Check multiple news outlets before sharing</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">📚 Learn More:</h4>
                <p className="text-sm text-green-800 mb-2">
                  Understanding deepfakes helps build digital literacy and protect against misinformation.
                </p>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm">
                  View Educational Resources
                </button>
              </div>

              {selectedPost.deepfakeInfo?.level === 2 && (
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h4 className="font-semibold text-red-900 mb-2">⚠ This content may be harmful because:</h4>
                  <ul className="text-sm text-red-800 space-y-1">
                    <li>• Features high-impact public figures</li>
                    <li>• Makes claims about real-world events</li>
                    <li>• Could spread misinformation if shared</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
