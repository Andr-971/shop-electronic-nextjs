"use client"
import React from "react"
import InputRange from "../components/InputRange"
import ImputCheckbox from "@/components/ImputCheckbox"
import { useState } from "react";

const SelectBlock = ({ el, i }: any) => {
    const [hidden, setHidden] = useState(true);
    function handlerSeleckBlock(e: any) {
        setHidden((curr) => !curr);
    }
    
    return (
        <>
            <div
                className="select__block"
                style={{ order: hidden ? 0 : -1 }}
            >
                <div className="select__header">
                    <div className="select__header_title">{el.title}</div>
                    <button
                        className="select__header_btn"
                        onClick={handlerSeleckBlock}
                        style={{
                            transform: hidden
                                ? "rotate(0deg)"
                                : "rotate(180deg)",
                        }}
                    >
                        <svg
                            width="10.212402"
                            height="5.815430"
                            viewBox="0 0 10.2124 5.81543"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                id="Polygon 1"
                                d="M5.39 5.68L10.1 0.67C10.34 0.41 10.16 0 9.81 0L0.4 0C0.05 0 -0.14 0.41 0.1 0.67L4.81 5.68C4.97 5.85 5.23 5.85 5.39 5.68Z"
                                fill="#070C11"
                                fill-opacity="1.000000"
                                fill-rule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
                <ul className={`select__body ${hidden ? "hidden" : ""}`}>
                    {el.id === 1 && (
                        <InputRange inputProps={el.input}></InputRange>
                    )}
                    {el.id > 1 &&
                        el.input.map((el: any, i: number) => {
                            return (
                                <ImputCheckbox propsInput={el}></ImputCheckbox>
                            );
                        })}
                </ul>
            </div>
        </>
    );
}

export default SelectBlock;