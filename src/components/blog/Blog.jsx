import './Blog.css'
import React from 'react'

export default props =>
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