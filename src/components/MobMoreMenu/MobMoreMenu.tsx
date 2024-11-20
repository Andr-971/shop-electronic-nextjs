"use client"
import React from "react"
import { useMobMenuMore } from "@/store";
import TitleH1 from "../TitleH1";
import FavouritesBtn from "../FavouritesBtn/FavouritesBtn";
import ComparisonBtn from "../ComparisonBtn/ComparisonBtn";
import mainMenu from "../../../public/mainMenu"
import Link from "next/link";

const MobMoreMenu = () => {
    const { mobMenuMore, changeMobMenuMore } = useMobMenuMore();
    return (
        <>
            {mobMenuMore && (
                <div className="g-container">
                    <div
                        className="mobPopupMenu"
                        onClick={() => changeMobMenuMore()}
                    >
                        <div className="mobPopupMenu__header">
                            <TitleH1 title={"Ещё"}></TitleH1>
                            <div className="mobPopupMenu__header_close">✖</div>
                        </div>
                        <div className="mobPopupMenu__icon-block">
                            <FavouritesBtn></FavouritesBtn>
                            <ComparisonBtn />
                        </div>
                        <ul className="mobPopupMenu__list">
                            {mainMenu.map((el) => {
                                return (
                                    <li
                                        className={`mobPopupMenu__item `}
                                        key={el.id}
                                    >
                                        <Link href={el.link}>
                                            <span className="mobPopupMenu__menu-text">
                                                {el.text}
                                            </span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
}

export default MobMoreMenu;