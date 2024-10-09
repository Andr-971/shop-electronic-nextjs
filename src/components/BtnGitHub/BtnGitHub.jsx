"use client"

import React from "react"
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import githubIcon from "../../../public/svg/github.svg"
import "./BtnGitHub.css"

const BtnGitHub = () => {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") || "/";
    return (
        <>
            <div
                onClick={() => signIn("github", { callbackUrl })}
                className="btn-block__github popup-form__btn"
            >
                <div className="btn-icon__github">
                    <Image src={githubIcon} alt="icon" className="icon__github"></Image>
                    <span>github</span>
                </div>
            </div>
        </>
    );
}

export default BtnGitHub;