
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

    return (
        <>
            <li className="header__menu">
                <Link href={link}>
                    <span className="header__menu-text">{ text }</span>
                </Link>
            </li>
        </>
    );
}

export {HeaderMenu};