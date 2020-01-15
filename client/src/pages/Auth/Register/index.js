import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { RegisterTukang } from './RegisterTukang'
import { RegisterClient } from './RegisterClient'
import { RegisterContainer } from './RegisterContainer'

export default function Register() {
    return (
        <div>
            <Switch>
                <Route path='/register/tukang' component={RegisterTukang} />
                <Route path='/register/client' component={RegisterClient} />
                <Route path='/' component={RegisterContainer} />
            </Switch>
            
        </div>
    )
}
