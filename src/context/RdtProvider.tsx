import { RadixDappToolkit } from "@radixdlt/radix-dapp-toolkit";
import { RadixDappToolkitContext } from "./contexts";


export const RdtProvider = ({
  value,
  children,
}: {
  value: RadixDappToolkit | null;
  children: React.ReactNode;
}) => <RadixDappToolkitContext.Provider value={value}>{children}</RadixDappToolkitContext.Provider>;
