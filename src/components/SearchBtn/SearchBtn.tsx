"use client"
import React from "react"
import search from "@/../public/svg/search-btn.svg";
import Image from "next/image";
import { usePopapSearchActive } from "@/store"
import { useState, useEffect } from "react";


const SearchBtn = () => {
    const { popapSearch, changePopapSearch } = usePopapSearchActive();
    useEffect(() => {
        window.scroll(0, 0);
    }, [popapSearch]);
    return (
        <>
            <button
                type="button"
                className="header__btn header__btn_first"
                onClick={changePopapSearch}
            >
                <Image
                    src={search}
                    alt="search-icon"
                    className="header__btn_search"
                ></Image>
            </button>
        </>
    );
}

export default SearchBtn;