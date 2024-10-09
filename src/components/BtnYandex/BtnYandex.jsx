"use client"

import React from "react"
import { signIn } from "next-auth/react"
import { useSearchParams } from "next/navigation"
import yandexIcon from "../../../public/svg/yandex.svg"
import Image from "next/image"
import "./btnYandex.css"

const BtnYandex = () => {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") || "/"
    return (
        <>
            <div
                onClick={() => signIn("yandex", { callbackUrl })}
                className="btn-block__yandex popup-form__btn"
            >
                <div className="btn-icon__yandex">
                    <Image src={yandexIcon} alt="icon" className="icon__yandex"></Image>
                </div>
            </div>
        </>
    );
}

export default BtnYandex;