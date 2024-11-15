
import Breadcrumbs from "@/utils/Breadcrumbs";
import { Metadata } from "next";
import TitleH1 from "@/components/TitleH1";
import Image from "next/image";
import selectBtn from "../../../public/svg/select-btn.svg"
import Select from "@/utils/Select";
import nameCategory from "../../../public/categoryProducts";
import CompareArray from "@/components/CompareArray/CompareArray"
import CompareTable from "@/components/CompareTable/CompareTable"


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
                                <div className="compare__product">
                                    <div className="compare__product-nav">
                                        <button className="compare__product-btn compare__product-btn_left">
                                            <svg
                                                width="5.815430"
                                                height="10.212891"
                                                viewBox="0 0 5.81543 10.2129"
                                                xmlns="http://www.w3.org/2000/svg"
                                                // xmlns:xlink="http://www.w3.org/1999/xlink"
                                            >
                                                <path
                                                    id="slider-left"
                                                    d="M0.12 4.81L5.14 0.1C5.39 -0.13 5.81 0.05 5.81 0.4L5.81 9.81C5.81 10.16 5.39 10.34 5.14 10.1L0.12 5.39C-0.05 5.24 -0.05 4.97 0.12 4.81Z"
                                                    fill="#EAEAF0"
                                                    fill-opacity="1.000000"
                                                    fill-rule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                        <button className="compare__product-btn compare__product-btn_right">
                                            <svg
                                                width="5.815430"
                                                height="10.212891"
                                                viewBox="0 0 5.81543 10.2129"
                                                xmlns="http://www.w3.org/2000/svg"
                                                // xmlns:xlink="http://www.w3.org/1999/xlink"
                                            >
                                                <path
                                                    id="slider-right"
                                                    d="M5.68 4.81L0.67 0.1C0.41 -0.13 0 0.05 0 0.4L0 9.81C0 10.16 0.41 10.34 0.67 10.1L5.68 5.39C5.85 5.24 5.85 4.97 5.68 4.81Z"
                                                    fill="#070C11"
                                                    fill-opacity="1.000000"
                                                    fill-rule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="compare__product__wrapper">
                                        <CompareArray></CompareArray>
                                    </div>
                                </div>
                            </div>
                            <CompareTable></CompareTable>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
