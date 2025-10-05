import { WalletConnection } from '@/components/WalletConnection';
import { SecurityDashboard } from '@/components/SecurityDashboard';
import { Shield } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-bg">
      {/* Header */}
      <header className="glass-card border-b border-border">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-accent to-yellow-500 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-bg" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gradient">ShieldWallet</h1>
              <p className="text-xs text-muted">Your Crypto Bodyguard</p>
            </div>
          </div>
          <WalletConnection />
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-md mx-auto px-4 py-6">
        <SecurityDashboard />
      </div>
    </main>
  );
}
