
export default [
    {
        title: "Главная",
        page: "/",
    },
    {
        title: "О нас",
        page: "about_us",
    },
    {
        title: "Акции",
        page: "stocks",
    },
    {
        title: "Рассрочка 0|0|18",
        page: "installment",
    },
    {
        title: "Сервис и гарантия",
        page: "warranty",
    },
    {
        title: "Опт/дропшиппинг",
        page: "dropshipping",
    },
    {
        title: "Контакты",
        page: "contact",
    },
    {
        title: "Оптом",
        page: "wholesale",
    },
    {
        title: "Скидки в день рождения",
        description: "Хорошие скидки в день рождения",
        page: "1",
    },
    {
        title: "Неделя смарт-часов",
        description: "Хорошие скидки неделю смарт-часов",
        page: "2",
    },
    {
        title: "Распродажа до 50%",
        description: "Хорошие скидки до 50%",
        page: "3",
    },
    {
        title: "По специальной цене",
        description: "Хорошие скидки по специальной цене",
        page: "4",
    },
    {
        title: "Скидки до 30% на сигвеи",
        description: "Хорошие скидки до 30%",
        page: "5",
    },
    {
        title: "Неделя смарт-часов",
        description: "Хорошие скидки в день рождения",
        page: "6",
    },
    {
        title: "Распродажа до — 50%",
        description: "Хорошие скидки до 50%",
        page: "7",
    },
    {
        title: "Smart Balance Premium по специальной цене",
        description: "Хорошие скидки по специальной цене",
        page: "8",
    },
    {
        title: "Скидка в ДЕНЬ РОЖДЕНИЯ (неделя до/после)",
        description: "Хорошие скидки в ДЕНЬ РОЖДЕНИЯ (неделя до/после)",
        page: "9",
    },
    {
        title: "Неделя смарт-часов",
        description: "Хорошие скидки смарт-часов",
        page: "10",
    },
    {
        title: "Распродажа до — 50%",
        description: "Хорошие скидки до — 50%",
        page: "11",
    },
    {
        title: "Smart Balance Premium по специальной цене",
        description: "Хорошие скидки по специальной цене",
        page: "12",
    },
    {
        title: "Скидки до 30% на сигвеи",
        description: "Хорошие скидки до 30% на сигвеи",
        page: "13",
    },
    {
        title: "Неделя смарт-часов",
        description: "Хорошие скидки смарт-часов",
        page: "14",
    },
    {
        title: "Распродажа до — 50%",
        description: "Хорошие скидки до 50%",
        page: "15",
    },
    {
        title: "Smart Balance Premium по специальной цене",
        description: "Хорошие скидки по специальной цене",
        page: "16",
    },
    {
        title: "Скидки в день рождения",
        description: "Хорошие скидки в день рождения",
        page: "17",
    },
    {
        title: "Неделя смарт-часов",
        description: "Хорошие скидки неделю смарт-часов",
        page: "18",
    },
    {
        title: "Распродажа до 50%",
        description: "Хорошие скидки до 50%",
        page: "19",
    },
    {
        title: "По специальной цене",
        description: "Хорошие скидки по специальной цене",
        page: "20",
    },
    {
        title: "Скидки до 30% на сигвеи",
        description: "Хорошие скидки до 30%",
        page: "21",
    },
    {
        title: "Неделя смарт-часов",
        description: "Хорошие скидки смарт-часов",
        page: "22",
    },
    {
        title: "Распродажа до — 50%",
        description: "Хорошие скидки неделю смарт-часов",
        page: "23",
    },
    {
        title: "Smart Balance Premium по специальной цене",
        description: "Хорошие скидки по специальной цене",
        page: "24",
    },
    {
        title: "Скидка в ДЕНЬ РОЖДЕНИЯ (неделя до/после)",
        description: "Хорошие скидки в день рождения",
        page: "25",
    },
    {
        title: "Неделя смарт-часов",
        description: "Хорошие скидки смарт-часов",
        page: "26",
    },
];

function getBreadcrumbs(pageType, route, data) {
    // Создаём массив для хлебных крошек
    const crumbs = [];
    crumbs.push({
        title: "Главная",
        url: "/",
    });
    switch (pageType) {
        case "category":
            crumbs.push({
                title: data.cName,
                url: `/category/${data.cSlug}`,
            });
            break;
        case "product":
            crumbs.push({
                title: data.category.cName,
                url: `/category/${data.category.cSlug}`,
            });
            crumbs.push({
                title: data.pName,
                url: `/product/${data.pSlug}`,
            });

            break;

        default:
            break;
    }
}