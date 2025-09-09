# DeepTrust - Instagram Deepfake Detection Demo

A demo website showcasing an AI-powered deepfake detection system for Instagram, built for the WIT Hackathon.

## 🚀 Features

- **Two-Tier Flagging System**:
  - **Level 1**: Non-harmful deepfakes with subtle sliding subtitle warnings
  - **Level 2**: Harmful/misinformational deepfakes with freeze-frame interstitials

- **Educational Integration**: Click-through explanations about why content was flagged
- **Instagram-like Interface**: Authentic social media experience
- **Real-time Detection Simulation**: Mock AI detection with confidence scores
- **Responsive Design**: Mobile-first approach matching Instagram's UX

## 🛡️ DeepTrust System

### Detection Categories

| Category | Example | UI Treatment | Risk Level |
|----------|---------|--------------|------------|
| **Non-Harmful** | Celebrity fan videos | Sliding subtitle | Low |
| **Harmful** | Political misinformation | Freeze interstitial | High |

### Key Components

- **Harm Scoring Algorithm**: 0-100 confidence scoring
- **Educational Resources**: Digital literacy and verification tips  
- **User Appeals**: Transparent moderation process
- **Account Monitoring**: Flags accounts with >60% AI-generated content

## 🏗️ Technical Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom Instagram-inspired components
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Deployment**: Vercel-optimized

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/HerbsMayCode/WITHackathon.git

# Navigate to project directory
cd WITHackathon

# Install dependencies
npm install

# Run development server
npm run dev
```

## 🌐 Deployment

This project is optimized for Vercel deployment:

```bash
# Build for production
npm run build

# Deploy to Vercel
vercel --prod
```

## 🎯 Demo Flow

1. **Browse Feed**: Instagram-like interface with posts
2. **Level 1 Detection**: Tap subtle warning to learn more
3. **Level 2 Detection**: Choose to view or skip harmful content
4. **Educational Modal**: Learn why content was flagged
5. **Digital Literacy**: Tips for spotting deepfakes

## 🎨 Design Philosophy

- **Minimal Friction**: Preserve user experience while ensuring safety
- **Educational First**: Every flag leads to learning opportunities
- **Transparent AI**: Clear explanations of detection reasoning
- **Trust Building**: Gradual education over aggressive blocking

## 📊 Success Metrics

- 50% reduction in harmful deepfake engagement
- 70% increase in user trust scores
- <10% appeal overturn rate
- Cross-platform adoption potential

## 🔮 Future Enhancements

- Real-time API integration with deepfake detection services
- On-device pre-upload scanning
- Cross-platform trust badges
- Audio deepfake detection for voice messages

## 👥 Team

**Big Back Engineers** - WIT Hackathon Team

## 📄 License

This is a demo project created for educational purposes during the WIT Hackathon.

---

*"DeepTrust detects deepfakes and informs users with a two-tier flagging system: subtle alerts for minor fakes, freeze-frame warnings for harmful misinformation. Every flag links to educational resources, while accounts posting mostly AI content are transparently moderated. We protect trust, educate users, and slow the spread of misinformation — all in one feature."*
