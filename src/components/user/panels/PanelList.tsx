'use client'

import { useState, useEffect } from 'react';
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHead } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { PanelDTO } from '@/dtos/PanelDTO';
import { Heading } from '@/components/ui/heading';
import { ArrowPathIcon, PercentBadgeIcon, CreditCardIcon, EyeIcon } from '@heroicons/react/20/solid';
//import { useGetNfts } from '@/hooks/useGetNfts';
import { useSendTransaction } from '@/hooks/useSendTransaction';
import { buyNftManifest, claimEarningsManifest } from '@/manifests';
import { useGetWallet } from '@/hooks/useGetWallet';

export default function PanelList() {
  const [panels, setPanels] = useState<PanelDTO[]>([]);
  //const getNfts = useGetNfts();
  const sendTransaction = useSendTransaction();
  const getWallet = useGetWallet();

  const fetchPanels = async () => {
    //const panels = await getNfts();
    const response = await fetch('/api/panels');
    const data = await response.json();

    // Remove a random panel from the data
    if (data.length > 0) {
      const randomIndex = Math.floor(Math.random() * data.length);
      data.splice(randomIndex, 1);
    }

    const panels = data.map((panel: PanelDTO) => ({
      address: panel.address
    }));

    setPanels(panels);
  };

  const purchasePanel = async (panelAddress: string) => {
    const wallet = await getWallet();
    if (!wallet) {
      console.error("Wallet not connected");
      return;
    }
    const walletAddress = wallet.accounts[0].address;

    console.log("Buying panel NFT with address", panelAddress, "from wallet", walletAddress);

    // "TODO: Purchase panel using buy_nft manifest";
    const manifest = buyNftManifest(panelAddress, walletAddress);
    const result = await sendTransaction(manifest);
    console.log(result);
  };

  const claimRewards = async (panelAddress: string) => {
    const wallet = await getWallet();
    if (!wallet) {
      console.error("Wallet not connected");
      return;
    }
    const walletAddress = wallet.accounts[0].address;

    console.log("Claiming rewards for panel", panelAddress, "with wallet", walletAddress);

    // "TODO: Purchase panel using buy_nft manifest";
    const manifest = claimEarningsManifest;
    const result = await sendTransaction(manifest);
    console.log(result);
  };

  const getHistory = async (address: string) => {
    // "TODO: get ressource transactions history from radix explorer
    console.log("Getting history for panel", address);
  };

  const handleRefresh = async () => {
    await fetchPanels();
  };

  useEffect(() => {
    fetchPanels();
  }, []);

  return (
    <>
      <div className="flex justify-between items-center">
        <Heading className="mb-4">All Panels</Heading>
        <Button onClick={handleRefresh}><ArrowPathIcon className="size-4" /> Refresh Panels</Button>
      </div>
      <Table className="w-full">
        <TableHead>
          <TableRow>
            <TableHeader>Address</TableHeader>
            <TableHeader>Actions</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {panels.map((panel) => (
            <TableRow key={panel.address}>
              <TableCell>{panel.address}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button onClick={() => purchasePanel(panel.address)} color="blue"><CreditCardIcon className="size-4" /> Purchase</Button>
                  <Button onClick={() => claimRewards(panel.address)} color="red"><PercentBadgeIcon className="size-4" /> Claim Rewards</Button>
                  <Button onClick={() => getHistory(panel.address)} color="green"><EyeIcon className="size-4" /> View History</Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}