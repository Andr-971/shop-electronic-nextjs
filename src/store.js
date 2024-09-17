
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
        // set({ rangeMinValue: params[0], rangeMaxValue: params[1] });
    },
    rangeEvent: false,
    changeRangeEvent(params) {
        set({ rangeEvent: params });
    }
    
}))


