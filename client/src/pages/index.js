import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Error404 from './Error/Error404'
import Auth from './Auth'
import { NavigationBar } from '../components'
import Service from './Service'

export const App = () => {
    return (
        <div>
            <NavigationBar/>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/auth' component={Auth} />
                <Route path='/service' component={Service} />

                <Route path='*' component={Error404} />


            </Switch>
        </div>
    )
}
