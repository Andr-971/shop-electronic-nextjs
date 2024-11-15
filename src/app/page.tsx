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
import closeBtn from "../../public/svg/close-btn.svg"
import SectionTitle from "../components/SectionTitle";
import mainSliderImg from "../../public/png_webp/main-slider.webp"
import stock_one_block from "../../public/stock_one_block"
import stock_two_block from "../../public/stock_two_block"
import Stock from "@/components/Stock";
import {PrevNew} from "@/components/PrevNew";
import { prevNewsTwo } from "../../public/prevNewsTwo"
import productAll from "../../public/productAll";
import { splitArray } from "@/services/function"
import ProductСard from "@/components/ProductСard"
import GallerySwiper from "@/utils/GallerySwiper/GallerySwiper"
import {arrayMainGallery} from "../../public/mainGallery"

const optionMainSallery = {
    controll: false, // true/false Стрелки управления
    Infinit: true, // true/false Бескоречный слайдер
    winowsCount: "1", // Ширина окна относительно слайда 1:1 и т.д.
    animationTime: "0.5", // Время анимации в секундах
    distanceSlide: {
        xlg1366: 3,
        lg1280: 3,
        md1024: 3,
        sm768: 3,
        xs560: 3,
    }, // Отступ между слайдерами
    percentShift: 10, // Минимальный сдвиг по экрану %
    bullets: true, // true/false Кнопки переключения
    bulletsNumber: false, // true/false Цифры на кнопках
    bulletsImg: false, // true/false Буллеты с картинками
    progressBar: false, // true/false Прогресс Бар
    trekColor: "#f1f1f1",
    activeTrekColor: "#284af6",
};

export default function Home() {
    const productShow = splitArray(productAll, 4);
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
                <GallerySwiper
                    arrayImg={arrayMainGallery}
                    option={optionMainSallery}
                    nameGallery={"main"}
                ></GallerySwiper>
            </div>
            <section className="section-goods section-hit">
                <div className="section-goods__inner">
                    <SectionTitle title="Хиты продаж"></SectionTitle>
                    <div className="section-goods-postcard__wrapper">
                        <div className="section-goods-postcard__block recommendation__wrapper">
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
            </section>
            <section className="section-goods section-new">
                <div className="section-goods__inner">
                    <SectionTitle title="Новинки"></SectionTitle>
                    <div className="section-goods-postcard__wrapper">
                        <div className="section-goods-postcard__block recommendation__wrapper">
                            {productShow[1].map((el: any) => {
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
                        {productShow[2].map((el: any) => {
                            return (
                                <ProductСard el={el} id={el.id}></ProductСard>
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
                        {productShow[3].map((el: any) => {
                            return (
                                <ProductСard el={el} id={el.id}></ProductСard>
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
