import { useCallback } from "react";
import { useRadixDappToolkit } from "./useRadixDappToolkit";
import { useGatewayApi } from "./useGatewayApi";

export const useGetNfts = () => {
  const radixDappToolkit = useRadixDappToolkit();
  const gatewayApi = useGatewayApi();

  const getNfts = useCallback(async () => {
    if (!radixDappToolkit || !gatewayApi) return;

    const wallet = await radixDappToolkit.walletApi.getWalletData();
    console.log("Wallet", wallet);


    const accountAddress = wallet?.accounts[0].address;
    console.log("Account Address", accountAddress);

    if (!accountAddress) {
      return [];
    }

    const accountDetails =
      await gatewayApi.state.getEntityDetailsVaultAggregated(accountAddress);
    console.log("Account Details:", accountDetails);

    const nfts = accountDetails?.non_fungible_resources?.items;
    console.log("NFTs", nfts);

    return nfts;

  }, [radixDappToolkit, gatewayApi]);

  return getNfts;
};
