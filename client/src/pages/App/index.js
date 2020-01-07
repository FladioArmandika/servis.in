import React from 'react'
import { Router, Route, Switch
 } from "react-router-dom";
import { Home } from '../Home';
import { Login } from '../Auth/Login';

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
            </Switch>
        </div>
    )
}
