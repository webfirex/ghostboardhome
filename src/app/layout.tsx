import '@mantine/core/styles.css';
import "./globals.css";
import '@mantine/notifications/styles.css';
import { Notifications } from "@mantine/notifications";

import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import Header from '@/components/header/common';
// import Footer from '@/components/footer/common';

export const metadata = {
  title: 'Ghostboard',
  description: 'Ghostboard - Stocks and Trading',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className='relative'>
        <MantineProvider>
          <Header />
          <Notifications position={'bottom-left'} className=" scale-5" />
          {children}
          {/* <Footer /> */}
        </MantineProvider>
      </body>
    </html>
  );
}