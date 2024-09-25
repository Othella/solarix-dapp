'use client'

import { Sidebar, SidebarBody, SidebarHeader, SidebarSection, SidebarItem, SidebarLabel } from '@/components/ui/sidebar';
import { BoltIcon } from '@heroicons/react/24/solid';
import { Heading } from '@/components/ui/heading';
import { usePathname } from 'next/navigation';

const MainSidebar = ({ navItems }: { navItems: { label: string, url: string }[] }) => {
  const location = usePathname();

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2 justify-start align-middle">
          <BoltIcon className="w-6 h-6 ml-1 text-radix-blue dark:text-radix-pink" />
          <SidebarLabel>
            <Heading>Solarix</Heading>
          </SidebarLabel>
        </div>
      </SidebarHeader>
      <SidebarBody>
        <SidebarSection>
          {navItems.map(({ label, url }) => (
            <SidebarItem key={label} href={url}
              current={location === url}>
              {label}
            </SidebarItem>
          ))}
        </SidebarSection>
      </SidebarBody>
    </Sidebar>
  );
}

export default MainSidebar;