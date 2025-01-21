import type { Metadata } from "next";
import { Unbounded } from "next/font/google";
import "./globals.css";
import '@rainbow-me/rainbowkit/styles.css';
import { Providers } from '@/app/providers';

const unbounded = Unbounded({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "DOT UI kit",
  description: "a UI kit for Polkadot DApps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
          <meta name="twitter:card" content="player" />
          <meta name="twitter:site" content="https://sblinks-dot.vercel.app/mint-redeem-lst-bifrost" />
          <meta name="twitter:title" content="Test" />
          <meta name="twitter:description" content="" />
          <meta name="twitter:player" content="https://sblinks-dot.vercel.app/mint-redeem-lst-bifrost" />
          <meta name="twitter:player:width" content="580" />
          <meta name="twitter:player:height" content="680" />
          <meta name="twitter:image" content="" />
          <meta property="og:url" content="https://sblinks-dot.vercel.app/mint-redeem-lst-bifrost" />
          <meta property="og:title" content="test" />
          <meta property="og:description" content="test" />
          <meta property="og:image" content="https://app.ekubo.org/pwa-512x512.png" />
       </head>
      <body
        className={unbounded.className}
      >
        <Providers>
          <main>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
