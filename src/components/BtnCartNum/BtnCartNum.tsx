"use client"
import React from "react"
import { useBasket } from "../../store";

const BtnCartNum = () => {
    const { basket } = useBasket();

    return (
        <>
            {basket.length > 0 && (
                <div className="basket__block">
                    <span className="basket__num">{basket.length}</span>
                </div>
            )}
        </>
    );
}

export default BtnCartNum;