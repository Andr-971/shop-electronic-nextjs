"use client"

import React from "react"
import Link from "next/link";
import Image from "next/image";
import mobMoreImg from "@/../public/svg/mob-menu/mob-more-btn.svg";
import {useMobMenuMore} from "@/store"

const MobMoreBtn = () => {
    const { changeMobMenuMore } = useMobMenuMore();

    return (
        <>
            <li className="mobile-menu__item" onClick={() => changeMobMenuMore()}>
                <Link href="#" className="mobile-menu__more">
                    <Image src={mobMoreImg} alt="more-icon"></Image>
                </Link>
            </li>
        </>
    );
}

export default MobMoreBtn;
