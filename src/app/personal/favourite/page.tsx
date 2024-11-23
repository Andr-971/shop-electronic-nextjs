
import React from "react"
import { Metadata } from "next";
import Breadcrumbs from "../../../utils/Breadcrumbs"
import TitleH1 from "../../../components/TitleH1"
import UserItemMenu from "../../../components/UserItemMenu/UserItemMenu"
import ExitButton from "../../../components/ExitButton/ExitButton"
import selectBtn from "../../../../public/svg/select-btn.svg"
import Image from "next/image";
import FavouritesArray from "../../../components/FavouritesArray/FavouritesArray";

export const metadata: Metadata = {
    title: "Избранное",
    description: "Кабинет пользователя",
};

const Favourite = () => {
    return (
        <>
            <div className="g-container">
                <Breadcrumbs></Breadcrumbs>
                <section className="account-my">
                    <TitleH1 title={"Избранное"}></TitleH1>
                    <div className="account-my__holder">
                        <div className="account-my__column">
                            <div className="account-my__account block-border">
                                <div className="account__es">
                                    <ul className="account__list">
                                        <UserItemMenu></UserItemMenu>
                                        <ExitButton></ExitButton>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="account-my__column">
                            <div className="favorites__choose-box">
                                <div className="viewed__select">
                                    <div className="select-label">
                                        <div className="select-text">
                                            Все товары
                                        </div>
                                        <button className="select-btn">
                                            <Image
                                                src={selectBtn}
                                                alt="icon"
                                            ></Image>
                                        </button>
                                    </div>
                                    <ul className="dropdownlist hidden">
                                        <li className="dropdownitem">Сигвеи</li>
                                        <li className="dropdownitem">Сигвеи</li>
                                        <li className="dropdownitem">Сигвеи</li>
                                    </ul>
                                </div>
                                <div className="viewed__select">
                                    <div className="select-label">
                                        <div className="select-text">
                                            Сначала дорогие
                                        </div>
                                        <button className="select-btn">
                                            <Image
                                                src={selectBtn}
                                                alt="icon"
                                            ></Image>
                                        </button>
                                    </div>
                                    <ul className="dropdownlist hidden">
                                        <li className="dropdownitem">
                                            Дешовые
                                        </li>
                                        <li className="dropdownitem">
                                            Средняя цена
                                        </li>
                                        <li className="dropdownitem">
                                            Дорогие
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="section-goods-postcard__wrapper">
                                <div className="section-goods-postcard__block">
                                    <FavouritesArray></FavouritesArray>
                                    {/* {product.map((el, i) => {
                                        return (
                                            <div className="section-goods__card">
                                                <div className="section-goods__card-header photo-box">
                                                    <Image
                                                        src={
                                                            el.pathPhotoProduct
                                                        }
                                                        alt="goots-photo"
                                                        className="photo-img"
                                                        key={i}
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
                                                    <div className="section-goods__chapter">
                                                        {el.category}
                                                    </div>
                                                    <div className="section-goods__name-goods">
                                                        <p className="section-goods__name-txt">
                                                            {el.nameProduct}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="section-goods__card-footer">
                                                    <div className="section-goods__comment-rating">
                                                        <StarRatingBack
                                                            starRating={
                                                                el.starRating
                                                            }
                                                        ></StarRatingBack>
                                                        <div className="section-goods__comment">
                                                            <button className="section-goods__comment_icon">
                                                                <Image
                                                                    src={
                                                                        commitBtn
                                                                    }
                                                                    alt="comment_icon"
                                                                ></Image>
                                                            </button>
                                                            <span className="section-goods__comment_number">
                                                                (
                                                                {
                                                                    el.commitNumber
                                                                }
                                                                )
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
                                                                    <span>
                                                                        %
                                                                    </span>
                                                                </div>
                                                                <div className="section-goods__tire"></div>
                                                                <div className="section-goods__percent-price">
                                                                    {
                                                                        el.priceFor
                                                                    }
                                                                    <span>
                                                                        ₽
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="section-goods__favourites-block">
                                                            <Favourites
                                                                el={el}
                                                            ></Favourites>
                                                            <Statistics
                                                                el={el}
                                                            ></Statistics>
                                                        </div>
                                                    </div>
                                                    <div className="section-goods__buttom-block">
                                                        <button className="section-goods__buttom">
                                                            Купить в 1 клик
                                                        </button>
                                                        <button className="section-goods__basket">
                                                            {
                                                                <Image
                                                                    src={
                                                                        backetBtn
                                                                    }
                                                                    alt="icon-backet"
                                                                ></Image>
                                                            }
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })} */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Favourite;