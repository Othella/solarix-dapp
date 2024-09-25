import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import dynamic from 'next/dynamic';
import { StackedLayout } from '@/components/ui/stacked-layout';
import MainNavbar from '@/components/MainNavbar';
import MainSidebar from '@/components/MainSidebar';

const geistSans = localFont({
  src: "../../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Solarix",
  description: "Solarix dApp",
};

const RadixDappToolkitProvider = dynamic(
  () => import('@/components/RadixDappToolkitProvider'),
  { ssr: false }
);

const navbarItems = [
  { url: '/', label: 'Home' },
  { url: '/admin', label: 'Admin' },
  { url: '/user', label: 'User' },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <RadixDappToolkitProvider>
          <StackedLayout
            navbar={<MainNavbar navItems={navbarItems} />}
            sidebar={<MainSidebar navItems={navbarItems} />}
          >
            {children}
          </StackedLayout>
        </RadixDappToolkitProvider>
      </body>
    </html >
  );
}
