import { Link } from '@/components/ui/link';
import { Text } from '@/components/ui/text';
import { HomeIcon } from '@heroicons/react/24/solid';
import { Heading } from '@/components/ui/heading';
import { Divider } from '@/components/ui/divider';
import NFTList from '@/components/admin/ntfs/NFTList';
import { Button } from '@/components/ui/button';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';

export default function NftsPage() {
  return (
    <>
      <div className="max-lg:hidden flex items-center gap-2">
        <Link href="/" className="inline-flex items-center gap-2 text-sm/6">
          <HomeIcon className="size-4" />
          Home
        </Link>
        <span className="mx-1">/</span>
        <Text className="inline-flex items-center gap-2 text-sm/6 text-zinc-500 dark:text-zinc-400">
          NFTs
        </Text>
      </div>
      <div className="mt-4 lg:mt-8">
        <Heading>View NFTs</Heading>
        <Divider className="my-6" />
        <NFTList />
        <Divider className="my-10 mt-6" />
        <Button outline href="/admin"><ArrowLeftIcon className="size-4" /> Back to Admin</Button>
      </div>

    </>
  );
}