import React from "react";
import {useContext} from "react";
import {CatalogContext} from "../../contexts/catalog";
import {Product} from "../../types";
import ProductCard from "../product-card";

const ProductList = () => {
    // @ts-ignore
    const [CatalogState, dispatch] = useContext(CatalogContext);
    let productCards = CatalogState.product_cards;
    const basketList = CatalogState.basket;
    const activeFilters = CatalogState.active_filters;
    const {brands, colors, quantity_of_cameras: quantityOfCameras} = activeFilters

    if (brands.length) {
        productCards = productCards.filter(function (card: Product) {
            return brands.includes(card.brand)
        })
    }

    if (colors.length) {
        productCards = productCards.filter(function (card: Product) {
            return colors.includes(card.color)
        })
    }

    if (quantityOfCameras.length) {
        productCards = productCards.filter(function (card: Product) {
            return quantityOfCameras.includes(card.cameraQuantity)
        })
    }

    return (
        <div className="product-list">
            {
                productCards.map((card: Product) => {
                    return (
                        <ProductCard
                            key={card.id}
                            id={card.id}
                            name={card.name}
                            quantity={card.quantity}
                            brand={card.brand}
                            color={card.color}
                            year={card.year}
                            cameraQuantity={card.cameraQuantity}
                            inBasket={basketList.includes(card.id)}
                            onClickCard={(id: number) => {
                                dispatch({type: "BASKET_TOGGLE_ITEM", payload: id})
                            }}
                        />
                    )
                })
            }
        </div>
    );
};

export default ProductList;