
import React from "react"
import { Metadata } from "next";
import Breadcrumbs from "../../../utils/Breadcrumbs.jsx"
import TitleH1 from "../../../components/TitleH1"
import UserItemMenu from "../../../components/UserItemMenu/UserItemMenu"
import ExitButton from "../../../components/ExitButton/ExitButton"
import selectBtn from "../../../../public/svg/select-btn.svg";
import Image from "next/image";

export const metadata: Metadata = {
    title: "История покупок",
    description: "Кабинет пользователя",
};

const History_purchase = () => {
    return (
        <>
            <div className="g-container">
                <Breadcrumbs></Breadcrumbs>
                <section className="account-my">
                    <TitleH1 title={"История покупок"}></TitleH1>
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
                            <div className="account-my__history-block block-border">
                                <div className="history-block__title-box">
                                    <h3 className="h3">История покупок</h3>
                                </div>
                                <ul className="history-block">
                                    <li className="history__item">
                                        <div className="history__item_text">
                                            Заказ #9 от{" "}
                                            <span className="history__item_data">
                                                04.07.2021
                                            </span>
                                        </div>
                                        <div className="history__item_text">
                                            2 товара на сумму 15 600 ₽
                                        </div>
                                        <div className="history__item_text history__text_process">
                                            В процессе
                                        </div>
                                        <div className="history__item_text">
                                            <Image
                                                src={selectBtn}
                                                alt="icon"
                                            ></Image>
                                        </div>
                                    </li>
                                    <li className="history__item">
                                        <div className="history__item_text">
                                            Заказ #9 от{" "}
                                            <span className="history__item_data">
                                                04.07.2021
                                            </span>
                                        </div>
                                        <div className="history__item_text">
                                            2 товара на сумму 15 600 ₽
                                        </div>
                                        <div className="history__item_text history__text_completed">
                                            Выполнен
                                        </div>
                                        <div className="history__item_text">
                                            <Image
                                                src={selectBtn}
                                                alt="icon"
                                            ></Image>
                                        </div>
                                    </li>
                                    <li className="history__item">
                                        <div className="history__item_text">
                                            Заказ #9 от{" "}
                                            <span className="history__item_data">
                                                04.07.2021
                                            </span>
                                        </div>
                                        <div className="history__item_text">
                                            2 товара на сумму 15 600 ₽
                                        </div>
                                        <div className="history__item_text history__text_completed">
                                            Выполнен
                                        </div>
                                        <div className="history__item_text">
                                            <Image
                                                src={selectBtn}
                                                alt="icon"
                                            ></Image>
                                        </div>
                                    </li>
                                    <li className="history__item">
                                        <div className="history__item_text">
                                            Заказ #9 от{" "}
                                            <span className="history__item_data">
                                                04.07.2021
                                            </span>
                                        </div>
                                        <div className="history__item_text">
                                            2 товара на сумму 15 600 ₽
                                        </div>
                                        <div className="history__item_text history__text_completed">
                                            Выполнен
                                        </div>
                                        <div className="history__item_text">
                                            <Image
                                                src={selectBtn}
                                                alt="icon"
                                            ></Image>
                                        </div>
                                    </li>
                                    <li className="history__item">
                                        <div className="history__item_text">
                                            Заказ #9 от{" "}
                                            <span className="history__item_data">
                                                04.07.2021
                                            </span>
                                        </div>
                                        <div className="history__item_text">
                                            2 товара на сумму 15 600 ₽
                                        </div>
                                        <div className="history__item_text history__text_completed">
                                            Выполнен
                                        </div>
                                        <div className="history__item_text">
                                            <Image
                                                src={selectBtn}
                                                alt="icon"
                                            ></Image>
                                        </div>
                                    </li>
                                    <li className="history__item">
                                        <div className="history__item_text">
                                            Заказ #9 от{" "}
                                            <span className="history__item_data">
                                                04.07.2021
                                            </span>
                                        </div>
                                        <div className="history__item_text">
                                            2 товара на сумму 15 600 ₽
                                        </div>
                                        <div className="history__item_text history__text_completed">
                                            Выполнен
                                        </div>
                                        <div className="history__item_text">
                                            <Image
                                                src={selectBtn}
                                                alt="icon"
                                            ></Image>
                                        </div>
                                    </li>
                                </ul>

                                <div className="history__pagination">
                                    <nav className="pagination pagination__page">
                                        <button className="pagination__btn">
                                            {/* <img src="./img/svg/pagination-left.svg" alt="icon"> */}
                                        </button>
                                        <ul className="pagination__block">
                                            <li className="pagination__item pagination__btn active_page">
                                                <a href="#">1</a>
                                            </li>
                                            <li className="pagination__item pagination__btn">
                                                <a href="#">2</a>
                                            </li>
                                            <li className="pagination__item pagination__btn">
                                                <a href="#">3</a>
                                            </li>
                                        </ul>
                                        <li className="pagination__item pagination__btn pagination__btn_more">
                                            <a href="#">
                                                {/* <img src="./img/svg/paganation-more.svg" alt="icon"> */}
                                            </a>
                                        </li>
                                        <li className="pagination__item pagination__btn pagination__btn_numderof">
                                            <a href="#">234</a>
                                        </li>
                                        <button className="pagination__btn">
                                            {/* <img src="./img/svg/pagination-right.svg" alt="icon"> */}
                                        </button>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default History_purchase;