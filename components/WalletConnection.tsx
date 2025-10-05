'use client';

import { ConnectWallet, Wallet } from '@coinbase/onchainkit/wallet';
import { Name, Avatar } from '@coinbase/onchainkit/identity';

export function WalletConnection() {
  return (
    <Wallet>
      <ConnectWallet>
        <div className="flex items-center gap-2 bg-surface px-4 py-2 rounded-lg border border-border hover:border-accent transition-all duration-200">
          <Avatar className="w-6 h-6" />
          <Name className="text-sm font-medium" />
        </div>
      </ConnectWallet>
    </Wallet>
  );
}
