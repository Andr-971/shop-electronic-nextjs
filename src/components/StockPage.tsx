"use client"
import React from "react"
import { useEffect, useState } from "react";
import Pagination from "../utils/Pagination";
import Stock from "../components/Stock";
import { domen } from "../../public/path";

const StockPage = ({ arrayPage }: any) => {
    let startPage = "1";
    const [pageNum, setPageNum] = useState(startPage);
    const [arrPage, setArrPage] = useState(arrayPage[0]);
    const stockData = async () => {
        let response = await fetch(`${domen}/api/stocks`, {
            method: "POST",
            body: JSON.stringify({
                title: `Акции | страница ${pageNum}`,
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
        document.title = "Акции | страница " + pageNum;
    }, [pageNum]);
    return (
        <>
            <div className="stocks__inner">
                <div className="stocks__block">
                    {arrPage.map((el: any, i: number) => {
                        return (
                            <Stock
                                key={i}
                                id={el.id}
                                title={el.title}
                                photo={el.photo}
                                nameClass={el.nameClass}
                            ></Stock>
                        );
                    })}
                </div>

                <div className="stocks__page-nav">
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

export default StockPage;