
import React from "react"
import Slider from "react-slider";
import { useState, useEffect } from "react";

const MIN = 3000;
const MAX = 17000

const InputRange = ({ inputProps }) => {
    const [valPrice, setValPrice] = useState([MIN, MAX]);
    return (
        <>
            <li className="select__item">
                <div className="select__item_from">
                    <label htmlFor="from-price">от</label>
                    <input
                        type="text"
                        name={inputProps[0].name}
                        size={5}
                        placeholder={valPrice[0]}
                        id="from-price"
                    ></input>
                    <label htmlFor="before-price" className="label-last">
                        до
                    </label>
                    <input
                        type="text"
                        name={inputProps[1].name}
                        size={5}
                        placeholder={valPrice[1]}
                        id="before-price"
                    ></input>
                </div>
                <div className="select__item_slider">
                    <Slider
                        className={`priceSlider`}
                        onChange={setValPrice}
                        value={valPrice}
                        min={MIN}
                        max={MAX}
                    ></Slider>
                </div>
            </li>
        </>
    );
};

export default InputRange;