
import React from "react"
import Slider from "react-slider";
import { useState, useEffect, useRef } from "react";
import { useFilterData } from "@/store";

const InputRange = ({ inputProps }) => {
    const {
        rangeDefaultValue,
        currentRangeValue,
        changeRangeEvent,
        rangeEvent,
    } = useFilterData();
    const [valPrice, setValPrice] = useState([
        rangeDefaultValue[0],
        rangeDefaultValue[1],
    ]);

    let minValue = useRef(rangeDefaultValue[0]);
    let maxValue = useRef(rangeDefaultValue[1]);

    useEffect(() => {
        if (
            valPrice[0] > rangeDefaultValue[0] ||
            valPrice[1] < rangeDefaultValue[1]
        ) {
            changeRangeEvent(true);
            currentRangeValue(valPrice);
        }
        if (!rangeEvent) {
            currentRangeValue(rangeDefaultValue);
            valPrice[0] = rangeDefaultValue[0];
            valPrice[1] = rangeDefaultValue[1];
        }
    }, [valPrice, rangeEvent]);    

    return (
        <>
            <li className="select__item">
                <div className="select__item_from">
                    <label htmlFor="from-price">от</label>
                    <input
                        type="text"
                        name={inputProps[0].name}
                        size={5}
                        ref={minValue}
                        defaultValue={valPrice[0]}
                        id="from-price"
                    ></input>
                    <label htmlFor="before-price" className="label-last">
                        до
                    </label>
                    <input
                        type="text"
                        name={inputProps[1].name}
                        size={5}
                        ref={maxValue}
                        defaultValue={valPrice[1]}
                        id="before-price"
                    ></input>
                </div>
                <div className="select__item_slider">
                    <Slider
                        className={`priceSlider`}
                        onChange={setValPrice}
                        value={valPrice}
                        min={rangeDefaultValue[0]}
                        max={rangeDefaultValue[1]}
                    ></Slider>
                </div>
            </li>
        </>
    );
};

export default InputRange;