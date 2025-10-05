import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatAddress(address: string): string {
  if (!address) return '';
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-US').format(num);
}

export function formatETH(wei: string): string {
  const eth = parseFloat(wei) / 1e18;
  return eth.toFixed(4);
}

export function getRiskLevel(score: number): 'critical' | 'high' | 'medium' | 'low' {
  if (score < 40) return 'critical';
  if (score < 60) return 'high';
  if (score < 80) return 'medium';
  return 'low';
}

export function calculateHealthScore(
  approvalScore: number,
  transactionScore: number,
  socialScore: number
): number {
  return Math.round((approvalScore + transactionScore + socialScore) / 3);
}

export function formatTimestamp(timestamp: number): string {
  const date = new Date(timestamp);
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);
  
  if (minutes < 60) return `${minutes} minutes ago`;
  if (hours < 24) return `${hours} hours ago`;
  return `${days} days ago`;
}
