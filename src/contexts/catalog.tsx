import {createContext, useReducer} from "react";
import filterSlider from "../components/filter-slider";
import {Product} from "../types";

type Filter = {
    id: number;
    name: string;
    items: {
        id: number;
        title: string;
        type: string;
    }[]
}

type FilterSlider = {
    id: number;
    name: string;
    max: number;
    min: number;
    type: string;
}

type State = {
    filters: Filter[],
    filters_slider: FilterSlider[];
    product_cards: Product[],
    basket: number[],
    active_filters: {
        brands: string[],
        colors: string[],
        quantity_of_cameras: string[],
    }
}

type Action = {
    type: string;
    payload: string | number | { type: string, title: string };
}

const initialState: State = {
    filters: [
        {
            id: 1,
            name: 'Бренд',
            items: [
                {
                    "id": 1,
                    "title": "Apple",
                    "type": "brands"
                },
                {
                    "id": 2,
                    "title": "Xiaomi",
                    "type": "brands"
                }
            ]
        },
        {
            id: 2,
            name: 'Цвет',
            items: [
                {
                    "id": 1,
                    "title": "red",
                    "type": "colors"
                },
                {
                    "id": 2,
                    "title": "pink",
                    "type": "colors"
                },
                {
                    "id": 3,
                    "title": "black",
                    "type": "colors"
                },
                {
                    "id": 4,
                    "title": "white",
                    "type": "colors"
                }
            ]
        },
        {
            id: 3,
            name: 'Количество камер',
            items: [
                {
                    "id": 1,
                    "title": "1",
                    "type": "quantity_of_cameras"
                },
                {
                    "id": 2,
                    "title": "2",
                    "type": "quantity_of_cameras"
                },
                {
                    "id": 3,
                    "title": "3",
                    "type": "quantity_of_cameras"
                }
            ]
        },
    ],
    filters_slider: [
        {
            id: 1,
            name: "Остаток на складе",
            max: 122,
            min: 2,
            type: "stocks"
        },
        {
            id: 2,
            name: "Год выпуска",
            max: 2022,
            min: 2010,
            type: "years"
        }
    ],
    product_cards: [
        {
            "id": 1,
            "img": "/Users/komarova/projects/kmrvais-JSFE2022Q1/online-store/src/img/iphone-13-pink-select-2021.png",
            "name": "iPhone",
            "quantity": 12,
            "brand": "Apple",
            "isPopular": true,
            "color": "pink",
            "year": 2010,
            "cameraQuantity": "2"
        },
        {
            "id": 2,
            "img": "/Users/komarova/projects/kmrvais-JSFE2022Q1/online-store/src/img/phone.jpeg",
            "name": "iPhone10",
            "quantity": 36,
            "brand": "Apple",
            "isPopular": true,
            "color": "black",
            "year": 2019,
            "cameraQuantity": "3"
        },
        {
            "id": 3,
            "img": "/Users/komarova/projects/kmrvais-JSFE2022Q1/online-store/src/img/phone1.jpeg",
            "name": "iPhone11",
            "quantity": 2,
            "brand": "Apple",
            "isPopular": true,
            "color": "red",
            "year": 2019,
            "cameraQuantity": "3"
        },
        {
            "id": 4,
            "img": "/Users/komarova/projects/kmrvais-JSFE2022Q1/online-store/src/img/phone2.jpeg",
            "name": "iPhone11",
            "quantity": 45,
            "brand": "Apple",
            "isPopular": true,
            "color": "pink",
            "year": 2012,
            "cameraQuantity": "3"
        },
        {
            "id": 5,
            "img": "/Users/komarova/projects/kmrvais-JSFE2022Q1/online-store/src/img/phonered.jpeg",
            "name": "iPhone11",
            "quantity": 5,
            "brand": "Apple",
            "isPopular": true,
            "color": "red",
            "year": 2019,
            "cameraQuantity": "3"
        },
        {
            "id": 6,
            "img": "/Users/komarova/projects/kmrvais-JSFE2022Q1/online-store/src/img/xiaomi-redmi.png",
            "name": "iPhone11",
            "quantity": 67,
            "brand": "Xiaomi",
            "isPopular": true,
            "color": "red",
            "year": 2019,
            "cameraQuantity": "1"
        }
    ],
    basket: [],
    active_filters: {
        brands: [],
        colors: [],
        quantity_of_cameras: [],
    }
}

localStorage.setItem('filters', JSON.stringify(initialState.active_filters));

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case "BASKET_TOGGLE_ITEM": {
            if (state.basket.includes(+action.payload)) {
                let basketNew = state.basket.filter((id) => {
                    return id !== action.payload;
                })
                localStorage.setItem('basket', JSON.stringify(basketNew));
                return {
                    ...state,
                    basket: basketNew
                }
            } else {
                let basketNew = [...state.basket, action.payload]
                localStorage.setItem('basket', JSON.stringify(basketNew));
                return {
                    ...state,
                    basket: basketNew
                }
            }
        }
        case "FILTER_SELECTION": {
            const filterItem = action.payload;
            const activeFilters = state.active_filters;
            let newValue;

            for (let key in activeFilters) {
                if (key === filterItem.type) {
                    if (activeFilters[key].includes(filterItem.title)) {
                        newValue = activeFilters[key].filter((title) => {
                            return title !== filterItem.title;
                        })
                    } else {
                        newValue = [...activeFilters[key], filterItem.title]
                    }

                    return {
                        ...state,
                        active_filters: {
                            ...state.active_filters,
                            [key]: newValue
                        }
                    }
                }
            }

            /*if (state.active_filters.includes(action.payload)) {
                return {
                    ...state,
                    active_filters: state.active_filters.filter((title) => {
                        return title !== action.payload;
                    })
                }
            } else {
                return {
                    ...state,
                    active_filters: [...state.active_filters, action.payload]
                }
            }*/
        }
        default: {
            return state
        }
    }
}

// @ts-ignore
export const CatalogContext = createContext();

// @ts-ignore
export const CatalogProvider = ({children}) => {
    const value = useReducer(reducer, initialState);

    return (
        // @ts-ignore
        <CatalogContext.Provider value={value}>{children}</CatalogContext.Provider>
    )
}