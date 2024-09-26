import { Heading } from '@/components/ui/heading';
import RadixConnectionCheck from '@/components/RadixConnectionCheck';
import { Divider } from '@/components/ui/divider';
import { Link } from '@/components/ui/link';
import { Text } from '@/components/ui/text';
import { HomeIcon } from '@heroicons/react/20/solid';
import { Button } from '@/components/ui/button';
import UserOverviewCard from '@/components/user/UserOverviewCard';
import PanelCount from '@/components/user/overview/PanelCount';
import RevenueTotal from '@/components/user/overview/RevenueTotal';

export default function UserPage() {

  return (
    <>
      <div className="max-lg:hidden flex items-center gap-2">
        <Link href="/" className="inline-flex items-center gap-2 text-sm/6">
          <HomeIcon className="size-4" />
          Home
        </Link>
        <span className="mx-1">/</span>
        <Text className="inline-flex items-center gap-2 text-sm/6 text-zinc-500 dark:text-zinc-400">
          User
        </Text>
      </div>
      <div className="mt-4 lg:mt-8">
        <Heading>My Account Overview</Heading>
        <Divider className="my-6" />
        <RadixConnectionCheck pageType="user" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Button href="/user/panels">My Panels</Button>
          <Button href="/user/revenue">My Revenue</Button>
        </div>

        <Divider className="my-6" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <UserOverviewCard title="Total Panels" value={<PanelCount />} />
          <UserOverviewCard title="Generated Revenue" value={<RevenueTotal />} />
        </div>
      </div>
    </>
  );
}
