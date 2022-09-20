import {createContext, useReducer} from "react";

const initialState = {
    filters: [
        {
            id: 1,
            name: 'Бренд',
            items: [
                {
                    "id": 1,
                    "title": "Apple"
                },
                {
                    "id": 2,
                    "title": "Xiaomi"
                }
            ]
        },
        {
            id: 2,
            name: 'Цвет',
            items: [
                {
                    "id": 1,
                    "title": "red"
                },
                {
                    "id": 2,
                    "title": "pink"
                },
                {
                    "id": 3,
                    "title": "black"
                },
                {
                    "id": 4,
                    "title": "white"
                }
            ]
        },
        {
            id: 3,
            name: 'Количество камер',
            items: [
                {
                    "id": "1",
                    "title": "1"
                },
                {
                    "id": "2",
                    "title": "2"
                },
                {
                    "id": "3",
                    "title": "3"
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
    active_filters: [],
}

const reducer = (state: object, action: object) => {
    switch (action.type) {
        case "BASKET_TOGGLE_ITEM": {

            if (state.basket.includes(action.payload)) {
                return {
                    ...state,
                    basket: state.basket.filter((id) => {
                        return id !== action.payload;
                    })
                }
            } else {
                return {
                    ...state,
                    basket: [...state.basket, action.payload]
                }
            }
        }
        case "FILTER_SELECTION": {
            console.log('action.payload', action.payload)
            if (state.active_filters.includes(action.payload)) {
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
            }
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