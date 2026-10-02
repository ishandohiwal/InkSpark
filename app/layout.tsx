import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import BottomNav from "@/components/BottomNav";

export const metadata: Metadata = {
  title: "InkSpark",
  description:
    "Read, write, discover, and build worlds with InkSpark — a next-generation storytelling community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <BottomNav />
      </body>
    </html>
  );
}
