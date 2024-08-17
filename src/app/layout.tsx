import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/scss/style.scss"; 
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";


const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Магазин электротехники",
  description: "Магазин электротоваров"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <div className="wrapper">
        <Header />
        <main className="main">
          {children}
        </main>
        <Footer/>
        </div>
        </body>
    </html>
  );
}
