import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import thunk from 'redux-thunk'
import { BrowserRouter, Router } from "react-router-dom";
import { App } from './pages';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import rootReducer from './state';

import 'bootstrap/dist/css/bootstrap.css'


const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
    , document.getElementById('root'));
