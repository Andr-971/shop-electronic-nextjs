import Breadcrumbs from "../../utils/Breadcrumbs";
import { Metadata } from "next";
import TitleH1 from "../../components/TitleH1";
import Image from "next/image";
import pucturePayment1 from "../../../public/png_webp/pucture-payment.webp"
import pucturePayment2 from "../../../public/png_webp/pucture-payment-2.webp"

export const metadata: Metadata = {
    title: "Рассрочка 0|0|18",
    description: "Все виды рассрочки",
};

export default function Installment() {
    return (
        <>
            <div className="g-container">
                <section className="installment">
                    <Breadcrumbs></Breadcrumbs>
                    <TitleH1 title="Рассрочка 0|0|18"></TitleH1>
                    <div className="installment__inner">
                        <div className="installment__banner">
                            <div className="banner__wrap-photo">
                                <div className="banner__block-photo">
                                    <Image
                                        src={pucturePayment1}
                                        alt="фото"
                                        className="banner__img-photo"
                                    ></Image>
                                </div>
                            </div>
                        </div>
                        <div className="installment__title-box_h4">
                            <h4 className="h4">Как работает рассрочка</h4>
                        </div>
                        <div className="installment__text-block_one">
                            <p className="installment__txt-one">
                                ТЕПЕРЬ КАРТУ ХАЛВА МОЖНО ОФОРМИТЬ В СЕТИ НАШИХ
                                МАГАЗИНОВ СОВЕРШЕННО БЕСПЛАТНО. Это займёт не
                                более 10 минут. С собой необходимо иметь лишь
                                паспорт.
                            </p>
                            <p>
                                С картой «Халва» сотрудничают более 200 000
                                партнёров от продуктовых магазинов до компаний
                                продающих крупную бытовую технику и даже мебель,
                                у которых покупки можно делать в бесплатную
                                рассрочку. Сумма каждой такой покупки делится на
                                равные части (по количеству месяцев рассрочки у
                                партнёра). Раз в месяц «части» по всем покупкам
                                суммируются и выставляются единым Платежом по
                                рассрочке (дата выставления платежа равна дате
                                оформления карты).
                            </p>
                            <p className="installment__highlight">
                                Проценты по вашей рассрочке за покупку в нашем
                                магазине платит за вас НАШ МАГАЗИН
                            </p>
                        </div>
                        <div className="installment__graf">
                            <div className="graf__wrap-photo">
                                <div className="graf__block-photo">
                                    <Image
                                        src={pucturePayment2}
                                        alt="фото"
                                        className="graf__img-photo"
                                    ></Image>
                                </div>
                            </div>
                        </div>
                        <div className="installment__text-block_two">
                            <p className="installment__txt-one">
                                Подключите подписку "Халва Десятка" и делайте
                                любые покупки у партнеров с единым увеличенным
                                сроком рассрочки 10 месяцев.
                            </p>
                            <p>Можно расширить срок до 18-ти месяцев.</p>
                        </div>
                        <div className="installment__arrange">
                            <div className="installment__form block-bgc">
                                <div className="form__title h4">
                                    Оформить РАССРОЧКУ
                                </div>
                                <div className="item__input-box">
                                    <div className="item__input_label">Имя</div>
                                    <input
                                        type="text"
                                        placeholder="Например, Иван"
                                        className="item__input input-text"
                                    ></input>
                                </div>
                                <div className="item__input-box">
                                    <div className="item__input_label">
                                        Номер телефона
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="+7 (9__) ___-__-__"
                                        className="item__input input-text"
                                    ></input>
                                </div>
                                <div className="installment__button-box">
                                    <button className="installment__button">
                                        Отправить
                                    </button>
                                </div>
                            </div>
                            <div className="installment__block-text">
                                <div className="installment__title-block_h4">
                                    <h4 className="h4">
                                        Мобильное приложение «Совкомбанк –
                                        Халва»
                                    </h4>
                                </div>
                                <p>
                                    Мобильный банковский офис, который всегда с
                                    вами:
                                </p>
                                <ul>
                                    <li>
                                        <p>контроль вашей карты «Халва»</p>
                                    </li>
                                    <li>
                                        <p>
                                            наиболее востребованные банковские
                                            функции
                                        </p>
                                    </li>
                                    <li>
                                        <p>круглосуточный чат с поддержкой</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
