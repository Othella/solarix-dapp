import { Heading } from '@/components/ui/heading';
import { Divider } from '@/components/ui/divider';
import PanelList from '@/components/user/panels/PanelList';
import { Link } from '@/components/ui/link';
import { Text } from '@/components/ui/text';
import { HomeIcon } from '@heroicons/react/24/solid';
import { Subheading } from '@/components/ui/heading';
import { Button } from '@/components/ui/button';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';

export default function PanelsPage() {
  return (
    <>
      <div className="max-lg:hidden flex items-center gap-2">
        <Link href="/" className="inline-flex items-center gap-2 text-sm/6">
          <HomeIcon className="size-4" />
          Home
        </Link>
        <span className="mx-1">/</span>
        <Link href="/user" className="inline-flex items-center gap-2 text-sm/6">
          User
        </Link>
        <span className="mx-1">/</span>
        <Text className="inline-flex items-center gap-2 text-sm/6 text-zinc-500 dark:text-zinc-400">
          Panels
        </Text>
      </div>
      <div className="mt-4 lg:mt-8">
        <div className="flex gap-4 flex-col">
          <Heading>My Panels</Heading>
          <Subheading>See all your panels</Subheading>
        </div>
        <Divider className="my-10 mt-6" />
        <PanelList />
        <Divider className="my-10 mt-6" />
        <Button outline href="/user"><ArrowLeftIcon className="size-4" /> Back to User</Button>
      </div>
    </>
  );
}