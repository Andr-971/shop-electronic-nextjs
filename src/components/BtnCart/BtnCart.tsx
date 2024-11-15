"use client"
import React from "react"
import Image from "next/image";
import backetIcon from "../../../public/svg/backet-1.svg"
import { useSession } from "next-auth/react";
import Link from "next/link";
import "./BtnCart.css"

import BtnCartNum from "../BtnCartNum/BtnCartNum";

const BtnCart = () => {
    const session = useSession();
    return (
        <>
            {session.status === "authenticated" && (
                <Link
                    href={"/basket"}
                    type="button"
                    className="header__btn header__btn_backet"
                >
                    <BtnCartNum></BtnCartNum>
                    <Image src={backetIcon} alt="backet-icon"></Image>
                </Link>
            )}
        </>
    );
}

export default BtnCart;