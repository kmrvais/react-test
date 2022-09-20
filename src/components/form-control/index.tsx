import React, {useContext} from "react";
import {CatalogContext} from "../../contexts/catalog";

type Props = {
    title: string;
    items: {
       id: string;
       title: string;
    }[]
}

const FormControl:React.FC<Props> = ({title, items}) => {
    // @ts-ignore
    const [catalogState, dispatch] = useContext(CatalogContext);
    const filtersList = catalogState.active_filters;
    console.log('filtersList', filtersList)
    return (
        <div className="form-filter__control">
            <div className="form-filter__title">{title}</div>
            <div className="form-filter__items">
                {
                    items.map((item) => {
                        const inFiltersList = filtersList.includes(item.title);
                        const activeClass = inFiltersList ? "form-filter__control-item_active" : "";
                        return (
                            <button key={item.id}
                                    className={`form-filter__control-item ${activeClass}`}
                                    type="button"
                                    onClick={() => dispatch({type: "FILTER_SELECTION", payload: item.title})}>
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