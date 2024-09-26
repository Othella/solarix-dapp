import { useCallback } from "react";
import { useRadixDappToolkit } from "./useRadixDappToolkit";
import { useGatewayApi } from "./useGatewayApi";
import { adminBadgeAddress } from "../constants";

export const useGetWallet = () => {
  const radixDappToolkit = useRadixDappToolkit();
  const gatewayApi = useGatewayApi();

  const getWallet = useCallback(async () => {
    if (!radixDappToolkit || !gatewayApi) return;

    const wallet = await radixDappToolkit.walletApi.getWalletData();

    // get panels from the wallet
    console.log("Wallet", wallet);

    const nftsIds = await gatewayApi.state.getAllNonFungibleIds(adminBadgeAddress);
    console.log("NFTs IDs", nftsIds);

    const nfts = await gatewayApi.state.getNonFungibleData(adminBadgeAddress, nftsIds);
    console.log("NFTs", nfts);

    return wallet;
  }, [radixDappToolkit, gatewayApi]);

  return getWallet;
};
