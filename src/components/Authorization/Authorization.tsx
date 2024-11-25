"use client"
import React from "react"
import userIcon from "../../../public/svg/user.svg";
import Image from "next/image";
import Link from "next/link";
import ExitButton from "../../components/ExitButton/ExitButton"
import UserItemMenu from "../UserItemMenu/UserItemMenu";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import {usePopapInterActive} from "../../store"

const Authorization = () => {
    const { changePopapInter } = usePopapInterActive();
    const session = useSession();
    const [user, setUser] = useState(false);
    // const [btnInter, setBtnInter] = useState(false);
    function handlerShowUserMenu() {
        setUser(s => s = !s);
    }
    function handlerInter() {
        changePopapInter();
    }
    return (
        <>
            <div className="header__btn header__btn_user">
                <div className="header__btn_block">
                    {session.status === "authenticated" && (
                        <Image
                            src={userIcon}
                            alt="user-icon"
                            className="header__btn_user"
                            onClick={() => handlerShowUserMenu()}
                        ></Image>
                    )}
                    {session.status === "unauthenticated" && (
                        <button
                            type="button"
                            className="header__btn_comon"
                            onClick={() => handlerInter()}
                        >
                            <Link href="#">Войти</Link>
                        </button>
                    )}
                </div>
                {user && (
                    <div className="header__user-menu">
                        <ul className="header__user-holder">
                            <UserItemMenu
                                handlerShowUserMenu={handlerShowUserMenu}
                            ></UserItemMenu>
                            <ExitButton></ExitButton>
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
}

export default Authorization;