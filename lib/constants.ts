// Risk Thresholds
export const RISK_THRESHOLDS = {
  CRITICAL: 40,
  HIGH: 60,
  MEDIUM: 80,
  LOW: 100,
} as const;

// Scan Costs (in ETH)
export const SCAN_COSTS = {
  TRANSACTION: '0.0001',
  APPROVAL_CLEANUP: '0.0005',
  WEEKLY_REPORT: '0.001',
} as const;

// Free Tier Limits
export const FREE_TIER_LIMITS = {
  SCANS_PER_WEEK: 3,
} as const;

// Chain IDs
export const CHAIN_IDS = {
  BASE: 8453,
  BASE_SEPOLIA: 84532,
} as const;

// API Endpoints
export const API_ENDPOINTS = {
  ETHERSCAN: 'https://api.basescan.org/api',
  GOPLUS: 'https://api.gopluslabs.io/api/v1',
  REVOKE_CASH: 'https://revoke.cash/api',
  FARCASTER_HUB: 'https://hub.farcaster.xyz/v1',
} as const;

// Notification Types
export const NOTIFICATION_TYPES = {
  SCAN_COMPLETE: 'scan_complete',
  WEEKLY_REPORT: 'weekly_report',
  CRITICAL_ALERT: 'critical_alert',
  ACHIEVEMENT: 'achievement',
} as const;
