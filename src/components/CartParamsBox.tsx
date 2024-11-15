"use client";
import React from "react";
import ParamsTitle from "./ParamsTitle/ParamsTitle";
import BtnParametrs from "./BtnParametrs/BtnParametrs";
import { useBasket } from "@/store";
import Image from "next/image";
import deleteCart from "../../public/svg/delite-cart.svg";
import { useState, useRef, useEffect } from "react";
import ProductCounter from "@/components/ProductCounter/ProductCounter";
import selectBtn from "../../public/svg/select-btn.svg"
import city from "../../public/city"
import mapImg from "../../public/png_webp/map-3.webp"
import {
    currentMonth,
    futureDay,
    futureData,
} from "@/libs/myDataTime";
import { useSession, signOut } from "next-auth/react";

const whenDelivers = [
    {
        id: "1",
        data: `Завтра, ${futureData(1)} ${currentMonth}, ${futureDay(1)}`,
    },
    {
        id: "2",
        data: `${futureData(2)} ${currentMonth}, ${futureDay(2)}`,
    },
    {
        id: "3",
        data: `${futureData(3)} ${currentMonth}, ${futureDay(3)}`,
    },
];
const deliveryTime = [
    {
        id: "1",
        time: "09.00-12.00",
    },
    {
        id: "2",
        time: "12.00-15.00",
    },
    {
        id: "3",
        time: "15.00-18.00",
    },
    {
        id: "4",
        time: "18.00-21.00",
    },
];
const paymentList = [
    {
        id: "1",
        payment: "Наличными",
    },
    {
        id: "2",
        payment: "Банковской картой",
    },
    {
        id: "3",
        payment: "Онлайн-оплата",
    },
    {
        id: "4",
        payment: "Перевод по СБП",
    },
];

