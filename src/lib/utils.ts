import { GatewayApiClient } from "@radixdlt/babylon-gateway-api-sdk";

export const isNftInWallet = async (gatewayApi: GatewayApiClient, accountAddress: string, nftAddress: string) => {

  const accountDetails =
    await gatewayApi.state.getEntityDetailsVaultAggregated(accountAddress);

  const nfts = accountDetails?.non_fungible_resources?.items;

  return nfts.some((nft) => nft.resource_address === nftAddress);;
};
