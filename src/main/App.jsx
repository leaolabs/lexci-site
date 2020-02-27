
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import logo from '../assets/images/logolexci.png'

import React from 'react'
import Footer from '../components/footer/Footer'
import Blog from '../components/blog/Blog'
import Login from '../components/login/Login'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'



export default props =>
    <BrowserRouter>
        <div className="app">
            <div className="container">
                <header className="blog-header py-3">
                    <div className="row flex-nowrap justify-content-between align-items-center">

                        <div className="col-5 text-center">
                            <a className="blog-header-logo text-dark" href="/">
                                <img src={logo} alt="logo lexci" />
                            </a>
                        </div>
                        <div className="col-3 d-flex justify-content-end align-items-center">
                            <Link to="/login" className="btn btn-outline-secondary">Login</Link>
                            <Route />
                        </div>
                    </div>
                </header>

                <div className="nav-scroller py-1 mb-2">
                    <nav className="nav d-flex justify-content-between">
                        <a className="p-2 text-muted" href="/">Nosso time</a>
                        <a className="p-2 text-muted" href="/">Contatos</a>
                        <a className="p-2 text-muted" href="/">Filiais</a>
                        <a className="p-2 text-muted" href="/">Exames que realizamos</a>
                    </nav>
                </div>

                <div className="row mb-3">
                    <div className="col">
                        <div className="card">
                            <div className="card-header">
                                Consulta de exames
                        </div>
                            <div className="card-body">
                                <h5 className="card-title">Consulte seus exames aqui</h5>
                                <p className="card-text">Colocar o formulario de consultas de exames aqui aaaaaaaaaaaaaaaaaa ada da ad</p>
                                <a href="/" className="btn btn-warning">Pesquisar</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mb-2">
                    <div className="col-md-6">
                        <div
                            className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <strong className="d-inline-block mb-2 text-danger">Coronavirus</strong>
                                <h3 className="mb-0">Sobre o novo virus</h3>
                                <div className="mb-1 text-muted">Fev 2020</div>
                                <p className="card-text mb-auto">O Ministério da Saúde confirmou nesta terça (25) o primeiro caso de coronavírus no Brasil.</p>
                                <a href="/" className="stretched-link">Continue lendo ...</a>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg"
                                    preserveAspectRatio="xMidYMid slice" focusable="false" role="img"
                                    aria-label="Placeholder: Thumbnail">
                                    <title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef"
                                        dy=".3em">Foto do virus</text>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div
                            className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <strong className="d-inline-block mb-2 text-success">Exames</strong>
                                <h3 className="mb-0">O que é um check-up?</h3>
                                <div className="mb-1 text-muted">Jan 19</div>
                                <p className="mb-auto">Bom, antes de explicar o básico dos exames de sangue e check-ups é preciso esclarecer alguns pontos.</p>
                                <a href="/" className="stretched-link">Continue lendo ...</a>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg"
                                    preserveAspectRatio="xMidYMid slice" focusable="false" role="img"
                                    aria-label="Placeholder: Thumbnail">
                                    <title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef"
                                        dy=".3em">Foto do exame</text>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Blog />

            <Footer />
        </div>
    </BrowserRouter>