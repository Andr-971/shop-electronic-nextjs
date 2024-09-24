
import React from "react"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import commitBtn from "../../public/svg/commit-btn.svg";
import heart from "../../public/svg/heart-1.svg";
import heart_red from "../../public/svg/heart-2.svg";
import graf from "../../public/svg/icon-graph-1.svg";
import graf_true from "../../public/svg/icon-graph-2.svg";
import backetBtn from "../../public/svg/backet-2.svg";

const ProductСard = ({ el }: any) => {
    const pathname = usePathname();
    return (
        <>
            <Link href={el.path} className="section-goods__card">
                <div className="section-goods__card-header photo-box">
                    <Image
                        src={el.pathPhotoProduct}
                        alt="goots-photo"
                        className="photo-img"
                        // key={i}
                    ></Image>
                    <div className="section-goods__button">
                        {el.new === "Да" && (
                            <button className="section-goods__button_new">
                                Новинка
                            </button>
                        )}
                        {el.hit === "Да" && (
                            <button className="section-goods__button_hit">
                                Хит продаж
                            </button>
                        )}
                    </div>
                </div>
                <div className="section-goods__card-content">
                    <div className="section-goods__chapter">{el.category}</div>
                    <div className="section-goods__name-goods">
                        <p className="section-goods__name-txt">
                            {el.nameProduct}
                        </p>
                    </div>
                </div>
                <div className="section-goods__card-footer">
                    <div className="section-goods__comment-rating">
                        <div
                            id="rating-star-01"
                            data-ajax="true"
                            data-num-rating="3.6"
                            className="section-goods__rating rating-star__holder rating_set"
                        >
                            <div className="rating-star__inner">
                                <div className="rating-star__items">
                                    <input
                                        type="radio"
                                        name="rating-star"
                                        className="rating-star__input"
                                        value="1"
                                    ></input>
                                    <input
                                        type="radio"
                                        name="rating-star"
                                        className="rating-star__input"
                                        value="2"
                                    ></input>
                                    <input
                                        type="radio"
                                        name="rating-star"
                                        className="rating-star__input"
                                        value="3"
                                    ></input>
                                    <input
                                        type="radio"
                                        name="rating-star"
                                        className="rating-star__input"
                                        value="4"
                                    ></input>
                                    <input
                                        type="radio"
                                        name="rating-star"
                                        className="rating-star__input"
                                        value="5"
                                    ></input>
                                </div>
                            </div>
                        </div>
                        <div className="section-goods__comment">
                            <button className="section-goods__comment_icon">
                                <Image
                                    src={commitBtn}
                                    alt="comment_icon"
                                ></Image>
                            </button>
                            <span className="section-goods__comment_number">
                                ({el.commitNumber})
                            </span>
                        </div>
                    </div>
                    <div className="section-goods__price-block">
                        <div className="section-goods__price-box">
                            <div className="section-goods__old-price">
                                {el.oldPrice}
                                <span>₽</span>
                            </div>
                            <div className="section-goods__price">
                                {el.price}
                                <span>₽</span>
                            </div>
                            <div className="section-goods__discount">
                                <div className="section-goods__percent">
                                    {el.percent}
                                    <span>%</span>
                                </div>
                                <div className="section-goods__tire"></div>
                                <div className="section-goods__percent-price">
                                    {el.priceFor}
                                    <span>₽</span>
                                </div>
                            </div>
                        </div>
                        <div className="section-goods__favourites-block">
                            <button className="section-goods__icon-box">
                                {el.heartBtn === "Да" ? (
                                    <Image
                                        src={heart_red}
                                        alt="heart-icon"
                                    ></Image>
                                ) : (
                                    <Image src={heart} alt="heart-icon"></Image>
                                )}
                            </button>
                            <button className="section-goods__icon-box">
                                {el.graphBtn === "Да" ? (
                                    <Image src={graf} alt="graph-icon"></Image>
                                ) : (
                                    <Image
                                        src={graf_true}
                                        alt="graph-icon"
                                    ></Image>
                                )}
                            </button>
                        </div>
                    </div>
                    <div className="section-goods__buttom-block">
                        <button className="section-goods__buttom">
                            Купить в 1 клик
                        </button>
                        <button className="section-goods__basket">
                            {<Image src={backetBtn} alt="icon-backet"></Image>}
                        </button>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default ProductСard;