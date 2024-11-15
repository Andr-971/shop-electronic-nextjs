

import React from "react"
import { useBasket } from "@/store";
import Link from "next/link";

const OnClickCart = ({el}:any) => {
    const { changeBasket } = useBasket();
    function handlerBacketClick(e: any, el: any) {
        changeBasket(el);
    }
    return (
        <>
            <Link href={"/basket"}
                className="section-goods__buttom"
                onClick={(e) => handlerBacketClick(e, el)}
            >
                Купить в 1 клик
            </Link>
        </>
    );
}

export default OnClickCart;