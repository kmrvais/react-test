import React, {useContext} from "react";
import Header from "../header";
import ProductList from "../product-list";
import FormFilter from "../form-filter";
import {CatalogContext} from "../../contexts/catalog";

const Catalog = () => {
    // @ts-ignore
    const [catalogState, dispatch] = useContext(CatalogContext);

    return (
        <div className="container">
            <Header/>
            <div className="container container_main">
                <div className="left-section">
                    <FormFilter/>
                </div>
                <div className="main-section">
                    <ProductList/>
                </div>
            </div>
        </div>
    )
}

export default Catalog;