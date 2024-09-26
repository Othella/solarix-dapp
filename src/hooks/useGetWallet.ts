import { useCallback } from "react";
import { useRadixDappToolkit } from "./useRadixDappToolkit";
import { useGatewayApi } from "./useGatewayApi";

export const useGetWallet = () => {
  const radixDappToolkit = useRadixDappToolkit();
  const gatewayApi = useGatewayApi();

  const getWallet = useCallback(async () => {
    if (!radixDappToolkit || !gatewayApi) return;

    const wallet = await radixDappToolkit.walletApi.getWalletData();
    console.log("Connected Wallet", wallet);

    return wallet;
  }, [radixDappToolkit, gatewayApi]);

  return getWallet;
};
