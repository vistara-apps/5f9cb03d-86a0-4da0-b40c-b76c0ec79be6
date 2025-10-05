'use client';

import { useState, useEffect } from 'react';
import { Shield, AlertTriangle, CheckCircle, TrendingUp } from 'lucide-react';
import { SecurityScoreCard } from './SecurityScoreCard';
import { ApprovalsList } from './ApprovalsList';
import { ScanButton } from './ScanButton';
import { HealthReport } from './HealthReport';

export function SecurityDashboard() {
  const [healthScore, setHealthScore] = useState<number>(0);
  const [isScanning, setIsScanning] = useState(false);
  const [hasScanned, setHasScanned] = useState(false);

  // Simulate initial scan on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setHealthScore(72);
      setHasScanned(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleScan = async () => {
    setIsScanning(true);
    // Simulate scan
    await new Promise(resolve => setTimeout(resolve, 2000));
    setHealthScore(Math.floor(Math.random() * 30) + 70);
    setIsScanning(false);
    setHasScanned(true);
  };

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="glass-card p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-accent to-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
            <Shield className="w-7 h-7 text-bg" />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-2">Welcome to ShieldWallet</h2>
            <p className="text-muted text-sm leading-relaxed">
              Your personal crypto bodyguard. Scan transactions, manage approvals, and keep your wallet secure.
            </p>
          </div>
        </div>
      </div>

      {/* Security Score */}
      {hasScanned && <SecurityScoreCard score={healthScore} />}

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4">
        <ScanButton onClick={handleScan} isScanning={isScanning} />
        <button className="glass-card p-4 hover:bg-opacity-15 transition-all duration-200 text-left">
          <div className="w-10 h-10 bg-success bg-opacity-20 rounded-lg flex items-center justify-center mb-3">
            <CheckCircle className="w-6 h-6 text-success" />
          </div>
          <h3 className="font-semibold mb-1">Clean Wallet</h3>
          <p className="text-xs text-muted">Revoke approvals</p>
        </button>
      </div>

      {/* Security Metrics */}
      <div className="glass-card p-6">
        <h3 className="font-semibold mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-accent" />
          Security Metrics
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted">Active Approvals</span>
            <span className="font-semibold">12</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted">High Risk</span>
            <span className="font-semibold text-danger">3</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted">Last Scan</span>
            <span className="font-semibold text-success">2 hours ago</span>
          </div>
        </div>
      </div>

      {/* Approvals List */}
      <ApprovalsList />

      {/* Health Report */}
      {hasScanned && <HealthReport score={healthScore} />}

      {/* Security Tips */}
      <div className="glass-card p-6">
        <h3 className="font-semibold mb-4 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-warning" />
          Security Tips
        </h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <div className="w-6 h-6 bg-accent bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-xs font-bold text-accent">1</span>
            </div>
            <p className="text-sm text-muted">Always scan transactions before signing</p>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-6 h-6 bg-accent bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-xs font-bold text-accent">2</span>
            </div>
            <p className="text-sm text-muted">Review and revoke old approvals regularly</p>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-6 h-6 bg-accent bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-xs font-bold text-accent">3</span>
            </div>
            <p className="text-sm text-muted">Check dapp reputation before connecting</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
