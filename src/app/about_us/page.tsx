import Breadcrumbs from "../../utils/Breadcrumbs";
import { Metadata } from "next";
import Image from "next/image";
import iconMenu_1 from "../../../public/svg/icon-menu/icon-menu-1.svg";
import iconMenu_2 from "../../../public/svg/icon-menu/icon-menu-4.svg";
import iconMenu_3 from "../../../public/svg/icon-menu/icon-menu-11.svg";
import iconMenu_4 from "../../../public/svg/icon-menu/icon-menu-5.svg";
import iconMenu_5 from "../../../public/svg/icon-menu/icon-menu-2.svg";
import iconMenu_6 from "../../../public/svg/icon-menu/icon-more.svg";

export const metadata: Metadata = {
    title: "О нас",
    description: "Всё о нашей компании",
};

const nameProduct = [
    {
        name: "гироскутеров",
        img: iconMenu_1,
    },
    {
        name: "сигвеев и мини сигвеев",
        img: iconMenu_2,
    },
    {
        name: "электроскейтов",
        img: iconMenu_3,
    },
    {
        name: "электровелосипедов",
        img: iconMenu_4,
    },
    {
        name: "электросамокатов, стандартных и полноприводных",
        img: iconMenu_5,
    },
    {
        name: "и многое другое",
        img: iconMenu_6,
    },
];

export default function About() {
    return (
        <>
            <section className="section-about">
                <div className="g-container">
                    <Breadcrumbs></Breadcrumbs>
                    <section className="about-us">
                        <div className="about-us__title title-page">О нас</div>
                        <div className="about-us__inner">
                            <div className="about-us__description about-us__description_one">
                                <p>
                                    Официальный представитель производителей
                                    эксклюзивного электротранспорта и
                                    Смарт-Техники, Созданная в 2015 году
                                    компания Смарт-Техника стала одним из первых
                                    дистрибьютеров персонального
                                    электротранспорта в России и уже более трёх
                                    лет является официальным представителем
                                    таких производителей эксклюзивного
                                    электронного транспорта, как
                                    <span className="about-us__span">
                                        Yamato, SmartONE, HALTEN и Kugoo
                                    </span>
                                </p>
                            </div>
                            <div className="about-us__title_h4 h3">
                                Постоянно растущая и развивающаяся Компания
                            </div>
                            <div className="about-us__description about-us__description_two">
                                <p>
                                    На сегодняшней день Компания Смарт-Техника
                                    обладает собственным розничным магазинами в
                                    г. Санкт-Петербурге, официальными
                                    представительствами в различных районах г.
                                    СПб и Ленобласти, сетью складов в
                                    Петербурге, Москве и других крупных городах
                                    России. Мы постоянно растём и развиваемся.
                                    Доставка наших товаров осуществляется во все
                                    регионы Страны!
                                </p>
                            </div>
                            <div className="about-us__title_h4 h3">
                                Самый большой выбор персонального
                                электротранспорта
                            </div>
                            <div className="about-us__description about-us__description_three">
                                <p>
                                    Самый большой выбор персонального
                                    электротранспорта представлен в выставочных
                                    залах Смарт-Техника по адресам:
                                </p>
                                <span className="about-us__span about-us__address">
                                    ул. Ленсовета 81;
                                </span>
                                <span className="about-us__span about-us__address">
                                    ул. Дыбенко 23к1;{" "}
                                </span>
                                <span className="about-us__span about-us__address">
                                    пр. Энгельса 113 к 2.
                                </span>
                                <p>
                                    Расширение ассортимента происходит стабильно
                                    раз в полгода, и вы всегда найдёте у нас
                                    самые эксклюзивные модели электронного
                                    транспорта нового поколения!
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="section-cat">
                    <div className="g-container">
                        <div className="about-us__title_h4 h3">
                            Всегда в наличии большой выбор:
                        </div>
                        <ul className="section-cat__list">
                            {nameProduct.map((el, i) => {
                                return (
                                    <li className="section-cat__item">
                                        <span>
                                            <Image
                                                src={el.img}
                                                alt="icon"
                                                key={i}
                                            ></Image>
                                        </span>
                                        <p>{el.name}</p>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                <div className="g-container">
                    <div className="about-us__inner">
                        <div className="about-us__title_h4 h3">
                            Опытный и высококвалифицированный персонал
                        </div>
                        <div className="about-us__description">
                            <p>
                                В компании работают опытные
                                высококвалифицированные сотрудники, всегда
                                готовые помочь вам с выбором персонального
                                транспортного средства, ответить на все
                                возможные вопросы и научить кататься на
                                выбранной вами модели
                            </p>
                        </div>
                        <div className="about-us__title_h4 h3">
                            Возможность тест драйва
                        </div>
                        <div className="about-us__description">
                            <p>
                                Благодаря месторасположению и инфраструктуре,
                                прилегающей к магазинам территорий, наши
                                посетители могут перед оформлением покупки
                                пройти тест-драйв на любом из представленных в
                                зале транспортных средств. Для тест-драйва
                                крупной техники необходима предварительная
                                запись. Её можно осуществить по телефону: +7
                                (812) 509-23-43 или через консультанта в
                                магазине.
                            </p>
                        </div>
                        <div className="about-us__title_h4 h3">
                            Цель и миссия компании Смарт-Техника.рф
                        </div>
                        <div className="about-us__description">
                            <p>
                                <b>Цель компании Смарт Техника —</b> в 2020 году
                                стать самым крупным магазином по продаже
                                персонального электротранспорта в
                                Санкт-Петербурге. А также открывать свои филиалы
                                во всех крупных городах России, что происходит
                                уже сейчас.
                            </p>
                            <p>
                                <b>Миссия компании Смарт Техника —</b>Миссия
                                компании Смарт Техника — познакомить россиян с
                                экологически чистыми видами транспорта и
                                улучшить экологию Страны! Мы надеемся не просто
                                привить нашей нации любовь к ЭКО-транспорту, а
                                создать в стране новую культуру передвижения.
                            </p>
                        </div>
                        <div className="about-us__description about-us__description_last">
                            <p className="h3">
                                Мы всегда рады взаимовыгодному сотрудничеству.
                                Свои предложения отправляйте{" "}
                                <a href="" className="h3 about-us__mail">
                                    smartfamily.info@yandex.ru
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
