"use client"

import React from "react"
import mobSearch from "../../../public/svg/mob-menu/mob-search-btn.svg";
import { usePopapSearchActive } from "../../store";
import Image from "next/image";
import Link from "next/link";

const MobileSearchBtn = () => {
    const { popapSearch, changePopapSearch } = usePopapSearchActive();
    return (
        <>
            <li className="mobile-menu__item" onClick={changePopapSearch}>
                <Link href="#" className="mobile-menu__search">
                    <Image src={mobSearch} alt="search-icon"></Image>
                </Link>
            </li>
        </>
    );
}

export default MobileSearchBtn;