'use client'

import { Navbar, NavbarSection, NavbarItem, NavbarSpacer } from '@/components/ui/navbar';
import { Link } from '@/components/ui/link';
import { Heading } from '@/components/ui/heading';
import { usePathname } from 'next/navigation';
import { BoltIcon } from '@heroicons/react/24/solid';

const MainNavbar = ({ navItems }: { navItems: { label: string, url: string }[] }) => {
  const location = usePathname();

  return (
    <Navbar>
      <NavbarSection>
        <Link href="/">
          <div className="flex items-center gap-2 justify-center align-middle">
            <BoltIcon className="w-6 h-6 ml-1 text-radix-blue dark:text-radix-pink" />
            <Heading>Solarix</Heading>
          </div>
        </Link>
      </NavbarSection>
      <NavbarSpacer />
      <NavbarSection className="max-lg:hidden">
        {navItems.map(({ label, url }) => (
          <NavbarItem
            key={label}
            href={url}
            current={location === url}
          >
            {label}
          </NavbarItem>
        ))}
      </NavbarSection>
      <NavbarSpacer />
      <NavbarSection>
        <div id="connect-btn">
          <radix-connect-button />
        </div>
      </NavbarSection>
    </Navbar>
  );
}

export default MainNavbar;