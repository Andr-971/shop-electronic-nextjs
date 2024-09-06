"use client"
import React from "react"
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import burger from "../../public/svg/menu-burger.svg";

const CatalogMenu = () => {
    const pathname = usePathname();
    let active = ""
    pathname === "/catalog" ? (active = "menu__active") : active = "";
    return (
        <>
            <Link
                href={"/catalog"}
                className={`header__catalog ${active}`}
                id="selectCatalog"
            >
                <Image
                    src={burger}
                    alt="burger-btn"
                    className="header__catalog_des"
                ></Image>
                <span className="header__menu-text">Каталог товаров</span>
            </Link>
        </>
    );
}

export default CatalogMenu;