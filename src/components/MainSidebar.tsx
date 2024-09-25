import { Sidebar, SidebarBody, SidebarHeading, SidebarSection, SidebarItem } from '@/components/ui/sidebar';
import { Heading } from '@/components/ui/heading';
const MainSidebar = ({ navItems }: { navItems: { label: string, url: string }[] }) => {
  return (
    <Sidebar>
      <SidebarHeading>
        <Heading>Solarix</Heading>
      </SidebarHeading>
      <SidebarBody>
        <SidebarSection>
          {navItems.map(({ label, url }) => (
            <SidebarItem key={label} href={url}>
              {label}
            </SidebarItem>
          ))}
        </SidebarSection>
      </SidebarBody>
    </Sidebar>
  );
}

export default MainSidebar;