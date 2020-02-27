import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import App from './App'
import Login from '../components/login/Login'

export default props =>
    <Switch>
        <Route path='/login'>
            <Login />
        </Route>
        <Route exact patch='/'>
            <App />
        </Route>
        <Redirect from="*" to="/" />
    </Switch>