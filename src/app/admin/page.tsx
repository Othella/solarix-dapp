import { Heading } from '@/components/ui/heading';
import { Divider } from '@/components/ui/divider';
import AdminOverviewCard from '@/components/admin/AdminOverviewCard';
import PanelCount from '@/components/admin/overview/PanelCount';
import NFTCount from '@/components/admin/overview/NFTCount';
import RevenueTotal from '@/components/admin/overview/RevenueTotal';
import { Link } from '@/components/ui/link';
import { Text } from '@/components/ui/text';
import { HomeIcon } from '@heroicons/react/24/solid';
import RadixConnectionCheck from '@/components/RadixConnectionCheck';
import { Button } from '@/components/ui/button';

export default function AdminPage() {
  return (
    <>
      <div className="max-lg:hidden flex items-center gap-2">
        <Link href="/" className="inline-flex items-center gap-2 text-sm/6">
          <HomeIcon className="size-4" />
          Home
        </Link>
        <span className="mx-1">/</span>
        <Text className="inline-flex items-center gap-2 text-sm/6 text-zinc-500 dark:text-zinc-400">
          Admin
        </Text>
      </div>
      <div className="mt-4 lg:mt-8">
        <Heading>Admin Overview</Heading>
        <Divider className="my-6" />
        <RadixConnectionCheck pageType="admin" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Button href="/admin/panels">Manage Panels</Button>
          <Button href="/admin/nfts">Manage NFTs</Button>
          <Button href="/admin/revenue">Manage Revenue</Button>
        </div>

        <Divider className="my-6" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AdminOverviewCard title="Total Panels" value={<PanelCount />} />
          <AdminOverviewCard title="Minted NFTs" value={<NFTCount />} />
          <AdminOverviewCard title="Generated Revenue" value={<RevenueTotal />} />
        </div>
      </div>
    </>
  );
}