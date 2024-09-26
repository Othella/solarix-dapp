'use client'

import React, { useEffect, useState } from 'react';

const RevenueTotal: React.FC = () => {
  const [total, setTotal] = useState<number | null>(null);

  useEffect(() => {
    const fetchRevenueTotal = async () => {
      try {
        const response = await fetch('/api/revenue/total');
        const data = await response.json();
        setTotal(data.total);
      } catch (error) {
        console.error('Error fetching revenue total:', error);
      }
    };

    fetchRevenueTotal();
  }, []);

  return <>{total !== null ? `$${total.toFixed(2)}` : 'Loading...'}</>;
};

export default RevenueTotal;