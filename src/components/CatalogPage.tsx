"use client"
import React from "react"
import { useState, useEffect } from "react";
import SelectBlock from "@/components/SelectBlock";
import selectBlock from "../../public/selectBlock";
import SelectSubmit from "@/components/SelectSubmit";
import Image from "next/image";
import filter_black from "../../public/svg/filter-black.svg";
import filter from "../../public/svg/filter.svg";

const CatalogPage = () => {

    const [filterOpen, setFilterOpen] = useState(false);
    const [filterCategory, setFilterCategory] = useState(true);
    function handlerBtnFilter(e: any) {
        setFilterOpen((curr) => !curr);
    }
    function handlerBtnFilterCategory(e: any) {
        setFilterCategory((curr) => !curr);
    }

    return (
        <>
            <div
                className={`catalog__select`}
                style={
                    window.screen.width < 1025 && filterOpen
                        ? { display: "block" }
                        : undefined
                }
            >
                <div className="select__holder">
                    <div className="select__block-header">
                        <div className="block-header__icon-box">
                            <Image src={filter_black} alt="icon"></Image>
                        </div>
                        <div className="block-header__text">Фильтры</div>
                        <div
                            className="block-header__close"
                            onClick={handlerBtnFilter}
                        >
                            &#10006;
                        </div>
                    </div>
                    <SelectSubmit></SelectSubmit>
                    {selectBlock.map((el: any, i: number) => {
                        return (
                            <>
                                <SelectBlock
                                    key={i}
                                    el={el}
                                    i={i}
                                ></SelectBlock>
                            </>
                        );
                    })}
                </div>
            </div>
            <div className="catalog__list">
                <div className="catalog__wrapper">
                    <div className="catalog__header">
                        <div className="catalog__button-block">
                            <div
                                className="select__btn_filter"
                                onClick={handlerBtnFilter}
                            >
                                <div className="select__btn-icon">
                                    <Image src={filter} alt="icon"></Image>
                                </div>
                                <div className="select__btn-text">Фильтры</div>
                            </div>
                            <div className="select__btn">
                                <div className="select__btn-text">
                                    Подсветка: есть
                                </div>
                                <div className="select__btn-close">
                                    &#10006;
                                </div>
                            </div>
                            <div className="select__btn">
                                <div className="select__btn-text">
                                    Цена: от <span>3 600</span> ₽ до{" "}
                                    <span>17 000</span> ₽
                                </div>
                                <div className="select__btn-close">
                                    &#10006;
                                </div>
                            </div>
                            <div className="select__btn">
                                <div className="select__btn-text_clear">
                                    Очистить фильтры
                                </div>
                            </div>
                        </div>
                        <div className="catalog__select_sel">
                            <div
                                className="select-label"
                                onClick={handlerBtnFilterCategory}
                            >
                                <div className="select-text">Все товары</div>
                                <button
                                    className={`select-btn`}
                                    style={{
                                        transform: filterCategory
                                            ? "rotate(0deg)"
                                            : "rotate(180deg)",
                                    }}
                                >
                                    <svg
                                        width="10.212402"
                                        height="5.815430"
                                        viewBox="0 0 10.2124 5.81543"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            id="Polygon 1"
                                            d="M5.39 5.68L10.1 0.67C10.34 0.41 10.16 0 9.81 0L0.4 0C0.05 0 -0.14 0.41 0.1 0.67L4.81 5.68C4.97 5.85 5.23 5.85 5.39 5.68Z"
                                            fill="#070C11"
                                            fill-opacity="1.000000"
                                            fill-rule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <ul
                                className={`dropdownlist ${
                                    filterCategory ? "hidden" : ""
                                }`}
                            >
                                <li className="dropdownitem">Сигвеи</li>
                                <li className="dropdownitem">Сигвеи</li>
                                <li className="dropdownitem">Сигвеи</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CatalogPage;