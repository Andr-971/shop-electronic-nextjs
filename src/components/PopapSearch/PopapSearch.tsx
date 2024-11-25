"use client"
import React from "react"
import closeBtn from "../../../public/svg/close-btn.svg"
import Image from "next/image"
import { usePopapSearchActive } from "../../store"
import routeName from "../../../public/routeName"
import { useState } from "react";
import Link from "next/link"

const PopapSearch = () => {
    const [searchInput, setSearchInput] = useState("");
    const [page, setPage] = useState([...routeName]);
    const [filterPage, setfilterPage] = useState<any>("");
    const { changePopapSearch, popapSearch } = usePopapSearchActive();
    function handlerSearch(e:any) {
        setSearchInput(e.target.value);
        const resultPage = page.filter(pag => {
            return pag.title.toLowerCase().includes(searchInput.toLowerCase());
        });
        setfilterPage(resultPage);
    }
    function handlerItenSearch(e:any, el:any) {
        setSearchInput("");
        changePopapSearch(false);
        setfilterPage("");
        // console.log(el.page);
    }

    return (
        <>
            {popapSearch && (
                <div className="popup-search">
                    <div className="popup-search-fon">
                        <div className="popup-search__block">
                            <div className="popup-search__box g-container">
                                <input
                                    type="search"
                                    placeholder="Введите запрос, например «По специальной цене»"
                                    onChange={handlerSearch}
                                    autoFocus
                                ></input>
                                <span onClick={changePopapSearch}>
                                    <Image
                                        src={closeBtn}
                                        alt="icon-close"
                                    ></Image>
                                </span>
                            </div>
                            <div className="popup-search__result g-container">
                                <div className="popup-search__result_block">
                                    {filterPage.length > 0 &&
                                        filterPage.map((el: any) => (
                                            <Link
                                                href={el.path}
                                                className="popup-item__search"
                                                onClick={(e) =>
                                                    handlerItenSearch(e, el)
                                                }
                                                key={el.id}
                                            >
                                                <span className="result_item__text">
                                                    {el.title}
                                                </span>
                                            </Link>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default PopapSearch;