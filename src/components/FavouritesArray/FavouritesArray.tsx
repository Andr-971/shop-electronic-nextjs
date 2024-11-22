
"use client"
import React from "react"
import { useFavourites } from "@/store"
import ProductСard from "@/components/ProductСard"
import Image from "next/image"
import StarRatingBack from "@/components/StarRatingBack"
import commitBtn from "../../../public/svg/commit-btn.svg";
import Favourites from "@/components/Favourites/Favourites"
import Statistics from "@/components/Statistics/Statistics"
import backetBtn from "../../../public/svg/backet-2.svg";

const FavouritesArray = () => {
    const { favourites } = useFavourites();
    return (
        <>
            {favourites.length > 0 && (
                favourites.map((el: any) => {
                    return (
                        <ProductСard
                            key={el.id}
                            el={el}
                            id={el.id}
                            favouriteBoolean={el.favouriteBoolean}
                        ></ProductСard>
                    );
                })
            )}
        </>
    )
}

export default FavouritesArray;