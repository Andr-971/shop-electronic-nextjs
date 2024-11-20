import React from "react"
import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/svg/logo.svg";
import MobMoreMenu from "@/components/MobMoreMenu/MobMoreMenu"
import { HeaderMenu } from "./HeaderMenu";
import mainMenu from "../../public/mainMenu"
import CatalogMenu from "./CatalogMenu"
import Authorization from "@/components/Authorization/Authorization"
import BtnCart from "@/components/BtnCart/BtnCart"
import ComparisonBtn from "@/components/ComparisonBtn/ComparisonBtn";
import FavouritesBtn from "./FavouritesBtn/FavouritesBtn";
import SearchBtn from "./SearchBtn/SearchBtn";
import MobileMenuBottom from "@/components/MobileMenuBottom/MobileMenuBottom"
import MobCatalogMenu from "@/components/MobCatalogMenu/MobCatalogMenu"

const Header = () => {
    
    return (
        <>
            <header className="header">
                <div className="g-container">
                    <nav className="header__inner">
                        <Link href="/" className="logo">
                            <Image src={logo} alt="logo" priority={true} />
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
                            <SearchBtn></SearchBtn>
                            <FavouritesBtn></FavouritesBtn>
                            <ComparisonBtn />
                            <BtnCart></BtnCart>
                            <Authorization></Authorization>
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
                <MobCatalogMenu></MobCatalogMenu>
                <MobMoreMenu></MobMoreMenu>
                <MobileMenuBottom></MobileMenuBottom>
            </header>
        </>
    );
}

export {Header};