import { Heading } from '@/components/ui/heading';
import RadixConnectionCheck from '@/components/RadixConnectionCheck';
import { Divider } from '@/components/ui/divider';
export default function LoginPage() {
  return (
    <div>
      <Heading>First connect!</Heading>
      <Divider className="my-10 mt-6" />
      <RadixConnectionCheck />
    </div>
  );
}