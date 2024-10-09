import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "@/scss/style.scss";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Providers from "@/components/Providers";
import PopapInter from "@/components/PopapInter/PopapInter";
import BacketPopap from "@/components/BacketPopap/BacketPopap"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Магазин электротехники",
    description: "Магазин электротоваров",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    
    return (
        <html lang="ru">
            <Head>
                <link rel="icon" href="/favicon.ico" type="image/favicon.ico" />
            </Head>
            <body>
                <Providers>
                    <div className="wrapper">
                        <Header />
                        <main className="main">{children}</main>
                        <Footer />

                        <PopapInter></PopapInter>

                        <div className="popup-entrance popup-form hidden">
                            <div className="popup-entrance__container popup-form__container">
                                <div className="popup-entrance__title-block popup-form__title-block">
                                    <h4 className="popup-entrance__title h4">
                                        Вход
                                    </h4>
                                    <span className="popup-entrance__title-close">
                                        {/* <img src="./img/svg/close-btn.svg" alt="icon-close"> */}
                                    </span>
                                </div>
                                <form
                                    action="#"
                                    className="popup-entrance__form popup-form__form"
                                >
                                    <label htmlFor="tel">
                                        Эл. почта или телефон
                                    </label>
                                    <div className="popup-entrance__input-block popup-form__input-block">
                                        <input
                                            type="text"
                                            className="popup-entrance__input popup-form__input"
                                            id="tel"
                                        ></input>
                                    </div>
                                    <label htmlFor="pass1">Пароль</label>
                                    <div className="popup-entrance__input-block popup-form__input-block">
                                        <input
                                            type="password"
                                            className="popup-entrance__input popup-form__input"
                                            id="pass1"
                                        ></input>
                                    </div>
                                    <a
                                        href="#"
                                        className="popup-entrance__link_first popup__link"
                                    >
                                        Забыли пароль?
                                    </a>
                                    <div className="popup-form__input-checkbox-box">
                                        <input
                                            type="checkbox"
                                            name="remember"
                                            id="check-entrance"
                                            defaultChecked
                                            className="popup-entrance__input-checkbox popup-form__input-checkbox"
                                        ></input>
                                        <label
                                            htmlFor="check-entrance"
                                            className="popup-entrance__input-checklabel popup-form__input-checklabel"
                                        >
                                            Запомнить меня
                                        </label>
                                    </div>
                                    <button className="popup-entrance__btn popup-form__btn">
                                        Войти
                                    </button>
                                    <a
                                        href="#"
                                        className="popup-entrance__link popup__link"
                                    >
                                        Зарегистрироваться
                                    </a>
                                </form>
                            </div>
                            <div className="popup-entrance__fon popup-form__fon"></div>
                        </div>

                        <div className="popup-registration popup-form hidden">
                            <div className="popup-registration__container popup-form__container">
                                <div className="popup-registration__title-block popup-form__title-block">
                                    <h4 className="popup-registration__title h4">
                                        Регистрация
                                    </h4>
                                    <span className="popup-registration__title-close">
                                        {/* <img src="./img/svg/close-btn.svg" alt="icon-close"> */}
                                    </span>
                                </div>
                                <form
                                    action="#"
                                    className="popup-registration__form popup-form__form"
                                >
                                    <label htmlFor="name-registration">
                                        Имя
                                    </label>
                                    <div className="popup-registration__input-block popup-form__input-block">
                                        <input
                                            type="text"
                                            className="popup-registration__input popup-form__input"
                                            id="name-registration"
                                            size={18}
                                        ></input>
                                    </div>
                                    <label htmlFor="emall-registration">
                                        Эл. почта
                                    </label>
                                    <div className="popup-registration__input-block popup-form__input-block">
                                        <input
                                            type="text"
                                            className="popup-registration__input popup-form__input"
                                            id="emall-registration"
                                            size={18}
                                        ></input>
                                    </div>
                                    <label htmlFor="tel-registration">
                                        Номер телефона
                                    </label>
                                    <div className="popup-registration__input-block popup-form__input-block">
                                        <input
                                            type="tel"
                                            className="popup-registration__input popup-form__input"
                                            id="tel-registration"
                                            placeholder="+7 (921) 340-90-56"
                                            size={18}
                                        ></input>
                                    </div>
                                    <label htmlFor="pass-registration">
                                        Придумайте пароль
                                    </label>
                                    <div className="popup-registration__input-block popup-form__input-block">
                                        <input
                                            type="password"
                                            className="popup-registration__input popup-form__input"
                                            id="pass-registration"
                                            placeholder=""
                                            size={18}
                                        ></input>
                                    </div>
                                    <p className="popup-registration__text">
                                        Регистрируясь, вы соглашаетесь с{" "}
                                    </p>
                                    <a
                                        href="#"
                                        className="popup-registration__link_first popup__link"
                                    >
                                        пользовательским соглашением
                                    </a>
                                    <div className="popup-form__input-checkbox-box">
                                        <input
                                            type="checkbox"
                                            name="remember"
                                            id="check-registration"
                                            defaultChecked
                                            className="popup-entrance__input-checkbox popup-form__input-checkbox"
                                        ></input>
                                        <label
                                            htmlFor="check-registration"
                                            className="popup-registration__input-checklabel popup-form__input-checklabel"
                                        >
                                            Запомнить меня
                                        </label>
                                    </div>
                                    <button className="popup-registration__btn popup-form__btn">
                                        Зарегистрироваться
                                    </button>
                                    <a
                                        href="#"
                                        className="popup-registration__link popup__link"
                                    >
                                        Я уже зарегистрирован
                                    </a>
                                </form>
                            </div>
                            <div className="popup-registration__fon popup-form__fon"></div>
                        </div>

                        <BacketPopap></BacketPopap>
                    </div>
                </Providers>
            </body>
        </html>
    );
}
