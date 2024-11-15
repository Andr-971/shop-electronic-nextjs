"use client"
import React from "react"
import { useState, useEffect } from "react";
import { useBasket } from "@/store";

const ProductCounter = ({ id, counter }: any) => {
    const {
        changeCounterProductPlus,
        changeCounterProductMinus,
    } = useBasket();

    function handlerPlusBtn(id:any) {
        changeCounterProductPlus(id);
    }
    function handlerMinusBtn(id:any) {
        changeCounterProductMinus(id);
    }
    return (
        <>
            <div className="order__counter">
                <button
                    className={`${counter > 1 ? "list-btn" : "first-btn"}`}
                    onClick={() => handlerMinusBtn(id)}
                >
                    −
                </button>
                <div className="counter__input-box">
                    <input
                        size={2}
                        type="text"
                        value={counter}
                        disabled
                    ></input>
                </div>
                <button
                    className={`${counter < 9 ? "list-btn" : "first-btn"}`}
                    onClick={() => handlerPlusBtn(id)}
                >
                    +
                </button>
            </div>
        </>
    );
};

export default ProductCounter;