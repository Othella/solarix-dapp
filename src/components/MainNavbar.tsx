'use client'

import { Navbar, NavbarSection, NavbarItem, NavbarSpacer } from '@/components/ui/navbar';
import { Link } from '@/components/ui/link';
import { Heading } from '@/components/ui/heading';
import { usePathname } from 'next/navigation';

const MainNavbar = ({ navItems }: { navItems: { label: string, url: string }[] }) => {
  const location = usePathname();

  return (
    <Navbar>
      <NavbarSection>
        <Link href="/">
          <Heading>Solarix</Heading>
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
        <radix-connect-button />
      </NavbarSection>
    </Navbar>
  );
}

export default MainNavbar;