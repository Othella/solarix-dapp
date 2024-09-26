"use client"

import { useState, useEffect } from 'react';
import { PanelDTO } from '@/dtos/PanelDTO';
import { Heading } from '@/components/ui/heading';
import { Divider } from '@/components/ui/divider';
import PanelList from '@/components/admin/panels/PanelList';
import PanelForm from '@/components/admin/panels/PanelForm';
import { Link } from '@/components/ui/link';
import { Text } from '@/components/ui/text';
import { HomeIcon, ArrowLeftIcon } from '@heroicons/react/20/solid';
import { Subheading } from '@/components/ui/heading';
import { Button } from '@/components/ui/button';

export default function PanelsPage() {
  const [panels, setPanels] = useState<PanelDTO[]>([]);

  const fetchPanels = async () => {
    const response = await fetch('/api/panels');
    const data = await response.json();
    setPanels(data);
  };

  useEffect(() => {
    fetchPanels();
  }, [panels]);
  return (
    <>
      <div className="max-lg:hidden flex items-center gap-2">
        <Link href="/" className="inline-flex items-center gap-2 text-sm/6">
          <HomeIcon className="size-4" />
          Home
        </Link>
        <span className="mx-1">/</span>
        <Link href="/admin" className="inline-flex items-center gap-2 text-sm/6">
          Admin
        </Link>
        <span className="mx-1">/</span>
        <Text className="inline-flex items-center gap-2 text-sm/6 text-zinc-500 dark:text-zinc-400">
          Panels
        </Text>
      </div>
      <div className="mt-4 lg:mt-8">
        <div className="flex gap-4 flex-col">
          <Heading>Manage Panels</Heading>
          <Subheading>Add, edit, and delete your panels</Subheading>
        </div>
        <Divider className="my-10 mt-6" />
        <PanelForm />
        <Divider className="my-10 mt-6" />
        <PanelList panels={panels} />
        <Divider className="my-10 mt-6" />
        <Button outline href="/admin"><ArrowLeftIcon className="size-4" /> Back to Admin</Button>
      </div>
    </>
  );
}