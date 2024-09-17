"use client";
import React from "react";
import { useState, useEffect, useRef } from "react";
import SelectBlocks from "@/components/SelectBlocks";
import selectBlock from "../../public/selectBlock";
import SelectSubmit from "@/components/SelectSubmit";
import Image from "next/image";
import filter_black from "../../public/svg/filter-black.svg";
import filter from "../../public/svg/filter.svg";
import Select from "../utils/Select";
import nameCategory from "../../public/categoryProducts";
import { useFilterCatalog } from "@/store"
import {useFilterData} from "@/store"


const CatalogPage = () => {
    const {
        rangeCurrentValue,
        currentRangeValue,
        rangeDefaultValue,
        rangeEvent,
        changeRangeEvent,
    } = useFilterData();
    const filterValue = useFilterCatalog((state) => state.filterValue);
    const deleteAll = useFilterCatalog((state) => state.deleteAll);
    const removeFilter = useFilterCatalog((state) => state.removeFilter);
    const [filterOpen, setFilterOpen] = useState(false);

    function handlerDeleteSelect(id: any) {
        currentRangeValue(rangeDefaultValue);
        changeRangeEvent(false);
        removeFilter(id);
    }

    function allDelete() {
        deleteAll();
    }

    function handlerBtnFilter(e: any) {
        setFilterOpen((curr) => !curr);
    }
    return (
        <>
            <div
                className={`catalog__select`}
                style={
                    window.screen.width <= 1024 && filterOpen
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
                                <SelectBlocks
                                    key={i}
                                    el={el}
                                    i={i}
                                ></SelectBlocks>
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
                            <ul className="select__list_btn">
                                {filterValue.map((el: any, index: number) => {
                                    console.log(el);
                                    return (
                                        <>
                                            {el.id === 1 ? (
                                                <div className="select__btn">
                                                    <div className="select__btn-text">
                                                        {el.title}: от{" "}
                                                        <span>
                                                            {
                                                                rangeCurrentValue[0]
                                                            }
                                                        </span>{" "}
                                                        ₽ до{" "}
                                                        <span>
                                                            {
                                                                rangeCurrentValue[1]
                                                            }
                                                        </span>{" "}
                                                        ₽
                                                    </div>
                                                    <div
                                                        className="select__btn-close"
                                                        onClick={() =>
                                                            handlerDeleteSelect(
                                                                el.id,
                                                            )
                                                        }
                                                    >
                                                        &#10006;
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="select__btn">
                                                    <div className="select__btn-text">
                                                            {el.title}
                                                            {": "}
                                                            {el.input.map((e: any) => {
                                                                let res
                                                                if (e.checked) {
                                                                    res = e.label
                                                                }
                                                                return res + " "
                                                            })}
                                                            {" "}
                                                    </div>
                                                    <div
                                                        className="select__btn-close"
                                                        onClick={() =>
                                                            handlerDeleteSelect(
                                                                el.id,
                                                            )
                                                        }
                                                    >
                                                        &#10006;
                                                    </div>
                                                </div>
                                            )}
                                        </>
                                    );
                                })}
                                {filterValue.length > 0 && (
                                    <div
                                        className="select__btn select__btn_clear"
                                        onClick={allDelete}
                                    >
                                        <div className="select__btn-text_clear">
                                            Очистить фильтры
                                        </div>
                                    </div>
                                )}
                            </ul>
                        </div>
                        <div className="catalog__select_sel">
                            <Select options={nameCategory}></Select>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CatalogPage;
