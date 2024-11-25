"use client";
import React from "react";
import { useState, useEffect, useRef} from "react";
import SelectBlocks from "../components/SelectBlocks";
import selectBlock from "../../public/selectBlock";
import SelectSubmit from "../components/SelectSubmit";
import Image from "next/image";
import filter_black from "../../public/svg/filter-black.svg";
import filter from "../../public/svg/filter.svg";
import Select from "../utils/Select.jsx";
import nameCategory from "../../public/categoryProducts";
import { useFilterCatalog, useFilterData } from "../store";
import { catalogApi } from "../../public/path";
import Pagination from "../utils/Pagination";
import ProductСard from "../components/ProductСard"

const CatalogPage = ({ arrayPage }: any) => {
    const {
        inputSelect,
        rangeCurrentValue,
        currentRangeValue,
        rangeDefaultValue,
        defaultSelectInput,
        changeRangeEvent,
        defaultRangeValue,
        defautArray,
        defaultSelectImputAll,
    } = useFilterData();
    const filterValue = useFilterCatalog((state) => state.filterValue);
    const deleteAll = useFilterCatalog((state) => state.deleteAll);
    const removeFilter = useFilterCatalog((state) => state.removeFilter);
    const [filterOpen, setFilterOpen] = useState(false);
    

    useEffect(() => {
        defautArray();
    }, []);

    selectBlock.map((element: any) => {
        if (element.id !== 1) {
            element.input.map((el: any) => {
                if (
                    inputSelect.findIndex((item: any) => item.id === el.id) ===
                    -1
                ) {
                    inputSelect.push(el);
                }
            });
        }
    });

    function handlerDeleteSelect(el: any) {
        if (el.id === 1) {
            changeRangeEvent(false);
            defaultRangeValue();
            removeFilter(el.id);
        } else {
            let newElem: any = [];
            el.input.map((e: any) => newElem.push(e));
            defaultSelectInput(newElem);
            removeFilter(el.id);
        }
    }

    function allDelete() {
        currentRangeValue(rangeDefaultValue);
        changeRangeEvent(false);
        defaultSelectImputAll();
        deleteAll();
    }

    function handlerBtnFilter() {

        setFilterOpen(curr => !curr);
    }

    let startPage = "1";
    const [pageNum, setPageNum] = useState(startPage);
    const [arrPage, setArrPage] = useState(arrayPage[0]);
    const catalogSelect:any = useRef(null)
    const stockData = async () => {
        let response = await fetch(`${catalogApi}`, {
            method: "POST",
            body: JSON.stringify({
                title: `Каталог | страница ${pageNum}`,
                page: pageNum,
            }),
            headers: {
                "Content-type": "application/json",
            },
        });
        response = await response.json();
        setArrPage(() => {
            return response;
        });
    };
    useEffect(() => {
        stockData();
    }, [setArrPage]);

    useEffect(() => {
        stockData();
        document.title = "Каталог | страница " + pageNum;
    }, [pageNum]);
    useEffect(() => {
        if (window.screen.width <= 1024 && filterOpen) {
            catalogSelect.current.style.cssText = "display: block;";
        }
        if (window.screen.width <= 1024 && !filterOpen) {
            catalogSelect.current.style.cssText = "display: none";
        }
        if (window.screen.width >= 1024 && filterOpen) {
            catalogSelect.current.style.cssText = "display: flex";
        }
    }, [filterOpen]);

    return (
        <>
            <div
                className={`catalog__select`}
                ref={catalogSelect}
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
                            <SelectBlocks
                                id={el.id}
                                el={el}
                                i={i}
                                key={el.id}
                            ></SelectBlocks>
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
                                    return (
                                        <div key={el.id}>
                                            {el.id === 1 ? (
                                                <div
                                                    className="select__btn"
                                                    key={el.id}
                                                >
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
                                                                el,
                                                            )
                                                        }
                                                    >
                                                        &#10006;
                                                    </div>
                                                </div>
                                            ) : (
                                                <div
                                                    className="select__btn"
                                                    key={el.id}
                                                >
                                                    <div className="select__btn-text">
                                                        {el.title}
                                                        {": "}
                                                        {el.input.map(
                                                            (e: any) => {
                                                                let res;
                                                                if (e.checked) {
                                                                    res =
                                                                        e.label +
                                                                        " ";
                                                                }
                                                                return res;
                                                            },
                                                        )}
                                                    </div>
                                                    <div
                                                        className="select__btn-close"
                                                        onClick={() =>
                                                            handlerDeleteSelect(
                                                                el,
                                                            )
                                                        }
                                                    >
                                                        &#10006;
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                                {filterValue.length > 0 && (
                                    <div
                                        className="select__btn select__btn_clear"
                                        onClick={() => allDelete()}
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
                    <div className="catalog__block">
                        {arrPage.map((el: any, i: number) => {
                            return (
                                <ProductСard
                                    id={el.id}
                                    el={el}
                                    favouriteBoolean={el.favouriteBoolean}
                                    key={el.id}
                                ></ProductСard>
                            );
                        })}
                    </div>
                </div>
                <div className="catalog__page-nav">
                    <Pagination
                        arrayPage={arrayPage}
                        pageNum={pageNum}
                        setPageNum={setPageNum}
                    ></Pagination>
                </div>
            </div>
        </>
    );
};

export default CatalogPage;
