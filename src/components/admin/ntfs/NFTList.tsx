'use client'

import { useState, useEffect } from 'react';
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHead } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { NFTResponseDTO } from '@/dtos/NftDTO';
import { ArrowPathIcon } from '@heroicons/react/24/solid';
import { Heading } from '@/components/ui/heading';
import { useGetWallet } from "@/hooks/useGetWallet";
export default function NFTList() {
  const [nfts, setNfts] = useState<NFTResponseDTO[]>([]);
  const getWallet = useGetWallet();
  const [loading, setLoading] = useState(false);
  const fetchNfts = async () => {
    setLoading(true);

    const wallet = await getWallet().finally(() => {
      setLoading(false);
    });
    console.log(wallet);

    if (!wallet) {
      return;
    }

    // TODO: get nfts from the wallet
    const nfts = wallet.accounts.map((account) => (
      console.log(account),
      {
        address: '0x0000000',
        owner: '0x0000000',
        panelId: '12345',
        id: '12345',
        tokenId: 'XRD',
        createdAt: '2024-01-01',
        updatedAt: '2024-01-01',
      }));

    console.log(nfts);

    setNfts(nfts);
  };

  const handleRefresh = async () => {
    await fetchNfts();
  };

  useEffect(() => {
    fetchNfts();
  }, []);

  return (
    <>
      <div className="flex justify-between items-center">
        <Heading className="mb-4">All NFTs</Heading>
        <Button onClick={handleRefresh}><ArrowPathIcon className="size-4" /> Refresh NFTs</Button>
      </div>
      {loading ? <div>Loading...</div> : <Table className="w-full">
        <TableHead>
          <TableRow>
            <TableHeader>Panel</TableHeader>
            <TableHeader>Address</TableHeader>
            <TableHeader>Owner</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {nfts.map((nft) => (
            <TableRow key={nft.id}>
              <TableCell>{nft.panelId}</TableCell>
              <TableCell>{nft.address}</TableCell>
              <TableCell>{nft.owner}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      }
    </>
  );
}