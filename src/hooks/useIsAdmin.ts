import { useCallback } from "react";
import { adminBadgeAddress } from "../constants";
import { useGetNfts } from "@/hooks/useGetNfts";

export const useIsAdmin = () => {
  const getNfts = useGetNfts();

  const isAdmin = useCallback(async () => {

    const nfts = await getNfts();

    if (!nfts) {
      return false;
    }

    const walletHasAdminBadge = nfts.some((nft) => nft.resource_address === adminBadgeAddress);

    return walletHasAdminBadge;
  }, [getNfts]);

  return isAdmin;
};
