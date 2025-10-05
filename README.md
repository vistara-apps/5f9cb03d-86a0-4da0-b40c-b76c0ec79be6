# ShieldWallet - Your Crypto Bodyguard

A Base MiniApp that provides real-time security scanning, approval management, and personalized wallet health coaching for crypto users.

## Features

- 🛡️ **Pre-Transaction Security Scan**: Analyze transactions before signing
- 🔗 **Wallet Connection Risk Alerts**: Real-time notifications for new dapp connections
- 🧹 **Approval Cleanup Dashboard**: Manage and revoke dangerous token approvals
- 📊 **Weekly Wallet Health Score**: Personalized security scoring and coaching
- 👥 **Farcaster Social Proof**: Community-driven security insights

## Tech Stack

- Next.js 15 with App Router
- React 19
- OnchainKit for Base integration
- Tailwind CSS for styling
- TypeScript for type safety

## Getting Started

1. Install dependencies:
\`\`\`bash
npm install
\`\`\`

2. Copy environment variables:
\`\`\`bash
cp .env.local.example .env.local
\`\`\`

3. Add your OnchainKit API key to `.env.local`

4. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

5. Open [http://localhost:3000](http://localhost:3000)

## Business Model

- **Free Tier**: 3 scans/week + basic wallet health score
- **Premium Scans**: 0.0001 ETH per transaction scan (~$0.20)
- **Approval Cleanup**: 0.0005 ETH per batch revoke (~$1)
- **Weekly Reports**: 0.001 ETH/month (~$2/mo)

## Architecture

- `/app` - Next.js App Router pages and layouts
- `/components` - React components
- `/lib` - Utilities, types, and constants
- `/public` - Static assets

## Security Features

1. **Real-time Scanning**: Analyze smart contracts and transactions
2. **Risk Scoring**: 0-100 score based on multiple factors
3. **Approval Management**: Track and revoke dangerous approvals
4. **Social Proof**: Leverage Farcaster community trust signals
5. **Personalized Coaching**: Weekly tips based on user behavior

## License

MIT
