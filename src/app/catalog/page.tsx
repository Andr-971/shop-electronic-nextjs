
import Breadcrumbs from "../../utils/Breadcrumbs";
import { Metadata } from "next";
import TitleH1 from "../../components/TitleH1";
import CatalogPage from "../../components/CatalogPage"
import { catalogApi } from "../../../public/path";
import { splitArray } from "../../services/function";

export const metadata: Metadata = {
        title: "Каталог товаров",
        description: "Каталог электротоваров"
    };

export default async function Catalog() {
    async function getData(): Promise<any> {
        let response = await fetch(`${catalogApi}`);
        if (response.ok) {
            return response.json();
        }
    }
    let catalogArray = await getData(); // true
    let arrayPage = splitArray(catalogArray, 6);
    return (
        <>
            <section className="section-catalog">
                <div className="g-container">
                    <Breadcrumbs></Breadcrumbs>
                    <TitleH1 title="Каталог"></TitleH1>
                    <div className="catalog__inner">
                        <div className="catalog__block-page">
                            <CatalogPage
                                arrayPage={arrayPage}
                            ></CatalogPage>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}