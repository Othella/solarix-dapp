'use client'

import { useState, useEffect } from 'react';
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHead } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { NFTResponseDTO } from '@/dtos/NftDTO';
import { ArrowPathIcon } from '@heroicons/react/24/solid';
import { Heading } from '@/components/ui/heading';
//import { useGetNfts } from "@/hooks/useGetNfts";

export default function NFTList() {
  const [nfts, setNfts] = useState<NFTResponseDTO[]>([]);
  //const getNfts = useGetNfts();
  //const [loading, setLoading] = useState(false);

  const fetchNfts = async () => {
    /*
    setLoading(true);

    const nfts = await getNfts().finally(() => {
      setLoading(false);
    });

    console.log("Fetched NFTs for admin", nfts);

    if (!nfts) {
      return;
    }

    const nftsList = nfts.map((nft) => ({
      address: nft.resource_address
    }));
    setNfts(nftsList);
*/

    const response = await fetch('/api/panels');
    const data = await response.json();

    setNfts(data);
  };

  const handleRefresh = async () => {
    await fetchNfts();
  };

  useEffect(() => {
    fetchNfts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            <TableHeader>Address</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {nfts.map((nft) => (
            <TableRow key={nft.address}>
              <TableCell>{nft.address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      }
    </>
  );
}