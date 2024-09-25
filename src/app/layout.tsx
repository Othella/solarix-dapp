import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { GatewayApiProvider } from '@/context/GatewayApiProvider';
import { AccountProvider } from '@/context/AccountProvider';
import dynamic from 'next/dynamic';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
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
          {children}
        </RadixDappToolkitProvider>
      </body>
    </html>
  );
}
