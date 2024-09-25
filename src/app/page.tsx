import Image from "next/image";
import { Heading } from "@/components/ui/heading";
import { BoltIcon } from '@heroicons/react/24/solid';
import { Link } from '@/components/ui/link';
import { Button } from '@/components/ui/button';
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-row items-center gap-4 justify-center justify-items-center">
          <BoltIcon className="w-12 h-12 ml-2 text-radix-blue dark:text-radix-pink" />
          <Heading className="text-6xl md:text-3xl lg:text-4xl xl:text-6xl">Welcome to the <span className="text-radix-blue dark:text-radix-pink">Solarix</span> dApp</Heading>
          <BoltIcon className="w-12 h-12 ml-2 text-radix-blue dark:text-radix-pink" />
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row justify-center align-middle flex-grow w-full mt-2">
          <Button href="/admin" color={'radix'} className="w-full sm:w-auto flex-grow lg:p-2">Open Admin</Button>
          <Button href="/user" color={'radix'} className="w-full sm:w-auto flex-grow lg:p-2">Open User</Button>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center">
        <Image
          src="https://cdn.document360.io/logo/50e78792-5410-4ac9-aa43-4612b4d33953/da07fa1b3ae8420891a96f5f70fcbce6-Scrypto%20Profile%20Image.png"
          alt="Radix logo"
          width={24}
          height={24}
          priority
        />
        <Link href="https://docs.radixdlt.com/docs">Radix Documentation</Link>
      </footer>
    </div>
  );
}
