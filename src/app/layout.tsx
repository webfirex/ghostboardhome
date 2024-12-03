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
          <script
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '701884795433863');
                fbq('track', 'PageView');
              `,
            }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src="https://www.facebook.com/tr?id=701884795433863&ev=PageView&noscript=1"
            />
          </noscript>
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