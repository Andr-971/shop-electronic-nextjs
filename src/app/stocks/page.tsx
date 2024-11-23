import Breadcrumbs from "../../utils/Breadcrumbs.jsx";
import { Metadata } from "next";
import TitleH1 from "../../components/TitleH1";
import StockPage from "../../components/StockPage";
import { stocksApi } from "../../../public/path";
import { splitArray } from "../../services/function";

export const metadata: Metadata = {
    title: "Акции",
    description: "Акции на все случаи жизни",
};

export default async function stocks() {
    async function getData(): Promise<any> {
        let response = await fetch(`${stocksApi}`);
        if (response.ok) {
            return response.json();
        }
    }
    let stockArray = await getData(); // true
    let arrayPage = splitArray(stockArray, 4);
    return (
        <>
            <section className="section-about">
                <div className="g-container">
                    <Breadcrumbs></Breadcrumbs>
                    <TitleH1 title="Акции"></TitleH1>
                    <div className="stocks__inner">
                        <div className="stocks__block">
                            <StockPage arrayPage={arrayPage}></StockPage>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
