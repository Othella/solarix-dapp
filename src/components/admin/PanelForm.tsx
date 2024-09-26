'use client'

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { CreatePanelDTO } from '@/dtos/PanelDTO';

export default function PanelForm() {
  const [title, setTitle] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newPanel: CreatePanelDTO = { title, address };
    await fetch('/api/panels', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPanel),
    });
    setTitle('');
    setAddress('');
    // Trigger a refresh of the PanelList
    // You might want to lift this state up or use a state management solution
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <Input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Panel Title"
        className="mb-4"
      />
      <Input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Panel Address"
        className="mb-4"
      />
      <Button type="submit" color='radix'>Add Panel</Button>
    </form>
  );
}