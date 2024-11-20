import { Metadata } from "next";
import TitleH1 from "@/components/TitleH1";

export const metadata: Metadata = {
    title: "Оптом",
    description: "Выгодные условия для оптовой покупки",
};

import Breadcrumbs from "@/utils/Breadcrumbs";

export default function Wholesale() {
    return (
        <>
            <div className="g-container">
                <section className="section-about">
                    <Breadcrumbs></Breadcrumbs>
                    <TitleH1 title="Оптом"></TitleH1>
                    <div className="wholesale__text-block">
                        <p className="wholesale__text">Наш интернет-магазин специализируется на продаже различных моделей электротранспорта:</p>
                        <ul className="wholesale__list">
                            <li className="wholesale__item">
                                <p className="wholesale__text">гироскутеров</p>
                            </li>
                            <li className="wholesale__item">
                                <p className="wholesale__text">мини-сигвеев </p>
                            </li>
                            <li className="wholesale__item">
                                <p className="wholesale__text">моноколёс</p>
                            </li>
                            <li className="wholesale__item">
                                <p className="wholesale__text">электросамокатов</p>
                            </li>
                        </ul>
                        <p className="wholesale__text">Мы продаём гироскутеры как в розницу, так и оптом, по специальным ценам. Приглашаем к сотрудничеству оптовых покупателей! </p>
                        <p className="wholesale__text">Вы хотите купить гироскутер в Москве оптом? Познакомьтесь с нашими оптовыми ценами, и вы убедитесь: наше предложение действительно выгодное. С нами сотрудничают десятки партнёров в Москве и регионах, закупая гироскутеры оптом: цена намного ниже розничной, что позволяет получать хороший доход от бизнеса. </p>
                        <p className="wholesale__text">Продавая гироскутеры оптом в Москве, мы готовы организовать доставку любых моделей и в регионы России. Сотрудничайте с нами – это выгодно! </p>
                        <p className="wholesale__text">Самые выгодные цены - от 5000 руб.!</p>
                    </div>
                    <div className="wholesale__title-box">
                        <h2 className="wholesale__title title-36-7">Заполните форму и мы свяжемся с вами</h2>
                    </div>
                    <div className="wholesale__form">
                        <div className="form__block">
                            <div className="form__column">
                                <div className="item__input-box">
                                    <div className="item__input_label">Имя</div>
                                    <input type="text" placeholder="Например, Иван" className="item__input input-text"></input>
                                </div>
                                <div className="item__input-box">
                                    <div className="item__input_label">Номер телефона</div>
                                    <input type="text" placeholder="+7 (9__) ___-__-__" className="item__input input-text"></input>
                                </div>
                            </div>
                            <div className="form__column">
                                <div className="item__input-box">
                                    <div className="item__input_label">Сообщение</div>
                                    <textarea cols={20} rows={6} placeholder="Введите сообщение" className="item__input input-text"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="form__row">
                            <div className="form__button-box">
                                <button className="form__button">Отправить</button>
                            </div>
                            <div className="form__checked-box">
                                <div className="popup-form__input-checkbox-box">
                                    <input type="checkbox" name="remember" id="check-confendiality" defaultChecked className="popup-entrance__input-checkbox popup-form__input-checkbox"></input>
                                    <label htmlFor="check-confendiality" className="popup-entrance__input-checklabel popup-form__input-checklabel">Отправляя данную форму вы соглашаетесь с политикой конфиденциальности</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
