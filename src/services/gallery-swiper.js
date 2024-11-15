"use strict";
function inDocument(node) {
    var context = node.parentNode;
    while (context !== null) {
        if (context === document) return true;
        else context = context.parentNode;
    }
    return false;
}

export default class Gallery {
    constructor(element, options = {}) {
        this.containerNode = element; // Обёртка галереи
        this.sizeSlide = element.childElementCount; // Количество слайдов
        this.options = options;
        this.slideIndex = 0; // Начальный шндекс слайда
        (this.trfRegExp = /([-0-9.]+(?=px))/), // Выбрать только цифры без пикселей
            (this.infiniteSlide = options.infiniteSlide); // Бесконечный слайдер
        this.autoFlipping = true;
        if (typeof options.autoscrolling !== "undefined") {
            this.autoscrolling = true;
            if (typeof options.autoscrolling.left !== "undefined") {
                this.autoscrollingLeft = options.autoscrolling.left;
            } else if (typeof options.autoscrolling.right !== "undefined") {
                this.autoscrollingRight = options.autoscrolling.right;
            }
            if (typeof options.autoscrolling.delay !== "undefined") {
                this.autoscrollingDelay = +options.autoscrolling.delay;
            }
        }

        // Кнопки перелистывания

        if (typeof options.controls !== "undefined") {
            this.btnPrevControlHTML = document.getElementById(
                options.controls.prevId
            );
            this.btnNextControlHTML = document.getElementById(
                options.controls.nextId
            );
        }
        this.btnPrevlHTMLBulean = this.btnPrevControlHTML !== null;
        this.btnNextlHTMLBulean = this.btnNextControlHTML !== null;

        if (this.btnPrevlHTMLBulean || this.btnNextlHTMLBulean) {
            if (typeof options.controls !== "undefined") {
                if (this.btnPrevlHTMLBulean || this.btnNextlHTMLBulean) {
                    this.btnLeft = document.getElementById(
                        `${options.controls.prevId}`
                    );
                }
                this.btnRight = document.getElementById(
                    `${options.controls.nextId}`
                );
            }
        }

        // Проверка существует ли буллеты
        if (typeof options.bullets !== "undefined") {
            this.bulletHTML = document.getElementById(
                `${options.bullets.bulletsId}`
            );
            if (typeof options.bullets.bulletsId !== "undefined") {
                if (this.bulletHTML !== null) {
                    this.bullets = document.getElementById(
                        `${options.bullets.bulletsId}`
                    );
                }
            }
            if (typeof options.bullets.namberBullet !== "undefined") {
                this.namberBullet = options.bullets.namberBullet;
            }
            this.bulletItems = true;
            this.bulletsImg = options.bullets.bulletsImg;
            this.holderImg = options.bullets.holderImg;
        }

        if (typeof options.numberSlide !== "undefined") {
            this.numberSlide = options.numberSlide.numberSlideShow;
        }
        // Существует ли прогресс бар?
        if (typeof options.progressBar !== "undefined") {
            this.progressBar = options.progressBar.progressBarShow;
            this.progressColor = options.progressBar.progressColor;
            this.trackColor = options.progressBar.trackColor;
        }

        // Законтекстить this в методы
        this.manageHTML = this.manageHTML.bind(this);
        this.setParameters = this.setParameters.bind(this);
        this.setEvents = this.setEvents.bind(this);
        this.resizeGallery = this.resizeGallery.bind(this);
        this.clickSlide = this.clickSlide.bind(this);
        this.draggingSlide = this.draggingSlide.bind(this);
        this.lettingSlide = this.lettingSlide.bind(this);
        this.switchingSlides = this.switchingSlides.bind(this);
        this.slideMovement = this.slideMovement.bind(this);
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        this.btnPrev = this.btnPrev.bind(this);
        this.btnNext = this.btnNext.bind(this);
        this.autoFlippingSlide = this.autoFlippingSlide.bind(this);
        this.handlerBullets = this.handlerBullets.bind(this);
        this.activeBullet = this.activeBullet.bind(this);
        this.activeNumberSlide = this.activeNumberSlide.bind(this);
        this.changesProgressBar = this.changesProgressBar.bind(this);

        // Запуск методов в конструкторе
        this.manageHTML();
        this.setParameters();
        this.setEvents();

        this.changesProgressBar(this.slideIndex, this.sizeSlide);

        if (this.autoscrolling) {
            this.autoFlippingSlide();
        }
    }
    // Создание HTML кода
    manageHTML() {
        if (
            !this.containerNode.classList.contains(
                this.options.class.galleryClassName,
            )
        ) {
            this.containerNode.classList.add(
                this.options.class.galleryClassName,
            );
        }
        this.containerNode.innerHTML = `
            <div class="${this.options.class.galleryLineClassName}">
                ${this.containerNode.innerHTML}
            </div>
        `;
        this.lineNode = this.containerNode.querySelector(
            `.${this.options.class.galleryLineClassName}`,
        );
        this.slideNodes = Array.from(this.lineNode.children).map(
            (childNode) => {
                return wrapElementByDiv({
                    element: childNode,
                    className: this.options.class.gallerySlideClassName,
                });
            },
        );

        // Формирование буллетов
        if (this.bulletsImg && this.holderImg.length === this.sizeSlide) {
            this.bulletClassLi = options.bullets.bulletClassLi;
            this.bulletClassBox = options.bullets.bulletClassBox;
            this.bulletClassImg = options.bullets.bulletClassImg;
            this.holderImg.forEach((el) => {
                if (el.src !== undefined && el.src !== "" && el.alt !== "") {
                    this.bullets.innerHTML += `
                        <li class="${this.bulletClassLi}">
                            ${el.text}
                            <div class="${this.bulletClassBox}">
                                <img src="${el.src}" alt="${el.alt}" class="${this.bulletClassImg}">
                            </div>
                        </li>
                    `;
                } else {
                    this.bullets.innerHTML += `
                        <li class="bullet__photo">
                            ${el.text}
                        </li>
                    `;
                }
            });
        } else if (!this.bulletsImg) {
            for (let i = 0; i < this.sizeSlide; i++) {
                if (typeof this.options.bullets !== "undefined") {
                    if (typeof this.options.bullets.bulletsId !== "undefined") {
                        if (typeof this.bullets !== "undefined") {
                            this.bullets.innerHTML += `
                        <li class="bullet">
                        </li>
                        `;
                        }
                    }
                }
            }
        }
        // Формирование нумерации слайдов
        if (this.numberSlide) {
            let numberSlide = document.createElement("div");
            numberSlide.className = `${this.options.numberSlide.numberSlideClass}`;
            numberSlide.innerHTML = `
            <span class="one-text">Слайд: </span>
            <span class="${this.options.numberSlide.numberSlideCuurent}">${
                this.slideIndex + 1
            }</span>
            <span class="separator"> из </span>
            <span class="length-slide">${this.sizeSlide}</span>
            `;
            this.containerNode.prepend(numberSlide);
        }
        // Формирование прогресс бара
        if (this.progressBar) {
            let progressBar = document.createElement("div");
            progressBar.className = `${this.options.progressBar.progressBarClass}`;
            progressBar.innerHTML = `
                <div class="${this.options.progressBar.progressBarChildClass}"></div>
            `;
            this.containerNode.append(progressBar);
        }
    }
    // Присвоение параметров
    setParameters() {
        this.widthSlide = this.lineNode.getBoundingClientRect().width; // Ширина слайдера

        let widthСontainerNode = this.containerNode.getBoundingClientRect();
        this.widthContiner = widthСontainerNode.width; // Ширина контейнера слайдера(Обёртка галереи)
        this.lineNode.style.cssText = `position: relative`;
        this.lineNode.style.transform = `translate3d(-${
            this.slideIndex * this.widthSlide
        }px, 0px, 0px)`;
        // Ширина экрана
        this.windowScreenWidth = window.screen.width;

        if (this.btnPrevlHTMLBulean || this.btnNextlHTMLBulean) {
            if (this.slideIndex === 0) {
                if (typeof this.options.controls !== "undefined") {
                    this.btnLeft.hidden = true;
                }
            }
        }

        if (typeof this.options.indent !== "undefined") {
            this.breckPoint = Object.keys(this.options.indent);
            this.breckPointValues = Object.values(this.options.indent);
            if (this.windowScreenWidth > this.breckPoint[3]) {
                this.indentWidht = this.breckPointValues[3];
            }
            if (this.windowScreenWidth <= this.breckPoint[3]) {
                this.indentWidht = this.breckPointValues[3];
            }
            if (this.windowScreenWidth <= this.breckPoint[2]) {
                this.indentWidht = this.breckPointValues[2];
            }
            if (this.windowScreenWidth <= this.breckPoint[1]) {
                this.indentWidht = this.breckPointValues[1];
            }
            if (this.windowScreenWidth <= this.breckPoint[0]) {
                this.indentWidht = this.breckPointValues[0];
            }
        }
        if (typeof this.indentWidht !== "undefined") {
            this.lineNode.style.width = `${
                this.sizeSlide * (this.widthContiner + this.indentWidht)
            }px`; // ширина обёртки слайдеров в пикселях
        } else {
            this.lineNode.style.width = `${
                this.sizeSlide * this.widthContiner
            }px`; // ширина обёртки слайдеров в пикселях
        }
        this.numberLastIndexSlide = --this.sizeSlide; // индекс последнего слайда

        // Присвоить ширину, id каждому слайду и первому слайду data-acive
        Array.from(this.slideNodes).forEach((slideNode, index) => {
            slideNode.style.width = `${this.widthContiner}px`;
            slideNode.dataset.id = index + 1;
            if (index === 0) {
                slideNode.setAttribute("data-active", "active");
            }
            if (this.indentWidht !== "undefined") {
                slideNode.style.marginRight = this.indentWidht + "px";
            }
        });
        if (this.options.widthWindowsSlider) {
            let widthProcent = this.options.widthWindowsSlider * 100;
            this.realWidth = (widthСontainerNode.width / 100) * widthProcent;
            this.containerNode.style.width = this.realWidth + "px";
        }
        if (this.indentWidht) {
            this.lineNode.lastChild.previousElementSibling.style.marginRight =
                "0px";
        }
        // Буллеты
        if (this.namberBullet) {
            if (typeof this.bullets !== "undefined") {
                Array.from(this.bullets.children).forEach(function (
                    item,
                    index
                ) {
                    item.innerText = index + 1;
                });
            }
        }

        if (typeof this.bullets !== "undefined") {
            Array.from(this.bullets.children).forEach(function (
                item,
                index,
                array
            ) {
                item.dataset.id = index + 1;
            });
        }
        if (typeof this.bullets !== "undefined") {
            this.bullets.children[this.slideIndex].dataset.active = "active";
        }

        // Показ номера текущего слайда из колличества
        if (this.numberSlide) {
            this.numberCurrSlide = document.querySelector(
                `.${this.options.numberSlide.numberSlideCuurent}`
            );
        }

        // Показ текущего процесс Бара
        if (this.progressBar) {
            this.getProgressBar = document.querySelector(
                `.${this.options.progressBar.progressBarChildClass}`
            );
        }
    }
    // Обработчики событий
    
