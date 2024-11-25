
import { NextResponse } from "next/server";
import productAll from "../../../../../public/productAll";
import { splitArray } from "../../../../services/function" // Разбивка массива функция


//* Отправка GET json на клиента
export async function GET(req:Request) {
    const { searchParams } = new URL(req.url); // Получение url из запроса

    const query = searchParams.get("s"); // Определить get параметр ?s=
    // query - ?s=тело get запроса
    // Отфильтровка объектов по id
    let currentProduct = productAll;
    if (query) {
        currentProduct = productAll.filter((product) =>
            product.id.toLowerCase().includes(query.toLowerCase()),
        );
    }
    // return NextResponse.json();
    return NextResponse.json(currentProduct);
}

//* Получение POST на сервере
export async function POST(req:Request) {
    const page = await req.json(); // Пришло с клиента
    const catalogArray = productAll; // Массив продуктов
    const arrayPage = splitArray(catalogArray, 6); // Разбивка массива на страницы по 6

    return NextResponse.json(arrayPage[+page.page - 1]);
}