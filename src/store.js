
import { create } from "zustand";
import categoryProducts from "../public/categoryProducts.js";
import tab_menu_card from "../public/tab_menu_card.js";

export const useOption = create((set) => ({
    option: [categoryProducts[0]],
    loading: false,
    error: null,
    changeOption: (params) => set((state) => (state.option = [params])),
}));

export const useFilterCatalog = create((set, get) => ({
    filterValue: [],
    changeFilterValue: (params) =>
        set((state) => {
            let newParams;
            if (state.filterValue.findIndex((item) => item.id === params.id) === -1) {
                newParams = params
                return (state.filterValue = [...state.filterValue, newParams]);
            } else {
                return state.filterValue;
            }
        }),
    removeFilter(id) {
        const newFilterValue = get().filterValue.filter((e) => e.id !== id);
        set({ filterValue: newFilterValue });
    },
    deleteAll: () => set((state) => (state.filterValue = [])),

}));

export const useFilterData = create((set, get) => ({
    rangeDefaultValue: [3000, 17000],
    rangeCurrentValue: [3000, 17000],
    currentRangeValue(params) {
        set({ rangeCurrentValue: [params[0], params[1]] });
    },
    defaultRangeValue() {
        set({
            rangeCurrentValue: [
                get().rangeDefaultValue[0],
                get().rangeDefaultValue[1],
            ],
        });
    },
    rangeEvent: false,
    changeRangeEvent(params) {
        set({ rangeEvent: params });
    },
    inputDefaultSelect: [],
    inputSelect: [],
    defautArray() {
        let newArr = structuredClone(get().inputSelect)
        set({ inputDefaultSelect: newArr });
    },
    changeRadioInput(params) {
        get().inputSelect.map((el) => {
            if (el.type === "radio" && el.name === params.name) {
                let arr = [];
                arr.push(el);
                arr.map((e) => {
                    if (e.id === params.id) {
                        el.checked = params.checked;
                    } else {
                        e.checked = !params.checked;
                    }
                });
            }
            if (el.type === "checkbox" && el.name === params.name) {
                let arr = [];
                arr.push(el);
                arr.map((e) => {
                    if (e.id === params.id) {
                        el.checked = params.checked;
                    }
                });
            }
        });
        set({ inputSelect: [...get().inputSelect] });
    },
    defaultSelectInput(params) {
        get().inputSelect.map((el) => {
            params.map((curr) => {
                if (el.id === curr.id) {
                    get().inputDefaultSelect.map((def) => {
                        if (def.id === curr.id) {
                            el.checked = def.checked
                        }
                    });
                }
            });
        })
        set({ inputSelect: [...get().inputSelect] });
    },
    defaultSelectImputAll() {
        set({ inputSelect: [...get().inputDefaultSelect] });
    }
}));

export const useTabCard = create((set, get) => ({
    tabCard: [...tab_menu_card],
    changeTabCard(params) {
        get().tabCard.map((el) => {
            if (el.title === params.title) {
                el.active = true
            } else {
                el.active = false
            }
        });
        set({ tabCard: [...get().tabCard] });
    }
}));

export const usePopapInterActive = create((set, get) => ({
    popapInter: false,
    changePopapInter() {
        set({ popapInter: !get().popapInter });
    }
}))
export const usePopapRegisterActive = create((set, get) => ({
    popapRegister: false,
    changePopapRegister() {
        set({ popapRegister: !get().popapRegister });
    },
}));
export const usePopapSearchActive = create((set, get) => ({
    popapSearch: false,
    changePopapSearch() {
        set({ popapSearch: !get().popapSearch });
    }
}))
export const useMobMenuMore = create((set, get) => ({
    mobMenuMore: false,
    changeMobMenuMore() {
        set({ mobMenuMore: !get().mobMenuMore });
    },
}));
export const useMobMenuCatalog = create((set, get) => ({
    mobMenuCatalog: false,
    changeMobMenuCatalog() {
        set({ mobMenuCatalog: !get().mobMenuCatalog });
    },
}));

export const usePopapBacketActive = create((set, get) => ({
    popapBacket: false,
    changePopapBacket() {
        set({ popapBacket: !get().popapBacket });
    },
}));

export const useBasket = create((set, get) => ({
    basket: [], // Корзина
    virtualBasket: [], // Копия корзины
    totalPriceCount: { // Итоговая цена и колличество
        totalPrice: undefined,
        countProducts: undefined,
    },
    changeTotalPriceDefault() { // Первичный подсчёт товаров добавленных в корзину
        let defaultTotalPrice = {};
        if (get().basket.length > 0) {
            defaultTotalPrice.totalPrice = get().basket.reduce((prev, curr) => {
                return +prev + +curr.price
            }, 0);
            defaultTotalPrice.countProducts = get().basket.reduce(
                (prev, curr) => {
                    return +prev + +curr.counter;
                },
                0,
            );
        }
        set({ totalPriceCount: defaultTotalPrice });
    },

    changeBasket(params) { // Добавление товаров в корзину
        params.counter = 1;
        if (get().basket.findIndex((item) => item.id === params.id) === -1) {
            set({ basket: [...get().basket, params] });
        }
    },
    removeBasket(id) {
        // Удаление товаров из корзины
        const newBasket = get().basket.filter((e) => e.id !== id);
        set({ basket: newBasket });
    },
    creatVirtualBasket() { // Создание копии корзины
        let newArr = structuredClone(get().basket);
        set({ virtualBasket: newArr });
    },
    changeCounterProductPlus(id) { // Добавление колличество товара и изменение цены
        let newBasket = [];
        get().virtualBasket.map((product) => {
            if (product.id === id) {
                return (newBasket = get().basket.map((el) => {
                    if (el.id === id) {
                        if (el.counter < 9) {
                            return {
                                ...el,
                                counter: ++el.counter,
                                price: `${+product.price * el.counter}`,
                            };
                        }
                    }
                    return { ...el };
                }));
            }
        });
        set({ basket: newBasket });
    },
    changeCounterProductMinus(id) {
        // Удаление колличество товара и изменение цены
        let newBasket = [];
        get().virtualBasket.map((product) => {
            if (product.id === id) {
                return (newBasket = get().basket.map((el) => {
                    if (el.id === id) {
                        if (el.counter > 1) {
                            return {
                                ...el,
                                counter: --el.counter,
                                price: `${+product.price * el.counter}`,
                            };
                        }
                    }
                    return { ...el };
                }));
            }
        });
        set({ basket: newBasket });
    },
}));

export const useCompare = create((set, get) => ({
    compare: [], // Сравнение
    virtualCompare: [], // Копия сравнения
    countCompare: 0,
    changeCompare(params) {
        // Добавление товаров в сравнение
        ++get().countCompare
        set({ countCompare: get().countCompare });
        params.compare = true;
        if (get().compare.findIndex((item) => item.id === params.id) === -1) {
            if (get().countCompare < 4) set({ compare: [...get().compare, params] });
        }
    },
    removeCompare(id) {
        // Удаление товаров из сравнения
        const newCompare = get().compare.filter((e) => e.id !== id);
        set({ compare: newCompare });
    },
}));
export const useFavourites = create((set, get) => ({
    favourites: [],
    changeFavourites(params) {
        // Добавление товаров в избранное
        params.favouriteBoolean = true;
        if (get().favourites.findIndex((item) => item.id === params.id) === -1) {
            set({ favourites: [...get().favourites, params] });
        }
    },
    removeFavourites(id) {
        // Удаление товаров из избранного
        const newFavourites = get().favourites.filter((e) => e.id !== id);
        set({ favourites: newFavourites });
    }
}));

