
import React from "react"
import { Metadata } from "next";
import Breadcrumbs from "../../../utils/Breadcrumbs"
import TitleH1 from "../../../components/TitleH1"
import UserItemMenu from "../../../components/UserItemMenu/UserItemMenu"
import ExitButton from "../../../components/ExitButton/ExitButton"

export const metadata: Metadata = {
    title: "Изменить пароль",
    description: "Кабинет пользователя",
};

const Change_password = () => {
    return (
        <>
            <div className="g-container">
                <Breadcrumbs></Breadcrumbs>
                <section className="account-my">
                    <TitleH1 title={"Изменить пароль"}></TitleH1>
                    <div className="account-my__holder">
                        <div className="account-my__column">
                            <div className="account-my__account block-border">
                                <div className="account__es">
                                    <ul className="account__list">
                                        <UserItemMenu></UserItemMenu>
                                        <ExitButton></ExitButton>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="account-my__column">
                            <div className="account-my__change-password">
                                <div className="account-my__change-password_block">
                                    <div className="item__input-box">
                                        <div className="item__input_label">
                                            Введите старый пароль
                                        </div>
                                        <input
                                            type="password"
                                            // placeholder="+7 (9__) ___-__-__"
                                            className="item__input input-text"
                                        ></input>
                                    </div>
                                    <div className="item__input-box">
                                        <div className="item__input_label">
                                            Введите новый пароль
                                        </div>
                                        <input
                                            type="password"
                                            // placeholder="+7 (9__) ___-__-__"
                                            className="item__input input-text"
                                        ></input>
                                    </div>
                                    <div className="item__input-box">
                                        <div className="item__input_label">
                                            Повторите новый пароль
                                        </div>
                                        <input
                                            type="password"
                                            // placeholder="+7 (9__) ___-__-__"
                                            className="item__input input-text"
                                        ></input>
                                    </div>
                                    <div className="change-password__button-box">
                                        <button className="change-password__button button">
                                            Сохранить изменения
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Change_password;