    setEvents() {
        window.addEventListener("resize", this.resizeGallery); // Наблюдатель за шириной слайдера
        this.lineNode.addEventListener("mousedown", this.clickSlide); // Нажатие левой кнопки мыши на слайдер mousedown
        this.lineNode.addEventListener("mouseup", this.lettingSlide); // Отпускание левой кнопки мыши на слайдере mouseup
        if (this.btnPrevlHTMLBulean || this.btnNextlHTMLBulean) {
            if (typeof this.options.controls !== "undefined") {
                this.btnLeft.addEventListener("click", this.btnPrev);
                this.btnRight.addEventListener("click", this.btnNext);
            }
        }
        if (typeof this.bullets !== "undefined") {
            this.bullets.addEventListener("click", this.handlerBullets);
        }

        if (
            /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
                navigator.userAgent
            ) ||
            /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
                navigator.platform
            )
        ) {
            this.touchScreen = true;
            this.lineNode.addEventListener("touchstart", this.clickSlide); // Нажатие на тачскрин
            this.lineNode.addEventListener("touchend", this.lettingSlide); // Отпускание тачскрин
        }

        // Отменить браузерный drag and drop поведения
        this.containerNode.ondragstart = function () {
            return false;
        };
    }
    // Удаление обработчика событий за наблюдением и перерасчётом ширины
    destroyEvents() {
        window.removeEventListener("resize", this.resizeGallery);
    }
    // Перерасчёт ширины
    resizeGallery() {
        this.setParameters();
        location.reload();
    }
    // Обработчик нажатия левой кнопки мыши на слайд
    clickSlide(e) {
        this.autoscrolling = false;
        this.posThreshold = (this.widthSlide / 100) * this.options.percentShift; // Минимальный сдвиг по экрану
        // убираем плавный переход, чтобы track двигался за курсором без задержки
        // т.к. он будет включается в функции slideMovement(delay)
        this.lineNode.style.transition = "";
        if (this.touchScreen) {
            this.posX1 = (e.touches || [])[0]?.pageX;
            this.posInit = this.posX1;
        } else {
            this.posX1 = e.pageX;
            this.posInit = this.posX1;
        }
        // Обработчие перетаскивания мыши, тачскрин
        this.lineNode.addEventListener("mousemove", this.draggingSlide); // mousemove
        this.lineNode.addEventListener("touchmove", this.draggingSlide); // touchmove
    }
    // Обработчик отпускание левой кнопки мыши на слайдере
    lettingSlide(e) {
        this.posFinal = this.posInit - this.posX1;
        // убираем знак минус и сравниваем с порогом сдвига слайда
        if (Math.abs(this.posFinal) > this.posThreshold) {
            let slideActive;
            // если мы тянули вправо, то уменьшаем номер текущего слайда
            if (this.posInit < this.posX1) {
                slideActive = Array.from(this.lineNode.children)[
                    this.slideIndex
                ].removeAttribute("data-active");
                if (!this.infiniteSlide) {
                    if (this.slideIndex > 0) {
                        this.slideIndex--;
                        if (this.slideIndex === 0) {
                            this.btnLeft.hidden = true;
                        }
                        if (this.slideIndex === this.numberLastIndexSlide - 1) {
                            this.btnRight.hidden = false;
                        }
                        this.activeBullet(this.slideIndex);
                        this.activeNumberSlide(this.slideIndex);
                        this.changesProgressBar(
                            this.slideIndex,
                            this.sizeSlide
                        );
                    }
                } else if (this.infiniteSlide) {
                    if (this.slideIndex <= 0) {
                        this.slideIndex = this.numberLastIndexSlide + 1;
                        this.slideMovement("noDelay", this.slideIndex);
                    }
                    this.slideIndex--;
                    this.activeBullet(this.slideIndex);
                    this.activeNumberSlide(this.slideIndex);
                    this.changesProgressBar(this.slideIndex, this.sizeSlide);
                }
                slideActive = Array.from(this.lineNode.children)[
                    this.slideIndex
                ].dataset.active = "active";
                // если мы тянули влево, то увеличиваем номер текущего слайда
            } else if (this.posInit > this.posX1) {
                slideActive = Array.from(this.lineNode.children)[
                    this.slideIndex
                ].removeAttribute("data-active");
                if (!this.infiniteSlide) {
                    if (this.slideIndex < this.numberLastIndexSlide) {
                        if (this.slideIndex === this.numberLastIndexSlide - 1) {
                            this.btnRight.hidden = true;
                        }
                        this.slideIndex++;
                        this.btnLeft.hidden = false;
                    }
                    this.activeBullet(this.slideIndex);
                    this.activeNumberSlide(this.slideIndex);
                    this.changesProgressBar(this.slideIndex, this.sizeSlide);
                } else if (this.infiniteSlide) {
                    if (this.slideIndex >= this.numberLastIndexSlide) {
                        this.slideIndex = 0;
                        this.slideMovement("noDelay", this.slideIndex);
                        this.slideIndex = -1;
                    }
                    if (this.noContainerBtn) this.btnLeft.hidden = false;
                    this.slideIndex++;
                    this.activeBullet(this.slideIndex);
                    this.activeNumberSlide(this.slideIndex);
                    this.changesProgressBar(this.slideIndex, this.sizeSlide);
                }
                slideActive = Array.from(this.lineNode.children)[
                    this.slideIndex
                ].dataset.active = "active";
            }
            // если курсор двигался, то запускаем функцию переключения слайдов
            if (this.posInit !== this.posX1) {
                this.slideMovement("delay", this.slideIndex);
            }
        }
        this.lineNode.removeEventListener("mousemove", this.draggingSlide);
        this.lineNode.removeEventListener("touchmove", this.draggingSlide);
    }
    // Обработчик перетаскивания мыши
    draggingSlide(e) {
        if (this.touchScreen) {
            this.posX2 = this.posX1 - e.touches[0].pageX;
            this.posX1 = e.touches[0].pageX;
        } else {
            this.posX2 = this.posX1 - e.pageX;
            this.posX1 = e.pageX;
        }
        // для более красивой записи возьмем в переменную текущее свойство transform
        this.style = this.lineNode.style.transform;
        // считываем трансформацию с помощью регулярного выражения и сразу превращаем в число
        this.transform = Math.round(+this.style.match(this.trfRegExp)[0]);
        this.lineNode.style.transform = `translate3d(${
            this.transform - this.posX2
        }px, 0px, 0px)`;
    }

    // Метод передвижения слайдера
    slideMovement(delay, index) {
        if (delay === "delay") {
            this.lineNode.style.transition = `transform ${this.options.secondDelay} ease 0s`;
        }
        if (delay === "noDelay") {
            this.lineNode.style.transition = `transform 0s ease 0s`;
        }

        return (this.lineNode.style.transform = `translate3d(-${
            index * (this.widthSlide + this.indentWidht)
        }px, 0px, 0px)`);
    }

    // Метод показа слайда по id
    switchingSlides(index) {
        this.slideIndex = index;
        this.slideMovement("delay", this.slideIndex);
    }

    // Метод перехода к следующему слайду
    next() {
        // this.autoscrolling = false;
        if (!this.infiniteSlide) {
            if (this.slideIndex < this.numberLastIndexSlide) {
                let slideActive = Array.from(this.lineNode.children)[
                    this.slideIndex
                ];
                slideActive.removeAttribute("data-active");
                this.switchingSlides(++this.slideIndex);
                slideActive.dataset.active = "active";
                if (this.slideIndex === this.numberLastIndexSlide) {
                    this.btnRight.hidden = true;
                }
                if (this.slideIndex !== 0) {
                    this.btnLeft.hidden = false;
                }
                this.activeBullet(this.slideIndex);
                this.activeNumberSlide(this.slideIndex);
                this.changesProgressBar(this.slideIndex, this.sizeSlide);
            }
        } else if (this.infiniteSlide) {
            let slideActive = Array.from(this.lineNode.children)[
                this.slideIndex
            ];

            slideActive.removeAttribute("data-active");
            if (this.slideIndex >= this.numberLastIndexSlide) {
                this.slideIndex = 0;
                this.slideMovement("noDelay", this.slideIndex);
                this.slideIndex = -1;
            }
            this.switchingSlides(++this.slideIndex);
            if (this.slideIndex !== 0) {
                this.btnLeft.hidden = false;
            }
            slideActive.dataset.active = "active";
            this.activeBullet(this.slideIndex);
            this.activeNumberSlide(this.slideIndex);
            this.changesProgressBar(this.slideIndex, this.sizeSlide);
        }
    }
    // Метод перехода к предыдущему слайду
    prev() {
        this.autoscrolling = false;
        if (!this.infiniteSlide) {
            if (this.slideIndex > 0) {
                let slideActive = Array.from(this.lineNode.children)[
                    this.slideIndex
                ];
                slideActive.removeAttribute("data-active");
                this.switchingSlides(--this.slideIndex);
                slideActive.dataset.active = "active";
            }
            if (this.slideIndex !== this.numberLastIndexSlide) {
                this.btnRight.hidden = false;
            }
            if (this.slideIndex === 0) {
                this.btnLeft.hidden = true;
            }
            this.activeBullet(this.slideIndex);
            this.activeNumberSlide(this.slideIndex);
            this.changesProgressBar(this.slideIndex, this.sizeSlide);
        } else if (this.infiniteSlide) {
            let slideActive = Array.from(this.lineNode.children)[
                this.slideIndex
            ];

            slideActive.removeAttribute("data-active");
            if (this.slideIndex <= 0) {
                this.slideIndex = this.numberLastIndexSlide + 1;
                this.slideMovement("noDelay", this.slideIndex);
            }
            this.switchingSlides(--this.slideIndex);
            slideActive.dataset.active = "active";
            this.activeBullet(this.slideIndex);
            this.activeNumberSlide(this.slideIndex);
            this.changesProgressBar(this.slideIndex, this.sizeSlide);
        }
    }
    btnPrev() {
        this.prev();
    }
    btnNext() {
        this.next();
    }
    // Метод автоперелистывания
    autoFlippingSlide() {
        if (this.autoFlipping) {
            let delay = 1000 * this.autoscrollingDelay;
            if (this.autoscrollingLeft) {
                setInterval(() => this.prev(), delay);
            } else if (this.autoscrollingRight) {
                setInterval(() => this.next(), delay);
            }
        }
    }
    // Метод обработки буллетов
    handlerBullets(e) {
        Array.from(this.bullets.children).forEach(function (
            item,
            index,
            array
        ) {
            item.removeAttribute("data-active");
        });
        e.target.dataset.active = "active";
        this.slideIndex = e.target.getAttribute("data-id") - 1;
        this.slideMovement("delay", this.slideIndex);
        this.activeNumberSlide(this.slideIndex);
        this.changesProgressBar(this.slideIndex, this.sizeSlide);
    }
    activeBullet(index) {
        if (this.bulletItems) {
            if (this.bullets) {
                Array.from(this.bullets.children).forEach(function (
                    item,
                    index,
                    array
                ) {
                    item.removeAttribute("data-active");
                });
                this.bullets.children[index].dataset.active = "active";
            }
        }
    }
    // Метод изменения номера слайда
    activeNumberSlide(index) {
        if (typeof this.numberCurrSlide !== "undefined") {
            this.numberCurrSlide.innerText = index + 1;
        }
    }
    // Метод изменения прогресс Бара
    changesProgressBar(index, number) {
        if (typeof this.getProgressBar !== "undefined") {
            let currentSlide = index + 1;
            let totalSlide = number + 1;
            let currentPercentage = (currentSlide / totalSlide) * 100;
            this.getProgressBar.style.background = `linear-gradient(90deg, ${this.progressColor} 0%, ${this.progressColor} ${currentPercentage}%,
            ${this.trackColor} ${currentPercentage}%, ${this.trackColor} 100%)`;
        }
    }
}
// Функция создания в элементе div с классом
function wrapElementByDiv({ element: e, className: t }) {
    const s = document.createElement("div");
    return (
        s.classList.add(t), e.parentNode.insertBefore(s, e), s.appendChild(e), s
    );
}

