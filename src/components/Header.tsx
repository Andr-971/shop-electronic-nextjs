import React from "react"
import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/svg/logo.svg";
import search from "@/../public/svg/search-btn.svg";
import eye from "@/../public/svg/eye-1.svg";
import heart from "@/../public/svg/heart-1.svg"
import heartRed from "@/../public/svg/heart-2.svg"
import graph from "@/../public/svg/icon-graph-1.svg"
import backet from "@/../public/svg/backet-1.svg"
import user from "@/../public/svg/user.svg"
import burger from "@/../public/svg/menu-burger.svg";
import mobHome from "@/../public/svg/mob-menu/mob-home-btn.svg"
import mobCatalog from "@/../public/svg/mob-menu/mob-catalog-btn.svg"
import mobBacket from "@/../public/svg/mob-menu/mob-backet-btn.svg";
import mobSearch from "@/../public/svg/mob-menu/mob-search-btn.svg";
import mobMore from "@/../public/svg/mob-menu/mob-more-btn.svg"
import { HeaderMenu } from "./HeaderMenu";
import mainMenu from "../../public/mainMenu"
import CatalogMenu from "./CatalogMenu"

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="g-container">
                    <nav className="header__inner">
                        <Link href="/" className="logo">
                            <Image src={logo} alt="logo" />
                        </Link>
                        <div className="header__holder">
                            <Link
                                href="tel:+78126605054"
                                className="header__telephone header__telephone_first telephone"
                            >
                                +7(812)660-50-54
                            </Link>
                            <Link
                                href="tel:+79581119503"
                                className="header__telephone telephone"
                            >
                                +7(958)111-95-03
                            </Link>
                            <div className="header__job jobs">
                                Пн-вс: с 10:00 до 21:00
                            </div>
                            <button
                                type="button"
                                className="header__btn header__btn_first"
                            >
                                <Image
                                    src={search}
                                    alt="search-icon"
                                    className="header__btn_search"
                                ></Image>
                            </button>
                            <button type="button" className="header__btn">
                                <Image src={eye} alt="eye-icon"></Image>
                            </button>
                            <button type="button" className="header__btn">
                                <Image src={heart} alt="heart-icon"></Image>
                                <Image
                                    src={heartRed}
                                    alt="heart-icon"
                                    className="hidden"
                                ></Image>
                            </button>
                            <button type="button" className="header__btn">
                                <Image src={graph} alt="graph-icon"></Image>
                            </button>
                            <button
                                type="button"
                                className="header__btn header__btn_backet"
                            >
                                <Image src={backet} alt="backet-icon"></Image>
                            </button>
                            <div className="header__btn">
                                {/* <img src="./img/svg/user.svg" alt="user-icon" className="header__btn_user"> */}
                                <Image
                                    src={user}
                                    alt="user-icon"
                                    className="header__btn_user"
                                ></Image>
                                <button
                                    type="button"
                                    className="header__btn_comon hidden"
                                >
                                    Войти
                                </button>
                                <div className="header__user-menu hidden">
                                    <ul className="header__user-holder">
                                        <li className="header__user-item">
                                            Общие сведения
                                        </li>
                                        <li className="header__user-item">
                                            Личные данные
                                        </li>
                                        <li className="header__user-item">
                                            История покупок
                                        </li>
                                        <li className="header__user-item">
                                            Избранное
                                        </li>
                                        <li className="header__user-item">
                                            Сменить пароль
                                        </li>
                                        <li className="header__user-item header__user-item_last">
                                            Выйти
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <nav className="header__menu-inner">
                    <div className="header__holder g-container">
                        <CatalogMenu></CatalogMenu>
                        <ul className="header__menu-box">
                            {mainMenu.map((el, i) => {
                                return (
                                    <HeaderMenu
                                        link={el.link}
                                        text={el.text}
                                        key={i}
                                    ></HeaderMenu>
                                );
                            })}
                        </ul>
                    </div>
                </nav>
                <nav className="mobile-menu__bottom">
                    <ul className="mobile-menu__list">
                        <li className="mobile-menu__item">
                            <Link href="#" className="mobile-menu__main">
                                <Image src={mobHome} alt="home-icon"></Image>
                            </Link>
                        </li>
                        <li className="mobile-menu__item">
                            <Link href="#" className="mobile-menu__catalog">
                                <Image
                                    src={mobCatalog}
                                    alt="burger-btn"
                                ></Image>
                            </Link>
                        </li>
                        <li className="mobile-menu__item">
                            <Link href="#" className="mobile-menu__backet">
                                <Image
                                    src={mobBacket}
                                    alt="backet-icon"
                                ></Image>
                            </Link>
                        </li>
                        <li className="mobile-menu__item">
                            <Link href="#" className="mobile-menu__search">
                                <Image
                                    src={mobSearch}
                                    alt="search-icon"
                                ></Image>
                            </Link>
                        </li>
                        <li className="mobile-menu__item">
                            <Link href="#" className="mobile-menu__more">
                                <Image src={mobMore} alt="more-icon"></Image>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export {Header};