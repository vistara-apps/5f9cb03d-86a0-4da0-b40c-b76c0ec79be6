'use client';

import { AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

interface Approval {
  id: string;
  token: string;
  spender: string;
  amount: string;
  risk: 'critical' | 'high' | 'medium' | 'low';
}

const mockApprovals: Approval[] = [
  {
    id: '1',
    token: 'USDC',
    spender: 'Uniswap Router',
    amount: 'Unlimited',
    risk: 'critical',
  },
  {
    id: '2',
    token: 'WETH',
    spender: 'SushiSwap',
    amount: '10.5',
    risk: 'low',
  },
  {
    id: '3',
    token: 'DAI',
    spender: 'Unknown Contract',
    amount: 'Unlimited',
    risk: 'high',
  },
];

export function ApprovalsList() {
  const getRiskIcon = (risk: string) => {
    switch (risk) {
      case 'critical':
        return <XCircle className="w-5 h-5 text-danger" />;
      case 'high':
        return <AlertTriangle className="w-5 h-5 text-warning" />;
      case 'low':
        return <CheckCircle className="w-5 h-5 text-success" />;
      default:
        return <AlertTriangle className="w-5 h-5 text-warning" />;
    }
  };

  return (
    <div className="glass-card p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">Active Approvals</h3>
        <span className="text-xs text-muted">3 total</span>
      </div>

      <div className="space-y-3">
        {mockApprovals.map((approval) => (
          <div 
            key={approval.id}
            className="bg-surface rounded-lg p-4 border border-border hover:border-accent transition-all duration-200 animate-risk-reveal"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-3">
                {getRiskIcon(approval.risk)}
                <div>
                  <h4 className="font-semibold text-sm">{approval.token}</h4>
                  <p className="text-xs text-muted">{approval.spender}</p>
                </div>
              </div>
              <span className={`risk-${approval.risk}`}>
                {approval.risk}
              </span>
            </div>
            <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
              <span className="text-xs text-muted">Amount: {approval.amount}</span>
              {approval.risk === 'critical' || approval.risk === 'high' ? (
                <button className="text-xs font-medium text-danger hover:underline">
                  Revoke
                </button>
              ) : (
                <button className="text-xs font-medium text-muted hover:text-fg">
                  Details
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <button className="btn-danger w-full mt-4">
        Clean All High Risk
      </button>
    </div>
  );
}
