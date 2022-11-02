import React from "react";
import Header from "../header";
import ProductList from "../product-list";
import FormFilter from "../form-filter";

const Catalog = () => {
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