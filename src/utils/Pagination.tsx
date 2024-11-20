"use client"
import React from "react"
import { useState, useEffect } from "react";
import pagination_more from "../../public/svg/paganation-more.svg";
import Image from "next/image";

const Pagination = ({ arrayPage, pageNum, setPageNum }: any) => {
    function changingScreen(num: number, screen: number) {
        if (window.screen.width < 390.98) {
            return num;
        } else {
            return screen;
        }
    }
    let showNumBtn = 3; // Колличество показываемых кнопок
    // let showNumBtn = changingScreen(2, 3); // Колличество показываемых кнопок
    let startPage = 0;
    let lengthArray = arrayPage.length;
    let currentPage = +pageNum;
    const [showbtn, setShowbtn] = useState(showNumBtn);
    const [startpage, setStartpage] = useState(startPage);
    function handlerMore() {
        if (startpage < lengthArray - 2 && showbtn <= lengthArray - 2) {
            setShowbtn(showbtn + showNumBtn);
            setStartpage(startpage + showNumBtn);
        }
        else {
            setShowbtn(showNumBtn);
            setStartpage(startPage);
        }
    }
    function handlerRight() {
        if (pageNum <= lengthArray - 1) {
            setPageNum(currentPage + 1);
        }
    }
    function handlerLeft() {
        if (currentPage > 1) {
            setPageNum(currentPage - 1);
        }
    }
    function handlerClick(e: any) {
        setPageNum(() => e.target.innerText);
    }
    let notActiveLeft = "";
    let notActiveRight = "";
    currentPage === 1 ? (notActiveLeft = " not_active") : "";
    currentPage === lengthArray ? (notActiveRight = " not_active") : "";
    return (
        <>
            <nav className="pagination pagination__page">
                <button
                    className={`pagination__btn ${notActiveLeft}`}
                    onClick={handlerLeft}
                >
                    <svg
                        width="5.816406"
                        height="10.212891"
                        viewBox="0 0 5.81641 10.2129"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0.12 4.81L5.14 0.1C5.39 -0.13 5.81 0.05 5.81 0.4L5.81 9.81C5.81 10.16 5.39 10.34 5.14 10.1L0.12 5.39C-0.05 5.24 -0.05 4.97 0.12 4.81Z"
                            fill="#070C11"
                        />
                    </svg>
                </button>
                <ul className="pagination__block">
                    {arrayPage.map((el: any, i: number) => {
                        let active = "";
                        let hidden = "";
                        +pageNum === i + 1 ? (active = " active_page") : "";
                        i + 1 <= startpage ? (hidden = " hidden") : "";
                        i + 1 > showbtn && i + 1 < lengthArray
                            ? (hidden = "hidden")
                            : "";
                        return (
                            <li
                                key={i}
                                className={
                                    "pagination__item pagination__btn" +
                                    active +
                                    " " +
                                    hidden
                                }
                                onClick={handlerClick}
                            >
                                {i + 1}
                            </li>
                        );
                    })}
                    <li
                        className="pagination__item pagination__btn pagination__btn_more"
                        onClick={handlerMore}
                    >
                        <Image src={pagination_more} alt="icon"></Image>
                    </li>
                </ul>
                <button
                    className={`pagination__btn ${notActiveRight}`}
                    onClick={handlerRight}
                >
                    <svg
                        width="5.816406"
                        height="10.212891"
                        viewBox="0 0 5.81641 10.2129"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M5.68 4.81L0.67 0.1C0.41 -0.13 0 0.05 0 0.4L0 9.81C0 10.16 0.41 10.34 0.67 10.1L5.68 5.39C5.85 5.24 5.85 4.97 5.68 4.81Z"
                            fill="#070C11"
                        />
                    </svg>
                </button>
            </nav>
        </>
    );
};

export default Pagination;