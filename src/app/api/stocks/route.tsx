
import { NextResponse } from "next/server";
import {splitArray} from "../../../services/function"
import stocksBlock from "./stocksBlock.js";
import { stocksApi } from "../../../../public/path";

let bodyStock;
// Отправка GET json на клиента
export async function GET(req: Request) {
    const { searchParams } = new URL(req.url); // Получение url из запроса

    const query = searchParams.get("s"); // Определить get параметр ?s=
    // query - ?s=тело get запроса
    // Отфильтровка объектов по id
    let currentStocksBlock = stocksBlock;
    if (query) {
        currentStocksBlock = stocksBlock.filter((stock) =>
            stock.id.toLowerCase().includes(query.toLowerCase()),
        );
    }
    return NextResponse.json(currentStocksBlock);
}

async function getData() {
    let response = await fetch(`${stocksApi}`);
    if (response.ok) {
        return response.json();
    }
}

// Получение POST на сервере
export async function POST(req: Request) {
    const page: any = await req.json(); // Пришло с клиента
    const stockArray = await getData(); // Запрос с сервера на массив
    const arrayPage = splitArray(stockArray, 4); // Разбивка массива на страницы

    return NextResponse.json(
        arrayPage[+page.page - 1]
    );
}
// console.log(pageNum.id);