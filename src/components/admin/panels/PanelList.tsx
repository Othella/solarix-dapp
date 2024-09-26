'use client'

import { useState, useEffect } from 'react';
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHead } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { PanelDTO } from '@/dtos/PanelDTO';
import { PencilIcon, TrashIcon, ArrowPathIcon } from '@heroicons/react/24/solid';
import { Heading } from '@/components/ui/heading';

export default function PanelList({ panels }: { panels: PanelDTO[] }) {
  const [panelsList, setPanelsList] = useState<PanelDTO[]>(panels);

  const fetchPanels = async () => {
    const response = await fetch('/api/panels');
    const data = await response.json();
    setPanelsList(data);
  };

  const handleDelete = async (address: string) => {
    // TODO: Implement delete functionality here
    console.log("Deleting panel with address", address);
    await fetchPanels();
  };

  const handleEdit = async (address: string) => {
    const panel = panels.find(panel => panel.address === address);
    console.log("Panel to edit", panel);
    // TODO: Implement edit functionality here
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
            <TableHeader>Title</TableHeader>
            <TableHeader>Address</TableHeader>
            <TableHeader>Actions</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {panelsList.map((panel) => (
            <TableRow key={panel.id}>
              <TableCell>{panel.title}</TableCell>
              <TableCell>{panel.address}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button onClick={() => handleEdit(panel.address)} color="blue"><PencilIcon className="size-4" /> Edit</Button>
                  <Button onClick={() => handleDelete(panel.address)} color="red"><TrashIcon className="size-4" /> Delete</Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}