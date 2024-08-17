import React from "react"
import Image from "next/image";
import logo from "../../public/svg/logo.svg"
import facebook from "../../public/svg/social/facebook.svg"
import instagram from "../../public/svg/social/instagram.svg"
import twitter from "../../public/svg/social/twitter.svg"
import vk from "../../public/svg/social/vk.svg";

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="g-container">
                    <div className="footer__top-inner">
                        <div className="footer__top-item footer__top-item_first">
                            <a href="/" className="footer__logo">
                                <Image src={logo} alt="logo"></Image>
                            </a>
                            <a
                                href="tel:+78126605054"
                                className="footer__telephone footer__telephone_first"
                            >
                                +7(812)660-50-54
                            </a>
                            <a
                                href="tel:+79581119503"
                                className="footer__telephone"
                            >
                                +7(958)111-95-03
                            </a>
                            <div className="footer__job">
                                Пн-вс: с 10:00 до 21:00
                            </div>
                            <div className="footer__address">
                                <p>Проспект Стачек 67 к.5</p>
                                <p>Лиговский проспект 205</p>
                                <p>Гражданский проспект, 116 к.5</p>
                            </div>
                        </div>
                        <div className="footer__top-item">
                            <h4 className="footer__title">Для клиента</h4>
                            <ul className="footer__list">
                                <li className="footer__link">
                                    <a href="#">Как купить</a>
                                </li>
                                <li className="footer__link">
                                    <a href="#"></a>Доставка и оплата
                                </li>
                                <li className="footer__link">
                                    <a href="#"></a>Кредит
                                </li>
                                <li className="footer__link">
                                    <a href="#"></a>Политика конфедициональности
                                </li>
                                <li className="footer__link">
                                    <a href="#"></a>Вопросы и ответы(F.A.Q)
                                </li>
                                <li className="footer__link">
                                    <a href="#">Сервис и гарантия</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__top-item">
                            <h4 className="footer__title">О магазине</h4>
                            <ul className="footer__list">
                                <li className="footer__link">
                                    <a href="#">Отзывы</a>
                                </li>
                                <li className="footer__link">
                                    <a href="#"></a>Наши преимущества
                                </li>
                                <li className="footer__link">
                                    <a href="#"></a>История компании
                                </li>
                                <li className="footer__link">
                                    <a href="#"></a>Сотруднечество
                                </li>
                                <li className="footer__link">
                                    <a href="#"></a>Партнёрские программы
                                </li>
                                <li className="footer__link">
                                    <a href="#">Вакансии</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__top-item">
                            <h4 className="footer__title">Сотруднечество</h4>
                            <ul className="footer__list">
                                <li className="footer__link">
                                    <a href="#">Оптом</a>
                                </li>
                                <li className="footer__link">
                                    <a href="#"></a>Дропшиппинг
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr className="footer__line"></hr>
                    <div className="footer__bottom-inner">
                        <div className="footer__bottom-item footer__bottom-item_first">
                            SmartТехника © 2021 Все права защищены
                        </div>
                        <div className="footer__bottom-item">
                            <a href="#" className="icon-box">
                                {/* <img src="./img/svg/social/facebook.svg" className="svg-facebook-dims" alt="facebook"> */}
                                <Image src={facebook} alt="facebook"></Image>
                            </a>
                            <a href="#" className="icon-box">
                                {/* <img src="./img/svg/social/instagram.svg" className="svg-instagram-dims" alt="instagram"> */}
                                <Image src={instagram} alt="instagram"></Image>
                            </a>
                            <a href="#" className="icon-box">
                                {/* <img src="./img/svg/social/twitter.svg" className="svg-twitter-dims" alt="twitter"> */}
                                <Image src={twitter} alt="twitter"></Image>
                            </a>
                            <a href="#" className="icon-box">
                                {/* <img src="./img/svg/social/vk.svg" className="svg-vk-dims" alt="vk"> */}
                                <Image src={vk} alt="vk"></Image>
                            </a>
                        </div>
                        <div className="footer__bottom-item footer__bottom-item_last">
                            Разработка: Рябов А.Б.
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export {Footer};