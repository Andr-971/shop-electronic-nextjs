
import Breadcrumbs from "../../utils/Breadcrumbs.jsx";
import { Metadata } from "next";
import TitleH1 from "../../components/TitleH1";
import Select from "../../utils/Select";
import nameCategory from "../../../public/categoryProducts";
import CompareArray from "../../components/CompareArray/CompareArray"
import CompareTable from "../../components/CompareTable/CompareTable"


export const metadata: Metadata = {
    title: "Сравнение товаров",
    description: "Сравнение товаров покупателем",
};

export default function Compare() {
    return (
        <>
            <div className="g-container">
                <Breadcrumbs></Breadcrumbs>
                <section className="compare">
                    <TitleH1 title="Сравнение товаров"></TitleH1>
                    <div className="compare__header">
                        <div className="compare__inner">
                            <div className="compare__holder">
                                <div className="compare__select">
                                    <Select options={nameCategory}></Select>
                                    <div className="compare__select-checkbox">
                                        <input
                                            type="checkbox"
                                            name="remember"
                                            id="check-compare"
                                            defaultChecked
                                            className="popup-entrance__input-checkbox popup-form__input-checkbox"
                                        ></input>
                                        <label
                                            htmlFor="check-compare"
                                            className="popup-entrance__input-checklabel popup-form__input-checklabel"
                                        >
                                            Только различающиеся
                                        </label>
                                    </div>
                                </div>
                                <CompareArray></CompareArray>
                            </div>
                            <CompareTable></CompareTable>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
