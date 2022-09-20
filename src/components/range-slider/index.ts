import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

export default (element: Element, min: number, max: number, typeFilter: string, value: number[]) => {
    const marginMin: HTMLElement | null = element.querySelector('.form-filter-slider__value-min'),
        marginMax: HTMLElement | null = element.querySelector('.form-filter-slider__value-max');

    if (marginMin && marginMax) {
        noUiSlider.create(element, {
            start: value.length ? value : [min, max],
            connect: true,
            range: {
                min: min,
                max: max,
            },
            step: 1,
            format: {
                to: function (value) {
                    return Math.round(value);
                },
                from: function (value) {
                    return Math.round(Number(value));
                },
            },
        });

        element.noUiSlider.on('update', (values: number[], handle: number) => {
            if (handle) {
                marginMax.innerHTML = values[handle].toString();
            } else {
                marginMin.innerHTML = values[handle].toString();
            }
        });

        element.noUiSlider.on('change', (values: number[]) => {
            document.dispatchEvent(
                new CustomEvent('updateSlider', {
                    detail: { value: values, typeFilter: typeFilter },
                })
            );
        });
    }
};
