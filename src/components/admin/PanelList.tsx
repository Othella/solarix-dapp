'use client'

import { useState } from 'react';
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHead } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { PanelResponseDTO } from '@/dtos/PanelDTO';

export default function PanelList() {
  const [panels, setPanels] = useState<PanelResponseDTO[]>([]);

  const fetchPanels = async () => {
    const response = await fetch('/api/panels');
    const data = await response.json();
    setPanels(data);
  };

  const handleDelete = async (id: string) => {
    await fetch(`/api/panels?id=${id}`, { method: 'DELETE' });
    await fetchPanels();
  };

  const handleRefresh = async () => {
    await fetchPanels();
  };

  return (
    <>
      <Button onClick={handleRefresh}>Refresh Panels</Button>
      <Table className="w-full">
        <TableHead>
          <TableRow>
            <TableHeader>Title</TableHeader>
            <TableHeader>Address</TableHeader>
            <TableHeader>Actions</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {panels.map((panel) => (
            <TableRow key={panel.id}>
              <TableCell>{panel.title}</TableCell>
              <TableCell>{panel.address}</TableCell>
              <TableCell>
                <Button onClick={() => handleDelete(panel.id)} color="red">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}