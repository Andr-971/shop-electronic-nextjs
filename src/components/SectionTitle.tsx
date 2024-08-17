
import React from "react"
import Image from "next/image";
import allProduct from "../../public/svg/all-products.svg";

interface ComponentProps {
    title: string;
}

export default function SectionTitle({ title }: ComponentProps) {
    return (
        <div className="section-goods__title-box">
            <h2 className="section-goods__title title-section">
                {title}
            </h2>
            <button className="section-goods__btn-all">
                <Image src={allProduct} alt="icon-btn"></Image>
            </button>
        </div>
    );
}