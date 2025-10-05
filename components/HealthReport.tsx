'use client';

import { TrendingUp, Shield, Users, Activity } from 'lucide-react';

interface HealthReportProps {
  score: number;
}

export function HealthReport({ score }: HealthReportProps) {
  const tips = [
    'You have 3 unlimited approvals - consider revoking old ones',
    'Your transaction patterns look safe this week',
    'Connect with trusted community members for better security insights',
  ];

  return (
    <div className="glass-card p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold">Weekly Health Report</h3>
        <span className="text-xs text-muted">Monday, 9:00 AM</span>
      </div>

      {/* Score Breakdown */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center">
          <div className="w-12 h-12 bg-accent bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-2">
            <Shield className="w-6 h-6 text-accent" />
          </div>
          <p className="text-2xl font-bold">{score}</p>
          <p className="text-xs text-muted">Approval</p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 bg-success bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-2">
            <Activity className="w-6 h-6 text-success" />
          </div>
          <p className="text-2xl font-bold">85</p>
          <p className="text-xs text-muted">Transaction</p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 bg-warning bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-2">
            <Users className="w-6 h-6 text-warning" />
          </div>
          <p className="text-2xl font-bold">78</p>
          <p className="text-xs text-muted">Social Trust</p>
        </div>
      </div>

      {/* Coaching Tips */}
      <div className="space-y-3">
        <h4 className="text-sm font-semibold flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-accent" />
          Personalized Tips
        </h4>
        {tips.map((tip, index) => (
          <div key={index} className="flex items-start gap-3 bg-surface rounded-lg p-3">
            <div className="w-6 h-6 bg-accent bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-xs font-bold text-accent">{index + 1}</span>
            </div>
            <p className="text-sm text-muted">{tip}</p>
          </div>
        ))}
      </div>

      <button className="btn-ghost w-full mt-4">
        Share My Score
      </button>
    </div>
  );
}