const CartParamsBox = ({ el, i }: any) => {
    const {
        basket,
        removeBasket,
        creatVirtualBasket,
        changeTotalPriceDefault,
    } = useBasket();
    const [changeTab1, setChangeTab1] = useState(false);
    const [changeTab2, setChangeTab2] = useState(false);
    const [changeTab3, setChangeTab3] = useState(false);
    const [changeTab4, setChangeTab4] = useState(false);
    const [receiving, setReceiving] = useState<any>(["pickup", "delivery"]);
    const [cityBtn, setCityBtn] = useState(false);
    const [chooseСity, setChooseСity] = useState("Выберите город");
    const [whenDeliverBtn, setWhenDeliverBtn] = useState(false);
    const [timeDeliverBtn, setTimeDeliverBtn] = useState(false);
    const [whenDeliver, setWhenDeliver] = useState(
        `Завтра, ${futureData(1)} ${currentMonth} ${futureDay(1)}`,
    );
    const [timeDeliver, setTimeDeliver] = useState("Выберите время");
    const [chooseAddressСity, setChooseAddressСity] = useState("Укажите город");
    const [street, setStreet] = useState("Укажите улицу и дом");
    const [flat, setFlat] = useState("Номер квартиры");
    const priceNum: any = useRef();
    const [paymentBtn, setPaymentBtn] = useState(false);
    const [payment, setPayment] = useState("Способ оплаты");
    const session = useSession();
    const userNameSession = session.data?.user?.name;
    const userEmailSession = session.data?.user?.email;
    const [userName, setUserName] = useState(userNameSession);
    const [userEmail, setUserEmail] = useState(userEmailSession);

    useEffect(() => { }, [userName, userEmail]);
    useEffect(() => {
        creatVirtualBasket();
        changeTotalPriceDefault();
    }, []);
    useEffect(() => { }, [
        basket.map((e: any) => e.counter),
        basket.map((e: any) => e.price),
    ]);
    function handlerDelete(id: any) {
        removeBasket(id);
    }
    function handlerReceiving(e: any) {
        setReceiving(e.target.value);
    }
    function handlerCity(el: any) {
        setChooseСity(el.city);
        setCityBtn(false);
    }
    function handlerAddressCity(e: any) {
        setChooseAddressСity(e.target.value);
    }
    function handlerData(el: any) {
        setWhenDeliver(el.data);
        setWhenDeliverBtn(false);
    }
    function handlerTime(el: any) {
        setTimeDeliver(el.time);
        setTimeDeliverBtn(false);
    }
    function handlerPayment(el: any) {
        setPayment(el.payment);
        setPaymentBtn(false);
    }
    function handlerStreet(e: any) {
        setStreet(e.target.value);
    }
    function handlerFlat(e: any) {
        setFlat(e.target.value);
    }
    return (
        <>
            {el.id === "1" && (
                <div
                    className="parameters__container block-border order-1"
                    key={el.id}
                >
                    <div className="parameters__header">
                        <ParamsTitle
                            title={el.title}
                            active={changeTab1}
                        ></ParamsTitle>
                        <div className="parameters__result-box">
                            <ul className="parameters__result_list">
                                {basket.length > 0 && !changeTab1
                                    ? basket.map((el: any) => (
                                          <li
                                              className="parameters__result_item"
                                              key={el.id}
                                          >
                                              <div className="order__photo">
                                                  <div className="order__wrap-photo">
                                                      <div className="order__block-photo">
                                                          <Image
                                                              src={
                                                                  el.pathPhotoProduct
                                                              }
                                                              alt="фото"
                                                              className="order__img-photo"
                                                          ></Image>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                      ))
                                    : undefined}
                            </ul>
                            <BtnParametrs
                                setChangeTab1={setChangeTab1}
                            ></BtnParametrs>
                        </div>
                    </div>
                    <div className="parameters__body">
                        <ul className="parameters__list order">
                            {changeTab1 &&
                                basket.map((el: any, i: number) => {
                                    return (
                                        <li
                                            className="parameters__item order__item"
                                            key={el.id}
                                        >
                                            <div className="order__photo">
                                                <div className="order__wrap-photo">
                                                    <div className="order__block-photo">
                                                        <Image
                                                            src={
                                                                el.pathPhotoProduct
                                                            }
                                                            alt="фото"
                                                            className="order__img-photo"
                                                            key={i}
                                                        ></Image>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="order__name-product">
                                                <h4>{el.nameProduct}</h4>
                                            </div>
                                            <ProductCounter
                                                id={el.id}
                                                counter={el.counter}
                                            ></ProductCounter>
                                            <div className="order__price-box">
                                                <div className="order__old-price">
                                                    <span>{el.oldPrice}</span>₽
                                                </div>
                                                <div className="order__new-price">
                                                    <span ref={priceNum}>
                                                        {el.price}
                                                    </span>
                                                    ₽
                                                </div>
                                            </div>
                                            <button
                                                className="order__delete-box"
                                                onClick={() =>
                                                    handlerDelete(el.id)
                                                }
                                            >
                                                <Image
                                                    src={deleteCart}
                                                    alt="icon"
                                                    className="order__delete-icon"
                                                ></Image>
                                            </button>
                                            <hr className="order__line"></hr>
                                        </li>
                                    );
                                })}
                        </ul>
                    </div>
                </div>
            )}
            {el.id === "2" && (
                <div
                    className="parameters__container block-border order-2"
                    key={el.id}
                >
                    <div className="parameters__header">
                        <ParamsTitle
                            title={el.title}
                            active={changeTab2}
                        ></ParamsTitle>
                        <div className="parameters__result-box">
                            <ul className="parameters__result_list parameters__result_list-delivery">
                                {!changeTab2 && (
                                    <>
                                        <li className="parameters__result_item parameters__result_way">
                                            {receiving === "pickup" &&
                                                "Самовывоз из:"}
                                            {receiving === "delivery" &&
                                                "Доставка до:"}
                                        </li>
                                        <li className="parameters__result_item parameters__result_address">
                                            {receiving === "pickup" && (
                                                <>
                                                    {chooseAddressСity}
                                                    <div className="parameters__address-time">
                                                        ПН-ВС 09:00 — 22:00
                                                    </div>
                                                </>
                                            )}
                                            {receiving === "delivery" && (
                                                <>
                                                    {chooseСity}, {street},{" "}
                                                    <span> кв. {flat}</span>
                                                    <div className="parameters__address-time">
                                                        {timeDeliver}
                                                    </div>
                                                </>
                                            )}
                                        </li>
                                    </>
                                )}
                            </ul>
                            <BtnParametrs
                                setChangeTab1={setChangeTab2}
                            ></BtnParametrs>
                        </div>
                    </div>
                    {changeTab2 && (
                        <div className="parameters__body">
                            <div className="parameters__item-header">
                                <div className="item__column">
                                    <div className="item__input-box">
                                        <div className="item__input_label">
                                            Ваш город
                                        </div>
                                        <div className="item__select">
                                            <div className="item__select-box select-label">
                                                <div className="select-text">
                                                    {chooseСity}
                                                </div>
                                                <button
                                                    className={`select-btn ${
                                                        cityBtn ? "rotate" : ""
                                                    }`}
                                                    onClick={() =>
                                                        setCityBtn(
                                                            (e: any) =>
                                                                (e = !e),
                                                        )
                                                    }
                                                >
                                                    <Image
                                                        src={selectBtn}
                                                        alt="icon"
                                                    ></Image>
                                                </button>
                                            </div>
                                            {cityBtn && (
                                                <ul className="item__select-dropdownlist">
                                                    {city.map((el) => {
                                                        return (
                                                            <li
                                                                className={`item__select-dropdownitem dropdownitem ${
                                                                    el.city ===
                                                                    chooseСity
                                                                        ? "active__city"
                                                                        : ""
                                                                }`}
                                                                key={el.id}
                                                                onClick={() =>
                                                                    handlerCity(
                                                                        el,
                                                                    )
                                                                }
                                                            >
                                                                {el.city}
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                            )}
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
                                                    checked={
                                                        receiving === "delivery"
                                                            ? true
                                                            : false
                                                    }
                                                    onChange={(e: any) =>
                                                        handlerReceiving(e)
                                                    }
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
                                                    checked={
                                                        receiving === "pickup"
                                                            ? true
                                                            : false
                                                    }
                                                    onChange={(e: any) =>
                                                        handlerReceiving(e)
                                                    }
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
                            {receiving === "delivery" && (
                                <>
                                    <div className="parameters__item-body-delivery">
                                        <div className="parameters__item_row">
                                            <div className="item__input-box item__input-box_data">
                                                <div className="item__input_label">
                                                    Дата
                                                </div>
                                                <div className="item__select">
                                                    <div className="item__select-box select-label">
                                                        <div className="select-text">
                                                            {whenDeliver}
                                                        </div>
                                                        <button
                                                            className={`select-btn ${
                                                                whenDeliverBtn
                                                                    ? "rotate"
                                                                    : ""
                                                            }`}
                                                            onClick={() =>
                                                                setWhenDeliverBtn(
                                                                    (e: any) =>
                                                                        (e =
                                                                            !e),
                                                                )
                                                            }
                                                        >
                                                            <Image
                                                                src={selectBtn}
                                                                alt="icon"
                                                            ></Image>
                                                        </button>
                                                    </div>
                                                    {whenDeliverBtn && (
                                                        <ul className="item__select-dropdownlist">
                                                            {whenDelivers.map(
                                                                (el: any) => (
                                                                    <li
                                                                        className={`item__select-dropdownitem dropdownitem ${
                                                                            el.data ===
                                                                            whenDeliver
                                                                                ? "active__data"
                                                                                : ""
                                                                        }`}
                                                                        key={
                                                                            el.id
                                                                        }
                                                                        onClick={(
                                                                            e: any,
                                                                        ) =>
                                                                            handlerData(
                                                                                el,
                                                                            )
                                                                        }
                                                                    >
                                                                        {
                                                                            el.data
                                                                        }
                                                                    </li>
                                                                ),
                                                            )}
                                                        </ul>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="item__input-box item__input-box_data">
                                                <div className="item__input_label">
                                                    Улица, дом/корпус
                                                </div>
                                                <input
                                                    type="text"
                                                    className="item__input input-text"
                                                    onChange={handlerStreet}
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
                                                            {timeDeliver ===
                                                            "Выберите время" ? (
                                                                <span>
                                                                    {
                                                                        timeDeliver
                                                                    }
                                                                </span>
                                                            ) : (
                                                                <>
                                                                    {
                                                                        timeDeliver
                                                                    }
                                                                    <span className="color-gray">
                                                                        (бесплатно)
                                                                    </span>
                                                                </>
                                                            )}
                                                        </div>
                                                        <button
                                                            className={`select-btn ${
                                                                timeDeliverBtn
                                                                    ? "rotate"
                                                                    : ""
                                                            }`}
                                                        >
                                                            <Image
                                                                src={selectBtn}
                                                                alt="icon"
                                                                onClick={() =>
                                                                    setTimeDeliverBtn(
                                                                        (
                                                                            e: any,
                                                                        ) =>
                                                                            (e =
                                                                                !e),
                                                                    )
                                                                }
                                                            ></Image>
                                                        </button>
                                                    </div>
                                                    {timeDeliverBtn && (
                                                        <ul className="item__select-dropdownlist">
                                                            {deliveryTime.map(
                                                                (el: any) => (
                                                                    <li
                                                                        className={`item__select-dropdownitem dropdownitem ${
                                                                            el.time ===
                                                                            timeDeliver
                                                                                ? "active__time"
                                                                                : ""
                                                                        }`}
                                                                        key={
                                                                            el.id
                                                                        }
                                                                        onClick={() =>
                                                                            handlerTime(
                                                                                el,
                                                                            )
                                                                        }
                                                                    >
                                                                        <span>
                                                                            {
                                                                                el.time
                                                                            }
                                                                        </span>{" "}
                                                                        (бесплатно)
                                                                    </li>
                                                                ),
                                                            )}
                                                        </ul>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="item__input-box item__input-box_data">
                                                <div className="item__input_label">
                                                    Квартира
                                                </div>
                                                <input
                                                    type="number"
                                                    className="item__input input-text"
                                                    onChange={handlerFlat}
                                                ></input>
                                            </div>
                                        </div>
                                        <div className="parameters__item_row">
                                            <div className="item__input-box item__input-box_comment">
                                                <div className="item__input_label">
                                                    Комментарий курьеру
                                                </div>
                                                <input
                                                    type="text"
                                                    className="item__input input-text"
                                                ></input>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                            {receiving === "pickup" && (
                                <>
                                    <div className="parameters__item-body-pickup">
                                        <div className="parameters__item-col parameters__item-col_address">
                                            <div className="parameters__address-title_box">
                                                <h5 className="parameters__address-title">
                                                    Товар доступен в
                                                    <span
                                                        style={{
                                                            padding: "0px 5px",
                                                        }}
                                                    >
                                                        {city.map((el: any) => {
                                                            return (
                                                                el.city ===
                                                                    chooseСity &&
                                                                el.issueAddress
                                                                    .length
                                                            );
                                                        })}
                                                    </span>
                                                    магазинах
                                                </h5>
                                            </div>
                                            <ul className="parameters__address-list">
                                                {city.map((el: any) => {
                                                    if (
                                                        el.city === chooseСity
                                                    ) {
                                                        return el.issueAddress.map(
                                                            (e: any) => {
                                                                return (
                                                                    <li
                                                                        className="parameters__address-item"
                                                                        key={
                                                                            e.id
                                                                        }
                                                                    >
                                                                        <div className="form_radio">
                                                                            <input
                                                                                id={`address-${e.id}`}
                                                                                type="radio"
                                                                                name="address"
                                                                                value={
                                                                                    e.street
                                                                                }
                                                                                onChange={
                                                                                    handlerAddressCity
                                                                                }
                                                                            ></input>
                                                                            <div></div>
                                                                            <label
                                                                                htmlFor={`address-${e.id}`}
                                                                                className="radio-label"
                                                                            >
                                                                                {
                                                                                    e.street
                                                                                }
                                                                            </label>
                                                                        </div>
                                                                        <div className="parameters__address-time">
                                                                            <span
                                                                                style={{
                                                                                    padding:
                                                                                        "0px 5px",
                                                                                }}
                                                                            >
                                                                                ПН-ВС
                                                                            </span>
                                                                            <span
                                                                                style={{
                                                                                    padding:
                                                                                        "0px 5px",
                                                                                }}
                                                                            >
                                                                                09:00
                                                                                —
                                                                                22:00
                                                                            </span>
                                                                        </div>
                                                                    </li>
                                                                );
                                                            },
                                                        );
                                                    }
                                                })}
                                            </ul>
                                        </div>
                                        <div className="parameters__item-col parameters__item-col_maps">
                                            <div className="parameters__map-box">
                                                <div className="map__wrap-photo">
                                                    <div className="map__block-photo">
                                                        <Image
                                                            src={mapImg}
                                                            alt="карта"
                                                            className="map__img-photo"
                                                        ></Image>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    )}
                </div>
            )}
            {el.id === "3" && (
                <div
                    className="parameters__container block-border order-3"
                    key={el.id}
                >
                    <div className="parameters__header">
                        <ParamsTitle
                            title={el.title}
                            active={changeTab3}
                        ></ParamsTitle>
                        <div className="parameters__result-box">
                            <ul className="parameters__result_list">
                                {!changeTab3 && (
                                    <>
                                        <li className="parameters__result_item parameters__result_payment">
                                            {payment === "Способ оплаты" ? (
                                                "Выберите способ оплаты"
                                            ) : (
                                                <>{payment}</>
                                            )}
                                        </li>
                                    </>
                                )}
                            </ul>
                            <BtnParametrs
                                setChangeTab1={setChangeTab3}
                            ></BtnParametrs>
                        </div>
                    </div>
                    {changeTab3 && (
                        <div className="parameters__body">
                            <div className="item__input-box">
                                <div className="item__select">
                                    <div className="item__select-box select-label">
                                        <div className="select-text">
                                            {payment}
                                        </div>
                                        <button
                                            className={`select-btn ${
                                                paymentBtn ? "rotate" : ""
                                            }`}
                                            onClick={() =>
                                                setPaymentBtn(
                                                    (e: any) => (e = !e),
                                                )
                                            }
                                        >
                                            <Image
                                                src={selectBtn}
                                                alt="icon"
                                            ></Image>
                                        </button>
                                    </div>
                                    {paymentBtn && (
                                        <ul className="item__select-dropdownlist">
                                            {paymentList.map((el: any) => {
                                                return (
                                                    <li
                                                        className={`item__select-dropdownitem dropdownitem ${
                                                            el.payment ===
                                                            payment
                                                                ? "active__payment"
                                                                : ""
                                                        }`}
                                                        key={el.id}
                                                        onClick={(e: any) =>
                                                            handlerPayment(el)
                                                        }
                                                    >
                                                        {el.payment}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
            {el.id === "4" && (
                <div
                    className="parameters__container block-border order-4"
                    key={el.id}
                >
                    <div className="parameters__header">
                        <ParamsTitle
                            title={el.title}
                            active={changeTab4}
                        ></ParamsTitle>
                        <div className="parameters__result-box">
                            <ul className="parameters__result_list">
                                {!changeTab4 && (
                                    <>
                                        <li className="parameters__result_item parameters__result_payment">
                                            {userNameSession}
                                            {", "}
                                            <span>{userEmailSession}</span>
                                        </li>
                                    </>
                                )}
                            </ul>
                            <BtnParametrs
                                setChangeTab1={setChangeTab4}
                            ></BtnParametrs>
                        </div>
                    </div>
                    {changeTab4 && (
                        <div className="parameters__body">
                            <div className="parameters__row">
                                <div className="item__input-box item__input-box_recipient">
                                    <div className="item__input_label">Имя</div>
                                    <input
                                        type="text"
                                        placeholder="Например, Иван"
                                        className="item__input input-text"
                                        defaultValue={`${userNameSession}`}
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
                                        type="tel"
                                        placeholder="+7 (9__) ___-__-__"
                                        className="item__input input-text"
                                    ></input>
                                </div>
                                <div className="item__input-box item__input-box_recipient">
                                    <div className="item__input_label">
                                        Эл. почта
                                    </div>
                                    <input
                                        type="email"
                                        placeholder="Например,  smart@gmail.com"
                                        className="item__input input-text"
                                        defaultValue={`${userEmailSession}`}
                                    ></input>
                                </div>
                            </div>
                            <div className="parameters__row">
                                <div className="popup-form__input-checkbox-box">
                                    <input
                                        type="checkbox"
                                        name="remember"
                                        // onChange={() => {}}
                                        id="check-notcallback"
                                        defaultChecked
                                        className="popup-entrance__input-checkbox popup-form__input-checkbox"
                                    ></input>
                                    <label
                                        htmlFor="check-notcallback"
                                        className="popup-entrance__input-checklabel popup-form__input-checklabel"
                                    >
                                        Не перезванивать мне для подтверждения
                                        заказа
                                    </label>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

export default CartParamsBox;
