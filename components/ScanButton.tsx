'use client';

import { Shield, Loader2 } from 'lucide-react';

interface ScanButtonProps {
  onClick: () => void;
  isScanning: boolean;
}

export function ScanButton({ onClick, isScanning }: ScanButtonProps) {
  return (
    <button 
      onClick={onClick}
      disabled={isScanning}
      className="glass-card p-4 hover:bg-opacity-15 transition-all duration-200 text-left disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <div className={`w-10 h-10 bg-accent bg-opacity-20 rounded-lg flex items-center justify-center mb-3 ${isScanning ? 'animate-scan-pulse' : ''}`}>
        {isScanning ? (
          <Loader2 className="w-6 h-6 text-accent animate-spin" />
        ) : (
          <Shield className="w-6 h-6 text-accent" />
        )}
      </div>
      <h3 className="font-semibold mb-1">
        {isScanning ? 'Scanning...' : 'Quick Scan'}
      </h3>
      <p className="text-xs text-muted">
        {isScanning ? 'Analyzing wallet' : '0.0001 ETH'}
      </p>
    </button>
  );
}
