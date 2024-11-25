"use client"
import React from "react"
import heart_1 from "../../../public/svg/heart-1.svg";
import heart_2 from "../../../public/svg/heart-2.svg";
import Image from "next/image";
import { useState } from "react";
import { useFavourites } from "../../store";

const Favourites = ({el}) => {
    const [favouriteBtn, setFavouriteBtn] = useState(false);
    const { changeFavourites, favourites } = useFavourites();

    function handlerFavourites(e, el) {
        e.preventDefault();
        changeFavourites(el);
        setFavouriteBtn((e) => e = !e)
    }
    return (
        <>
            <button
                className="section-goods__icon-box"
                onClick={(e) => handlerFavourites(e, el)}
            >
                {favouriteBtn ? (
                    <Image src={heart_2} alt="heart-icon"></Image>
                ) : (
                    <Image src={heart_1} alt="heart-icon"></Image>
                )}
            </button>
        </>
    );
}

export default Favourites;