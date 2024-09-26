'use client';

import { useEffect, useState } from 'react';
import { Text } from '@/components/ui/text';
import { setCookie, deleteCookie } from '@/utils/cookies';
import { DataRequestBuilder, WalletDataStateAccount, Persona } from '@radixdlt/radix-dapp-toolkit';
import { useRadixDappToolkit } from "@/hooks/useRadixDappToolkit";
import { useIsAdmin } from "@/hooks/useIsAdmin";

interface RadixConnectionCheckProps {
  pageType?: 'admin' | 'user';
}

const RadixConnectionCheck: React.FC<RadixConnectionCheckProps> = ({ pageType }) => {
  const [accounts, setAccounts] = useState<WalletDataStateAccount[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const [persona, setPersona] = useState<Persona | null>(null);

  const rdt = useRadixDappToolkit();
  const isCurrentUserAdmin = useIsAdmin();

  useEffect(() => {
    rdt?.walletApi.setRequestData(DataRequestBuilder.accounts().atLeast(1));

    const connected = accounts.length > 0 || persona !== null;
    setIsConnected(connected);

    console.log('rdt', rdt);
    console.log('rdt?.walletApi.walletData$', rdt?.walletApi.walletData$);

    const subscription = rdt?.walletApi.walletData$.subscribe((walletData) => {
      console.log('walletData', walletData);
      setAccounts(walletData?.accounts ?? []);
      setPersona(walletData?.persona ?? null);
      console.log('persona', persona);
    });

    if (isConnected) {
      setCookie('radix_connected', 'true', 7); // Set cookie for 7 days
    } else {
      deleteCookie('radix_connected'); // Set cookie for 7 days
    }

    console.log('isCurrentUserAdmin', isCurrentUserAdmin);

    return () => subscription?.unsubscribe();

  }, [rdt, persona, accounts, isConnected, isCurrentUserAdmin]);

  if (isConnected) {
    return null;
  }

  if (pageType === 'admin') {
    if (!isCurrentUserAdmin) {
      return (
        <>
          <Text>TODO: Ensure user is admin</Text>
        </>
      );
    }
  }

  return (
    <div>
      <Text>Please connect to Radix to continue on {pageType} page</Text>
    </div>
  );
};

export default RadixConnectionCheck;