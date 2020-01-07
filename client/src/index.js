import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter, Router } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";

import configureStore from "./store";

import { App } from "./pages";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={configureStore()}>
            <App/>
        </Provider>
    </BrowserRouter>
    
    , document.getElementById('root'));
