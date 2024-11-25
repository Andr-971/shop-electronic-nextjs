"use client"
import React from "react"
import TitleH1 from "../../components/TitleH1";
import categoryProducts from "../../../public/categoryProducts"
import Image from "next/image";
import Link from "next/link";
import {useMobMenuCatalog} from "../../store"

const MobCatalogMenu = () => {
    const { mobMenuCatalog, changeMobMenuCatalog } = useMobMenuCatalog();
    return (
        <>
            <div className="g-container">
                {mobMenuCatalog && (
                    <div
                        className="mobPopup__catalog"
                        onClick={() => changeMobMenuCatalog()}
                    >
                        <div className="mobPopup__catalog_header">
                            <TitleH1 title={"Каталог"}></TitleH1>
                            <div className="mobPopup__catalog_close">✖</div>
                        </div>
                        <ul className="mobPopup__catalog-list select-catalog__block">
                            {categoryProducts.map((el: any) => {
                                if (el.label !== "Все категории") {
                                    return (
                                        <Link
                                            href={"#"}
                                            className="mobPopup__catalog_item"
                                            key={el.id}
                                        >
                                            <Image
                                                src={el.img}
                                                alt=""
                                                className="mobPopup__catalog_img"
                                            ></Image>
                                            <span className="mobPopup__catalog_text">
                                                {el.label}
                                            </span>
                                        </Link>
                                    );
                                }
                            })}
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
}

export default MobCatalogMenu;