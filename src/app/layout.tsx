import "@/styles/globals.css";
import { Raleway } from "next/font/google";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import FramerMotion from "@/components/FramerMotion";

const inter = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  authors: { name: "Marella Rahal" },
  title: "Portfolio | Marella Rahal",
  description:
    "Marella Rahal's Portfolio using Next.Js 13 , TypeScript and TailwindCSS",
  keywords:
    "React.Js , Next.Js , Next.JS 13 , TailwindCSS, Css, javascript , TypeScript , portfolio, Marella, Rahal",
  icons: "/logo.svg",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <FramerMotion>{children}</FramerMotion>
      </body>
    </html>
  );
}
