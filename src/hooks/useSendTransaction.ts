import { useCallback } from "react";
import { useRadixDappToolkit } from "./useRadixDappToolkit";
import { useGatewayApi } from "./useGatewayApi";

export const useSendTransaction = () => {
  const radixDappToolkit = useRadixDappToolkit();
  const gatewayApi = useGatewayApi();

  const sendTransaction = useCallback(
    // Send manifest to extension for signing
    async (transactionManifest: string, message?: string) => {
      if (!radixDappToolkit || !gatewayApi) return;

      const transactionResult = await radixDappToolkit.walletApi.sendTransaction({
        transactionManifest,
        version: 1,
        message,
      });

      if (transactionResult.isErr()) throw transactionResult.error;
      console.log("transaction result:", transactionResult);

      // Get the details of the transaction committed to the ledger
      const receipt = await gatewayApi.transaction.getCommittedDetails(
        transactionResult.value.transactionIntentHash
      );
      return { transactionResult: transactionResult.value, receipt };
    },
    [gatewayApi, radixDappToolkit]
  );

  return sendTransaction;
};
