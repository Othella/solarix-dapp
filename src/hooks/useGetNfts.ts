import { useCallback } from "react";
import { useRadixDappToolkit } from "./useRadixDappToolkit";
import { useGatewayApi } from "./useGatewayApi";
import { useGetWallet } from './useGetWallet';

export const useGetNfts = () => {
  const radixDappToolkit = useRadixDappToolkit();
  const gatewayApi = useGatewayApi();
  const getWallet = useGetWallet();

  const getNfts = useCallback(async () => {
    if (!radixDappToolkit || !gatewayApi) return;

    const wallet = await getWallet();

    const accountAddress = wallet?.accounts[0].address;
    console.log("Account Address", accountAddress);

    if (!accountAddress) {
      return [];
    }

    const accountDetails =
      await gatewayApi.state.getEntityDetailsVaultAggregated(accountAddress);
    console.log("Account Details:", accountDetails);

    const nfts = accountDetails?.non_fungible_resources?.items;
    console.log("Account NFTs", nfts);

    // TODO Filter out the nfts that are not panels
    // const panels = nfts?.filter((nft: any) => nft.metadata.panel);
    // console.log("Account Panels", panels);
    // return panels;

    return nfts;

  }, [radixDappToolkit, gatewayApi, getWallet]);

  return getNfts;
};
