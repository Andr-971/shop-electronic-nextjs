import React from 'react';
import PropTypes from "prop-types";
import { FC, ReactElement } from "react";
import Image from 'next/image';
import triangleRight from "../../public/svg/triangle-right.svg"
import { inflate } from 'zlib';

interface PrevNewProps {
    title: string;
    text: string;
    date: Array<string>;
}
interface PrevNews {
    title: string;
    text: string;
    dateDay: string;
    dateMonth: string;
    dateYear: string;
}

const PrevNew = ({ title, text, dateDay, dateMonth, dateYear }: PrevNews) => {
    return (
        <>
            <div className="section-info__block section-info__block_news">
                <div className="section-info__header">
                    <h3 className="section-info__title">{title}</h3>
                </div>
                <div className="section-info__content">
                    <p className="section-info__text">{text}</p>
                </div>
                <div className="section-info__footer">
                    <button className="section-info__button">
                        Подробнее
                        <span>
                            <Image src={triangleRight} alt="icon"></Image>
                        </span>
                    </button>
                    <div className="section-info__data">
                        <span>{dateDay}</span>
                        <span>{dateMonth}</span>
                        <span>{dateYear}</span>
                    </div>
                </div>
            </div>
        </>
    );
};


export { PrevNew };

{/* <div className="section-info__block section-info__block_news" key={i}>
    <div className="section-info__header">
        <h3 className="section-info__title">{el.title}</h3>
    </div>
    <div className="section-info__content">
        <p className="section-info__text">{el.text}</p>
    </div>
    <div className="section-info__footer">
        <button className="section-info__button">
            Подробнее
            <span>
                <img src="./img/svg/triangle-right.svg" alt="icon"> 
            </span>
        </button>
        <div className="section-info__data">
            <span>{el.date.dey}</span>
            <span>{el.date.month}</span>
            <span>{el.date.year}</span>
        </div>
    </div>
</div>   */}