import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
