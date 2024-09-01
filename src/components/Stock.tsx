"use client"
import React from "react"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


interface StockProps {
    id: string;
    photo: any;
    title: string;
    nameClass?: string;
}

const Stock = ({ id, title, photo, nameClass }: StockProps) => {
    const pathname = usePathname();
    return (
        <>
            <Link href={pathname + "/" + id} className="section-info__block">
                <div className="section-info__text">
                    <div className="section-info__txt">{title}</div>
                </div>
                <div className="section-info__photo">
                    <div className="stocks__wrap">
                        <div className={nameClass}>
                            <Image
                                src={photo}
                                alt="фото товара"
                                className="section-info__photo_img"
                            ></Image>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default  Stock;