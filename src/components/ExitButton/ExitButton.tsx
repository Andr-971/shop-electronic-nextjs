"use client"
import React from "react"
import { useSession, signOut } from "next-auth/react";

const ExitButton = () => {
    return (
        <>
            <li
                className="header__user-item header__user-item_last"
                onClick={() =>
                    signOut({
                        callbackUrl: "/",
                    })
                }
            >
                Выйти
            </li>
        </>
    );
}

export default ExitButton;