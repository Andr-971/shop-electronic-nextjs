
import React from "react"
import Image from "next/image";

interface StockProps {
    photoOne: any;
    phototwo: any;
    titleOne: string;
    titleTwo: string;
}

const Stock = ({ photoOne, phototwo, titleOne, titleTwo }: StockProps) => {
    return (
        <>
            <section className="section-info section-discount">
                <div className="section-info__inner">
                    <div className="section-info__block">
                        <div className="section-info__text">
                            <div className="section-info__txt">{titleOne}</div>
                        </div>
                        <div className="section-info__photo">
                            <Image
                                src={phototwo}
                                alt="фото товара"
                                className="section-info__photo_img"
                            ></Image>
                        </div>
                    </div>
                    <div className="section-info__block">
                        <div className="section-info__text">
                            <div className="section-info__txt">{titleTwo}</div>
                        </div>
                        <div className="section-info__photo">
                            <Image
                                src={photoOne}
                                alt="фото товара"
                                className="section-info__photo_img"
                            ></Image>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export { Stock };