import React from 'react'
import { Router, Route, Switch
 } from "react-router-dom";
import { Home } from '../Home';
import { Login } from '../Auth/Login';
import { Register } from '../Auth/Register';

export const App = () => {
    return (
        <div className="">
            <Switch>
                <Route exact path='/'>
                    <Home/>
                </Route>
                <Route path='/login'>
                    <Login/>
                </Route>
                <Route path='/register'>
                    <Register/>
                </Route>
            </Switch>
        </div>
    )
}
