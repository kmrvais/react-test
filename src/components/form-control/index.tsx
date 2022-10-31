import React, {useContext} from "react";
import {CatalogContext} from "../../contexts/catalog";

type Props = {
    title: string;
    items: {
       id: string;
       title: string;
       type: string;
    }[]
}

const FormControl:React.FC<Props> = ({title, items}) => {
    // @ts-ignore
    const [CatalogState, dispatch] = useContext(CatalogContext);
    const activeFilters = CatalogState.active_filters;
    const { brands, colors, quantity_of_cameras: quantityOfCameras } = activeFilters
    return (
        <div className="form-filter__control">
            <div className="form-filter__title">{title}</div>
            <div className="form-filter__items">
                {
                    items.map((item) => {
                        const inFiltersList = brands.includes(item.title) || colors.includes(item.title) || quantityOfCameras.includes(item.title);
                        const activeClass = inFiltersList ? "form-filter__control-item_active" : "";
                        return (
                            <button key={item.id}
                                    className={`form-filter__control-item ${activeClass}`}
                                    type="button"
                                    onClick={() => dispatch({type: "FILTER_SELECTION",
                                                            payload: {title: item.title, type: item.type}})}>
                                {item.title}
                            </button>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FormControl