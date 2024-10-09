import Image from "next/image";
import iconMenu_1 from "../../public/svg/icon-menu/icon-menu-1.svg"
import iconMenu_2 from "../../public/svg/icon-menu/icon-menu-2.svg"
import iconMenu_3 from "../../public/svg/icon-menu/icon-menu-3.svg"
import iconMenu_4 from "../../public/svg/icon-menu/icon-menu-4.svg"
import iconMenu_5 from "../../public/svg/icon-menu/icon-menu-5.svg"
import iconMenu_6 from "../../public/svg/icon-menu/icon-menu-6.svg"
import iconMenu_7 from "../../public/svg/icon-menu/icon-menu-7.svg"
import iconMenu_8 from "../../public/svg/icon-menu/icon-menu-8.svg"
import iconMenu_9 from "../../public/svg/icon-menu/icon-menu-9.svg"
import iconMenu_10 from "../../public/svg/icon-menu/icon-menu-10.svg"
import iconMenu_11 from "../../public/svg/icon-menu/icon-menu-11.svg"
import Favourites from "@/components/Favourites/Favourites"
import Statistics from "@/components/Statistics/Statistics"
import closeBtn from "../../public/svg/close-btn.svg"
import SectionTitle from "../components/SectionTitle";
import mainSliderImg from "../../public/png_webp/main-slider.webp"
import commitBtn from "../../public/svg/commit-btn.svg";
import backetBtn from "../../public/svg/backet-2.svg";
import stock_one_block from "../../public/stock_one_block"
import stock_two_block from "../../public/stock_two_block"
import Stock from "@/components/Stock";
import StarRatingBack from "@/components/StarRatingBack"
import {PrevNew} from "@/components/PrevNew";
import { prevNewsTwo } from "../../public/prevNewsTwo"
import product from "../../public/product"


