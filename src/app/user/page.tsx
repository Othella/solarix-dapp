import { Heading } from '@/components/ui/heading';
import RadixConnectionCheck from '@/components/RadixConnectionCheck';
import { Divider } from '@/components/ui/divider';
export default function UserPage() {

  return (
    <>
      <Heading>User</Heading>
      <Divider className="my-10 mt-6" />
      <div className="flex flex-col gap-4">
        <RadixConnectionCheck pageType="user" />
      </div>
    </ >
  );
}
