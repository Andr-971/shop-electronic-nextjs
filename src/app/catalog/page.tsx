
import Breadcrumbs from "@/utils/Breadcrumbs";
import { Metadata } from "next";
import TitleH1 from "@/components/TitleH1";
import CatalogPage from "../../components/CatalogPage"

export const metadata: Metadata = {
        title: "Каталог товаров",
        description: "Каталог электротоваров"
    };

export default function Catalog() {
    return (
        <>
            <section className="section-catalog">
                <div className="g-container">
                    <Breadcrumbs></Breadcrumbs>
                    <TitleH1 title="Каталог"></TitleH1>
                    <div className="catalog__inner">
                        <div className="catalog__block-page">
                            <CatalogPage></CatalogPage>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}