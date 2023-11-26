import React from 'react';
import Footer from '../components/Footer';
import {Link} from 'react-router-dom';
import "../Sobre_css.css";
import us from '../imagens/why-us.png';



const Sobre = () => {
  return (
    <div id="why-us" class="why-us section-bg container-fluid">
     

        <div class="row">

          <div class="col-lg-7 d-flex flex-column justify-content-center   order-2 order-lg-2">

            <div class="content">
              <h3>Nossa empresa pensa nas <strong> melhores opções para o consumidor.</strong></h3>
              <p>
                Visando uma melhor experiencia do cliente nó criamos nosso site para tornar o processo de compra ou alugar um imovel mais facil.
              </p>
            </div>

            <div class="accordion-list">
              <ul>
                <li>
                  <Link id="LINK" to ="/sobre" data-bs-toggle="collapse" class="collapse" data-bs-target="#accordion-list-1"><span>01</span> O uso da nossa plataforma é gratuito? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></Link>
                  <div id="accordion-list-1" class="collapse show" data-bs-parent=".accordion-list">
                    <p>
                      Sim! a plataforma é <strong>100% gratuita</strong> sem nenhum custo de entrada, o cliente pode usar ela livremente sem nenhum tipo de compromisso pré escrito apenas por entrar no site.
                    </p>
                  </div>
                </li>

                <li>
                <Link id="LINK" to ="/sobre" data-bs-toggle="collapse" class="collapse" data-bs-target="#accordion-list-2"><span>01</span> São os melhores preços da região? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></Link>
                  <div id="accordion-list-2" class="collapse" data-bs-parent=".accordion-list">
                    <p>
                      Com toda certeza! nossa equipe cuidou de procurar e coletar dados para conseguirmos mostrar os melhores preços <strong> da região.</strong>
                    </p>
                  </div>
                </li>

                <li>
                <Link id="LINK"to ="/sobre" data-bs-toggle="collapse" class="collapse" data-bs-target="#accordion-list-3"><span>01</span> Somos confiáveis? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></Link>
                  <div id="accordion-list-3" class="collapse" data-bs-parent=".accordion-list">
                    <p>
                      O objetivo da empresa é garantir que o cliente tenha uma <strong>experiencia boa e simples</strong>, e nossa equipe foi treinada para coletar informações apenas verdadeiras. Então sim! somos confiáveis.
                    </p>
                  </div>
                </li>
            
              </ul>
            </div>

          </div>

          <img src={us} class="col-lg-5 align-items-stretch order-1 order-lg-2 img"  data-aos="zoom-in" data-aos-delay="150" alt='img'></img>
        </div>


      <Footer />
    </div>
  )
  
}


export default Sobre