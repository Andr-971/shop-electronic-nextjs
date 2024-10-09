"use client"
import React from "react"
import { useState } from "react";
import StarRating from "@/components/StarRating/StarRating"

const StarRatingBack = ({ starRating }:any) => {
    const [currentItem, setCurrentItem] = useState();
    return (
        <>
            <StarRating
                currentItem={currentItem}
                setCurrentItem={setCurrentItem}
                starRating={starRating}
            ></StarRating>
        </>
    );
};

export default StarRatingBack;