import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter, Router } from "react-router-dom";
import { App } from './pages';
import { createStore, combineReducers } from 'redux';
import rootReducer from './state';

import 'bootstrap/dist/css/bootstrap.css'


const store = createStore(rootReducer)

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
    , document.getElementById('root'));
