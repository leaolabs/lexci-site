import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="/">Lexci</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home
              <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Sobre nós</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Serviços</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Contato</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="bg-primary py-5 mb-5">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-lg-12">
              <h1 className="display-4 text-white mt-5 mb-2">Lexci - Laboratorio</h1>
              <p className="lead mb-5 text-white-50">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non possimus ab labore provident mollitia. Id assumenda voluptate earum corporis facere quibusdam quisquam iste ipsa cumque unde nisi, totam quas ipsam.</p>
            </div>
          </div>
        </div>
      </header>

      <div class="container">

        <div class="row">
          <div class="col-md-8 mb-5">
            <h2>What We Do</h2>
            <hr />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A deserunt neque tempore recusandae animi soluta quasi? Asperiores rem dolore eaque vel, porro, soluta unde debitis aliquam laboriosam. Repellat explicabo, maiores!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis optio neque consectetur consequatur magni in nisi, natus beatae quidem quam odit commodi ducimus totam eum, alias, adipisci nesciunt voluptate. Voluptatum.</p>
            <a class="btn btn-primary btn-lg" href="/">Call to Action &raquo;</a>
          </div>
          <div class="col-md-4 mb-5">
            <h2>Nossas unidades</h2>
            <hr />
            <address>
              <strong>Shopping do Calçado</strong>
              <br /> Fone: (16) 3456-7890
              <br />Franca, SP nº 123
              <br />
            </address>
            <address>
              <strong>Santos Dumont</strong>
              <br /> Fone: (16) 3456-7890
              <br />Franca, SP nº 123
              <br />
            </address>
            <address>
              <strong>Ibiraci</strong>
              <br /> Fone: (35) 4456-7890
              <br />Ibiraci, MG nº 123
              <br />
            </address>
            <address>
              <strong>São Tomáz de Aquino</strong>
              <br /> Fone: (35) 4456-7890
              <br />São Tomáz de Aquino, MG nº 123
              <br />
            </address>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4 mb-5">
            <div class="card h-100">
              <img class="card-img-top" src="http://placehold.it/300x200" alt="" />
              <div class="card-body">
                <h4 class="card-title">Card title</h4>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.</p>
              </div>
              <div class="card-footer">
                <a href="/" class="btn btn-primary">Find Out More!</a>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-5">
            <div class="card h-100">
              <img class="card-img-top" src="http://placehold.it/300x200" alt="" />
              <div class="card-body">
                <h4 class="card-title">Card title</h4>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus totam ut praesentium aut.</p>
              </div>
              <div class="card-footer">
                <a href="/" class="btn btn-primary">Find Out More!</a>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-5">
            <div class="card h-100">
              <img class="card-img-top" src="http://placehold.it/300x200" alt="" />
              <div class="card-body">
                <h4 class="card-title">Card title</h4>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
              </div>
              <div class="card-footer">
                <a href="/" class="btn btn-primary">Find Out More!</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
