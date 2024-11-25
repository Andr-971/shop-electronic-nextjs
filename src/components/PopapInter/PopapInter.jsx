"use client"
import { usePopapInterActive, usePopapRegisterActive } from "../../store";
import closeBtn from "../../../public/svg/close-btn.svg"
import Image from "next/image";
import BtnYandex from "../../components/BtnYandex/BtnYandex"
import BtnGitHub from "../../components/BtnGitHub/BtnGitHub";
import React from "react"
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const PopapInter = () => {
    const { changePopapInter, popapInter } = usePopapInterActive();
    const { changePopapRegister, popapRegister } = usePopapRegisterActive();
    const router = useRouter()
    
    const handlerSubmit = async (e) => {
        e.preventDefault();
        const res = await signIn("credentials", {
            email: e.target[0].value,
            password: e.target[1].value,
            redirect: false,
        });
        if (res && !res.error) {
            router.push("/");
            changePopapInter();
        } else {
            console.log(res);
        }
    }
    function handlerRegister() {
        changePopapRegister();
        changePopapInter();
    }
    return (
        <>
            {popapInter && (
                <div className="popup-entrance popup-form">
                    <div className="popup-entrance__container popup-form__container">
                        <div className="popup-entrance__title-block popup-form__title-block">
                            <h4 className="popup-entrance__title h4">Вход</h4>
                            <span
                                className="popup-entrance__title-close"
                                onClick={() => changePopapInter()}
                            >
                                <Image src={closeBtn} alt="icon"></Image>
                            </span>
                        </div>
                        <form
                            onSubmit={handlerSubmit}
                            className="popup-entrance__form popup-form__form"
                        >
                            <label htmlFor="tel">Войти с аккаунтом</label>
                            <BtnYandex></BtnYandex>
                            <BtnGitHub></BtnGitHub>
                            <label htmlFor="tel">или</label>
                            <label htmlFor="tel">Эл. почта или телефон</label>
                            <div className="popup-entrance__input-block popup-form__input-block">
                                <input
                                    type="email"
                                    className="popup-entrance__input popup-form__input"
                                    id="tel"
                                ></input>
                            </div>
                            <label htmlFor="pass">Пароль</label>
                            <div className="popup-entrance__input-block popup-form__input-block">
                                <input
                                    type="password"
                                    className="popup-entrance__input popup-form__input"
                                    id="pass"
                                ></input>
                            </div>
                            <a
                                href="#"
                                className="popup-entrance__link_first popup__link"
                            >
                                Забыли пароль?
                            </a>
                            <div className="popup-form__input-checkbox-box">
                                <input
                                    type="checkbox"
                                    name="remember"
                                    id="check-entrance"
                                    defaultChecked
                                    className="popup-entrance__input-checkbox popup-form__input-checkbox"
                                ></input>
                                <label
                                    htmlFor="check-entrance"
                                    className="popup-entrance__input-checklabel popup-form__input-checklabel"
                                >
                                    Запомнить меня
                                </label>
                            </div>
                            <button
                                type="submit"
                                className="popup-entrance__btn popup-form__btn"
                            >
                                Войти
                            </button>
                            <a
                                href="#"
                                className="popup-entrance__link popup__link"
                                onClick={handlerRegister}
                            >
                                Зарегистрироваться
                            </a>
                        </form>
                    </div>
                    <div className="popup-entrance__fon popup-form__fon"></div>
                </div>
            )}
        </>
    );
}

export default PopapInter;