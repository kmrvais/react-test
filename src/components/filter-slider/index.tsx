import React from "react";
import rangeSlider from '../range-slider/index';

type Props = {
    title: string;
    min: number;
    max: number;
    type: string;
}

const FilterSlider:React.FC<Props> = ({title, min, max, type}) => {
    const FilterSlider = document.createElement('div');
    FilterSlider.classList.add('form-filter__slider');
    const slider = rangeSlider(FilterSlider, min, max, type, [min, max]);
    console.log('FilterSlider', slider)
    return (
        <div className="form-filter__control">
            <div className="form-filter__title">{title}</div>
            {
                slider
            }
        </div>
    )
}

export default FilterSlider