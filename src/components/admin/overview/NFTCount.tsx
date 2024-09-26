'use client'

import React, { useEffect, useState } from 'react';

const NFTCount: React.FC = () => {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchNFTCount = async () => {
      try {
        const response = await fetch('/api/nfts/count');
        const data = await response.json();
        setCount(data.count);
      } catch (error) {
        console.error('Error fetching NFT count:', error);
      }
    };

    fetchNFTCount();
  }, []);

  return <>{count !== null ? count : 'Loading...'}</>;
};

export default NFTCount;