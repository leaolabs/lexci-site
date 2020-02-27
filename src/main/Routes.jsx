import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import Login from '../components/login/Login'
import Home from '../components/templates/home/Home'

export default props =>
    <Switch>
        <Route path='/login'>
            <Login />
        </Route>
        <Route exact patch='/'>
            <Home />
        </Route>
        <Redirect from="*" to="/" />
    </Switch>