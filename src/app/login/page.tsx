'use client';

import { Heading } from '@/components/ui/heading';
import RadixConnectionCheck from '@/components/RadixConnectionCheck';
import { Divider } from '@/components/ui/divider';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { getCookie } from '@/utils/cookies';
export default function LoginPage() {
  const router = useRouter();
  const isConnected = getCookie('radix_connected');
  useEffect(() => {
    if (isConnected) {
      router.push('/');
    }
  }, [isConnected, router]);

  return (
    <div>
      <Heading>First connect!</Heading>
      <Divider className="my-10 mt-6" />
      <RadixConnectionCheck />
    </div>
  );
}