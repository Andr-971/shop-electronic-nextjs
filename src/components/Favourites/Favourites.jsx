"use client"
import React from "react"
import heart_1 from "../../../public/svg/heart-1.svg";
import heart_2 from "../../../public/svg/heart-2.svg";
import Image from "next/image";
import { useState} from "react";

const Favourites = ({id}) => {
    const [favourites, setFavourites] = useState(false);

    function handlerFavourites(e) {
        e.preventDefault();
        setFavourites((e) => e = !e)
    }
    return (
        <>
            <button
                className="section-goods__icon-box"
                onClick={(e) => handlerFavourites(e)}
            >
                {favourites ? (
                    <Image src={heart_2} alt="heart-icon"></Image>
                ) : (
                    <Image src={heart_1} alt="heart-icon"></Image>
                )}
            </button>
        </>
    );
}

export default Favourites;