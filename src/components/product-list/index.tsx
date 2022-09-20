import React from "react";
import {useContext} from "react";
import {CatalogContext} from "../../contexts/catalog";
import ProductCard from "../product-card";

const ProductList = () => {
    // @ts-ignore
    const [CatalogState, dispatch] = useContext(CatalogContext);
    const productCards = CatalogState.product_cards;
    const basketList = CatalogState.basket;
    const activeFilters = CatalogState.active_filters;
    return (
        <div className="product-list">
            {
                productCards.map((card) => {
                    if (activeFilters.includes(card.brand)
                        || activeFilters.includes(card.color)
                        || activeFilters.includes(card.cameraQuantity)) {
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
                                onClickCard={(id) => {
                                    dispatch({type: "BASKET_TOGGLE_ITEM", payload: id})
                                }}
                            />
                        )
                    }
                    if (activeFilters.length === 0) {
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
                                onClickCard={(id) => {
                                    dispatch({type: "BASKET_TOGGLE_ITEM", payload: id})
                                }}
                            />
                        )
                    }
                })
            }
        </div>
    );
};

export default ProductList;