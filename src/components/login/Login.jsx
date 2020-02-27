import 'bootstrap/dist/css/bootstrap.min.css'
import './Login.css'
import React, { Component } from 'react'
import logo from '../../assets/images/logolexci.png'

export default class Login extends Component {
    render() {
        return (
            <div className="text-center">
                <form className="form-signin">
                    <img className="mb-4" src={logo} alt="Logo Lexci" width="72" height="72" />
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <label for="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                    <label for="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> Lembrar meu usuario
                    </label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2017-2020</p>
                </form>
            </div>
        )
    }
}