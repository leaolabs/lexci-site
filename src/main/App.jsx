
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import logo from '../assets/images/logolexci.png'
import './App.css'

import React from 'react'


export default props =>
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
                        <a className="btn btn-outline-secondary" href="/">Login</a>
                    </div>
                </div>
            </header>

            <div className="nav-scroller py-1 mb-2">
                <nav className="nav d-flex justify-content-between">
                    <a className="p-2 text-muted" href="/">Novidades</a>
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
                                    dy=".3em">Thumbnail</text>
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
                                    dy=".3em">Thumbnail</text>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <main role="main" className="container">
            <div className="row">
                <div className="col-md-8 blog-main">
                    <h3 className="pb-4 mb-4 font-italic border-bottom">Leia mais </h3>

                    <div className="blog-post">
                        <h2 className="blog-post-title">O que é um check-up?</h2>
                        <p className="blog-post-meta">Janeiro 20, 2019 by <a href="/">Dr. Marcio Gimenes</a></p>

                        <p>Todo mundo já fez um check-up pelo menos uma vez na vida. Algumas pessoas exageram e procuram seu médico de 6 em 6 meses para realizar seus exame</p>
                        <hr />
                        <p>Cum sociis natoque penatibus et magnis <a href="/">dis parturient montes</a>, nascetur ridiculus
                            mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere
                        consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
                        <blockquote>
                            <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong>
                                ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                        </blockquote>
                        <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet
                        fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
                        <h2>Hemograma</h2>
                        <p>O hemograma é o exame para avaliar as três principais linhagens de células do sangue (hemácias, leucócitos e plaquetas). É o mais complexo e o que merece maiores explicações. Concentre-se apenas naqueles que explicarei.</p>
                        <h3>Hemácias (glóbulos vermelhos)</h3>
                        <p>Serve para o diagnóstico de anemia, que é a redução do número de células vermelhas. São levados em conta principalmente os valores do hematócrito e da hemoglobina. Valores um pouco fora da faixa de referência podem não ter significado clínico. Mulheres podem ter hematócrito/hemoglobina um pouco mais baixo devido a perdas de sangue na menstruação. Fumantes costumam tê-los um pouco elevado devido a pior oxigenação do sangue pelos seus pulmões. Repito: esses valores devem sempre ser interpretados</p>
                        <h3>Leucócitos (glóbulos brancos)</h3>
                        <p>
                            São as nossas células de defesa. É o exército ou a polícia do organismo. Chamamos de leucocitose quando estão aumentados. Normalmente indicam uma resposta do organismo a um processo infeccioso em curso. Pacientes com pneumonia ou um abscesso de pele, por exemplo, costumam ter seu número de leucócitos aumentados. A ausência de leucocitose de modo algum descarta uma infecção. Mais uma vez, o quadro clínico é sempre soberano.
                        </p>
                    </div>

                    <div className="blog-post">
                        <h2 className="blog-post-title">Outra postagem do blog</h2>
                        <p className="blog-post-meta">Dezembro 28, 2019 by <a href="/">Dr. Marcio Gimenes</a></p>

                        <p>Cum sociis natoque penatibus et magnis <a href="/">dis parturient montes</a>, nascetur ridiculus
                            mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere
                        consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
                        <blockquote>
                            <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong>
                                ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                        </blockquote>
                        <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet
                        fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
                        <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non
                            commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus,
                        porta ac consectetur ac, vestibulum at eros.</p>
                    </div>

                    <div className="blog-post">
                        <h2 className="blog-post-title">Outra postagem qualquer</h2>
                        <p className="blog-post-meta">Novembro 14, 2019 by <a href="/">Michelle Carvalho</a></p>

                        <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean
                            lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce
                            dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit
                        amet risus.</p>
                        <ul>
                            <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
                            <li>Donec id elit non mi porta gravida at eget metus.</li>
                            <li>Nulla vitae elit libero, a pharetra augue.</li>
                        </ul>
                        <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet
                        fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
                        <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.
                    </p>
                    </div>

                    <nav className="blog-pagination">
                        <a className="btn btn-outline-primary" href="/">Antigos</a>
                        <a className="btn btn-outline-secondary disabled" href="/" tabindex="-1" aria-disabled="true">Novos</a>
                    </nav>

                </div>

                <aside className="col-md-4 blog-sidebar">
                    <div className="p-4 mb-3 bg-light rounded">
                        <h4 className="font-italic">Sobre nós</h4>
                        <p className="mb-0">Somos um laboratorio especializado em varios tipos de exame, venha fazer exames conosco e tal ...</p>
                    </div>

                    <div className="p-4">
                        <h4 className="font-italic">Arquivos</h4>
                        <ol className="list-unstyled mb-0">
                            <li><a href="/">Fevereiro 2020</a></li>
                            <li><a href="/">Janeiro 2020</a></li>
                            <li><a href="/">Dezembro 2019</a></li>
                            <li><a href="/">Novembro 2019</a></li>
                        </ol>
                    </div>

                    <div className="p-4">
                        <h4 className="font-italic">Redes sociais</h4>
                        <ol className="list-unstyled">
                            <li><a href="https://www.instagram.com/lexciexameseconsultas/?hl=pt-br" target="blank">Instagram</a></li>
                            <li><a href="https://www.facebook.com/lexcilab/" target="blank">Facebook</a></li>
                        </ol>
                    </div>
                </aside>

            </div>

        </main>

        <footer className="blog-footer">
            <p>Desenvolvido por Leonardo Nascimento Cintra <a
                href="/ttps://twitter.com/leonardoncintra">@leonardoncintra</a>.</p>
            <p>
                <a href="/">Voltar para o topo</a>
            </p>
        </footer>
    </div>