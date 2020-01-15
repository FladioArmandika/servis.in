import React from 'react'
import { LoginForm } from './LoginForm'
import { Route } from 'react-router-dom'

export default function Login() {
    return (
        <div>
             <Route path='/' component={LoginForm} />
        </div>
    )
}
