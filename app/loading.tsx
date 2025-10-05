import { Shield } from 'lucide-react';

export default function Loading() {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-accent to-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-4 animate-scan-pulse">
          <Shield className="w-10 h-10 text-bg" />
        </div>
        <p className="text-muted">Loading ShieldWallet...</p>
      </div>
    </div>
  );
}
