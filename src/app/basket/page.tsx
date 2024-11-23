
import React from "react"
import { Metadata } from "next";
import Breadcrumbs from "../../utils/Breadcrumbs.jsx";
import cartParams from "../../../public/cartParams"
import CartParamsBox from "../../components/CartParamsBox";
import TitleH1 from "../../components/TitleH1";
import TotalProduct from "../../components/TotalProduct/TotalProduct";

export const metadata: Metadata = {
    title: "Корзина покупателя",
    description: "Корзина пользователя",
};

const Basket = () => {
    return (
        <>
            <div className="g-container">
                <Breadcrumbs></Breadcrumbs>
                <TitleH1 title={"Оформление заказа"}></TitleH1>
                <div className="cart__holder">
                    <div className="cart__column_one">
                        <div className="column__holder_one">
                            <div className="parameters">
                                {/* <NextCartBtn></NextCartBtn> */}
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
                        <TotalProduct></TotalProduct>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Basket;