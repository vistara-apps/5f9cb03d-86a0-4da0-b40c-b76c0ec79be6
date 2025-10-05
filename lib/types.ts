// User Types
export interface User {
  fid: string;
  walletAddress: string;
  healthScore: number;
  lastScanTimestamp: number;
  scanCredits: number;
  premiumTier: 'free' | 'premium';
}

// Wallet Approval Types
export interface WalletApproval {
  id: string;
  tokenAddress: string;
  spenderAddress: string;
  approvalAmount: string;
  chainId: number;
  detectedAt: number;
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
  isRevoked: boolean;
}

// Scan History Types
export interface ScanHistory {
  id: string;
  transactionHash: string;
  contractAddress: string;
  riskScore: number;
  threatFlags: string[];
  scannedAt: number;
  scanCostETH: string;
}

// Dapp Reputation Types
export interface DappReputation {
  id: string;
  dappUrl: string;
  contractAddress: string;
  reputationScore: number;
  deploymentAge: number;
  auditStatus: 'audited' | 'unaudited' | 'unknown';
  exploitHistory: string[];
  farcasterTrustSignals: number;
}

// Health Report Types
export interface HealthReport {
  id: string;
  weekOf: string;
  overallScore: number;
  approvalHygieneScore: number;
  transactionRiskScore: number;
  coachingTips: string[];
  deliveredAt: number;
}

// API Response Types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}
