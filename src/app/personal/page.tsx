import React from "react";
import { Metadata } from "next";
import Breadcrumbs from "../../utils/Breadcrumbs.jsx";
import TitleH1 from "../../components/TitleH1";
import { getServerSession } from "next-auth";
import { authConfig } from "../../configs/auth";
import UserItemMenu from "../../components/UserItemMenu/UserItemMenu"
import ExitButton from "../../components/ExitButton/ExitButton"
import TitleH2 from "../../components/TitleH2";
import Image from "next/image";
import userDefault from "../../../public/png_webp/user-default.webp"

    export const metadata: Metadata = {
        title: "Общие сведения",
        description: "Кабинет пользователя",
    };
const Personal = async () => {
    const session: any = await getServerSession(authConfig);
    return (
        <>
            <div className="g-container">
                <Breadcrumbs></Breadcrumbs>
                <section className="account-my">
                    <TitleH1 title={"Общие сведения"}></TitleH1>
                    <div className="account-my__holder">
                        <div className="account-my__column">
                            <div className="account-my__account block-border">
                                <div className="account__es">
                                    <ul className="account__list">
                                        <UserItemMenu></UserItemMenu>
                                        <ExitButton></ExitButton>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="account-my__column">
                            <div className="account-my__personal">
                                <TitleH2 title={session?.user?.name}></TitleH2>
                                <div className="personal__holder">
                                    <div className="personal__column">
                                        <div className="personal__wrap-photo">
                                            <div className="personal__block-photo">
                                                {session.user.image === "" ? (
                                                    <Image
                                                        src={userDefault}
                                                        alt="фото"
                                                        unoptimized
                                                        width={200}
                                                        height={200}
                                                        className="personal__img-photo"
                                                    ></Image>
                                                ) : (
                                                    <Image
                                                        src={
                                                            session?.user?.image
                                                        }
                                                        alt="фото"
                                                        unoptimized
                                                        width={200}
                                                        height={200}
                                                        className="personal__img-photo"
                                                    ></Image>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="personal__column">
                                        <div className="personal__text-block_one">
                                            <p className="personal__text_data personal__text">
                                                Дата регистрации:{" "}
                                                <span>02.04.2021</span>
                                            </p>
                                            <p className="personal__text_order personal__text">
                                                Заказов: <span>1</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="personal__text-block_two">
                                    <p className="personal__text">
                                        Добро пожаловать в панель управления.
                                        Здесь вы можете{" "}
                                        <a href="#">
                                            изменить свои регистрационные данные{" "}
                                        </a>
                                        и <a href="#">cменить пароль.</a>{" "}
                                        Зарегистрированные пользователи имеют
                                        доступ к <a href="#">истории заказов</a>{" "}
                                        и возможность{" "}
                                        <a href="#">
                                            добавлять в избранное товары для
                                            будущих покупок.
                                        </a>
                                    </p>
                                </div>
                                <div className="personal__button-box">
                                    <button className="personal__button button">
                                        Панель управления
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Personal;
