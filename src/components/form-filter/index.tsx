import React from "react";
import {useContext} from "react";
import {CatalogContext} from "../../contexts/catalog";
import FormControl from "../form-control";
//import FilterSlider from "../filter-slider";

const FormFilter = () => {
    // @ts-ignore
    const [CatalogState, dispatch] = useContext(CatalogContext);
    const filters = CatalogState.filters;
    const filtersSlider = CatalogState.filters_slider;

    return (
        <form className="form-filter">
            {
                filters.map((item: { id: any; name: any; items: any;}) => {
                    return (
                        <FormControl
                            key={item.id}
                            title={item.name}
                            items={item.items}
                        />
                    )
                })
            }
            {/*
                filtersSlider.map((item: { id: any; name: any; min: any; max: any; type: any}) =>  {
                    return (
                        <FilterSlider
                            key={item.id}
                            title={item.name}
                            min={item.min}
                            max={item.max}
                            type={item.type}
                        />
                    )
                })
            */}
        </form>
    )
};

export default FormFilter