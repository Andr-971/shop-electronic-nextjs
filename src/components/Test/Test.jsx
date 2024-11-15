"use client"
import React from "react"
import { useState, useEffect } from "react";
import "./Test.css"

const product = [
    {
        id: 1,
        name: "КОНСТРУКТОР LEGO",
        price: 300,
        inCart: false,
    },
    {
        id: 2,
        name: "ЖЕЛЕЗНОДОРОЖНАЯ СТАНЦИЯ",
        price: 200,
        inCart: false,
    },
    {
        id: 3,
        name: "ГОРЯЧИЕ КОЛЕСЫ ТРЕССА",
        price: 150,
        inCart: false,
    },
];

const Test = () => {
    const [cart, setCart] = useState([]);
    // В итоговую сумму должно идти количество умноженное на цену
    const cartTotalAll = cart.reduce(
        (totalAll, item) => totalAll + item.price * item.count,
        0,
    );
    // Добавление в корзину и количество по дефолту 1
    // добавить в корзину функция
    const addToCart = (item) =>
        setCart((currentCart) => {
            item.count = 1; // Увеличиваем количество товара в корзине
            item.inCart = true; // Взводим флаг наличия товара в корзине
            return [...currentCart, item];
        });
    // Увеличивает количество товара в корзине
    // Вкл
    const incCount = (id) =>
        setCart((currentCart) => {
            return currentCart.map((cur) => {
                if (cur.id === id) {
                    cur.count++;
                }
                return cur;
            });
        });
    // Удаление из корзины
    // Удалить с корзины
    const removeFromCart = (id) => {
        setCart((currentCart) => {
            const indexOfItemToRemove = currentCart.findIndex(
                (cartItem) => cartItem.id === id,
            );

            if (indexOfItemToRemove === -1) {
                return currentCart;
            }
            // Получаем найденный элемент
            const elem = currentCart[indexOfItemToRemove];
            if (elem.count > 1) {
                // Если товаров больше одного
                elem.count--; // Уменьшаем счетчик
                // Меняем элемент
                currentCart.splice(indexOfItemToRemove, 1, elem);
            } else {
                // Если товар единственный
                product.forEach((it) => {
                    // Метим, что товара более нет в корзине
                    if (it.id === id) it.inCart = false;
                });
                // Удаляем элемент
                currentCart.splice(indexOfItemToRemove, 1);
            }
            // Сохраняем состояние
            return [...currentCart];
        });
    };
    // Получаем сумму по товару
    const cartTotal = (id) => {
        const val = cart.find((item) => item.id === id);
        if (val) {
            return val.count * (val.price || 0);
        }
        return 0;
    };
    // количество предметов
    const amountOfItems = (id) =>
        cart.find((item) => item.id === id)?.count || 0;
    // Список элементов, чтобы добавить
    const listItemsToAdd = () =>
        product.map((item) => (
            <div key={item.id}>
                <table>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>
                        <button
                            type="submit"
                            onClick={() =>
                                item.inCart
                                    ? incCount(item.id)
                                    : addToCart(item)
                            }
                        >
                            {" "}
                            +{" "}
                        </button>
                        &nbsp;&nbsp;&nbsp;
                        <button
                            type="submit"
                            onClick={() =>
                                item.inCart ? removeFromCart(item.id) : ""
                            }
                        >
                            {" "}
                            -{" "}
                        </button>
                    </td>
                    <td>Количество {amountOfItems(item.id)}</td>
                    <td>Итого: ${cartTotal(item.id)}</td>
                </table>
            </div>
        ));
    return (
        <div>
            Корзина
            <div>{listItemsToAdd()}</div>
            <div>Итого: ${cartTotalAll}</div>
        </div>
    );
}

export default Test;