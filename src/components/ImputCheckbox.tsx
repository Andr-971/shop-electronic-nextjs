"use client"
import React from "react"
import {useRef, useState, useEffect} from "react"
import {useFilterData} from "@/store"

const ImputCheckbox = ({ propsInput, id }: any) => {
    const { changeRadioInput, inputSelect } = useFilterData();
    const checkedInput: any = useRef();

    useEffect(() => {
        inputSelect.map((el: any) => {
            if (el.id === +checkedInput.current.id) {
                checkedInput.current.checked = el.checked;
            }
        });
    }, [inputSelect.map((el:any) => (el.checked))]);

    function handlerCheckedInput(param: any, e: any) {
        if (propsInput.type === "radio") {
        };
        let newParam = {
            checked: e.target.checked,
            id: param.id,
            label: param.label,
            name: param.name,
            placeholder: param.placeholder,
            totalNumber: param.totalNumber,
            type: param.type,
            value: param.value,
        };
        changeRadioInput(newParam)
    }
    return (
        <>
            <li className="select__item"  key={id}>
                <div className="catalog__select-checkbox">
                    <input
                        type={propsInput.type}
                        name={propsInput.name}
                        id={propsInput.id}
                        defaultValue={propsInput.value}
                        defaultChecked={propsInput.checked}
                        ref={checkedInput}
                        onChange={(e) => handlerCheckedInput(propsInput, e)}
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