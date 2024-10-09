
import React from "react"
import { Metadata } from "next";
import Breadcrumbs from "@/utils/Breadcrumbs"
import cartParams from "../../../public/cartParams"
import CartParamsBox from "@/components/CartParamsBox";
import TitleH1 from "@/components/TitleH1";
import NextCartBtn from "@/components/NextCartBtn/NextCartBtn";

export const metadata: Metadata = {
    title: "Корзина покупателя",
    description: "Корзина пользователя",
};

const Backet = () => {
    return (
        <>
            <div className="g-container">
                <Breadcrumbs></Breadcrumbs>
                <TitleH1 title={"Оформление заказа"}></TitleH1>
                <div className="cart__holder">
                    <div className="cart__column_one">
                        <div className="column__holder_one">
                            <div className="parameters">
                                <NextCartBtn></NextCartBtn>
                                {cartParams.map((el: any, i: number) => {
                                    return (
                                        <CartParamsBox
                                            el={el}
                                            i={i}
                                        ></CartParamsBox>
                                    );
                                })}
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
                                            <span>2</span> товара на сумму:
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
                    </div>
                </div>
            </div>
        </>
    );
}

export default Backet;