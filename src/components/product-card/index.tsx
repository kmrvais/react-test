import React from "react";
import {Product} from "../../types";

type Props = Product & {
    onClickCard: (id: number) => void;
    inBasket: boolean;
}

const ProductCard:React.FC<Props> = ({id, name, quantity, brand, color, year, cameraQuantity, onClickCard, inBasket}) => {
    const buttonText = inBasket ? 'Удалить из корзины' : 'Добавить в корзину';
    return (
        <div className="product-card" data-id={id}>
            <div className="product-card__img"><img
                src="/Users/komarova/projects/kmrvais-JSFE2022Q1/online-store/src/img/iphone-13-pink-select-2021.png"></img>
            </div>
            <a className="product-card__link" onClick={() => onClickCard(id)}>
                {buttonText}
            </a>
            <div className="product-card__bottom">
                <div className="product-card__name">{name}</div>
                <div className="product-card__count">
                    <div>количество:</div>
                    <div>{quantity}</div>
                </div>
                <div className="product-card__brand">
                    <div>бренд:</div>
                    <div>{brand}</div>
                </div>
                <div className="product-card__color">
                    <div>цвет:</div>
                    <div>{color}</div>
                </div>
                <div className="product-card__year">
                    <div>год:</div>
                    <div>{year}</div>
                </div>
                <div className="product-card__cameras">
                    <div>количество камер:</div>
                    <div>{cameraQuantity}</div>
                </div>
            </div>
            {
                inBasket && (
                    <div className="product-card__status">В корзине</div>
                )
            }
        </div>
    )
}

export default ProductCard