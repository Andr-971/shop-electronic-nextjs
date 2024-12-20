import Breadcrumbs from "../../utils/Breadcrumbs.jsx";
import { Metadata } from "next";
import TitleH1 from "../../components/TitleH1";

export const metadata: Metadata = {
    title: "Сервис и гарантия",
    description: "Самый лучий сервис",
};

export default function Warranty() {
    return (
        <>
            <div className="g-container">
                <section className="warranty">
                    <Breadcrumbs></Breadcrumbs>
                    <TitleH1 title={"Гарантийные условия"}></TitleH1>
                    <div className="warranty__inner">
                        <div className="warranty__title-h3">
                            <h3>Термины и определения:</h3>
                        </div>
                        <div className="warranty__text">
                            <p>
                                <b>Потребитель/покупатель</b>— лицо,
                                приобретающее или использующее товар
                                исключительно для личных, семейных, домашних и
                                иных нужд, не связанных с осуществлением
                                предпринимательской деятельности;
                            </p>
                            <p>
                                <b>Продавец</b>— организация независимо от её
                                организационно-правовой формы, а также
                                индивидуальный предприниматель, реализующие
                                товары потребителям по договору купли-продажи.
                            </p>
                            <p>
                                <b>Сервисный центр</b>— организация независимо
                                от её организационно-правовой формы, а также
                                индивидуальный предприниматель, осуществляющий
                                гарантийное или платное обслуживание товаров.
                                Сервисный центр не является аффилированной
                                организацией продавца и не несёт ответственность
                                перед потребителем за проданный товар.
                            </p>
                            <p>
                                <b>Товар/Электротранспорт</b>— вид транспорта,
                                использующий в качестве источника энергии
                                электричество, в качестве привода
                                электродвигатель. В соответствии с техническими
                                характеристиками электротранспорт является
                                технически сложным товаром. Товар входит в
                                Перечень непродовольственных товаров надлежащего
                                качества, не подлежащих возврату или обмену на
                                аналогичный товар других размера, формы,
                                габарита, фасона, расцветки или комплектации,
                                утверждённому постановлением Правительства
                                российской Федерации от 19.01.1998 № 55.
                            </p>
                            <p>
                                <b>Категория товара</b>— подвид товара, имеющий
                                отдельные критерии и характеристики относительно
                                потребительских качеств.
                            </p>
                            <p>
                                <b>
                                    Правила эксплуатации хранения
                                    транспортировки
                                </b>{" "}
                                — требования обязательные к соблюдению при
                                пользовании товаром.
                            </p>
                            <p>
                                <b>Идеальные условия эксплуатации</b> —
                                рекомендованные продавцом и/или производителем
                                условия эксплуатации товара при которых может
                                быть достигнута максимальная
                                среднестатистическая производительность
                                электротранспорта (максимальная скорость,
                                максимальный пробег при полном заряде
                                аккумулятора, скорость торможения)
                            </p>
                            <p>
                                <b>Гарантийный срок</b> — срок, при котором
                                продавец осуществляет гарантийное обслуживание
                                эректротранспорта.
                            </p>
                        </div>
                        <div className="warranty__title-h3">
                            <h3>
                                Категории товара и их технические
                                характеристики:
                            </h3>
                        </div>
                        <div className="warranty__table-block">
                            <table className="warranty__table">
                                <thead>
                                    <tr>
                                        <th>Категория</th>
                                        <th>Вид</th>
                                        <th>Мощность (ват)</th>
                                        <th>Рекомендуемая скорость(км/ч)</th>
                                        <th>Макс.грузоподъёмность(кг)</th>
                                        <th>
                                            Макс.пробег от одного зараяда(км)
                                        </th>
                                        <th>Гарантийный пробег(км)</th>
                                        <th>Стоимость ТО</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>А</td>
                                        <td>Электросамокат</td>
                                        <td>от 1000 W</td>
                                        <td>30</td>
                                        <td>110</td>
                                        <td>40</td>
                                        <td>5 000</td>
                                        <td>300-700 руб.</td>
                                    </tr>
                                    <tr>
                                        <td>B</td>
                                        <td>Электросамокат</td>
                                        <td>от 500-1000 W</td>
                                        <td>18</td>
                                        <td>90</td>
                                        <td>20</td>
                                        <td>2 000</td>
                                        <td>1500 руб.</td>
                                    </tr>
                                    <tr>
                                        <td>C</td>
                                        <td>Электросамокат</td>
                                        <td>до 500 W</td>
                                        <td>10</td>
                                        <td>65</td>
                                        <td>15</td>
                                        <td>1 000</td>
                                        <td>800 руб.</td>
                                    </tr>
                                    <tr>
                                        <td>D</td>
                                        <td>Гироскутер</td>
                                        <td>-/-</td>
                                        <td>7</td>
                                        <td>40</td>
                                        <td>5</td>
                                        <td>-/-</td>
                                        <td>-/-</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="warranty__text warranty__text_two">
                            <p>
                                Данные характеристики рассчитаны без учёта
                                субъективных дорожных условий, при учёте не
                                превышения потребителем грузовой нагрузки
                                электротранспорта. Продавец не отвечает за
                                неудовлетворение субъективных ожиданий
                                покупателя от применения приобретённоготовара.
                                Указанные характеристики применяются к
                                конкретной категории товара если иное прямо не
                                указанно производителем.
                            </p>
                        </div>
                        <div className="warranty__text warranty__text_varning">
                            <p>
                                <b>Внимание!</b> — перед началом эксплуатации
                                устройства необходимо обязательно ознакомиться с
                                инструкцией по эксплуатации.{" "}
                            </p>
                        </div>
                        <div className="warranty__title-h3">
                            <h3>Правила эксплуатации </h3>
                        </div>
                        <div className="warranty__text">
                            <p>
                                Прежде всего социально-экономическое развитие
                                способствует повышению качества системы
                                массового участия. С другой стороны реализация
                                намеченных плановых заданий способствует
                                повышению качества дальнейших направлений
                                развития. Равным образом сложившаяся структура
                                организации напрямую зависит от экономической
                                целесообразности принимаемых изменений. С другой
                                стороны начало повседневной работы по
                                формированию позиции требует определения и
                                уточнения существующий финансовых и
                                административных условий. Следует отметить, что
                                сложившаяся структура организации влечёт за
                                собой интересный процесс внедрения модернизации
                                соответствующих условий активизации. Следует
                                отметить, что рамки и место обучения кадров
                                обеспечивает актуальность существующий
                                финансовых и административных условий. Таким
                                образом новая модель организационной
                                деятельности способствует подготовке и
                                реализации прогресса профессионального общества.
                                Идейные соображения высшего порядка, а также
                                дальнейшее развитие различных форм деятельности
                                способствует повышению качества системы обучения
                                кадров, соответствующей насущным потребностям.
                                Повседневная практика показывает, что дальнейшее
                                развитие различных форм деятельности требует
                                анализа соответствующих условий активизации. Для
                                современного мира курс на
                                социально-ориентированный национальный проект
                                требует анализа экономической целесообразности
                                принимаемых изменений.
                            </p>
                            <ul
                                style={{ listStyleType: "disc" }}
                                className="warranty__text_list"
                            >
                                <li className="warranty__text_item">
                                    Идейные соображения высшего порядка, а также
                                    социально-экономическое развитие позволяет
                                    выполнять важные задания по разработке
                                    поэтапного и последовательного развития
                                    общества.
                                </li>
                                <li className="warranty__text_item">
                                    Идейные соображения высшего порядка, а также
                                    социально-экономическое развитие позволяет
                                    выполнять важные задания по разработке
                                    поэтапного и последовательного развития
                                    общества.
                                </li>
                                <li className="warranty__text_item">
                                    Идейные соображения высшего порядка, а также
                                    социально-экономическое развитие позволяет
                                    выполнять важные задания по разработке
                                    поэтапного и последовательного развития
                                    общества.
                                </li>
                                <li className="warranty__text_item">
                                    Идейные соображения высшего порядка, а также
                                    социально-экономическое развитие позволяет
                                    выполнять важные задания по разработке
                                    поэтапного и последовательного развития
                                    общества.
                                </li>
                            </ul>
                        </div>
                        <div className="warranty__title-h3">
                            <h3>ЗАПРЕЩАЕТСЯ!</h3>
                        </div>
                        <ul className="warranty__forbidden_list">
                            <li className="warranty__forbidden_item">
                                Использовать электротранспорт при низком заряде
                                батареи (индикатор батареи будет гореть красным)
                            </li>
                            <li className="warranty__forbidden_item">
                                Использовать электротранспорт при блокировке
                                (более точную информацию проверьте в
                                книжке/инструкции по эксплуатации)
                            </li>
                            <li className="warranty__forbidden_item">
                                Использовать электротранспорт во время загорания
                                сигнала ошибки (какие разновидности ошибок есть
                                и что делать, ознакомьтесь в книжке/инструкции
                                по эксплуатации)
                            </li>
                            <li className="warranty__forbidden_item">
                                {" "}
                                Использовать электротранспорт при перегреве
                                (смотреть на индикатор)
                            </li>
                            <li className="warranty__forbidden_item">
                                Использовать электротранспорт во время дождя или
                                кататься по влажной поверхности (лужи и т.д.)
                            </li>
                            <li className="warranty__forbidden_item">
                                Использовать электротранспорт в снег или
                                кататься по льду.
                            </li>
                            <li className="warranty__forbidden_item">
                                Мочить, мыть его под струёй воды. Это может
                                привести к поломке.
                            </li>
                            <li className="warranty__forbidden_item">
                                Хранить и использовать в условиях температуры
                                0°C и ниже.
                            </li>
                            <li className="warranty__forbidden_item">
                                Ездить по неровной дороге, по камням, песку и
                                другим дефектным поверхностям для исключения
                                попадания посторонних предметов, веществ, грязи
                                итд.
                            </li>
                            <li className="warranty__forbidden_item">
                                Прыгать с высоты или совершать съезд с бордюров,
                                поребриков и.т.д. выше 5 см.
                            </li>
                        </ul>
                        <div className="warranty__title-h3">
                            <h3>Правила гарантийного обслуживания</h3>
                        </div>
                        <ul className="warranty__service_list">
                            <ol className="warranty__service_item">
                                <span>1.</span>Гарантийный срок на приобретаемый
                                электротранспорт составляет 12 месяцев или
                                установленный для определённой категории
                                электротранспорта пробег, в зависимости от того
                                что наступит ранее. Начало гарантийного срока
                                исчисляется с момента продажи. За 5 км до
                                окончания гарантийного пробега, гарантийный
                                пробег может быть увеличен при прохождении
                                потребителем дополнительного платного
                                технического обслуживания электротранспорта.
                                Вместе с тем двенадцати месячный гарантийный
                                срок в таком порядке увеличению не подлежит.
                            </ol>
                            <ol className="warranty__service_item">
                                <span>2.</span>Продолжительность гарантийного
                                срока на элемент питания (батарею) – 3 месяца;
                                На болты, подшипники, крепления, колёса, которые
                                не являются мотором, другие механические части
                                корпуса, люфт рулевого управления и складного
                                механизма гарантия не распространяется — так как
                                эти части электротранспорта являются расходным
                                материалом и должны заменяться в процессе
                                эксплуатации в соответствии с их износом.
                            </ol>
                            <ol className="warranty__service_item">
                                <span>3.</span>В течение гарантийного
                                срока/гарантийного пробега, продавец
                                обеспечивает бесплатный ремонт товара.
                            </ol>
                            <ol className="warranty__service_item">
                                К устранению недостатков не относятся
                                произведённые работы по чистке аппарата, замене
                                необходимых расходных материалов, фиксации и
                                протяжка болтов и иных крепёжных элементов
                                товара, регулировка тормозной, двигательной и
                                рулевой системы.
                            </ol>
                            <ol className="warranty__service_item">
                                <span>4.</span>Гарантия действительна при
                                наличии настоящей, правильно заполненной,
                                сервисной книжки, в которой указано наименование
                                товара, серийного номера, дата продажи и печати
                                продавца.
                            </ol>
                        </ul>
                        <div className="warranty__title-h3">
                            <h3>
                                Порядок обращения потребителей за гарантийным
                                обслуживанием
                            </h3>
                        </div>
                        <ul className="warranty__appeal_list">
                            <ol className="warranty__appeal_item">
                                <span>1.</span>Прежде всего
                                социально-экономическое развитие обеспечивает
                                актуальность дальнейших направлений развития.
                            </ol>
                            <ol className="warranty__appeal_item">
                                <span>2.</span>Задача организации, в особенности
                                же новая модель организационной деятельности
                                представляет собой интересный эксперимент
                                направлений прогрессивного развития.
                            </ol>
                            <ol className="warranty__appeal_item">
                                <span>3.</span>Таким образом начало повседневной
                                работы по формированию позиции обеспечивает
                                широкому кругу специалистов укрепления
                                демократической системы.
                            </ol>
                            <ol className="warranty__appeal_item">
                                <span>4.</span>Равным образом выбранный нами
                                инновационный путь в значительной степени
                                обуславливает создание позиции, занимаемых
                                участниками в отношении поставленных задач.
                            </ol>
                            <ol className="warranty__appeal_item">
                                <span>5.</span>Прежде всего понимание сущности
                                ресурсосберегающих технологий позволяет оценить
                                значение прогресса профессионального общества.
                            </ol>
                        </ul>
                        <div className="warranty__title-h3">
                            <h3>
                                Информационное письмо о порядке урегулирования
                                требований потребителя
                            </h3>
                        </div>
                        <div className="warranty__text_letter">
                            <p>
                                Прежде всего, ставим вас в известность, что
                                электротранспорт относится к технически сложному
                                товару в соответствии с утверждённым
                                Правительством РФ перечнем технически сложных
                                товаров. Законодатель не позволяет обменивать
                                и/или возвращать товар продавцу по его не
                                соответствию расцветки, габаритам и прочим
                                свойствам товара не относящихся к его
                                потребительским качествам. Убедительная просьба
                                при покупке товара подойти к его выбору разумно
                                и получить от продавца всю исчерпывающую
                                информацию о товаре и его свойствах, в том числе
                                путём пробного использования вблизи территории
                                магазина.
                            </p>
                            <p>
                                В случае если в товаре проявился какой-либо
                                недостаток, вы можете получить гарантийное
                                обслуживание на территории сервисного центра.
                                Информация о сервисном центре, который имеет
                                право обслуживать ваш товар имеется в
                                гарантийном талоне, который является
                                неотъемлемой частью договора купли продажи.
                                Дополнительную информацию о месте расположения
                                сервисного центра уточняйте у продавца. Срок
                                устранения недостатков товара на гарантийной
                                основе составляет 45 дней (за исключением
                                нерабочих праздничных дней). В случае если в
                                процессе эксплуатации товара в период
                                гарантийного срока у вас возникли иные проблемы,
                                которые затруднительно решить через обращение в
                                сервисный цент, вы имеете право обратиться в
                                магазин по месту покупки с заявлением.
                            </p>
                            <p>
                                У сотрудников торговой точки имеются в наличии
                                бланки заявлений. Просим вас правильно заполнить
                                бланк претензии, разборчивым подчерком, подробно
                                изложив обстоятельства и суть ваших требований.
                                При наличии затруднений в заполнении настоящего
                                бланка претензии, потребитель может обратиться
                                за дополнительной помощью к сотруднику магазина.
                                Вы не лишены права составить претензию в иной
                                удобной для вас форме.
                            </p>
                            <p>
                                Просим обратить внимание что Сотрудник магазина
                                юридических консультаций не даёт, не уполномочен
                                разрешать ваше требование по существу и не имеет
                                специальных технических познаний для определения
                                причин наличия недостатков в товаре и тем более
                                для их устранения.
                            </p>
                            <p>
                                В соответствии со ст. 22 Закона РФ «О защите
                                прав потребителей» срок рассмотрения
                                претензионных требований составляет 10 дней, за
                                исключением нерабочих праздничных дней.
                            </p>
                            <p>
                                Ставим вас в известность о необходимости по
                                требованию продавца передать товар продавцу для
                                проведения проверки качества, а ак е
                                еобходимости по ребованию продавца совершить
                                дополнительные юридически значимые действия, без
                                оторых продавец будет лишён возможности
                                рассмотреть и/или удовлетворить требования
                                потребителя. Злоупотребление правом недопустимо
                                в илу ст. 0 К Ф. Срок проведения проверки
                                качества составляет 10 абочий дней с омента
                                передачи товара продавцу. При роведении проверки
                                качества стороны не опускаются в роизводственные
                                помещения сервисного центра. Согласно политике
                                сервисного обслуживания, установленной, в ом
                                исле производителем и сервисным центром, к
                                устранению недостатков не относятся
                                произведённые работы по чистке аппарата, замене
                                необходимых расходных материалов, фиксации и
                                протяжка болтов и иных крепёжных элементов
                                товара, регулировка тормозной, двигательной и
                                рулевой системы.
                            </p>
                        </div>
                        <div className="warranty__title-h3 warranty__title-h3_ps">
                            <h3>
                                В случае наличия вопросов вы можете обратиться в
                                наш Юридический отдел.
                            </h3>
                            <h3>
                                Адрес отдела по урегулированию претензий:{" "}
                                <a href="#" className="ps__contact">
                                    173004 г. В. Новгород ул. Тимура
                                    Фрунзе-Оловянка 17/3 оф. 5.
                                </a>{" "}
                            </h3>
                            <h3>
                                Тел.{" "}
                                <a
                                    href="tel:+79960670096"
                                    className="ps__contact"
                                >
                                    +7 (996) 067-00-96
                                </a>
                            </h3>
                            <h3>
                                эл. почта:{" "}
                                <a
                                    href="mailto:mdsmbr@gmail.com"
                                    className="ps__contact"
                                >
                                    mdsmbr@gmail.com
                                </a>
                            </h3>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
