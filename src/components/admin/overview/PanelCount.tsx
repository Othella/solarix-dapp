'use client'

import React, { useEffect, useState } from 'react';
//import { useGetNfts } from '@/hooks/useGetNfts';

const PanelCount: React.FC = () => {
  const [count, setCount] = useState<number | null>(null);
  //const getNfts = useGetNfts();

  useEffect(() => {
    const fetchPanelCount = async () => {
      //const nfts = await getNfts();
      //setCount(nfts?.length || 0);

      const response = await fetch('/api/panels');
      const data = await response.json();
      setCount(data.length);
    };

    fetchPanelCount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{count !== null ? count : 'Loading...'}</>;
};

export default PanelCount;