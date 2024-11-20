"use client"
import React from "react"
import { useCompare } from "@/store"
import ProductСard from "../ProductСard"
import GallerySwiper from "@/utils/GallerySwiper/GallerySwiper"
import TitleH2 from "@/components/TitleH2"

const optionCompare = {
    controll: true, // 👈 true/false Стрелки управления
    Infinit: true, // 👈 true/false Бескоречный слайдер
    winowsCount: "1", // 👈 Ширина окна относительно слайда 1:1 и т.д.
    animationTime: "0.5", // 👈 Время анимации в секундах
    distanceSlide: {
        xlg1366: 2,
        lg1280: 2,
        md1024: 2,
        sm768: 2,
        xs560: 2,
    }, // 👈 Отступ между слайдерами  медиазапросах px
    percentShift: 10, // 👈 Минимальный сдвиг по экрану %
    bullets: true, // 👈 true/false Кнопки переключения
    bulletsNumber: true, // 👈 true/false Цифры на кнопках
    bulletsImg: false, // 👈 true/false Буллеты с картинками
    progressBar: false, // 👈 true/false Прогресс Бар
    trekColor: "#f1f1f1", // 👈 Цвет трека прогресбара
    activeTrekColor: "#284af6", // 👈 Цвет активного трека прогресбара
    autoScrollingleft: false, // 👈 Автоперелистывание в лево
    autoScrollingRigth: false, // 👈 Автоперелистывание в право
    autoScrollingInterval: 3, // 👈 Интервал перелистывания в секундах
};
const CompareArray = () => {
    const { compare } = useCompare();
    return (
        <>
            {compare.length >= 2 ? (
                <GallerySwiper
                    arrayImg={compare}
                    option={optionCompare}
                    nameGallery={"compareList"}
                ></GallerySwiper>
            ) : (
                <TitleH2 title="Выберите товар для сравнения"></TitleH2>
            )}
            {/* <div className="compare__product">
                <div className="compare__product-nav">
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
                            />
                        </svg>
                    </button>
                    <button className="compare__product-btn compare__product-btn_right">
                        <svg
                            width="5.815430"
                            height="10.212891"
                            viewBox="0 0 5.81543 10.2129"
                            xmlns="http://www.w3.org/2000/svg"
                            // xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                            <path
                                id="slider-right"
                                d="M5.68 4.81L0.67 0.1C0.41 -0.13 0 0.05 0 0.4L0 9.81C0 10.16 0.41 10.34 0.67 10.1L5.68 5.39C5.85 5.24 5.85 4.97 5.68 4.81Z"
                                fill="#070C11"
                            />
                        </svg>
                    </button>
                </div>
                <div className="compare__product__wrapper">
                    <div className="compare__product__block">
                        {compare.length > 0 ? (
                            compare.map((el: any) => {
                                return (
                                    <ProductСard
                                        id={el.id}
                                        el={el}
                                        compare={el.compare}
                                    />
                                );
                            })
                        ) : (
                            <TitleH2 title="Выберите товар для сравнения"></TitleH2>
                        )}
                    </div>
                </div>
            </div> */}
        </>
    );
}

export default CompareArray;