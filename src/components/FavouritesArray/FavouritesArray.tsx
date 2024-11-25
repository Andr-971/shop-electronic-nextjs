
"use client"
import React from "react"
import { useFavourites } from "../../store"
import ProductСard from "../../components/ProductСard"

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