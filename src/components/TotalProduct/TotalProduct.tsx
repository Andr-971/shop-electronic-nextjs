"use client"
import React from "react"
import { useState, useEffect } from "react";
import { useBasket } from "../../store"
import { pluralize } from "../../services/function";

const TotalProduct = () => {
    const { totalPriceCount, basket } = useBasket();
    const [total, setTotal] = useState(totalPriceCount);

    useEffect(() => {
        setTotal({
            totalPrice: basket.reduce((prev: number, curr: any) => {
                return +prev + +curr.price;
            }, 0),
            countProducts: basket.reduce((prev: number, curr: any) => {
                return +prev + +curr.counter;
            }, 0),
        });
    }, [basket]);
    // const cases = ["товар", "товара", "товаров"];
    return (
        <>
            <div className="column__holder_two block-bgc">
                <div className="cart-card">
                    <div className="cart-card__inner">
                        <div className="cart-card__title">Итого</div>
                        <div className="cart-card__amount-box">
                            <div className="cart-card__amount-text">
                                <span>{total.countProducts}</span>{" "}
                                {pluralize(total.countProducts, [
                                    "товар",
                                    "товара",
                                    "товаров",
                                ])}{" "}
                                на сумму:
                            </div>
                            <div className="cart-card__amount-number">
                                {" "}
                                <span>{total.totalPrice}</span> ₽
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
                                <span>{total.totalPrice}</span>₽
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
                            defaultChecked
                            name="remember"
                            id="check-cart"
                            // onChange={() => {}}
                            className="popup-entrance__input-checkbox popup-form__input-checkbox"
                        ></input>
                        <label
                            htmlFor="check-cart"
                            className="popup-entrance__input-checklabel popup-form__input-checklabel"
                        ></label>
                    </div>
                    <div className="cart__checked-text">
                        <p className="popup-registration__text">
                            Подтверждая заказ, я принимаю условия{" "}
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
        </>
    );
}

export default TotalProduct;