// Первый экземпляр слайдера
// const options = {
//     class: {
//         galleryClassName: "gallery", // Класс на окне с id
//         galleryLineClassName: "gallery-line", // /* Виртуальная обёртка слайдеров */
//         gallerySlideClassName: "gallery-unit", // /* Виртуальная обёртка слайдера */
//     },
//     widthWindowsSlider: 1, // Колличество слайдов в окне
//     indent: {
//         // Отступ между слайдами в медиазапросах в px
//         1400: 1,
//         960: 1,
//         780: 1,
//         560: 1,
//     },
//     secondDelay: "0.4s", // Плавность сдвига
//     percentShift: 10, // Минимальный сдвиг по экрану px
//     infiniteSlide: true, // Бесконечный слайдер
//     autoscrolling: {
//         // left: true,
//         // right: true,
//         delay: "2", // Задержка при автолистании в секундах
//     },
//     controls: {
//         prevId: "btnPrev",
//         nextId: "btnNext",
//     },
//     bullets: {
//         bulletsId: "bullets",
//         // namberBullet: true,
//         bulletsImg: true,
//         // bulletsImg: false,
//         bulletClassLi: "bullet__photo",
//         bulletClassBox: "bullet-holder__photo",
//         bulletClassImg: "bullet__img",
//         holderImg: [
//             {
//                 id: "1",
//                 src: "./img/jpg/gornoe-ozero-1.jpg",
//                 text: ``,
//                 alt: "miniphoto",
//             },
//             {
//                 id: "2",
//                 src: "./img/jpg/krasota-prirody-2.jpg",
//                 text: ``,
//                 alt: "miniphoto",
//             },
//             {
//                 id: "3",
//                 src: "./img/jpg/lesnoe ozero-3.jpg",
//                 text: "",
//                 alt: "miniphoto",
//             },
//             {
//                 id: "4",
//                 src: "./img/jpg/opushka-4.jpg",
//                 text: "",
//                 alt: "miniphoto",
//             },
//             {
//                 id: "5",
//                 src: "./img/jpg/ozero-5.jpg",
//                 text: "",
//                 alt: "miniphoto",
//             },
//             {
//                 id: "6",
//                 src: "./img/jpg/proselochnaj-doroga-6.jpg",
//                 text: "",
//                 alt: "miniphoto",
//             },
//             {
//                 id: "7",
//                 src: "./img/jpg/tropinka v derevny-7.jpg",
//                 text: "",
//                 alt: "miniphoto",
//             },
//         ],
//     },
//     numberSlide: {
//         numberSlideShow: false, // Скрыть нумерацию слайдов
//         // numberSlideShow: true, // Показать нумерацию слайдов
//         numberSlideClass: "numberSlide",
//         numberSlideCuurent: "currentSlide",
//     },
//     progressBar: {
//         progressBarShow: false, // Скрыть прогрес Бар
//         // progressBarShow: true, // Показать прогрес Бар
//         progressBarClass: "progressBar",
//         progressBarChildClass: "progressBarChild",
//         progressColor: "#0857ea", // options.progressBar.progressColor
//         trackColor: "#fff", // options.progressBar.trackColor
//     },
// };
// new Gallery(document.getElementById("gallery"), options);
// Если нужна левая кнопка при старте
// document.getElementById("btnPrev").removeAttribute("hidden");

