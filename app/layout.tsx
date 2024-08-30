import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MainHeader from "@/components/header/main-header";
import MainFooter from "@/components/footer/main-footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DanAllie Design",
  description: "Helping people build their dream home since 1986",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}><MainHeader/>{children}</body>
    </html>
  );
}
