"use client"
import React from "react"
import { usePopapBacketActive } from "../../store";

const BacketPopap = () => {
    const { popapBacket } = usePopapBacketActive();
    return (
        <>
            {popapBacket && (
                <div className="cart">
                    <div className="cart__container">
                        <div className="g-container">
                            <div className="cart__title-box">
                                <h4 className="title-36-7">
                                    Оформление заказа
                                </h4>
                            </div>
                            <div className="cart__holder">
                                <div className="cart__column_one">
                                    <div className="column__holder_one">
                                        <div className="parameters">
                                            <div className="parameters__container block-border order-1">
                                                <div className="parameters__header">
                                                    <div className="parameters__title-box">
                                                        <h3 className="parameters__title">
                                                            Ваш заказ
                                                        </h3>
                                                    </div>
                                                    <div className="parameters__result-box">
                                                        <ul className="parameters__result_list">
                                                            <li className="parameters__result_item">
                                                                <div className="order__photo">
                                                                    <div className="order__wrap-photo">
                                                                        <div className="order__block-photo">
                                                                            {/* <picture>
                                                                                    <source srcset="./img/main-picture.webp"  class="order__img-photo">
                                                                                    <img src="./img/main-picture.png" alt="фото"  className="order__img-photo">
                                                                                </picture> */}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="parameters__result_item">
                                                                <div className="order__photo">
                                                                    <div className="order__wrap-photo">
                                                                        <div className="order__block-photo">
                                                                            {/* <picture>
                                                                                    <source srcset="./img/main-picture.webp"  class="order__img-photo">
                                                                                    <img src="./img/main-picture.png" alt="фото"  className="order__img-photo">
                                                                                </picture> */}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                        <div className="parameters__button-box">
                                                            <button className="parameters__button">
                                                                Изменить
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="parameters__body hidden">
                                                    <ul className="parameters__list order">
                                                        <li className="parameters__item order__item">
                                                            <div className="order__photo">
                                                                <div className="order__wrap-photo">
                                                                    <div className="order__block-photo">
                                                                        {/* <picture>
                                                                                <source srcset="./img/main-picture.webp"  class="order__img-photo">
                                                                                <img src="./img/main-picture.png" alt="фото"  className="order__img-photo">
                                                                            </picture> */}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="order__name-product">
                                                                <h4>
                                                                    Гироскутер
                                                                    Smart
                                                                    Balance Well
                                                                    6.5 Хип-Хоп
                                                                    (АКВАЗАЩИТА)
                                                                </h4>
                                                            </div>
                                                            <div className="order__counter">
                                                                <button className="first-btn">
                                                                    -
                                                                </button>
                                                                <div className="counter__input-box">
                                                                    <input
                                                                        size={2}
                                                                        type="text"
                                                                        value="1"
                                                                    ></input>
                                                                </div>
                                                                <button className="list-btn">
                                                                    +
                                                                </button>
                                                            </div>
                                                            <div className="order__price-box">
                                                                <div className="order__old-price">
                                                                    <span>
                                                                        5400
                                                                    </span>
                                                                    ₽
                                                                </div>
                                                                <div className="order__new-price">
                                                                    <span>
                                                                        4990
                                                                    </span>
                                                                    ₽
                                                                </div>
                                                            </div>
                                                            <button className="order__delete-box">
                                                                {/* <img src="./img/svg/delite-cart.svg" alt="icon" className="order__delete-icon"> */}
                                                            </button>
                                                            <hr className="order__line"></hr>
                                                        </li>
                                                        <li className="parameters__item order__item">
                                                            <div className="order__photo">
                                                                <div className="order__wrap-photo">
                                                                    <div className="order__block-photo">
                                                                        {/* <picture>
                                                                                <source srcset="./img/main-picture.webp"  class="order__img-photo">
                                                                                <img src="./img/main-picture.png" alt="фото"  className="order__img-photo">
                                                                            </picture> */}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="order__name-product">
                                                                <h4>
                                                                    Гироскутер
                                                                    Smart
                                                                    Balance Well
                                                                    6.5 Хип-Хоп
                                                                    (АКВАЗАЩИТА)
                                                                </h4>
                                                            </div>
                                                            <div className="order__counter">
                                                                <button className="first-btn">
                                                                    -
                                                                </button>
                                                                <div className="counter__input-box">
                                                                    <input
                                                                        size={2}
                                                                        type="text"
                                                                        value="1"
                                                                    ></input>
                                                                </div>
                                                                <button className="list-btn">
                                                                    +
                                                                </button>
                                                            </div>
                                                            <div className="order__price-box">
                                                                <div className="order__old-price">
                                                                    <span>
                                                                        5400
                                                                    </span>
                                                                    ₽
                                                                </div>
                                                                <div className="order__new-price">
                                                                    <span>
                                                                        4990
                                                                    </span>
                                                                    ₽
                                                                </div>
                                                            </div>
                                                            <button className="order__delete-box">
                                                                {/* <img src="./img/svg/delite-cart.svg" alt="icon" className="order__delete-icon"> */}
                                                            </button>
                                                            <hr className="order__line"></hr>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="parameters__btn-box">
                                                <button className="parameters__btn">
                                                    Далее
                                                </button>
                                            </div>
                                            <div className="parameters__container block-border order-2">
                                                <div className="parameters__header">
                                                    <div className="parameters__title-box">
                                                        <h3 className="parameters__title">
                                                            Способ получения
                                                        </h3>
                                                    </div>
                                                    <div className="parameters__result-box">
                                                        <ul className="parameters__result_list parameters__result_list-delivery">
                                                            <li className="parameters__result_item parameters__result_way">
                                                                Самовывоз из:
                                                            </li>
                                                            <li className="parameters__result_item parameters__result_address">
                                                                г.
                                                                Санкт-Петербург,
                                                                Бульвар
                                                                Новаторов, 75
                                                                <div className="parameters__address-time">
                                                                    ПН-ВС 09:00
                                                                    — 22:00
                                                                </div>
                                                            </li>
                                                        </ul>
                                                        <div className="parameters__button-box">
                                                            <button className="parameters__button">
                                                                Изменить
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="parameters__body hidden">
                                                    <div className="parameters__item-header">
                                                        <div className="item__column">
                                                            <div className="item__input-box">
                                                                <div className="item__input_label">
                                                                    Ваш город
                                                                </div>
                                                                <div className="item__select">
                                                                    <div className="item__select-box select-label">
                                                                        <div className="select-text">
                                                                            Санкт-Петербург
                                                                        </div>
                                                                        <button className="select-btn">
                                                                            {/* <img src="./img/svg/select-btn.svg" alt="icon"> */}
                                                                        </button>
                                                                    </div>
                                                                    <ul className="item__select-dropdownlist hidden">
                                                                        <li className="item__select-dropdownitem dropdownitem">
                                                                            Москва
                                                                        </li>
                                                                        <li className="item__select-dropdownitem dropdownitem">
                                                                            Пермь
                                                                        </li>
                                                                        <li className="item__select-dropdownitem dropdownitem">
                                                                            Краснодар
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="item__column">
                                                            <div className="item__input-box">
                                                                <div className="input__radio-box">
                                                                    <div className="form_radio">
                                                                        <input
                                                                            id="delivery"
                                                                            type="radio"
                                                                            name="obtaining"
                                                                            value="delivery"
                                                                        ></input>
                                                                        <div></div>
                                                                        <label
                                                                            htmlFor="delivery"
                                                                            className="radio-label"
                                                                        >
                                                                            Доставка
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="item__input-box">
                                                                <div className="input__radio-box">
                                                                    <div className="form_radio">
                                                                        <input
                                                                            id="pickup"
                                                                            type="radio"
                                                                            name="obtaining"
                                                                            value="pickup"
                                                                        ></input>
                                                                        <div></div>
                                                                        <label
                                                                            htmlFor="pickup"
                                                                            className="radio-label"
                                                                        >
                                                                            Самовывоз
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="parameters__item-body-delivery hidden">
                                                        <div className="parameters__item_row">
                                                            <div className="item__input-box item__input-box_data">
                                                                <div className="item__input_label">
                                                                    Дата
                                                                </div>
                                                                <div className="item__select">
                                                                    <div className="item__select-box select-label">
                                                                        <div className="select-text">
                                                                            Завтра,
                                                                            11
                                                                            июля,
                                                                            вс
                                                                        </div>
                                                                        <button className="select-btn">
                                                                            {/* <img src="./img/svg/select-btn.svg" alt="icon"> */}
                                                                        </button>
                                                                    </div>
                                                                    <ul className="item__select-dropdownlist hidden">
                                                                        <li className="item__select-dropdownitem dropdownitem">
                                                                            Завтра,
                                                                            11
                                                                            июля,
                                                                            вс
                                                                        </li>
                                                                        <li className="item__select-dropdownitem dropdownitem">
                                                                            Завтра,
                                                                            11
                                                                            июля,
                                                                            вс
                                                                        </li>
                                                                        <li className="item__select-dropdownitem dropdownitem">
                                                                            Завтра,
                                                                            11
                                                                            июля,
                                                                            вс
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="item__input-box item__input-box_data">
                                                                <div className="item__input_label">
                                                                    Улица,
                                                                    дом/корпус
                                                                </div>
                                                                <input
                                                                    type="text"
                                                                    className="item__input input-text"
                                                                ></input>
                                                            </div>
                                                        </div>
                                                        <div className="parameters__item_row">
                                                            <div className="item__input-box item__input-box_data">
                                                                <div className="item__input_label">
                                                                    Время
                                                                </div>
                                                                <div className="item__select">
                                                                    <div className="item__select-box select-label">
                                                                        <div className="select-text">
                                                                            <span>
                                                                                15:00–18:00
                                                                            </span>{" "}
                                                                            <span className="color-gray">
                                                                                (бесплатно)
                                                                            </span>
                                                                        </div>
                                                                        <button className="select-btn">
                                                                            {/* <img src="./img/svg/select-btn.svg" alt="icon"> */}
                                                                        </button>
                                                                    </div>
                                                                    <ul className="item__select-dropdownlist hidden">
                                                                        <li className="item__select-dropdownitem dropdownitem">
                                                                            <span>
                                                                                15:00–18:00
                                                                            </span>{" "}
                                                                            (бесплатно)
                                                                        </li>
                                                                        <li className="item__select-dropdownitem dropdownitem">
                                                                            <span>
                                                                                15:00–18:00
                                                                            </span>{" "}
                                                                            (бесплатно)
                                                                        </li>
                                                                        <li className="item__select-dropdownitem dropdownitem">
                                                                            <span>
                                                                                15:00–18:00
                                                                            </span>{" "}
                                                                            (бесплатно)
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="item__input-box item__input-box_data">
                                                                <div className="item__input_label">
                                                                    Квартира
                                                                </div>
                                                                <input
                                                                    type="text"
                                                                    className="item__input input-text"
                                                                ></input>
                                                            </div>
                                                        </div>
                                                        <div className="parameters__item_row">
                                                            <div className="item__input-box item__input-box_comment">
                                                                <div className="item__input_label">
                                                                    Комментарий
                                                                    курьеру
                                                                </div>
                                                                <input
                                                                    type="text"
                                                                    className="item__input input-text"
                                                                ></input>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="parameters__item-body-pickup hidden">
                                                        <div className="parameters__item-col parameters__item-col_address">
                                                            <div className="parameters__address-title_box">
                                                                <h5 className="parameters__address-title">
                                                                    Товар
                                                                    доступен в
                                                                    15 магазинах
                                                                </h5>
                                                            </div>
                                                            <ul className="parameters__address-list">
                                                                <li className="parameters__address-item">
                                                                    <div className="form_radio">
                                                                        <input
                                                                            id="address-1"
                                                                            type="radio"
                                                                            name="address"
                                                                            value="address-1"
                                                                        ></input>
                                                                        <div></div>
                                                                        <label
                                                                            htmlFor="address-1"
                                                                            className="radio-label"
                                                                        >
                                                                            г.
                                                                            Санкт-Петербург,
                                                                            Бульвар
                                                                            Новаторов,
                                                                            75
                                                                        </label>
                                                                    </div>
                                                                    <div className="parameters__address-time">
                                                                        ПН-ВС
                                                                        09:00 —
                                                                        22:00
                                                                    </div>
                                                                </li>
                                                                <li className="parameters__address-item">
                                                                    <div className="form_radio">
                                                                        <input
                                                                            id="address-2"
                                                                            type="radio"
                                                                            name="address"
                                                                            value="address-2"
                                                                        ></input>
                                                                        <div></div>
                                                                        <label
                                                                            htmlFor="address-2"
                                                                            className="radio-label"
                                                                        >
                                                                            г.
                                                                            Санкт-Петербург,
                                                                            Бульвар
                                                                            Новаторов,
                                                                            75
                                                                        </label>
                                                                    </div>
                                                                    <div className="parameters__address-time">
                                                                        ПН-ВС
                                                                        09:00 —
                                                                        22:00
                                                                    </div>
                                                                </li>
                                                                <li className="parameters__address-item">
                                                                    <div className="form_radio">
                                                                        <input
                                                                            id="address-3"
                                                                            type="radio"
                                                                            name="address"
                                                                            value="address-3"
                                                                        ></input>
                                                                        <div></div>
                                                                        <label
                                                                            htmlFor="address-3"
                                                                            className="radio-label"
                                                                        >
                                                                            г.
                                                                            Санкт-Петербург,
                                                                            Бульвар
                                                                            Новаторов,
                                                                            75
                                                                        </label>
                                                                    </div>
                                                                    <div className="parameters__address-time">
                                                                        ПН-ВС
                                                                        09:00 —
                                                                        22:00
                                                                    </div>
                                                                </li>
                                                                <li className="parameters__address-item">
                                                                    <div className="form_radio">
                                                                        <input
                                                                            id="address-4"
                                                                            type="radio"
                                                                            name="address"
                                                                            value="address-4"
                                                                        ></input>
                                                                        <div></div>
                                                                        <label
                                                                            htmlFor="address-4"
                                                                            className="radio-label"
                                                                        >
                                                                            г.
                                                                            Санкт-Петербург,
                                                                            Бульвар
                                                                            Новаторов,
                                                                            75
                                                                        </label>
                                                                    </div>
                                                                    <div className="parameters__address-time">
                                                                        ПН-ВС
                                                                        09:00 —
                                                                        22:00
                                                                    </div>
                                                                </li>
                                                                <li className="parameters__address-item">
                                                                    <div className="form_radio">
                                                                        <input
                                                                            id="address-5"
                                                                            type="radio"
                                                                            name="address"
                                                                            value="address-5"
                                                                        ></input>
                                                                        <div></div>
                                                                        <label
                                                                            htmlFor="address-5"
                                                                            className="radio-label"
                                                                        >
                                                                            г.
                                                                            Санкт-Петербург,
                                                                            Бульвар
                                                                            Новаторов,
                                                                            75
                                                                        </label>
                                                                    </div>
                                                                    <div className="parameters__address-time">
                                                                        ПН-ВС
                                                                        09:00 —
                                                                        22:00
                                                                    </div>
                                                                </li>
                                                                <li className="parameters__address-item">
                                                                    <div className="form_radio">
                                                                        <input
                                                                            id="address-6"
                                                                            type="radio"
                                                                            name="address"
                                                                            value="address-6"
                                                                        ></input>
                                                                        <div></div>
                                                                        <label
                                                                            htmlFor="address-6"
                                                                            className="radio-label"
                                                                        >
                                                                            г.
                                                                            Санкт-Петербург,
                                                                            Бульвар
                                                                            Новаторов,
                                                                            75
                                                                        </label>
                                                                    </div>
                                                                    <div className="parameters__address-time">
                                                                        ПН-ВС
                                                                        09:00 —
                                                                        22:00
                                                                    </div>
                                                                </li>
                                                                <li className="parameters__address-item">
                                                                    <div className="form_radio">
                                                                        <input
                                                                            id="address-7"
                                                                            type="radio"
                                                                            name="address"
                                                                            value="address-7"
                                                                        ></input>
                                                                        <div></div>
                                                                        <label
                                                                            htmlFor="address-7"
                                                                            className="radio-label"
                                                                        >
                                                                            г.
                                                                            Санкт-Петербург,
                                                                            Бульвар
                                                                            Новаторов,
                                                                            75
                                                                        </label>
                                                                    </div>
                                                                    <div className="parameters__address-time">
                                                                        ПН-ВС
                                                                        09:00 —
                                                                        22:00
                                                                    </div>
                                                                </li>
                                                                <li className="parameters__address-item">
                                                                    <div className="form_radio">
                                                                        <input
                                                                            id="address-8"
                                                                            type="radio"
                                                                            name="address"
                                                                            value="address-8"
                                                                        ></input>
                                                                        <div></div>
                                                                        <label
                                                                            htmlFor="address-8"
                                                                            className="radio-label"
                                                                        >
                                                                            г.
                                                                            Санкт-Петербург,
                                                                            Бульвар
                                                                            Новаторов,
                                                                            75
                                                                        </label>
                                                                    </div>
                                                                    <div className="parameters__address-time">
                                                                        ПН-ВС
                                                                        09:00 —
                                                                        22:00
                                                                    </div>
                                                                </li>
                                                                <li className="parameters__address-item">
                                                                    <div className="form_radio">
                                                                        <input
                                                                            id="address-9"
                                                                            type="radio"
                                                                            name="address"
                                                                            value="address-9"
                                                                        ></input>
                                                                        <div></div>
                                                                        <label
                                                                            htmlFor="address-9"
                                                                            className="radio-label"
                                                                        >
                                                                            г.
                                                                            Санкт-Петербург,
                                                                            Бульвар
                                                                            Новаторов,
                                                                            75
                                                                        </label>
                                                                    </div>
                                                                    <div className="parameters__address-time">
                                                                        ПН-ВС
                                                                        09:00 —
                                                                        22:00
                                                                    </div>
                                                                </li>
                                                                <li className="parameters__address-item">
                                                                    <div className="form_radio">
                                                                        <input
                                                                            id="address-10"
                                                                            type="radio"
                                                                            name="address"
                                                                            value="address-10"
                                                                        ></input>
                                                                        <div></div>
                                                                        <label
                                                                            htmlFor="address-10"
                                                                            className="radio-label"
                                                                        >
                                                                            г.
                                                                            Санкт-Петербург,
                                                                            Бульвар
                                                                            Новаторов,
                                                                            75
                                                                        </label>
                                                                    </div>
                                                                    <div className="parameters__address-time">
                                                                        ПН-ВС
                                                                        09:00 —
                                                                        22:00
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="parameters__item-col parameters__item-col_maps">
                                                            <div className="parameters__map-box">
                                                                <div className="map__wrap-photo">
                                                                    <div className="map__block-photo">
                                                                        {/* <picture>
                                                                                <source srcset="./img/map-3.webp"  class="map__img-photo">
                                                                                <img src="./img/map-3.png" alt="фото"  className="map__img-photo">
                                                                            </picture> */}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="parameters__container block-border order-3">
                                                <div className="parameters__header">
                                                    <div className="parameters__title-box">
                                                        <h3 className="parameters__title">
                                                            Способ оплаты
                                                        </h3>
                                                    </div>
                                                    <div className="parameters__result-box">
                                                        <ul className="parameters__result_list">
                                                            <li className="parameters__result_item parameters__result_payment">
                                                                Наличными
                                                            </li>
                                                        </ul>
                                                        <div className="parameters__button-box">
                                                            <button className="parameters__button">
                                                                Изменить
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="parameters__body hidden">
                                                    <div className="item__input-box">
                                                        <div className="item__select">
                                                            <div className="item__select-box select-label">
                                                                <div className="select-text">
                                                                    Наличными
                                                                </div>
                                                                <button className="select-btn">
                                                                    {/* <img src="./img/svg/select-btn.svg" alt="icon"> */}
                                                                </button>
                                                            </div>
                                                            <ul className="item__select-dropdownlist hidden">
                                                                <li className="item__select-dropdownitem dropdownitem">
                                                                    Картой
                                                                </li>
                                                                <li className="item__select-dropdownitem dropdownitem">
                                                                    Электронный
                                                                    кошелёк
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="parameters__container block-border order-4">
                                                <div className="parameters__header">
                                                    <div className="parameters__title-box">
                                                        <h3 className="parameters__title parameters__active">
                                                            Получатель
                                                        </h3>
                                                    </div>
                                                    <div className="parameters__result-box hidden">
                                                        <ul className="parameters__result_list">
                                                            <li className="parameters__result_item"></li>
                                                        </ul>
                                                        <div className="parameters__button-box">
                                                            <button className="parameters__button">
                                                                Изменить
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="parameters__body">
                                                    <div className="parameters__row">
                                                        <div className="item__input-box item__input-box_recipient">
                                                            <div className="item__input_label">
                                                                Имя
                                                            </div>
                                                            <input
                                                                type="text"
                                                                placeholder="Например, Иван"
                                                                className="item__input input-text"
                                                            ></input>
                                                        </div>
                                                        <div className="item__input-box item__input-box_recipient">
                                                            <div className="item__input_label">
                                                                Фамилия
                                                            </div>
                                                            <input
                                                                type="text"
                                                                placeholder="Например, Иванов"
                                                                className="item__input input-text"
                                                            ></input>
                                                        </div>
                                                    </div>
                                                    <div className="parameters__row">
                                                        <div className="item__input-box item__input-box_recipient">
                                                            <div className="item__input_label">
                                                                Номер телефона
                                                            </div>
                                                            <input
                                                                type="text"
                                                                placeholder="+7 (9__) ___-__-__"
                                                                className="item__input input-text"
                                                            ></input>
                                                        </div>
                                                        <div className="item__input-box item__input-box_recipient">
                                                            <div className="item__input_label">
                                                                Эл. почта
                                                            </div>
                                                            <input
                                                                type="text"
                                                                placeholder="Например,  smart@gmail.com"
                                                                className="item__input input-text"
                                                            ></input>
                                                        </div>
                                                    </div>
                                                    <div className="parameters__row">
                                                        <div className="popup-form__input-checkbox-box">
                                                            <input
                                                                type="checkbox"
                                                                name="remember"
                                                                id="check-notcallback"
                                                                defaultChecked
                                                                className="popup-entrance__input-checkbox popup-form__input-checkbox"
                                                            ></input>
                                                            <label
                                                                htmlFor="check-notcallback"
                                                                className="popup-entrance__input-checklabel popup-form__input-checklabel"
                                                            >
                                                                Не перезванивать
                                                                мне для
                                                                подтверждения
                                                                заказа
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cart__column_two">
                                    <div className="column__holder_two block-bgc">
                                        <div className="cart-card">
                                            <div className="cart-card__inner">
                                                <div className="cart-card__title">
                                                    Итого
                                                </div>
                                                <div className="cart-card__amount-box">
                                                    <div className="cart-card__amount-text">
                                                        <span>2</span> товара на
                                                        сумму:
                                                    </div>
                                                    <div className="cart-card__amount-number">
                                                        {" "}
                                                        <span>22 580</span> ₽
                                                    </div>
                                                </div>
                                                <div className="cart-card__delivery-box">
                                                    <div className="cart-card__delivery-text">
                                                        Стоимость доставки
                                                    </div>
                                                    <div className="cart-card__delivery-res">
                                                        бесплатно
                                                    </div>
                                                </div>
                                                <hr className="cart-card__line"></hr>
                                                <div className="cart-card__price-box">
                                                    <div className="cart-card__price-text">
                                                        К оплате
                                                    </div>
                                                    <div className="cart-card__price-number">
                                                        <span>22 580 </span>₽
                                                    </div>
                                                </div>
                                                <div className="cart-card__button-box">
                                                    <button className="cart-card__button">
                                                        Оформить заказ
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="cart__checked-box">
                                            <div className="popup-form__input-checkbox-box">
                                                <input
                                                    type="checkbox"
                                                    name="remember"
                                                    id="check-cart"
                                                    defaultChecked
                                                    className="popup-entrance__input-checkbox popup-form__input-checkbox"
                                                ></input>
                                                <label
                                                    htmlFor="check-cart"
                                                    className="popup-entrance__input-checklabel popup-form__input-checklabel"
                                                ></label>
                                            </div>
                                            <div className="cart__checked-text">
                                                <p className="popup-registration__text">
                                                    Подтверждая заказ, я
                                                    принимаю условия{" "}
                                                </p>
                                                <a
                                                    href="#"
                                                    className="popup-registration__link_first popup__link"
                                                >
                                                    пользовательского соглашения
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cart__footer">
                                <div className="cart__footer_left">
                                    SmartТехника © 2024 Все права защищены
                                </div>
                                <div className="cart__footer_right">
                                    Разработка: Рябов А.Б.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cart__fon"></div>
                </div>
            )}
        </>
    );
}

export default BacketPopap;