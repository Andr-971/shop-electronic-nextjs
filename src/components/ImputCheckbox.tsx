"use client"
import React from "react"
import {useRef} from "react"


const ImputCheckbox = ({ propsInput }: any) => {
    const checkedInput: any = useRef();
    const input = []
    input.push(checkedInput.current);
    input.map((el: any) => {
        // console.log(el);
    })
    // console.log(propsInput);
    return (
        <>
            <li className="select__item">
                <div className="catalog__select-checkbox">
                    <input
                        type={propsInput.type}
                        name={propsInput.name}
                        id={propsInput.id}
                        defaultValue={propsInput.value}
                        checked={propsInput.checked}
                        ref={checkedInput}
                        className="popup-entrance__input-checkbox popup-form__input-checkbox"
                    ></input>
                    <label
                        htmlFor={propsInput.id}
                        className="popup-entrance__input-checklabel popup-form__input-checklabel"
                    >
                        {propsInput.label}
                        <span> ({propsInput.totalNumber})</span>
                    </label>
                </div>
            </li>
        </>
    );
};

export default ImputCheckbox;