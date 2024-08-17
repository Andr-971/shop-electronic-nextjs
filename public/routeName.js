
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