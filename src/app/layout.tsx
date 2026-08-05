import type { Metadata } from "next";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { getPageMap } from "nextra/page-map";
import { Layout, Navbar } from "nextra-theme-docs";

import "nextra-theme-docs/style.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Qubase Documentation",
    template: "%s | Qubase Documentation",
  },
  description:
    "Guides for designing and managing Database Schemas with Qubase.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pageMap = await getPageMap();

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full">
        <Layout
          navbar={
            <Navbar
              logo={
                <div className="flex items-center gap-2">
                  
                  {/* Logo */}
                  <Image
                    src="/images/logo/Qbase-01-01.png"
                    alt="Qubase"
                    width={120}
                    height={120}
                    priority
                    className="rounded-lg object-contain"
  
                  />

                </div>
              }
            />
          }

          pageMap={pageMap}

          sidebar={{
            defaultOpen: true,
            toggleButton: true,
          }}

          toc={{
            float: true,
            title: "On This Page",
          }}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}