
import { create } from "zustand";
import categoryProducts from "../public/categoryProducts.js";

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