export default function Home() {
    return (
        <div className="g-container">
            <div className="select-catalog">
                <ul className="select-catalog__title-catalog">
                    <div className="select-catalog__inner">
                        <div className="select-catalog__title">
                            <h3 className="select-catalog__txt">
                                Каталог товаров
                            </h3>
                            <div className="select-catalog__btn-close">
                                <Image src={closeBtn} alt="icon-close"></Image>
                            </div>
                        </div>
                        <div className="select-catalog__block">
                            <li className="title-catalog__item">
                                <a href="#">
                                    <span>
                                        <Image
                                            src={iconMenu_1}
                                            alt="icon"
                                        ></Image>
                                    </span>
                                    <span>Гироскутеры</span>
                                </a>
                            </li>
                            <li className="title-catalog__item">
                                <a href="#">
                                    <span>
                                        <Image
                                            src={iconMenu_2}
                                            alt="icon"
                                        ></Image>
                                    </span>
                                    <span>Электросамокаты</span>
                                </a>
                            </li>
                            <li className="title-catalog__item">
                                <a href="#">
                                    <span>
                                        <Image
                                            src={iconMenu_3}
                                            alt="icon"
                                        ></Image>
                                    </span>
                                    <span>Моноколеса</span>
                                </a>
                            </li>
                            <li className="title-catalog__item">
                                <a href="#">
                                    <span>
                                        <Image
                                            src={iconMenu_4}
                                            alt="icon"
                                        ></Image>
                                    </span>
                                    <span>Сигвеи и мини-сигвеи</span>
                                </a>
                            </li>
                            <li className="title-catalog__item">
                                <a href="#">
                                    <span>
                                        <Image
                                            src={iconMenu_5}
                                            alt="icon"
                                        ></Image>
                                    </span>
                                    <span>Электроскутеры</span>
                                </a>
                            </li>
                            <li className="title-catalog__item">
                                <a href="#">
                                    <span>
                                        <Image
                                            src={iconMenu_6}
                                            alt="icon"
                                        ></Image>
                                    </span>
                                    <span>Электровелосипеды</span>
                                </a>
                            </li>
                            <li className="title-catalog__item">
                                <a href="#">
                                    <span>
                                        <Image
                                            src={iconMenu_7}
                                            alt="icon"
                                        ></Image>
                                    </span>
                                    <span>Электроскейты</span>
                                </a>
                            </li>
                            <li className="title-catalog__item">
                                <a href="#">
                                    <span>
                                        <Image
                                            src={iconMenu_8}
                                            alt="icon"
                                        ></Image>
                                    </span>
                                    <span>Электромобили</span>
                                </a>
                            </li>
                            <li className="title-catalog__item">
                                <a href="#">
                                    <span>
                                        <Image
                                            src={iconMenu_9}
                                            alt="icon"
                                        ></Image>
                                    </span>
                                    <span>Аксессуары</span>
                                </a>
                            </li>
                            <li className="title-catalog__item">
                                <a href="#">
                                    <span>
                                        <Image
                                            src={iconMenu_10}
                                            alt="icon"
                                        ></Image>
                                    </span>
                                    <span>Умные игрушки</span>
                                </a>
                            </li>
                            <li className="title-catalog__item">
                                <a href="#">
                                    <span>
                                        <Image
                                            src={iconMenu_11}
                                            alt="icon"
                                        ></Image>
                                    </span>
                                    <span>Smart Watch</span>
                                </a>
                            </li>
                        </div>
                    </div>
                </ul>
                <div className="select-catalog__slider">
                    <div className="slider__wrap">
                        <div className="slider">
                            <div className="slider__box photo-box">
                                {/* <picture>
                                    <source srcset="./img/main-slider.webp">
                                    <img src="./img/main-slider.png" alt="картинка" className="photo-img">
                                </picture> */}
                                <Image
                                    src={mainSliderImg}
                                    alt="картинка"
                                    className="photo-img"
                                ></Image>
                                <div className="slider__text-box">
                                    <p>Apple Watch</p>
                                    <p>Series 6</p>
                                    <p>уже в наличии</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="section-goods section-hit">
                <div className="section-goods__inner">
                    <SectionTitle title="Хиты продаж"></SectionTitle>
                    <div className="section-goods-postcard__wrapper">
                        <div className="section-goods-postcard__block recommendation__wrapper">
                            {product.map((el, i) => {
                                return (
                                    <div className="section-goods__card">
                                        <div className="section-goods__card-header photo-box">
                                            <Image
                                                src={el.pathPhotoProduct}
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
                                                    starRating={el.starRating}
                                                ></StarRatingBack>
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
                                                    <Favourites
                                                        id={el.id}
                                                    ></Favourites>
                                                    <Statistics
                                                        id={el.id}
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
                                                            src={backetBtn}
                                                            alt="icon-backet"
                                                        ></Image>
                                                    }
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-goods section-new">
                <div className="section-goods__inner">
                    <SectionTitle title="Новинки"></SectionTitle>
                    <div className="section-goods-postcard__wrapper">
                        <div className="section-goods-postcard__block recommendation__wrapper">
                            {product.map((el, i) => {
                                return (
                                    <div className="section-goods__card">
                                        <div className="section-goods__card-header photo-box">
                                            <Image
                                                src={el.pathPhotoProduct}
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
                                                    starRating={el.starRating}
                                                ></StarRatingBack>
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
                                                    <Favourites
                                                        id={el.id}
                                                    ></Favourites>
                                                    <Statistics
                                                        id={el.id}
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
                                                            src={backetBtn}
                                                            alt="icon-backet"
                                                        ></Image>
                                                    }
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-info section-discount">
                <div className="section-info__inner">
                    {stock_one_block.map((el, i) => {
                        return (
                            <Stock
                                id=""
                                photo={el.photo}
                                title={el.title}
                                key={i}
                                nameClass={""}
                            ></Stock>
                        );
                    })}
                </div>
            </section>
            <section className="section-goods section-sigvey">
                <div className="section-goods__inner">
                    <SectionTitle title="Сигвей"></SectionTitle>
                </div>
                <div className="section-goods-postcard__wrapper">
                    <div className="section-goods-postcard__block recommendation__wrapper">
                        {product.map((el, i) => {
                            return (
                                <div className="section-goods__card">
                                    <div className="section-goods__card-header photo-box">
                                        <Image
                                            src={el.pathPhotoProduct}
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
                                                starRating={el.starRating}
                                            ></StarRatingBack>
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
                                                <Favourites
                                                    id={el.id}
                                                ></Favourites>
                                                <Statistics
                                                    id={el.id}
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
                                                        src={backetBtn}
                                                        alt="icon-backet"
                                                    ></Image>
                                                }
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            <section className="section-info section-discount">
                <div className="section-info__inner">
                    {stock_two_block.map((el: any, i: any) => {
                        return (
                            <Stock
                                id={el.id}
                                photo={el.photo}
                                title={el.title}
                                key={i}
                            ></Stock>
                        );
                    })}
                </div>
            </section>
            <section className="section-goods section-sigvey">
                <div className="section-goods__inner">
                    <SectionTitle title="Электровелосипеды"></SectionTitle>
                </div>
                <div className="section-goods-postcard__wrapper">
                    <div className="section-goods-postcard__block recommendation__wrapper">
                        {product.map((el, i) => {
                            return (
                                <div className="section-goods__card">
                                    <div className="section-goods__card-header photo-box">
                                        <Image
                                            src={el.pathPhotoProduct}
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
                                                starRating={el.starRating}
                                            ></StarRatingBack>
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
                                                <Favourites
                                                    id={el.id}
                                                ></Favourites>
                                                <Statistics
                                                    id={el.id}
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
                                                        src={backetBtn}
                                                        alt="icon-backet"
                                                    ></Image>
                                                }
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            <section className="section-info section-news">
                <div className="section-info__inner">
                    {prevNewsTwo.map((el, i) => {
                        return (
                            <>
                                <PrevNew
                                    title={el.title}
                                    text={el.text}
                                    dateDay={el.date[0]}
                                    dateMonth={el.date[1]}
                                    dateYear={el.date[2]}
                                ></PrevNew>
                            </>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}
