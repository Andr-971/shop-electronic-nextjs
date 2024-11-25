
"use client"
import React from "react"
import Image from "next/image";
import { useState } from "react";
import graph_1 from "../../../public/svg/icon-graph-1.svg";
import graph_2 from "../../../public/svg/icon-graph-2.svg";
import { useCompare } from "../../store"

const Statistics = ({ el }) => {
    const { changeCompare } = useCompare();
    const [statistic, setStatistic] = useState(false);
    function handlerStatistic(e, el) {
        e.preventDefault();
        changeCompare(el);
        setStatistic((e) => (e = !e));
    }

    return (
        <>
            <button
                className="section-goods__icon-box"
                onClick={(e) => handlerStatistic(e, el)}
            >
                {statistic ? (
                    <Image src={graph_2} alt="graf-icon"></Image>
                ) : (
                    <Image src={graph_1} alt="graf-icon"></Image>
                )}
            </button>
        </>
    );
}

export default Statistics;