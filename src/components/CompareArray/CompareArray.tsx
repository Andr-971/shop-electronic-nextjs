"use client"
import React from "react"
import { useCompare } from "@/store"
import ProductСard from "../ProductСard"

const CompareArray = () => {
    const { compare } = useCompare();
    return (
        <>
            <div className="compare__product__block">
                {compare.length > 0 && compare.map((el: any) => {
                    return (
                        <ProductСard id={el.id} el={el} compare={el.compare} />
                    );
                })}
            </div>
        </>
    );
}

export default CompareArray;