import React from 'react'
import { Router, Route, Switch
 } from "react-router-dom";
import { Home } from '../Home';

import { Error404 } from '../Error/Error404';
import { Register, Login } from '../Auth';

export const App = () => {
    return (
        <div className="">
            <Switch>
                <Route exact path='/'>
                    <Home/>
                </Route>
                {/* <Route path='/login'>
                    <Login/>
                </Route> */}
                {/* <Route path='/login' component={Login}/> */}
                {/* <Route path='/register' component={Register}/>
                <Route path='/register/tukang' component={RegisterTukang} />
                <Route path='/register/client' component={RegisterClient} /> */}
                <Route path='/login' component={Login}/>
                <Route path='/register' component={Register}/>
                <Route path="*" component={Error404}/>
            </Switch>
        </div>
    )
}
