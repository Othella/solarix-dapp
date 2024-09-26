'use client'

import { useState, useEffect } from 'react';
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHead } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { PanelResponseDTO } from '@/dtos/PanelDTO';
import { PencilIcon, TrashIcon, ArrowPathIcon } from '@heroicons/react/24/solid';
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

  const handleEdit = async (id: string) => {
    const panel = panels.find(panel => panel.id === id);
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
      <Button onClick={handleRefresh}><ArrowPathIcon className="size-4" /> Refresh Panels</Button>
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
                <div className="flex gap-2">
                  <Button onClick={() => handleEdit(panel.id)} color="blue"><PencilIcon className="size-4" /> Edit</Button>
                  <Button onClick={() => handleDelete(panel.id)} color="red"><TrashIcon className="size-4" /> Delete</Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}