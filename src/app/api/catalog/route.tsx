import { NextResponse } from "next/server";
import {splitArray} from "../../../services/function" // Разбивка массива функция
import { catalogApi } from "../../../../public/path"
import productAll from "../../../../public/productAll.js"

// Отправка GET json на клиента
export async function GET(req: Request) {
    const { searchParams } = new URL(req.url); // Получение url из запроса

    const query = searchParams.get("s"); // Определить get параметр ?s=
    // query - ?s=тело get запроса
    // Отфильтровка объектов по id
    // console.log(productAll);
    let currentProduct = productAll;
    // console.log(currentProduct);
    if (query) {
        currentProduct = productAll.filter((product) =>
            product.id.toLowerCase().includes(query.toLowerCase()),
        );
    }
    // return NextResponse.json();
    return NextResponse.json(currentProduct);
}

export async function getData() {
    let response = await fetch(`${catalogApi}`);
    if (response.ok) {
        return response.json();
    }
}

// Получение POST на сервере
export async function POST(req: Request) {
    const page: any = await req.json(); // Пришло с клиента
    const catalogArray = await getData(); // Запрос с сервера на массив
    const arrayPage = splitArray(catalogArray, 6); // Разбивка массива на страницы по 6

    return NextResponse.json(arrayPage[+page.page - 1]);
}
