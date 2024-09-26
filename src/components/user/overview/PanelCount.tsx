'use client'

import React, { useEffect, useState } from 'react';

const PanelCount: React.FC = () => {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchPanelCount = async () => {
      try {
        const response = await fetch('/api/panels/count');
        const data = await response.json();
        setCount(data.count);
      } catch (error) {
        console.error('Error fetching panel count:', error);
      }
    };

    fetchPanelCount();
  }, []);

  return <>{count !== null ? count : 'Loading...'}</>;
};

export default PanelCount;