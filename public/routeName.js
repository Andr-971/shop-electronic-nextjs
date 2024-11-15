
import productAll from "./productAll";
let arrayNameProduct = [];
productAll.map((el) => {
    return arrayNameProduct.push(el.nameProduct);
});

export default [
    {
        id: "1",
        title: "Главная",
        page: "/",
        path: "/",
    },
    {
        id: "2",
        title: "Каталог товаров",
        page: "catalog",
        path: "/catalog",
    },
    {
        id: "3",
        title: "О нас",
        page: "about_us",
        path: "/about_us",
    },
    {
        id: "4",
        title: "Акции",
        page: "stocks",
        path: "/stocks",
    },
    {
        id: "5",
        title: "Рассрочка 0|0|18",
        page: "installment",
        path: "/installment",
    },
    {
        id: "6",
        title: "Сервис и гарантия",
        page: "warranty",
        path: "/warranty",
    },
    {
        id: "7",
        title: "Опт/дропшиппинг",
        page: "dropshipping",
        path: "/dropshipping",
    },
    {
        id: "8",
        title: "Контакты",
        page: "contact",
        path: "/contact",
    },
    {
        id: "9",
        title: "Оптом",
        page: "wholesale",
        path: "/dropshipping/wholesale",
    },
    {
        id: "10",
        title: "Общие сведения",
        description: "Персональная страница пользователя",
        page: "personal",
        path: "/personal",
    },
    {
        id: "11",
        title: "Личные данные",
        description: "Персональная страница пользователя | личные данные",
        page: "user_data",
        path: "/personal/user_data",
    },
    {
        id: "12",
        title: "История покупок",
        description: "Персональная страница пользователя | история покупок",
        page: "history_purchase",
        path: "/personal/history_purchase",
    },
    {
        id: "13",
        title: "Избранное",
        description: "Персональная страница пользователя | Избранное",
        page: "favourite",
        path: "/personal/favourite",
    },
    {
        id: "14",
        title: "Изменить пароль",
        description: "Персональная страница пользователя | Изменить пароль",
        page: "change_password",
        path: "/personal/change_password",
    },
    {
        id: "15",
        title: "Корзина покупателя",
        description: "Корзина покупателя",
        page: "basket",
        path: "/basket",
    },
    {
        id: "16",
        title: "Сравнение товара",
        description: "Сравнение товара покупателем",
        page: "compare",
        path: "/compare",
    },
    {
        id: "17",
        title: "Скидки в день рождения",
        description: "Хорошие скидки в день рождения",
        page: "1",
        path: "/stocks/1",
    },
    {
        id: "18",
        title: "Неделя смарт-часов",
        description: "Хорошие скидки неделю смарт-часов",
        page: "2",
        path: "/stocks/2",
    },
    {
        id: "19",
        title: "Распродажа до 50%",
        description: "Хорошие скидки до 50%",
        page: "3",
        path: "/stocks/3",
    },
    {
        id: "20",
        title: "По специальной цене",
        description: "Хорошие скидки по специальной цене",
        page: "4",
        path: "/stocks/4",
    },
    {
        id: "21",
        title: "Скидки до 30% на сигвеи",
        description: "Хорошие скидки до 30%",
        page: "5",
        path: "/stocks/5",
    },
    {
        id: "22",
        title: "Неделя смарт-часов",
        description: "Хорошие скидки в день рождения",
        page: "6",
        path: "/stocks/6",
    },
    {
        id: "23",
        title: "Распродажа до — 50%",
        description: "Хорошие скидки до 50%",
        page: "7",
        path: "/stocks/7",
    },
    {
        id: "24",
        title: "Smart Balance Premium по специальной цене",
        description: "Хорошие скидки по специальной цене",
        page: "8",
        path: "/stocks/8",
    },
    {
        id: "25",
        title: "Скидка в ДЕНЬ РОЖДЕНИЯ (неделя до/после)",
        description: "Хорошие скидки в ДЕНЬ РОЖДЕНИЯ (неделя до/после)",
        page: "9",
        path: "/stocks/9",
    },
    {
        id: "26",
        title: "Неделя смарт-часов",
        description: "Хорошие скидки смарт-часов",
        page: "10",
        path: "/stocks/10",
    },
    {
        id: "27",
        title: "Распродажа до — 50%",
        description: "Хорошие скидки до — 50%",
        page: "11",
        path: "/stocks/11",
    },
    {
        id: "28",
        title: "Smart Balance Premium по специальной цене",
        description: "Хорошие скидки по специальной цене",
        page: "12",
        path: "/stocks/12",
    },
    {
        id: "29",
        title: "Скидки до 30% на сигвеи",
        description: "Хорошие скидки до 30% на сигвеи",
        page: "13",
        path: "/stocks/13",
    },
    {
        id: "30",
        title: "Неделя смарт-часов",
        description: "Хорошие скидки смарт-часов",
        page: "14",
        path: "/stocks/14",
    },
    {
        id: "31",
        title: "Распродажа до — 50%",
        description: "Хорошие скидки до 50%",
        page: "15",
        path: "/stocks/15",
    },
    {
        id: "32",
        title: "Smart Balance Premium по специальной цене",
        description: "Хорошие скидки по специальной цене",
        page: "16",
        path: "/stocks/16",
    },
    {
        id: "33",
        title: "Скидки в день рождения",
        description: "Хорошие скидки в день рождения",
        page: "17",
        path: "/stocks/17",
    },
    {
        id: "34",
        title: "Неделя смарт-часов",
        description: "Хорошие скидки неделю смарт-часов",
        page: "18",
        path: "/stocks/18",
    },
    {
        id: "35",
        title: "Распродажа до 50%",
        description: "Хорошие скидки до 50%",
        page: "19",
        path: "/stocks/19",
    },
    {
        id: "36",
        title: "По специальной цене",
        description: "Хорошие скидки по специальной цене",
        page: "20",
        path: "/stocks/20",
    },
    {
        id: "37",
        title: "Скидки до 30% на сигвеи",
        description: "Хорошие скидки до 30%",
        page: "21",
        path: "/stocks/21",
    },
    {
        id: "38",
        title: "Неделя смарт-часов",
        description: "Хорошие скидки смарт-часов",
        page: "22",
        path: "/stocks/22",
    },
    {
        id: "39",
        title: "Распродажа до — 50%",
        description: "Хорошие скидки неделю смарт-часов",
        page: "23",
        path: "/stocks/23",
    },
    {
        id: "40",
        title: "Smart Balance Premium по специальной цене",
        description: "Хорошие скидки по специальной цене",
        page: "24",
        path: "/stocks/24",
    },
    {
        id: "41",
        title: "Скидка в ДЕНЬ РОЖДЕНИЯ (неделя до/после)",
        description: "Хорошие скидки в день рождения",
        page: "25",
        path: "/stocks/25",
    },
    {
        id: "42",
        title: "Неделя смарт-часов",
        description: "Хорошие скидки смарт-часов",
        page: "26",
        path: "/stocks/26",
    },
    {
        id: "43",
        title: arrayNameProduct[0],
        description: "Крутая техника",
        page: "product_1",
        path: "/catalog/product_1",
    },
    {
        id: "44",
        title: arrayNameProduct[1],
        description: "Крутая техника",
        page: "product_2",
        path: "/catalog/product_2",
    },
    {
        id: "45",
        title: arrayNameProduct[2],
        description: "Крутая техника",
        page: "product_3",
        path: "/catalog/product_3",
    },
    {
        id: "46",
        title: arrayNameProduct[3],
        description: "Крутая техника",
        page: "product_4",
        path: "/catalog/product_4",
    },
    {
        id: "47",
        title: arrayNameProduct[4],
        description: "Крутая техника",
        page: "product_5",
        path: "/catalog/product_5",
    },
    {
        id: "48",
        title: arrayNameProduct[5],
        description: "Крутая техника",
        page: "product_6",
        path: "/catalog/product_6",
    },
    {
        id: "49",
        title: arrayNameProduct[6],
        description: "Крутая техника",
        page: "product_7",
        path: "/catalog/product_7",
    },
    {
        id: "50",
        title: arrayNameProduct[7],
        description: "Крутая техника",
        page: "product_8",
        path: "/catalog/product_8",
    },
    {
        id: "51",
        title: arrayNameProduct[8],
        description: "Крутая техника",
        page: "product_9",
        path: "/catalog/product_9",
    },
    {
        id: "52",
        title: arrayNameProduct[9],
        description: "Крутая техника",
        page: "product_10",
        path: "/catalog/product_10",
    },
    {
        id: "53",
        title: arrayNameProduct[10],
        description: "Крутая техника",
        page: "product_11",
        path: "/catalog/product_11",
    },
    {
        id: "54",
        title: arrayNameProduct[11],
        description: "Крутая техника",
        page: "product_12",
        path: "/catalog/product_12",
    },
    {
        id: "55",
        title: arrayNameProduct[12],
        description: "Крутая техника",
        page: "product_13",
        path: "/catalog/product_13",
    },
    {
        id: "56",
        title: arrayNameProduct[13],
        description: "Крутая техника",
        page: "product_14",
        path: "/catalog/product_14",
    },
    {
        id: "57",
        title: arrayNameProduct[14],
        description: "Крутая техника",
        page: "product_15",
        path: "/catalog/product_15",
    },
    {
        id: "58",
        title: arrayNameProduct[15],
        description: "Крутая техника",
        page: "product_16",
        path: "/catalog/product_16",
    },
    {
        id: "59",
        title: arrayNameProduct[16],
        description: "Крутая техника",
        page: "product_17",
        path: "/catalog/product_17",
    },
    {
        id: "60",
        title: arrayNameProduct[17],
        description: "Крутая техника",
        page: "product_18",
        path: "/catalog/product_18",
    },
    {
        id: "61",
        title: arrayNameProduct[18],
        description: "Крутая техника",
        page: "product_19",
        path: "/catalog/product_19",
    },
    {
        id: "62",
        title: arrayNameProduct[19],
        description: "Крутая техника",
        page: "product_20",
        path: "/catalog/product_20",
    },
    {
        id: "63",
        title: arrayNameProduct[20],
        description: "Крутая техника",
        page: "product_21",
        path: "/catalog/product_21",
    },
    {
        id: "64",
        title: arrayNameProduct[21],
        description: "Крутая техника",
        page: "product_22",
        path: "/catalog/product_22",
    },
    {
        id: "65",
        title: arrayNameProduct[22],
        description: "Крутая техника",
        page: "product_23",
        path: "/catalog/product_23",
    },
    {
        id: "66",
        title: arrayNameProduct[23],
        description: "Крутая техника",
        page: "product_24",
        path: "/catalog/product_24",
    },
    {
        id: "67",
        title: arrayNameProduct[24],
        description: "Крутая техника",
        page: "product_25",
        path: "/catalog/product_25",
    },
    {
        id: "68",
        title: arrayNameProduct[25],
        description: "Крутая техника",
        page: "product_26",
        path: "/catalog/product_26",
    },
    {
        id: "69",
        title: arrayNameProduct[26],
        description: "Крутая техника",
        page: "product_27",
        path: "/catalog/product_27",
    },
    {
        id: "70",
        title: arrayNameProduct[27],
        description: "Крутая техника",
        page: "product_28",
        path: "/catalog/product_28",
    },
    {
        id: "71",
        title: arrayNameProduct[28],
        description: "Крутая техника",
        page: "product_29",
        path: "/catalog/product_29",
    },
    {
        id: "72",
        title: arrayNameProduct[29],
        description: "Крутая техника",
        page: "product_30",
        path: "/catalog/product_30",
    },
    {
        id: "73",
        title: arrayNameProduct[30],
        description: "Крутая техника",
        page: "product_31",
        path: "/catalog/product_31",
    },
    {
        id: "74",
        title: arrayNameProduct[31],
        description: "Крутая техника",
        page: "product_32",
        path: "/catalog/product_32",
    },
    {
        id: "75",
        title: arrayNameProduct[32],
        description: "Крутая техника",
        page: "product_33",
        path: "/catalog/product_33",
    },
    {
        id: "76",
        title: arrayNameProduct[33],
        description: "Крутая техника",
        page: "product_34",
        path: "/catalog/product_34",
    },
    {
        id: "77",
        title: arrayNameProduct[34],
        description: "Крутая техника",
        page: "product_35",
        path: "/catalog/product_35",
    },
    {
        id: "78",
        title: arrayNameProduct[35],
        description: "Крутая техника",
        page: "product_36",
        path: "/catalog/product_36",
    },
    {
        id: "79",
        title: arrayNameProduct[36],
        description: "Крутая техника",
        page: "product_37",
        path: "/catalog/product_37",
    },
    {
        id: "80",
        title: arrayNameProduct[37],
        description: "Крутая техника",
        page: "product_38",
        path: "/catalog/product_38",
    },
    {
        id: "81",
        title: arrayNameProduct[38],
        description: "Крутая техника",
        page: "product_39",
        path: "/catalog/product_39",
    },
    {
        id: "82",
        title: arrayNameProduct[39],
        description: "Крутая техника",
        page: "product_40",
        path: "/catalog/product_40",
    },
    {
        id: "83",
        title: arrayNameProduct[40],
        description: "Крутая техника",
        page: "product_41",
        path: "/catalog/product_41",
    },
    {
        id: "84",
        title: arrayNameProduct[41],
        description: "Крутая техника",
        page: "product_42",
        path: "/catalog/product_42",
    },
];

// function getBreadcrumbs(pageType, route, data) {
//     // Создаём массив для хлебных крошек
//     const crumbs = [];
//     crumbs.push({
//         title: "Главная",
//         url: "/",
//     });
//     switch (pageType) {
//         case "category":
//             crumbs.push({
//                 title: data.cName,
//                 url: `/category/${data.cSlug}`,
//             });
//             break;
//         case "product":
//             crumbs.push({
//                 title: data.category.cName,
//                 url: `/category/${data.category.cSlug}`,
//             });
//             crumbs.push({
//                 title: data.pName,
//                 url: `/product/${data.pSlug}`,
//             });

//             break;

//         default:
//             break;
//     }
// }