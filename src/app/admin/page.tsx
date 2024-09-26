import { Heading } from '@/components/ui/heading';
import { Divider } from '@/components/ui/divider';
import RadixConnectionCheck from '@/components/RadixConnectionCheck';
import { Button } from '@/components/ui/button';
export default function AdminPage() {
  return (
    <>
      <Heading>Admin</Heading>
      <Divider className="my-10 mt-6" />
      <div className="flex flex-col gap-4">
        <RadixConnectionCheck pageType="admin" />
        <Button href="/admin/panels">Manage Panels</Button>
      </div>
    </>
  );
}