import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Login from '../Auth/Login'
import Register from '../Auth/Register'

const Auth = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/auth' >
                    <Login/>
                </Route>
                <Route path="/auth/login" component={Login}/>
                <Route path="/auth/register" component={Register}/>
            </Switch>
        </div>
    )
}

export default Auth
