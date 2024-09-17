
import React from "react"
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useOption } from "@/store"



const Select = ({ options }) => {
    const [showOptions, setShowOptions] = useState(false);
    const selectOptionCat = useOption((state) => state.option);
    const changeOptionCat = useOption((state) => state.changeOption);

    const handleSelect = (option) => {
        changeOptionCat(option);
        options.map((el) => {
            if (el.active === true) el.active = false;
            return el;
        });
        option.active = true;
        setShowOptions(false);
    };
    return (
        <div className="custom-select">
            <div
                className="select-label" // select-box
                onClick={() => setShowOptions(!showOptions)}
            >
                <div className="select-text">
                    {selectOptionCat[0].active
                        ? selectOptionCat[0].label
                        : "Все товары"}
                </div>
                <button
                    className={`select-btn`}
                    style={{
                        transform: showOptions
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                    }}
                >
                    <svg
                        width="10.212402"
                        height="5.815430"
                        viewBox="0 0 10.2124 5.81543"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M5.39 5.68L10.1 0.67C10.34 0.41 10.16 0 9.81 0L0.4 0C0.05 0 -0.14 0.41 0.1 0.67L4.81 5.68C4.97 5.85 5.23 5.85 5.39 5.68Z"
                            fill="#070C11"
                            fill-opacity="1.000000"
                            fill-rule="evenodd"
                        />
                    </svg>
                </button>
            </div>
            <ul
                className={`dropdownlist ${
                    showOptions ? "show__category" : ""
                }`}
            >
                {options.map((option) => {
                    return (
                        <div
                            key={option.id}
                            className={`dropdownitem ${
                                option.active ? "select__active" : ""
                            }`}
                            onClick={() => handleSelect(option)}
                        >
                            {option.img !== undefined &&
                                <Image
                                    src={option.img}
                                    className="dropdownitem__img"
                                />
                            }
                            {option.label}
                        </div>
                    );
                })}
            </ul>
        </div>
    );
};

export default Select;

