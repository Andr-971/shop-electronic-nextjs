
"use client"
import React from "react"
import Image from "next/image";
import { useState } from "react";
import graph_1 from "../../../public/svg/icon-graph-1.svg";
import graph_2 from "../../../public/svg/icon-graph-2.svg";

const Statistics = ({ id }) => {
    const [statistic, setStatistic] = useState(false);
    function handlerStatistic(e) {
        e.preventDefault();
        setStatistic((e) => (e = !e));
    }
    return (
        <>
            <button
                className="section-goods__icon-box"
                onClick={(e) => handlerStatistic(e)}
            >
                {statistic ? (
                    <Image src={graph_2} alt="heart-icon"></Image>
                ) : (
                    <Image src={graph_1} alt="heart-icon"></Image>
                )}
            </button>
        </>
    );
}

export default Statistics;