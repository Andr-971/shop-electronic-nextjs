import Breadcrumbs from "../../utils/Breadcrumbs.jsx";
import { Metadata } from "next";
import TitleH1 from "../../components/TitleH1";
import StockPage from "../../components/StockPage";
import { splitArray } from "../../services/function";
import stockAllBlock from "../../../public/stock_all_block.js"

export const metadata: Metadata = {
    title: "Акции",
    description: "Акции на все случаи жизни",
};

export default async function stocks() {
    let stockArray = stockAllBlock;
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
