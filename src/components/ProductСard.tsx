// "use client"
import React from "react"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import commitBtn from "../../public/svg/commit-btn.svg";
import Favourites from "@/components/Favourites/Favourites"
import Statistics from "@/components/Statistics/Statistics"
import backetBtn from "../../public/svg/backet-2.svg";
import StarRating from "@/components/StarRating/StarRating"
import {useBasket} from "@/store"

const ProductСard = ({ el }: any) => {
    const [currentItem, setCurrentItem] = useState();
    const { changeBasket } = useBasket();

    function handlerBacket(e:any, el:any) {
        e.preventDefault();
        changeBasket(el);
    }

    return (
        <>
            <Link href={el.path} className="section-goods__card">
                <div className="section-goods__card-header photo-box">
                    <Image
                        src={el.pathPhotoProduct}
                        alt="goots-photo"
                        className="photo-img"
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
                        <StarRating
                            currentItem={currentItem}
                            setCurrentItem={setCurrentItem}
                            starRating={el.starRating}
                        ></StarRating>
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
                            <Favourites id={el.id}></Favourites>
                            <Statistics id={el.id}></Statistics>
                        </div>
                    </div>
                    <div className="section-goods__buttom-block">
                        <button className="section-goods__buttom">
                            Купить в 1 клик
                        </button>
                        <button className="section-goods__basket"
                            onClick={(e) => handlerBacket(e, el)}
                        >
                            {<Image src={backetBtn} alt="icon-backet"></Image>}
                        </button>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default ProductСard;