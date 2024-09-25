'use client'

import { RadixDappToolkit } from "@radixdlt/radix-dapp-toolkit";
import { RadixDappToolkitContext } from "./contexts";

export interface RdtProviderProps {
  value: RadixDappToolkit | null;
  children: React.ReactNode;
}

export const RdtProvider = ({
  value,
  children,
}: RdtProviderProps) => <RadixDappToolkitContext.Provider value={value}>{children}</RadixDappToolkitContext.Provider>;
