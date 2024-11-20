"use client"
import React from "react"
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import mobHome from "@/../public/svg/mob-menu/mob-home-btn.svg";
import mobCatalog from "@/../public/svg/mob-menu/mob-catalog-btn.svg";
import mobBacket from "@/../public/svg/mob-menu/mob-backet-btn.svg";
import BtnCartNum from "@/components/BtnCartNum/BtnCartNum"
import MobileSearchBtn from "@/components/MobileSearchBtn/MobileSearchBtn"
import MobMoreBtn from "@/components/MobMoreBtn/MobMoreBtn"
import { useMobMenuCatalog } from "@/store";
import "./MobileMenuBottom.css"

const MobileMenuBottom = () => {
    const { changeMobMenuCatalog } = useMobMenuCatalog();
    const mobMenuBottom = useRef(null)
    const [shiftBottom, setShiftBottom] = useState(0);
    useEffect(() => {
        let screenScroll = document.getElementsByTagName("body")[0];
        function handlerScrollHidden() {
            setShiftBottom(15);
        }
        function handlerScrollShow() {
            setShiftBottom(0);
        }
        screenScroll?.addEventListener("touchstart", handlerScrollHidden);
        screenScroll?.addEventListener("touchend", handlerScrollShow);

        return () => {
            screenScroll?.removeEventListener(
                "touchstart",
                handlerScrollHidden,
            );
            screenScroll?.removeEventListener("touchend", handlerScrollShow);
        };
    }, [setShiftBottom]);
    return (
        <>
            <nav
                className="mobile-menu__bottom"
                ref={mobMenuBottom}
                style={{
                    transform: `translateY(${shiftBottom}vh)`,
                }}
            >
                <ul className="mobile-menu__list">
                    <li className="mobile-menu__item">
                        <Link href="/" className="mobile-menu__main">
                            <Image src={mobHome} alt="home-icon"></Image>
                        </Link>
                    </li>
                    <li
                        className="mobile-menu__item"
                        onClick={() => changeMobMenuCatalog()}
                    >
                        <Link href="/catalog" className="mobile-menu__catalog">
                            <Image src={mobCatalog} alt="burger-btn"></Image>
                        </Link>
                    </li>
                    <li className="mobile-menu__item">
                        <Link href="/basket" className="mobile-menu__backet">
                            <BtnCartNum></BtnCartNum>
                            <Image src={mobBacket} alt="backet-icon"></Image>
                        </Link>
                    </li>
                    <MobileSearchBtn></MobileSearchBtn>
                    <MobMoreBtn></MobMoreBtn>
                </ul>
            </nav>
        </>
    );
}

export default MobileMenuBottom;