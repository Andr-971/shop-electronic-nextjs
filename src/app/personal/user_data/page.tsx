
import React from "react"
import { Metadata } from "next";
import Breadcrumbs from "@/utils/Breadcrumbs"
import TitleH1 from "@/components/TitleH1";
import UserItemMenu from "@/components/UserItemMenu/UserItemMenu";
import ExitButton from "@/components/ExitButton/ExitButton";
import Image from "next/image";
import selectBtn from "../../../../public/svg/select-btn.svg"

export const metadata: Metadata = {
    title: "Личные данные",
    description: "Кабинет пользователя",
};

const User_Data = () => {
    return (
        <>
            <div className="g-container">
                <Breadcrumbs></Breadcrumbs>
                <section className="account-my">
                    <TitleH1 title={"Личные данные"}></TitleH1>
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
                            <div className="account-my__personal-data_block">
                                <div className="account-my__personal-data">
                                    <div className="personal-data__column">
                                        <div className="item__input-box">
                                            <div className="item__input_label">
                                                Имя
                                            </div>
                                            <input
                                                type="text"
                                                placeholder="Например, Иван"
                                                className="item__input input-text"
                                            ></input>
                                        </div>
                                        <div className="item__input-box">
                                            <div className="item__input_label">
                                                Эл. почта
                                            </div>
                                            <input
                                                type="text"
                                                placeholder="Например,  smart@gmail.com"
                                                className="item__input input-text"
                                            ></input>
                                        </div>
                                        <div className="item__input-box">
                                            <div className="item__input_label">
                                                Номер телефона
                                            </div>
                                            <input
                                                type="text"
                                                placeholder="+7 (9__) ___-__-__"
                                                className="item__input input-text"
                                            ></input>
                                        </div>
                                        <div className="item__input-box">
                                            <div className="item__input_label">
                                                Город
                                            </div>
                                            <input
                                                type="text"
                                                placeholder="Город не указан"
                                                className="item__input input-text"
                                            ></input>
                                        </div>
                                        <div className="item__input-box">
                                            <div className="item__input_label">
                                                Индекс
                                            </div>
                                            <input
                                                type="text"
                                                placeholder="Индекс не указан"
                                                className="item__input input-text"
                                            ></input>
                                        </div>
                                    </div>
                                    <div className="personal-data__column">
                                        <div className="item__input-box">
                                            <div className="item__input_label">
                                                Адрес
                                            </div>
                                            <input
                                                type="text"
                                                placeholder="Адрес не указан"
                                                className="item__input input-text"
                                            ></input>
                                        </div>
                                        <div className="item__input-box">
                                            <div className="item__input_label">
                                                Предпочитаемый способ оплаты
                                            </div>
                                            <div className="item__select">
                                                <div className="item__select-box select-label">
                                                    <div className="select-text">
                                                        Способ не указан
                                                    </div>
                                                    <button className="select-btn">
                                                        <Image
                                                            src={selectBtn}
                                                            alt="icon"
                                                        ></Image>
                                                    </button>
                                                </div>
                                                <ul className="item__select-dropdownlist hidden">
                                                    <li className="item__select-dropdownitem dropdownitem">
                                                        Наличными
                                                    </li>
                                                    <li className="item__select-dropdownitem dropdownitem">
                                                        Картой
                                                    </li>
                                                    <li className="item__select-dropdownitem dropdownitem">
                                                        Электронный кошелёк
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="item__input-box">
                                            <div className="item__input_label">
                                                Предпочитаемый способ доставки
                                            </div>
                                            <div className="item__select">
                                                <div className="item__select-box select-label">
                                                    <div className="select-text">
                                                        Способ не указан
                                                    </div>
                                                    <button className="select-btn">
                                                        {/* <img src="./img/svg/select-btn.svg" alt="icon"> */}
                                                        <Image
                                                            src={selectBtn}
                                                            alt="icon"
                                                        ></Image>
                                                    </button>
                                                </div>
                                                <ul className="item__select-dropdownlist hidden">
                                                    <li className="item__select-dropdownitem dropdownitem">
                                                        Курьером
                                                    </li>
                                                    <li className="item__select-dropdownitem dropdownitem">
                                                        Самовывоз
                                                    </li>
                                                    <li className="item__select-dropdownitem dropdownitem">
                                                        По почте
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="item__input-box">
                                            <div className="item__input_label">
                                                Добавте аватар
                                            </div>
                                            <input
                                                type="file"
                                                placeholder=""
                                                className="item__input input-text"
                                            ></input>
                                        </div>
                                        <div className="personal-data__button-box">
                                            <button className="personal-data__button button">
                                                Сохранить
                                            </button>
                                        </div>
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

export default User_Data;