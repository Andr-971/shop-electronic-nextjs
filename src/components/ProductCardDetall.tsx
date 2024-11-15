"use client"
import React from "react"
import Image from "next/image";
import { useState} from "react";
import TitleH1 from "./TitleH1";
import TitleH2 from "./TitleH2";
import Favourites from "@/components/Favourites/Favourites"
import Statistics from "@/components/Statistics/Statistics"
import StarRating from "@/components/StarRating/StarRating"
import { usePathname } from "next/navigation";
import mainPicture from "../../public/png_webp/main-picture.webp"
import commitBtn from "../../public/svg/commit-btn.svg"
import delivery from "../../public/svg/delivery.svg"
import payment from "../../public/svg/payment.svg"
import {useTabCard} from "@/store"
import productAll from "../../public/productAll";
import { splitArray } from "@/services/function";
import ProductСard from "@/components/ProductСard";
import OnClickCart from "@/components/OnClickCart"
import { useBasket, useFavourites } from "@/store";

const ProductCardDetall = ({ catalogArray }: any) => {
    const productShow = splitArray(productAll, 4);
    const pathname = usePathname();
    const [currentItem, setCurrentItem] = useState();
    const { tabCard, changeTabCard } = useTabCard();
    const { changeBasket } = useBasket();
    function handlerTab(el: any) {
        changeTabCard(el);
    }
    function handlerBacket(e: any, el: any) {
        e.preventDefault();
        changeBasket(el);
    }
    return (
        <>
            {catalogArray.map((el: any) => {
                if (pathname === el.path) {
                    return (
                        <>
                            <div className="card__holder">
                                <div className="card__photo-block">
                                    <div className="card__photo">
                                        <div className="card-img__wrap-photo">
                                            <div className="card-img__block-photo">
                                                <Image
                                                    src={mainPicture}
                                                    alt="фото"
                                                    className="card-img__img-photo"
                                                ></Image>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card__photo-slider">
                                        <ul className="slider__photo-box">
                                            <li className="slider__photo-item">
                                                <div className="slider__wrap-photo">
                                                    <div className="slider__block-photo">
                                                        <Image
                                                            src={mainPicture}
                                                            alt="фото"
                                                            className="slider__img-photo"
                                                        ></Image>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="slider__photo-item min-slider__active">
                                                <div className="slider__wrap-photo">
                                                    <div className="slider__block-photo">
                                                        <Image
                                                            src={mainPicture}
                                                            alt="фото"
                                                            className="slider__img-photo"
                                                        ></Image>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="slider__photo-item">
                                                <div className="slider__wrap-photo">
                                                    <div className="slider__block-photo">
                                                        <Image
                                                            src={mainPicture}
                                                            alt="фото"
                                                            className="slider__img-photo"
                                                        ></Image>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="compare__product-nav slider__photo-nav">
                                            <button className="compare__product-btn compare__product-btn_left">
                                                <svg
                                                    width="5.815430"
                                                    height="10.212891"
                                                    viewBox="0 0 5.81543 10.2129"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        id="slider-left"
                                                        d="M0.12 4.81L5.14 0.1C5.39 -0.13 5.81 0.05 5.81 0.4L5.81 9.81C5.81 10.16 5.39 10.34 5.14 10.1L0.12 5.39C-0.05 5.24 -0.05 4.97 0.12 4.81Z"
                                                        fill="#EAEAF0"
                                                        fill-opacity="1.000000"
                                                        fill-rule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                            <button className="compare__product-btn compare__product-btn_right">
                                                <svg
                                                    width="5.815430"
                                                    height="10.212891"
                                                    viewBox="0 0 5.81543 10.2129"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        id="slider-right"
                                                        d="M5.68 4.81L0.67 0.1C0.41 -0.13 0 0.05 0 0.4L0 9.81C0 10.16 0.41 10.34 0.67 10.1L5.68 5.39C5.85 5.24 5.85 4.97 5.68 4.81Z"
                                                        fill="#070C11"
                                                        fill-opacity="1.000000"
                                                        fill-rule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card__description">
                                    <div className="card__title-product title-page">
                                        <TitleH1
                                            title={el.nameProduct}
                                        ></TitleH1>
                                    </div>
                                    <div className="card__bottom">
                                        <div className="section-goods__card-footer card-border">
                                            <div className="card-product__header">
                                                <div className="section-goods__comment-rating">
                                                    <div className="section-goods__rating">
                                                        <StarRating
                                                            currentItem={
                                                                currentItem
                                                            }
                                                            setCurrentItem={
                                                                setCurrentItem
                                                            }
                                                            starRating={
                                                                el.starRating
                                                            }
                                                        ></StarRating>
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
                                                <div className="section-goods__favourites-block">
                                                    <Favourites
                                                        el={el}
                                                    ></Favourites>
                                                    <Statistics
                                                        el={el}
                                                    ></Statistics>
                                                </div>
                                            </div>
                                            <div className="card-product__footer">
                                                <div className="section-goods__price-box">
                                                    <div className="card-product__discont">
                                                        <div className="section-goods__old-price">
                                                            {el.oldPrice}
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
                                                    <div className="section-goods__price">
                                                        {el.price}
                                                        <span>₽</span>
                                                    </div>
                                                </div>
                                                <div className="section-goods__buttom-block card__buttom-block">
                                                    <button
                                                        className="card-product__cart"
                                                        onClick={(e) =>
                                                            handlerBacket(e, el)
                                                        }
                                                    >
                                                        В корзину
                                                    </button>
                                                    <OnClickCart
                                                        el={el}
                                                    ></OnClickCart>
                                                    {/* <button className="section-goods__buttom card-product__shopping">
                                                        Купить в 1 клик
                                                    </button> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card__info-block">
                                            <div className="card__info_item">
                                                <div className="card__info_title-block">
                                                    <div className="card__info_title-icon">
                                                        <Image
                                                            src={delivery}
                                                            alt="icon"
                                                        ></Image>
                                                    </div>
                                                    <div className="card__info_title-text">
                                                        Доставка
                                                    </div>
                                                </div>
                                                <div className="card__info_text">
                                                    <p>
                                                        Доставим по
                                                        Санкт-Петербургу в
                                                        течение 2 часов и
                                                        бесплатно. Стоимость
                                                        доставки в другие города
                                                        уточняйте у менеджера.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="card__info_item">
                                                <div className="card__info_title-block">
                                                    <div className="card__info_title-icon">
                                                        <Image
                                                            src={payment}
                                                            alt="icon"
                                                        ></Image>
                                                    </div>
                                                    <div className="card__info_title-text">
                                                        Оплата
                                                    </div>
                                                </div>
                                                <div className="card__info_text">
                                                    <p>
                                                        Принимаем к оплате как
                                                        наличный, так и
                                                        безналичный расчёт.
                                                        Возможна оплата
                                                        электронными кошельками.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-tab__holder">
                                <div className="card-tab__inner">
                                    <div className="tab__header-box block-bgc">
                                        <ul className="tab__header">
                                            {tabCard.map((el: any) => {
                                                return (
                                                    <>
                                                        {el.title !==
                                                            "Отзывы" && (
                                                            <li
                                                                className={`tab__item ${
                                                                    el.active
                                                                        ? "tab__active"
                                                                        : ""
                                                                }`}
                                                                onClick={(e) =>
                                                                    handlerTab(
                                                                        el,
                                                                    )
                                                                }
                                                            >
                                                                {el.title}
                                                            </li>
                                                        )}
                                                        {el.title ===
                                                            "Отзывы" && (
                                                            <li
                                                                className={`tab__item ${
                                                                    el.active
                                                                        ? "tab__active"
                                                                        : ""
                                                                }`}
                                                                onClick={(e) =>
                                                                    handlerTab(
                                                                        el,
                                                                    )
                                                                }
                                                            >
                                                                {el.title}
                                                                <span>(1)</span>
                                                            </li>
                                                        )}
                                                    </>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                    {tabCard.map((body: any) => {
                                        if (
                                            body.id === 1 &&
                                            body.active === true
                                        ) {
                                            return (
                                                <div className="tab__body">
                                                    <div className="tab__title-box">
                                                        <h3 className="tab__title">
                                                            Описание{" "}
                                                            {el.nameProduct}
                                                        </h3>
                                                    </div>
                                                    <p className="tab__text">
                                                        Вопрос безопасности
                                                        всегда стоит очень
                                                        остро, в этом году
                                                        производители решили его
                                                        следующим образом —
                                                        снабдили модель
                                                        качественной задней и
                                                        передней подсветкой,
                                                        поэтому пользователь
                                                        может не переживать о
                                                        том, что его будет
                                                        незаметно на дороге в
                                                        тёмное время суток.
                                                    </p>
                                                    <p className="tab__text">
                                                        На руле имеется яркий
                                                        качественный дисплей,
                                                        где отображается вся
                                                        актуальная и необходимая
                                                        информация — скорость,
                                                        пробег и др. Кроме того,
                                                        на руле имеется кнопка
                                                        включения и выключения
                                                        подсветки, звуковой
                                                        сигнал и кнопка
                                                        настроек. Таким образом,
                                                        все необходимое для
                                                        управления самокатом
                                                        находится у пользователя
                                                        под рукой.
                                                    </p>
                                                    <p className="tab__text">
                                                        Для комфорта прогулок
                                                        электросамокат снабжён
                                                        передним и задним
                                                        амортизаторами. Вы
                                                        можете перемещаться не
                                                        только по ровному
                                                        городскому асфальту, но
                                                        и по неровностям,
                                                        которые не затруднят
                                                        ваше перемещение.
                                                    </p>
                                                    <p className="tab__text">
                                                        Складной механизм и
                                                        небольшой вес (11 кг)
                                                        делают модель
                                                        эргономичной. В
                                                        сложенном виде самокат
                                                        занимает совсем мало
                                                        места — его легко
                                                        перевозить как в
                                                        багажнике машины, так и
                                                        в общественном
                                                        транспорте. При
                                                        складывании самокат
                                                        фиксируется с помощью
                                                        крючка к заднему крылу.
                                                        А для того, чтобы
                                                        разложить его,
                                                        необходимо, нажав на
                                                        заднее крыло, приподнять
                                                        руль. Характерный щелчок
                                                        говорит о том, что
                                                        самокат разложен
                                                        полностью и готов к
                                                        эксплуатации.
                                                    </p>
                                                    <p className="tab__text">
                                                        Стоит отметить, что
                                                        электросамокат очень
                                                        быстро стартует — вам не
                                                        надо отталкиваться или
                                                        разгоняться. Выдерживает
                                                        до 120 кг, в процессе
                                                        изготовления
                                                        использовались только
                                                        качественные материалы.
                                                    </p>
                                                    <p className="tab__text">
                                                        Быстрый, лёгкий,
                                                        компактный — прекрасный
                                                        выбор для ценителей
                                                        удобства!
                                                    </p>
                                                </div>
                                            );
                                        }
                                        if (
                                            body.id === 2 &&
                                            body.active === true
                                        ) {
                                            return (
                                                <div className="tab__body">
                                                    <div className="tab__title-box">
                                                        <h3 className="tab__title">
                                                            Характеристики{" "}
                                                            {el.nameProduct}
                                                        </h3>
                                                    </div>
                                                    <div className="tab__block">
                                                        <div className="tab__column tab__column_bottom">
                                                            <div className="tab__line">
                                                                Тип:
                                                            </div>
                                                            <div className="tab__line">
                                                                -
                                                            </div>
                                                        </div>
                                                        <div className="tab__column tab__column_bottom">
                                                            <div className="tab__line">
                                                                Макс.скорость
                                                                до(км/час):
                                                            </div>
                                                            <div className="tab__line">
                                                                25
                                                            </div>
                                                        </div>
                                                        <div className="tab__column tab__column_bottom">
                                                            <div className="tab__line">
                                                                Мощность
                                                                двигателя:
                                                            </div>
                                                            <div className="tab__line">
                                                                300
                                                            </div>
                                                        </div>
                                                        <div className="tab__column tab__column_bottom">
                                                            <div className="tab__line">
                                                                Пробег на одном
                                                                заряде:
                                                            </div>
                                                            <div className="tab__line">
                                                                36
                                                            </div>
                                                        </div>
                                                        <div className="tab__column tab__column_bottom">
                                                            <div className="tab__line">
                                                                Тип переднего
                                                                тормоза:
                                                            </div>
                                                            <div className="tab__line">
                                                                дисковый
                                                                механический
                                                            </div>
                                                        </div>
                                                        <div className="tab__column tab__column_bottom">
                                                            <div className="tab__line">
                                                                Круиз-контроль:
                                                            </div>
                                                            <div className="tab__line">
                                                                Есть
                                                            </div>
                                                        </div>
                                                        <div className="tab__column tab__column_bottom">
                                                            <div className="tab__line">
                                                                Тип:
                                                            </div>
                                                            <div className="tab__line">
                                                                -
                                                            </div>
                                                        </div>
                                                        <div className="tab__column tab__column_bottom">
                                                            <div className="tab__line">
                                                                Макс.скорость
                                                                до(км/час):
                                                            </div>
                                                            <div className="tab__line">
                                                                25
                                                            </div>
                                                        </div>
                                                        <div className="tab__column tab__column_bottom">
                                                            <div className="tab__line">
                                                                Мощность
                                                                двигателя:
                                                            </div>
                                                            <div className="tab__line">
                                                                300
                                                            </div>
                                                        </div>
                                                        <div className="tab__column tab__column_bottom">
                                                            <div className="tab__line">
                                                                Пробег на одном
                                                                заряде:
                                                            </div>
                                                            <div className="tab__line">
                                                                36
                                                            </div>
                                                        </div>
                                                        <div className="tab__column tab__column_bottom">
                                                            <div className="tab__line">
                                                                Тип переднего
                                                                тормоза:
                                                            </div>
                                                            <div className="tab__line">
                                                                дисковый
                                                                механический
                                                            </div>
                                                        </div>
                                                        <div className="tab__column tab__column_bottom">
                                                            <div className="tab__line">
                                                                Круиз-контроль:
                                                            </div>
                                                            <div className="tab__line">
                                                                Есть
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        }
                                        if (
                                            body.id === 3 &&
                                            body.active === true
                                        ) {
                                            return (
                                                <div className="tab__body">
                                                    <div className="tab__title-box">
                                                        <h3 className="tab__title">
                                                            Отзывы{" "}
                                                            {el.nameProduct}
                                                        </h3>
                                                    </div>
                                                    <div className="tab__block tab__block_col">
                                                        <div className="tab__column__holder">
                                                            <div className="tab__column_box block-bgc">
                                                                <div className="tab__block_card">
                                                                    <div className="avatar">
                                                                        <div className="avatar__photo">
                                                                            <div className="avatar__text">
                                                                                A
                                                                            </div>
                                                                        </div>
                                                                        <div className="avatar__name">
                                                                            Александр
                                                                        </div>
                                                                        <div className="avatar__data">
                                                                            <span className="data">
                                                                                07
                                                                            </span>
                                                                            <span className="data">
                                                                                июня
                                                                            </span>
                                                                            <span className="data">
                                                                                2024
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="raiting raiting__tab">
                                                                        <div className="raiting__block">
                                                                            <StarRating
                                                                                starRating={
                                                                                    "100"
                                                                                }
                                                                            ></StarRating>
                                                                        </div>
                                                                        <div className="raiting__namber">
                                                                            (5
                                                                            <span>
                                                                                из
                                                                            </span>
                                                                            5)
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="tab__block_card">
                                                                    <p className="tab__text">
                                                                        <b>
                                                                            Отличный
                                                                            самокат!
                                                                        </b>
                                                                    </p>
                                                                    <p className="tab__text">
                                                                        Катаюсь
                                                                        каждый
                                                                        день
                                                                        после
                                                                        работы,
                                                                        заряд
                                                                        держит
                                                                        отлично!
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="tab__column__holder">
                                                            <div className="tab__card">
                                                                <div className="tab__text-block">
                                                                    <p className="tab__text">
                                                                        <b>
                                                                            Напишите
                                                                            своё
                                                                            мнение
                                                                            о
                                                                            товаре
                                                                        </b>
                                                                    </p>
                                                                    <p className="tab__text">
                                                                        Сделайте
                                                                        выбор
                                                                        других
                                                                        покупалетей
                                                                        легче
                                                                    </p>
                                                                    <div className="tab__button-box">
                                                                        <button className="tab__button">
                                                                            Написать
                                                                            отзыв
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        }
                                    })}
                                </div>
                            </div>
                            <div className="recommendation">
                                <div className="recommendation__title-box">
                                    <TitleH2 title={"Рекомендуем"}></TitleH2>
                                </div>
                                <div className="recommendation__block">
                                    <div className="recommendation__wrapper">
                                        {productShow[0].map((el: any) => {
                                            return (
                                                <ProductСard
                                                    el={el}
                                                    id={el.id}
                                                ></ProductСard>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                }
            })}
        </>
    );
};

export default ProductCardDetall;