'use client';

import { RadixDappToolkit, RadixNetwork } from '@radixdlt/radix-dapp-toolkit';
import { GatewayApiClient } from "@radixdlt/babylon-gateway-api-sdk";
import { dAppDefinitionAddress } from '@/constants';
import { GatewayApiProvider } from '@/context/GatewayApiProvider';
import { AccountProvider } from '@/context/AccountProvider';
import { useState, useEffect } from 'react';

export default function RadixDappToolkitProvider({ children }: { children: React.ReactNode }) {
  const [rdt, setRdt] = useState<RadixDappToolkit | null>(null);
  const [gatewayApi, setGatewayApi] = useState<GatewayApiClient | null>(null);

  useEffect(() => {
    const rdtInstance = RadixDappToolkit({
      networkId: RadixNetwork.Stokenet,
      applicationName: "Solarix dApp",
      applicationVersion: "1.0.0",
      applicationDappDefinitionAddress: dAppDefinitionAddress,
    });
    setRdt(rdtInstance);

    const gatewayApiInstance = GatewayApiClient.initialize(rdtInstance.gatewayApi.clientConfig);
    setGatewayApi(gatewayApiInstance);
  }, []);

  if (!rdt || !gatewayApi) {
    return null; // or a loading spinner
  }

  return (
    <GatewayApiProvider value={gatewayApi}>
      <AccountProvider>
        {children}
      </AccountProvider>
    </GatewayApiProvider>
  );
}
