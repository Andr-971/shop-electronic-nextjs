"use client"
import React from "react"
import { usePopapRegisterActive, usePopapInterActive } from "../../store";
import closeBtn from "../../../public/svg/close-btn.svg"
import Image from "next/image"

const Register = () => {
    const { popapRegister, changePopapRegister } = usePopapRegisterActive();
    const { changePopapInter } = usePopapInterActive();
    function handlerInter() {
        changePopapInter(true);
        changePopapRegister(false);
    }
    return (
        <>
            {popapRegister && (
                <div className="popup-registration popup-form">
                    <div className="popup-registration__container popup-form__container">
                        <div className="popup-registration__title-block popup-form__title-block">
                            <h4 className="popup-registration__title h4">
                                Регистрация
                            </h4>
                            <span
                                className="popup-registration__title-close"
                                onClick={changePopapRegister}
                            >
                                <Image src={closeBtn} alt="icon-close"></Image>
                            </span>
                        </div>
                        <form
                            action="#"
                            className="popup-registration__form popup-form__form"
                        >
                            <label htmlFor="name-registration">Имя</label>
                            <div className="popup-registration__input-block popup-form__input-block">
                                <input
                                    type="text"
                                    className="popup-registration__input popup-form__input"
                                    id="name-registration"
                                    size={18}
                                ></input>
                            </div>
                            <label htmlFor="emall-registration">
                                Эл. почта
                            </label>
                            <div className="popup-registration__input-block popup-form__input-block">
                                <input
                                    type="text"
                                    className="popup-registration__input popup-form__input"
                                    id="emall-registration"
                                    size={18}
                                ></input>
                            </div>
                            <label htmlFor="tel-registration">
                                Номер телефона
                            </label>
                            <div className="popup-registration__input-block popup-form__input-block">
                                <input
                                    type="tel"
                                    className="popup-registration__input popup-form__input"
                                    id="tel-registration"
                                    placeholder="+7 (921) 340-90-56"
                                    size={18}
                                ></input>
                            </div>
                            <label htmlFor="pass-registration">
                                Придумайте пароль
                            </label>
                            <div className="popup-registration__input-block popup-form__input-block">
                                <input
                                    type="password"
                                    className="popup-registration__input popup-form__input"
                                    id="pass-registration"
                                    placeholder=""
                                    size={18}
                                ></input>
                            </div>
                            <p className="popup-registration__text">
                                Регистрируясь, вы соглашаетесь с{" "}
                            </p>
                            <a
                                href="#"
                                className="popup-registration__link_first popup__link"
                            >
                                пользовательским соглашением
                            </a>
                            <div className="popup-form__input-checkbox-box">
                                <input
                                    type="checkbox"
                                    name="remember"
                                    id="check-registration"
                                    defaultChecked
                                    className="popup-entrance__input-checkbox popup-form__input-checkbox"
                                ></input>
                                <label
                                    htmlFor="check-registration"
                                    className="popup-registration__input-checklabel popup-form__input-checklabel"
                                >
                                    Запомнить меня
                                </label>
                            </div>
                            <button className="popup-registration__btn popup-form__btn">
                                Зарегистрироваться
                            </button>
                            <a
                                href="#"
                                className="popup-registration__link popup__link"
                                onClick={handlerInter}
                            >
                                Я уже зарегистрирован
                            </a>
                        </form>
                    </div>
                    <div className="popup-registration__fon popup-form__fon"></div>
                </div>
            )}
        </>
    );
}

export default Register;