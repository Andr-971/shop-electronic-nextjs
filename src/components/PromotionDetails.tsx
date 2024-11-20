"use client"
import React from "react";
import stock_all_block from "../../public/stock_all_block";
import { usePathname } from "next/navigation";
import TitleH1 from "./TitleH1";
import Image from "next/image";

const PromotionDetails = () => {
    const pathname = usePathname();
    return (
        <div>
            {stock_all_block.map((el, i) => {
                return (
                    el.path === pathname && (
                        <div key={el.id}>
                            <TitleH1 title={el.title}></TitleH1>
                            <div className="stock__inner">
                                <div className="stock__block">
                                    <div className="stock__col">
                                        <p>{el.subtitle}</p>
                                        <div className="stock__col-title_box">
                                            <h3 className="stock__col-title">
                                                Условия Акции:
                                            </h3>
                                        </div>
                                        <ul className="stock__col-list">
                                            <ol className="stock__col-item">
                                                <span>1.</span>
                                                <p>
                                                    Скидку можно получить при
                                                    предъявлении любого
                                                    удостоверения
                                                    подтверждающего, что у
                                                    клиента День Рождения.
                                                </p>
                                            </ol>
                                            <ol className="stock__col-item">
                                                <span>2.</span>
                                                <p>
                                                    Скидка действует за неделю
                                                    до дня рождения включительно
                                                    и неделю после дня рождения
                                                    включительно.
                                                </p>
                                            </ol>
                                            <ol className="stock__col-item">
                                                <span>3.</span>
                                                <p>
                                                    Скидка составляет 10% от
                                                    стоимости основного товара,
                                                    н оне должна превышать
                                                    номинал в 1000 рублей.
                                                </p>
                                            </ol>
                                            <ol className="stock__col-item">
                                                <span>4.</span>
                                                <p>
                                                    Скидки не суммируются т.к.
                                                    мы разрабатываем для Вас
                                                    наилучшие условия для
                                                    покупки Техники.
                                                </p>
                                            </ol>
                                            <ol className="stock__col-item">
                                                <span>5.</span>
                                                <p>
                                                    Если срок Менее 7 дней до
                                                    Дня Рождения или более 7
                                                    дней после Дня Рождения
                                                    скидка оговаривается в
                                                    индивидуальном порядке и
                                                    может достигать Максимальных
                                                    значений.
                                                </p>
                                            </ol>
                                        </ul>
                                    </div>
                                    <div className="stock__col">
                                        <div className="stock__wrap-photo">
                                            <div className="stock__block-photo picture">
                                                <Image
                                                    src={el.photo}
                                                    alt="фото"
                                                    className="stock__img-photo"
                                                ></Image>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                );
            })}
        </div>
    );
};

export default PromotionDetails;
