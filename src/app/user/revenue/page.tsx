import { Heading } from '@/components/ui/heading';
import { Divider } from '@/components/ui/divider';
import { Text } from '@/components/ui/text';
import { Button } from '@/components/ui/button';
import { ArrowLeftIcon, HomeIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

export default function InvestPage() {
  // get revenue from blockchain transactions
  return (
    <>
      <div className="max-lg:hidden flex items-center gap-2">
        <Link href="/" className="inline-flex items-center gap-2 text-sm/6">
          <HomeIcon className="size-4" />
          Home
        </Link>
        <span className="mx-1">/</span>
        <Link href="/user" className="inline-flex items-center gap-2 text-sm/6 text-zinc-500 dark:text-zinc-400">
          User
        </Link>
        <span className="mx-1">/</span>
        <Text className="inline-flex items-center gap-2 text-sm/6 text-zinc-500 dark:text-zinc-400">
          Revenue
        </Text>
      </div>
      <div className="mt-4 lg:mt-8">
        <Heading>Revenue</Heading>
        <Divider className="my-10 mt-6" />
        <div className="flex flex-col gap-4">
          <Text>01/01/2024: <span className="font-bold">$10.00</span></Text>
          <Text>23/01/2024: <span className="font-bold">$63.00</span></Text>
          <Text>16/02/2024: <span className="font-bold">$7.00</span></Text>
          <Text>19/08/2024: <span className="font-bold">$20.00</span></Text>
        </div>
        <Divider className="my-10 mt-6" />
        <Button outline href="/user"><ArrowLeftIcon className="size-4" /> Back to User</Button>
      </div>
    </>
  );
}
