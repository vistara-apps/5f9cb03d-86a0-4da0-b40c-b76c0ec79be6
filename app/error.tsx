'use client';

import { AlertTriangle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center px-4">
      <div className="glass-card p-8 max-w-md w-full text-center">
        <div className="w-16 h-16 bg-danger rounded-lg flex items-center justify-center mx-auto mb-4">
          <AlertTriangle className="w-10 h-10 text-white" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Something went wrong!</h2>
        <p className="text-muted mb-6">{error.message}</p>
        <button onClick={reset} className="btn-primary w-full">
          Try again
        </button>
      </div>
    </div>
  );
}
