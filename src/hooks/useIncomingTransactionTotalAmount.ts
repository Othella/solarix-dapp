import { useCallback } from "react";
import { useGetWallet } from "@/hooks/useGetWallet";

export const useIncomingTransactionTotalAmount = () => {
  const getWallet = useGetWallet();

  const incomingTransactionTotalAmount = useCallback(async () => {
    const wallet = await getWallet();

    if (!wallet) {
      return 0;
    }

    const totalAmount = 1000
    // TODO: Fetch incoming transaction total amount from API

    return totalAmount;
  }, [getWallet]);

  return incomingTransactionTotalAmount;
};