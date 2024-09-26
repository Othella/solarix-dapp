'use client'

import React, { useEffect, useState } from 'react';

const RevenueTotal: React.FC = () => {
  const [total, setTotal] = useState<number | null>(null);

  useEffect(() => {
    const fetchRevenueTotal = async () => {
      // TODO: Fetch revenue total from API
      const revenue = 100;
      setTotal(revenue);
    };

    fetchRevenueTotal();
  }, []);

  return <>{total !== null ? `$${total.toFixed(2)}` : 'Loading...'}</>;
};

export default RevenueTotal;