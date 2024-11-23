import Breadcrumbs from "../../utils/Breadcrumbs.jsx";
import { Metadata } from "next";
import TitleH1 from "../../components/TitleH1";

export const metadata: Metadata = {
    title: "Продажа от производителя",
    description: "Хорошие условия продажи от производителя",
};

export default function Dropshipping() {
    return (
        <>
            <div className="g-container">
                <section className="section-about">
                    <Breadcrumbs></Breadcrumbs>
                    <TitleH1 title="Дропшиппинг"></TitleH1>
                    <div className="dropshipping__text-block">
                        <p className="dropshipping__text">
                            Хотите начать прибыльный бизнес с минимальными
                            вложениями? Предлагаем стать нашим партнёром на
                            основе дропшипинга! Вы сможете продавать десятки
                            моделей гироскутеров, моноколёс, мини-сигвеев и
                            электросамокатов на своём сайте, не заботясь о
                            закупке товара и организации доставки.{" "}
                        </p>
                        <p className="dropshipping__text">
                            Дропшипинг – это модель продаж, в которой вы через
                            свой сайт привлекаете клиентов и продаёте им товар,
                            а обработка заказов производится крупным партнёром.
                            Ваши вложения ограничиваются созданием и
                            продвижением интернет-сайта.
                        </p>
                        <p className="dropshipping__text">
                            Продажа гироскутеров на основе дропшиппинга строится
                            следующим образом:{" "}
                        </p>
                        <ul className="dropshipping__list">
                            <li className="dropshipping__item">
                                <p className="dropshipping__text">
                                    Вы создаёте сайт, на котором продаёте
                                    гироскутеры, представленные в нашем
                                    магазине. Весь наш ассортимент – в вашем
                                    распоряжении. Ваша задача сводится к
                                    продвижению своего сайта и привлечению
                                    покупателей.{" "}
                                </p>
                            </li>
                            <li className="dropshipping__item">
                                <p className="dropshipping__text">
                                    Покупателей вы перенаправляете к нам. Мы
                                    организуем доставку и приём оплаты.
                                </p>
                            </li>
                            <li className="dropshipping__item">
                                <p className="dropshipping__text">
                                    Вы получаете свой процент от совершённой
                                    покупки.
                                </p>
                            </li>
                        </ul>
                        <div className="dropshipping__title-box_h4">
                            <h4 className="h4">
                                Модель дропшиппинга позволяет начать своё дело
                                даже новичку в бизнесе.
                            </h4>
                        </div>
                        <p className="dropshipping__text">
                            Вам не нужно вкладывать деньги в товар, заключать
                            договоры с производителями, договариваться о
                            доставке и растаможке. Вам не потребуются ни склады,
                            ни торговые помещения, ни персонал. Создать
                            интернет-магазин гироскутеров на основе дропшиппинга
                            – несложно и недорого!{" "}
                        </p>
                    </div>
                    <div className="dropshipping__title-box">
                        <h2 className="dropshipping__title title-36-7">
                            Заполните форму и мы свяжемся с вами
                        </h2>
                    </div>
                    <div className="dropshipping__form">
                        <div className="form__block">
                            <div className="form__column">
                                <div className="item__input-box">
                                    <div className="item__input_label">Имя</div>
                                    <input
                                        type="text"
                                        placeholder="Например, Иван"
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
                            </div>
                            <div className="form__column">
                                <div className="item__input-box">
                                    <div className="item__input_label">
                                        Сообщение
                                    </div>
                                    <textarea
                                        cols={20}
                                        rows={6}
                                        placeholder="Введите сообщение"
                                        className="item__input input-text"
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="form__row">
                            <div className="form__button-box">
                                <button className="form__button">
                                    Отправить
                                </button>
                            </div>
                            <div className="form__checked-box">
                                <div className="popup-form__input-checkbox-box">
                                    <input
                                        type="checkbox"
                                        name="remember"
                                        id="check-confendiality"
                                        defaultChecked
                                        className="popup-entrance__input-checkbox popup-form__input-checkbox"
                                    ></input>
                                    <label
                                        htmlFor="check-confendiality"
                                        className="popup-entrance__input-checklabel popup-form__input-checklabel"
                                    >
                                        Отправляя данную форму вы соглашаетесь с
                                        политикой конфиденциальности
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
