import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./scss/style.scss";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Магазин электроники",
  description: "Магазин электротоваров",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
