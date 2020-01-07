import React from 'react'
import { Router, Route, Switch
 } from "react-router-dom";
import { Home } from '../Home';

export const App = () => {
    return (
        <div className="">
            <Switch>
                <Route exact path='/'>
                    <Home/>
                </Route>
            </Switch>
        </div>
    )
}
