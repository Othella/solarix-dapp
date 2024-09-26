'use client'

import { useState, useEffect } from 'react';
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHead } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { PanelResponseDTO } from '@/dtos/PanelDTO';
import { Heading } from '@/components/ui/heading';
import { ArrowPathIcon, PercentBadgeIcon, CreditCardIcon, EyeIcon } from '@heroicons/react/20/solid';

export default function PanelList() {
  const [panels, setPanels] = useState<PanelResponseDTO[]>([]);

  const fetchPanels = async () => {
    const response = await fetch('/api/panels');
    const data = await response.json();
    setPanels(data);
  };

  const purchasePanel = async (id: string) => {
    const response = await fetch(`/api/panels/purchase?id=${id}`, { method: 'POST' });
    const data = await response.json();
    console.log(data);
  };

  const claimRewards = async (id: string) => {
    const response = await fetch(`/api/panels/rewards?id=${id}`, { method: 'POST' });
    const data = await response.json();
    console.log(data);
  };

  const getHistory = async (id: string) => {
    const response = await fetch(`/api/panels/history?id=${id}`, { method: 'GET' });
    const data = await response.json();
    console.log(data);
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