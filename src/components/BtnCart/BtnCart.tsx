"use client"
import React from "react"
import Image from "next/image";
import backet from "../../../public/svg/backet-1.svg"
import { useSession } from "next-auth/react";
import Link from "next/link";
import "./BtnCart"

const BtnCart = () => {
    const session = useSession();

    return (
        <>
            {session.status === "authenticated" && (
                <Link
                    href={"/backet"}
                    type="button"
                    className="header__btn header__btn_backet"
                >
                    <div className="basket__block">
                        <span className="basket__num">{ "3"}</span>
                    </div>
                    <Image src={backet} alt="backet-icon"></Image>
                </Link>
            )}
        </>
    );
}

export default BtnCart;