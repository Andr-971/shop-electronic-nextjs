"use client"
import React from "react"
import userMenu from "../../../public/userMenu"
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./user-item-menu.css"

const UserItemMenu = () => {
    const pathname = usePathname();
    return (
        <>
            {userMenu.map((el: any) => {
                return (
                    <Link href={el.pathUrl}>
                        <li
                            className={`${
                                pathname === el.pathUrl ? "active__it-user" : ""
                            } header__user-item `}
                        >
                            {el.nameMenu}
                        </li>
                    </Link>
                );
            })}
        </>
    );
}

export default UserItemMenu;