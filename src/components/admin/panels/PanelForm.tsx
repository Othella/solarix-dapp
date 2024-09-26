'use client'

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { CreatePanelDTO } from '@/dtos/PanelDTO';
import { Heading } from '@/components/ui/heading';

export default function PanelForm() {
  const [title, setTitle] = useState('');
  const [address, setAddress] = useState('');
  const [owner, setOwner] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newPanel: CreatePanelDTO = { title, address, owner };
    await fetch('/api/panels', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPanel),
    });
    setTitle('');
    setAddress('');
    setOwner('');
    // Trigger a refresh of the PanelList
    // You might want to lift this state up or use a state management solution
  };

  return (
    <>
      <Heading className="mb-4">New Panel</Heading>
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
        <Input
          type="text"
          value={owner}
          onChange={(e) => setOwner(e.target.value)}
          placeholder="Panel Owner"
          className="mb-4"
        />
        <Button type="submit" color='radix'>Add Panel</Button>
      </form>
    </>
  );
}