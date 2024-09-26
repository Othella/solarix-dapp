'use client'

import React, { useEffect, useState } from 'react';
import { useGetNfts } from '@/hooks/useGetNfts';

const NFTCount: React.FC = () => {
  const [count, setCount] = useState<number | null>(null);
  const getNfts = useGetNfts();

  useEffect(() => {
    const fetchNFTCount = async () => {
      const nfts = await getNfts();

      // TODO: Filter out the NFTs that are not sold
      const soldNfts = nfts
      //const soldNfts = nfts?.filter((nft: any) => nft.metadata.sold);

      setCount(soldNfts?.length || 0);
    };

    fetchNFTCount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{count !== null ? count : 'Loading...'}</>;
};

export default NFTCount;