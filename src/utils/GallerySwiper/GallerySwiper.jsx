"use client"
import { useState, useEffect, useRef } from "react";
import ProductСard from "../../components/ProductСard";
import Image from "next/image";
import "./GallerySwiper.css";

const GallerySwiper = ({ arrayImg, option, nameGallery }) => {
    const controll = option.controll; // 👈 Кнопки в право в лево
    const Infinit = option.Infinit; // 👈 Бесконечный сдайдер
    const animationTime = option.animationTime * 1000; // 👈 Время анимацтт
    const winowsCount = option.winowsCount; //👈 Колличество окон слайдера
    const distanceSlide = option.distanceSlide; //👈 Отступ между слайдами
    const bullets = option.bullets; //👈 Буллеты
    const bulletsNumber = option.bulletsNumber; //👈 Буллеты с цифрами
    const bulletsImg = option.bulletsImg; //👈 Буллеты с картинками
    const progressBar = option.progressBar; //👈 Прогресс Бар
    const trekColor = option.trekColor; //👈 Цвет трека
    const activeTrekColor = option.activeTrekColor; //👈 Цвет активного трека
    const autoScrollingleft = option.autoScrollingleft; //👈 Автоперелистывание в лево
    const autoScrollingRigth = option.autoScrollingRigth; //👈 Автоперелистывание в право
    const autoScrollingInterval = option.autoScrollingInterval * 1000; //👈 Автоперелистывание в право
    const element = useRef(null); //👈 Слайд
    const wrappGallery = useRef(null); //👈 Обёртка слайда
    const galleryWin = useRef(null); //👈 Окно слайда
    const [widthWin, setWidthWin] = useState(); //👈 Ширина слайда
    const [slides, setSlides] = useState([...arrayImg]); //👈 Массив слайдов
    const [offset, setOffset] = useState(0); //👈 Сдвиг слайда
    const [bigPhoto, setBigPhoto] = useState(false);
    const [clonesCount, setClonesCount] = useState({
        // Количество клонов для бесконечного слайда
        beginning: 0,
        end: 0,
    });
    const percentShift = (widthWin / 100) * option.percentShift;
    const [touchScreen, setTouchScreen] = useState(false);
    const [shiftLR, setShiftLR] = useState(undefined);
    const [posX1, setPosX1] = useState(0);
    const [posX2, setPosX2] = useState(0);
    const [transition, setTransition] = useState(animationTime); //👈 Для временного отключения анимации
    const [widthScreen, setWidthScreen] = useState(0);
    const [margin, setMargin] = useState(0);
    const [activeSlide, setActiveSlide] = useState("1");
    const [countTime, setCountTime] = useState(0);
    const winowsCountCss = winowsCount * 100;
    const addCountSlide = Math.ceil(winowsCount);
    //👇 Отступ с медиазапросом
    useEffect(() => {
        const handleResize = (event) => {
            setWidthScreen(event.target.innerWidth);
        };
        function marginsСhanging() {
            if (widthScreen < 560.9) {
                setMargin(distanceSlide.xs560);
            }
            if (widthScreen < 768.9 && widthScreen > 560.9) {
                setMargin(distanceSlide.sm768);
            }
            if (widthScreen < 1024.9 && widthScreen > 768.9) {
                setMargin(distanceSlide.md1024);
            }
            if (widthScreen < 1366.9 && widthScreen > 1024.9) {
                // setMargin(distanceSlide.xlg1366);
            }
            if (widthScreen > 1366.9) {
                setMargin(distanceSlide.xlg1366);
            }
        }
        marginsСhanging();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [margin, distanceSlide, widthScreen]);
    //👇 Создание массива для бесконечного слайда с клонами
    useEffect(() => {
        const newSlides = [...arrayImg];
        if (Infinit) {
            if (addCountSlide === 1) {
                setSlides([
                    newSlides[newSlides.length - 1],
                    ...newSlides,
                    newSlides[0],
                ]);
                setClonesCount({ beginning: 1, end: addCountSlide });
                return;
            }
            if (addCountSlide === 2) {
                setSlides([
                    newSlides[newSlides.length - 1],
                    ...newSlides,
                    newSlides[0],
                    newSlides[1],
                ]);
                setClonesCount({ beginning: 1, end: addCountSlide });
                return;
            }
            if (addCountSlide === 3) {
                setSlides([
                    newSlides[newSlides.length - 1],
                    ...newSlides,
                    newSlides[0],
                    newSlides[1],
                ]);
                setClonesCount({ beginning: 1, end: addCountSlide });
                return;
            }
        }
        setSlides([...newSlides]);
    }, [Infinit, arrayImg, addCountSlide]);
    //👇 Логика бесконечгого слайдера
    useEffect(() => {
        if (!Infinit) return;
        if (offset === 0 && widthWin !== undefined) {
            setTimeout(() => {
                setTransition(0);
                setOffset(
                    -(
                        (widthWin + margin) *
                        (slides.length - 1 - clonesCount.end)
                    ),
                );
            }, animationTime);
            return;
        }
        if (
            offset === -(widthWin * (slides.length - clonesCount.end)) &&
            widthWin !== undefined
        ) {
            setTimeout(() => {
                setTransition(0);
                setOffset(-((widthWin + margin) * clonesCount.beginning));
            }, animationTime);
            return;
        }
    }, [
        Infinit,
        offset,
        widthWin,
        slides,
        clonesCount,
        transition,
        animationTime,
        margin,
    ]);
    //👇 Обновление «ширина», когда окно изменяется
    useEffect(() => {
        // Получить «ширину» после первоначального визуализации и каждый раз, когда список меняется
        function handlerShow() {
			const newWidth = galleryWin.current.clientWidth;
            setWidthWin(newWidth);
            setOffset(-clonesCount.beginning * (widthWin + margin));
        }
        const sliderEl = galleryWin.current.offsetWidth;
        const resizeHandler = () => {
            setWidthWin(sliderEl);
        };
        handlerShow();
        resizeHandler();
        galleryWin.current.addEventListener("onshow", handlerShow, true);
        window.addEventListener("resize", resizeHandler, true);
        galleryWin.current.removeEventListener("onshow", handlerShow, true);
        // Удалить обработчик, чтобы больше не менять ширину и offset
        return () => {
			window.removeEventListener("resize", resizeHandler, true)
        };
    }, [clonesCount, widthWin, margin]);
    //👇 Инициализация ширины слайдa
    useEffect(() => {
        const slider = document.querySelectorAll(
            `.${element.current.className}`,
        );
        slider.forEach((el) => {
            el.style.minWidth = `${widthWin}px`;
            el.style.marginRight = `${margin}px`;
        });
    }, [widthWin, winowsCountCss, margin]);
    //👇 Логика анимации
    useEffect(() => {
        if (transition === 0) {
            setTimeout(() => {
                setTransition(animationTime);
            }, animationTime);
        }
    }, [transition, animationTime]);
    //👇 Проверка ПК или touchscreen
    useEffect(() => {
        if (
            /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
                navigator.userAgent,
            ) ||
            /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
                navigator.platform,
            )
        ) {
            setTouchScreen(true);
        }
    }, [touchScreen]);
    //👇 Автоперелистывание
    useEffect(() => {
        if (countTime >= 9) {
            setCountTime(0);
        }
        const timeoutID = setTimeout(() => {
            setCountTime((time) => (time = time + 1));
            if (autoScrollingleft) {
                setOffset((currentOffset) => {
                    let newOffset = currentOffset - (widthWin + margin);
                    if (
                        Math.abs(newOffset / (widthWin + margin)) >
                        arrayImg.length
                    ) {
                        setActiveSlide("1");
                    } else {
                        setActiveSlide(
                            `${Math.abs(newOffset / (widthWin + margin))}`,
                        );
                    }
                    const maxOffset = -(widthWin * (slides.length - 1));
                    return Math.max(newOffset, maxOffset);
                });
            }
            if (autoScrollingRigth) {
                setOffset((currentOffset) => {
                    let newOffset = currentOffset + (widthWin + margin);
                    if (Math.abs(newOffset / (widthWin + margin)) <= 0) {
                        setActiveSlide(`${arrayImg.length}`);
                    } else {
                        setActiveSlide(
                            `${Math.abs(newOffset / (widthWin + margin))}`,
                        );
                    }
                    return Math.min(newOffset, 0);
                });
            }
        }, autoScrollingInterval);

        return () => {
            // 👇️ Очистите время ожидания, когда компонент замораживает
            clearTimeout(timeoutID);
        };
    }, [
        countTime,
        autoScrollingleft,
        autoScrollingInterval,
        autoScrollingRigth,
        arrayImg.length,
        widthWin,
        margin,
        offset,
        activeSlide,
        slides.length,
    ]);

    //! ОБРАБОТЧИКИ СОБЫТИЙ
    //* Обработчик левой кнопки управления + активный буллет
    function handlerLeftBtn() {
        setOffset((currentOffset) => {
            let newOffset = currentOffset + (widthWin + margin);
            if (Math.abs(newOffset / (widthWin + margin)) <= 0) {
                setActiveSlide(`${arrayImg.length}`);
            } else {
                setActiveSlide(`${Math.abs(newOffset / (widthWin + margin))}`);
            }
            return Math.min(newOffset, 0);
        });
    }
    //* Обработчик правой кнопки управления + активный буллет
    function handlerRigthBtn() {
        setOffset((currentOffset) => {
            let newOffset = currentOffset - (widthWin + margin);
            if (Math.abs(newOffset / (widthWin + margin)) > arrayImg.length) {
                setActiveSlide("1");
            } else {
                setActiveSlide(`${Math.abs(newOffset / (widthWin + margin))}`);
            }
            const maxOffset = -(widthWin * (slides.length - 1));
            return Math.max(newOffset, maxOffset);
        });
    }
    //* Обработчик старта петаскивания
    function dragStartHandler(e) {
        if (touchScreen) {
            setPosX1(Math.round(e.touches[0].pageX));
        } else {
            setPosX1(e.pageX);
        }
    }
    //* Обработчик перетаскивания
    function dragOverHandler(e) {
        if (touchScreen) {
            setPosX2(posX1 - Math.round(e.touches[0].pageX));
        } else {
            setPosX2(posX1 - e.pageX);
        }
        if (posX2 >= 0) {
            setShiftLR(true);
        }
        if (posX2 < 0) {
            setShiftLR(false);
        }
    }
    //* Обработчик завершения перетаскивания и переключение слайда
    function dragEndHandler(e) {
        if (shiftLR) {
            if (Math.abs(posX2) > percentShift) {
                handlerRigthBtn();
            }
        }
        if (!shiftLR) {
            if (Math.abs(posX2) > percentShift) {
                handlerLeftBtn();
            }
        }
    }
    //* Обработчик буллетов
    function handlerBullet(e, el) {
        setActiveSlide(el.id);
        if (Infinit) {
            setOffset(-(widthWin + margin) * el.id);
        } else {
            if (el.id === "1") {
                setOffset(0);
            } else {
                setOffset(-(widthWin + margin) * (el.id - 1));
            }
        }
    }
    //* Обработчик двойного клика на картинку
    function handlerBigPhoto() {
        setBigPhoto((big) => (big = !big));
    }
    return (
        <>
            {nameGallery === "main" && (
                <div
                    className="main-slider select-catalog__slider"
                    ref={galleryWin}
                >
                    <div
                        className="slider__window select-catalog__window "
                        style={{ width: `${winowsCountCss}%` }}
                    >
                        <div
                            className="slider__container"
                            style={{
                                transitionDuration: `${transition}ms`,
                                transform: `translateX(${offset}px)`,
                            }}
                            draggable={true}
                            onDragStart={(e) => dragStartHandler(e)}
                            onDragOver={(e) => dragOverHandler(e)}
                            onDragEnd={(e) => dragEndHandler(e)}
                            onTouchStart={(e) => dragStartHandler(e)}
                            onTouchMove={(e) => dragOverHandler(e)}
                            onTouchEnd={(e) => dragEndHandler(e)}
                            ref={wrappGallery}
                        >
                            {slides.map((el, i) => {
                                return (
                                    <div
                                        className={`slider__item ${
                                            bigPhoto ? "activeBig" : ""
                                        }`}
                                        data-slider={el.id}
                                        ref={element}
                                        key={i}
                                    >
                                        <Image
                                            loading="lazy"
                                            src={el.img}
                                            alt=""
                                            data-img={el.id}
                                            className="slider__img"
                                            onDoubleClick={handlerBigPhoto}
                                        />
                                        <div className="slider__text-box">
                                            <p>{el.titleOne}</p>
                                            <p>{el.titleTwo}</p>
                                            <p>{el.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    {controll && (
                        <div className="slider__controll">
                            <button
                                className="slider__btn_left"
                                onClick={handlerLeftBtn}
                            >
                                <svg
                                    width="31px"
                                    height="28px"
                                    viewBox="0 -2 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M6 12H18M6 12L11 7M6 12L11 17"
                                        stroke="#000000"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                            <button
                                className="slider__btn_rigth"
                                onClick={handlerRigthBtn}
                            >
                                <svg
                                    width="31px"
                                    height="28px"
                                    viewBox="0 -2 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M6 12H18M18 12L13 7M18 12L13 17"
                                        stroke="#000000"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>
                    )}
                    {bullets && (
                        <div className="slider__bullets">
                            {arrayImg.map((el) => {
                                return (
                                    <button
                                        name="button"
                                        key={el.id}
                                        className={`slider__bullet ${
                                            el.id === activeSlide
                                                ? "active-bullet"
                                                : ""
                                        }`}
                                        data-slider={el.id}
                                        onClick={(e) => handlerBullet(e, el)}
                                        style={{
                                            width: `${100 / arrayImg.length}%`,
                                        }}
                                    >
                                        {bulletsNumber && (
                                            <span className="num-slide">
                                                {el.id}
                                            </span>
                                        )}
                                        {bulletsImg && (
                                            <img
                                                src={el.img}
                                                alt=""
                                                className="slider__bullet-img"
                                            />
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    )}
                    {progressBar && (
                        <div className="slider__progress">
                            <div
                                className="slider__progress_trek"
                                style={{
                                    background: `linear-gradient(90deg, ${activeTrekColor} 0%, ${activeTrekColor} ${
                                        (100 / arrayImg.length) * activeSlide
                                    }%, ${trekColor} ${
                                        (100 / arrayImg.length) * activeSlide
                                    }%, ${trekColor} 100%)`,
                                }}
                            ></div>
                        </div>
                    )}
                </div>
            )}
            {nameGallery === "compareList" && (
                <>
                    <div className="compare__product">
                        {controll && (
                            <div className="compare__product-nav">
                                <button
                                    onClick={handlerLeftBtn}
                                    className="compare__product-btn compare__product-btn_left"
                                >
                                    <svg
                                        width="5.815430"
                                        height="10.212891"
                                        viewBox="0 0 5.81543 10.2129"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            id="slider-left"
                                            d="M0.12 4.81L5.14 0.1C5.39 -0.13 5.81 0.05 5.81 0.4L5.81 9.81C5.81 10.16 5.39 10.34 5.14 10.1L0.12 5.39C-0.05 5.24 -0.05 4.97 0.12 4.81Z"
                                            // fill="#EAEAF0"
                                        />
                                    </svg>
                                </button>
                                <button
                                    onClick={handlerRigthBtn}
                                    className="compare__product-btn compare__product-btn_right"
                                >
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
                        )}
                        <div
                            className="compare-slider compare__product__wrapper"
                            ref={galleryWin}
                        >
                            <div
                                className="slider__window"
                                style={{ width: `${winowsCountCss}%` }}
                            >
                                <div
                                    className="slider__container"
                                    style={{
                                        transitionDuration: `${transition}ms`,
                                        transform: `translateX(${offset}px)`,
                                    }}
                                    draggable={true}
                                    onDragStart={(e) => dragStartHandler(e)}
                                    onDragOver={(e) => dragOverHandler(e)}
                                    onDragEnd={(e) => dragEndHandler(e)}
                                    onTouchStart={(e) => dragStartHandler(e)}
                                    onTouchMove={(e) => dragOverHandler(e)}
                                    onTouchEnd={(e) => dragEndHandler(e)}
                                    ref={wrappGallery}
                                >
                                    {slides.map((el, i) => {
                                        return (
                                            <div
                                                className={`slider__item ${
                                                    bigPhoto ? "activeBig" : ""
                                                }`}
                                                data-slider={el.id}
                                                ref={element}
                                                key={i}
                                            >
                                                <ProductСard
                                                    id={el.id}
                                                    el={el}
                                                    compare={el.compare}
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            {bullets && (
                                <div className="slider__bullets">
                                    {arrayImg.map((el) => {
                                        return (
                                            <button
                                                name="button"
                                                key={el.id}
                                                className={`slider__bullet ${
                                                    el.id === activeSlide
                                                        ? "active-bullet"
                                                        : ""
                                                }`}
                                                data-slider={el.id}
                                                onClick={(e) =>
                                                    handlerBullet(e, el)
                                                }
                                            >
                                                {bulletsNumber && (
                                                    <span className="num-slide">
                                                        {el.id}
                                                    </span>
                                                )}
                                                {bulletsImg && (
                                                    <img
                                                        src={el.img}
                                                        alt=""
                                                        className="slider__bullet-img"
                                                    />
                                                )}
                                            </button>
                                        );
                                    })}
                                </div>
                            )}
                            {progressBar && (
                                <div className="slider__progress">
                                    <div
                                        className="slider__progress_trek"
                                        style={{
                                            background: `linear-gradient(90deg, ${activeTrekColor} 0%, ${activeTrekColor} ${
                                                (100 / arrayImg.length) *
                                                activeSlide
                                            }%, ${trekColor} ${
                                                (100 / arrayImg.length) *
                                                activeSlide
                                            }%, ${trekColor} 100%)`,
                                        }}
                                    ></div>
                                </div>
                            )}
                        </div>
                    </div>
                </>
            )}
            {nameGallery === "product" && (
                <div
                    className="product-slider card__photo-block"
                    ref={galleryWin}
                >
                    <div
                        className="slider__window card__photo"
                        style={{ width: `${winowsCountCss}%` }}
                    >
                        <div
                            className="slider__container"
                            style={{
                                transitionDuration: `${transition}ms`,
                                transform: `translateX(${offset}px)`,
                            }}
                            draggable={true}
                            onDragStart={(e) => dragStartHandler(e)}
                            onDragOver={(e) => dragOverHandler(e)}
                            onDragEnd={(e) => dragEndHandler(e)}
                            onTouchStart={(e) => dragStartHandler(e)}
                            onTouchMove={(e) => dragOverHandler(e)}
                            onTouchEnd={(e) => dragEndHandler(e)}
                            ref={wrappGallery}
                        >
                            {slides.map((el, i) => {
                                return (
                                    <div
                                        className={`slider__item ${
                                            bigPhoto ? "activeBig" : ""
                                        }`}
                                        data-slider={el.id}
                                        ref={element}
                                        key={i}
                                    >
                                        <div className="card-img__wrap-photo">
                                            <div className="card-img__block-photo">
                                                <Image
                                                    src={el.img}
                                                    alt="фото продукта"
                                                    className="card-img__img-photo"
                                                ></Image>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="card__photo-slider">
                        {bullets && (
                            <ul className="slider__bullets slider__photo-box">
                                {arrayImg.map((el) => {
                                    return (
                                        <li
                                            key={el.id}
                                            className={`slider__bullet slider__photo-item ${
                                                el.id === activeSlide
                                                    ? "min-slider__active"
                                                    : ""
                                            }`}
                                            data-slider={el.id}
                                            onClick={(e) =>
                                                handlerBullet(e, el)
                                            }
                                        >
                                            {bulletsNumber && (
                                                <span className="num-slide">
                                                    {el.id}
                                                </span>
                                            )}
                                            {bulletsImg && (
                                                <>
                                                    <div className="slider__wrap-photo">
                                                        <div className="slider__block-photo">
                                                            <Image
                                                                src={el.img}
                                                                alt="фото"
                                                                className="slider__img-photo"
                                                            ></Image>
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                        </li>
                                    );
                                })}
                            </ul>
                        )}
                        {controll && (
                            <div className="compare__product-nav slider__photo-nav">
                                <button
                                    className="compare__product-btn compare__product-btn_left"
                                    onClick={handlerLeftBtn}
                                >
                                    <svg
                                        width="5.815430"
                                        height="10.212891"
                                        viewBox="0 0 5.81543 10.2129"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            id="slider-left"
                                            d="M0.12 4.81L5.14 0.1C5.39 -0.13 5.81 0.05 5.81 0.4L5.81 9.81C5.81 10.16 5.39 10.34 5.14 10.1L0.12 5.39C-0.05 5.24 -0.05 4.97 0.12 4.81Z"
                                            fill="#000"
                                        />
                                    </svg>
                                </button>
                                <button
                                    className="compare__product-btn compare__product-btn_right"
                                    onClick={handlerRigthBtn}
                                >
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
                                        />
                                    </svg>
                                </button>
                            </div>
                        )}
                        {progressBar && (
                            <div className="slider__progress">
                                <div
                                    className="slider__progress_trek"
                                    style={{
                                        background: `linear-gradient(90deg, ${activeTrekColor} 0%, ${activeTrekColor} ${
                                            (100 / arrayImg.length) *
                                            activeSlide
                                        }%, ${trekColor} ${
                                            (100 / arrayImg.length) *
                                            activeSlide
                                        }%, ${trekColor} 100%)`,
                                    }}
                                ></div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default GallerySwiper;
