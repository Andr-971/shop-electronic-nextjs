
"use client";
import React from "react"
import Link from "next/link";
import { usePathname } from "next/navigation";


interface MenuProps {
    link: string;
    text: string;
}

const HeaderMenu = ({ link, text }: MenuProps) => {
    const pathname = usePathname();
    let active = ""
    pathname === link ? (active = "menu__active") : (active = "");
    return (
        <>
            <li className={`header__menu ${active}`}>
                <Link href={link}>
                    <span className="header__menu-text">{ text }</span>
                </Link>
            </li>
        </>
    );
}

export {HeaderMenu};