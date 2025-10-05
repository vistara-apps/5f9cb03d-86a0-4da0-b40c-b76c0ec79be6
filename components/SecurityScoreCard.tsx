'use client';

import { Shield, TrendingUp, TrendingDown } from 'lucide-react';

interface SecurityScoreCardProps {
  score: number;
}

export function SecurityScoreCard({ score }: SecurityScoreCardProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-success';
    if (score >= 60) return 'text-warning';
    return 'text-danger';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 80) return 'Excellent';
    if (score >= 60) return 'Good';
    if (score >= 40) return 'Fair';
    return 'Poor';
  };

  const trend = score >= 70 ? 'up' : 'down';

  return (
    <div className="glass-card p-6 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
      
      <div className="relative">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-sm text-muted mb-1">Wallet Health Score</h3>
            <p className="text-xs text-muted">{getScoreLabel(score)} Security</p>
          </div>
          <div className="w-10 h-10 bg-accent bg-opacity-20 rounded-lg flex items-center justify-center">
            <Shield className="w-6 h-6 text-accent" />
          </div>
        </div>

        <div className="flex items-end gap-4 mb-4">
          <div className={`text-5xl font-bold ${getScoreColor(score)} animate-score-update`}>
            {score}
          </div>
          <div className="flex items-center gap-1 mb-2">
            {trend === 'up' ? (
              <TrendingUp className="w-5 h-5 text-success" />
            ) : (
              <TrendingDown className="w-5 h-5 text-danger" />
            )}
            <span className={`text-sm font-medium ${trend === 'up' ? 'text-success' : 'text-danger'}`}>
              {trend === 'up' ? '+5' : '-3'}
            </span>
          </div>
        </div>

        {/* Score Bar */}
        <div className="w-full h-2 bg-surface rounded-full overflow-hidden">
          <div 
            className={`h-full transition-all duration-500 ${
              score >= 80 ? 'bg-success' : score >= 60 ? 'bg-warning' : 'bg-danger'
            }`}
            style={{ width: `${score}%` }}
          />
        </div>

        <p className="text-xs text-muted mt-4">
          Last updated: Just now
        </p>
      </div>
    </div>
  );
}
