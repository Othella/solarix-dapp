'use client'

import { useState, useEffect } from 'react';
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHead } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { NFTResponseDTO } from '@/dtos/NftDTO';
import { ArrowPathIcon } from '@heroicons/react/24/solid';
import { Heading } from '@/components/ui/heading';

export default function NFTList() {
  const [nfts, setNfts] = useState<NFTResponseDTO[]>([]);

  const fetchNfts = async () => {
    const response = await fetch('/api/nfts');
    const data = await response.json();
    setNfts(data);
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
      <Table className="w-full">
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
    </>
  );
}