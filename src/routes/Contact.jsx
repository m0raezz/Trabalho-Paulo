import React from 'react'
import Footer from '../components/Footer';
import 'bootstrap-icons/font/bootstrap-icons.css';
import team1 from '../imagens/team-1.jpg';
import team2 from '../imagens/team-2.jpg';
import team3 from '../imagens/team-3.jpg';
import "../Sobre_css.css";


const Contact = () => {
  return (
    <div id="team" class="team section-bg">

      <div class="container" data-aos="fade-up">

        <div class="section-title text-center">
          <h1><strong>EQUIPE</strong></h1>
          
            Aqui estão todos os integrantes que participaram desse projeto e seus respectivos cargos.

          
        </div>

        <div class="row">

          <div class="col-lg-6" data-aos="zoom-in" data-aos-delay="100">
            <div class="member d-flex align-items-start">
              <div class="pic"> <img src={team3} class="img-fluid" alt='img'></img></div>
              <div class="member-info">
                <h4>Letycia Conde</h4>
                <span>Frontend</span>
                <p>Estruturou e participou da criação das paginas do site.</p>
                <div class="social">

                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="200">
            <div class="member d-flex align-items-start">
              <div class="pic"></div>
              <div class="member-info">
                <h4>Pablo Nogueira</h4>
                <span>Frontend</span>
                <p>Participou na criação da estrutura visual do site.</p>
                <div class="social">

                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="300">
            <div class="member d-flex align-items-start">
              <div class="pic"> <img src={team1} class="img-fluid" alt='img'></img></div>
              <div class="member-info">
                <h4>Renan Moraes</h4>
                <span>Backend e Frontend</span>
                <p>Responsavel pela parte de funcionamento interno e visual do site.</p>
                <div class="social">

                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="400">
            <div class="member d-flex align-items-start">
              <div class="pic"> <img src={team2} class="img-fluid" alt='img'></img></div>
              <div class="member-info">
                <h4>Julia Sorrente</h4>
                <span>Frontend</span>
                <p>Responsavel pela parte visual e estrutural das páginas.</p>
                <div class="social">

                </div>
              </div>
            </div>
          </div>
        </div>

        <section id="contact" class="contact">
          <div class="container" data-aos="fade-up">

            <div class="section-title text-center">
              <h1><strong>CONTATO</strong></h1>
              Caso precise de ajuda não fique com medo de nos contatar, basta apenas prencher o formulario abaixo.
            </div>

            <div class="row">

              <div class="col-lg-5 d-flex align-items-stretch">
                <div class="info">
                  <div class="address">
                    <i class="bi bi-geo-alt"></i>
                    <h4>Localização</h4>
                    <p>Bebedouro Shopping, Bebedouro - SP, Brasil</p>
                  </div>

                  <div class="email">
                    <i class="bi bi-envelope"></i>
                    <h4>Email:</h4>
                    <p>email@exemplo.com</p>
                  </div>

                  <div class="phone">
                    <i class="bi bi-phone"></i>
                    <h4>Telefone:</h4>
                    <p>+55 17 99779 1234</p>
                  </div>

                  <iframe id='iframe' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1317.3696424468571!2d-48.49342234144626!3d-20.949140354371302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bbe40a222c1f3d%3A0x6a614e04cee7c61d!2sBebedouro%20Shopping!5e0!3m2!1spt-BR!2sbr!4v1701003739767!5m2!1spt-BR!2sbr" frameborder="0" allowfullscreen></iframe>
                </div>

              </div>

              <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                  <div class="row">
                    <div class="form-group col-md-6">
                      <label for="name">Seu Nome</label>
                      <input type="text" name="name" class="form-control" id="name" required />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="name">Seu Email</label>
                      <input type="email" class="form-control" name="email" id="email" required />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="name">Situação</label>
                    <input type="text" class="form-control" name="subject" id="subject" required />
                  </div>
                  <div class="form-group">
                    <label for="name">Mensagem</label>
                    <textarea class="form-control" name="message" rows="10" required></textarea>
                  </div>
                  <div class="my-3">
                    <div class="loading">Carregando</div>
                    <div class="error-message"></div>
                    <div class="sent-message">Sua mensagem foi enviada, retornaremos em breve!.</div>
                  </div>
                  <div class="text-center"><button type="submit">Send Message</button></div>
                </form>
              </div>

            </div>

          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Contact