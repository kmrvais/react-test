import React from 'react';
import ReactDOM from 'react-dom/client';
import Catalog from "./components/catalog";
import './index.sass';
import {CatalogProvider} from "./contexts/catalog";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <CatalogProvider>
            <Catalog/>
        </CatalogProvider>
    </React.StrictMode>
);
