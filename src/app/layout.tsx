import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "../scss/style.scss";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import Providers from "../components/Providers";
import PopapInter from "../components/PopapInter/PopapInter";
import BacketPopap from "../components/BacketPopap/BacketPopap"
import PopapSearch from "../components/PopapSearch/PopapSearch";
import Register from "../components/Register/Register";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Магазин электротехники",
    description: "Магазин электротоваров",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="ru">
            <Head>
                <link rel="icon" href="/static/favicon.ico" type="image/favicon.ico" />
            </Head>
            <body>
                <Providers>
                    <div className="wrapper">
                        <Header />
                        <main className="main">{children}</main>
                        <Footer />

                        <PopapInter></PopapInter>

                        <PopapSearch></PopapSearch>

                        <Register></Register>

                        <BacketPopap></BacketPopap>
                    </div>
                </Providers>
            </body>
        </html>
    );
}
