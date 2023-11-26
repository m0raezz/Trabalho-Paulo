import React from 'react'
import Footer from '../components/Footer';
import { Link } from 'react-router-dom'
import img1 from "../imagens/empre1.jpg"
import img2 from "../imagens/empre2.jpg"
import img3 from "../imagens/empre3.jpg"



const Home = () => {
  return (
    <div>

<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active " data-bs-interval="4000">
    <img src={img1} />
      <div class="carousel-caption d-none d-md-block">
        <h5>Uma estrutura incrível</h5>
        <p>Otimizamos nossa estrutura ao maximo para melhorar a experiencia do ususario.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="4000">
    <img src={img2} alt='img'/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Equipe</h5>
        <p>Temos uma equipe unida para superar qualquer desafio.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="4000">
    <img src={img3} alt='img'/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Preços</h5>
        <p>Coletamos dados para conseguir localizar os melhores preços da região.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

      <div class="row">
        <div class="col-sm-6 mb-3 mb-sm-0">
          <div class="card" id='FUNDO'>
            <div class="card-body text-center">
              <h5 class="card-title ">Apartamentos</h5>
              <i class="bi bi-building-fill"></i>
              <p class="card-text">Veja nossas opções de apartamentos para compra.</p>
              <Link to="/apartamentos" class=" btn btn-outline-dark">Apartamentos</Link>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card" id='FUNDO'>
            <div class="card-body text-center">
              <h5 class="card-title">Terrenos</h5>
              <i class="bi bi-border"></i>
              <p class="card-text">Veja nossos terrenos para compra.</p>
              <Link to="/terrenos" class=" btn btn-outline-dark">Apartamentos</Link>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card" id='FUNDO'>
            <div class="card-body text-center">
              <h5 class="card-title">Casas</h5>
              <i class="bi bi-houses"></i>
              <p class="card-text">Veja nossas casas para compra.</p>
              <Link to="/casas" class=" btn btn-outline-dark">Apartamentos</Link>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card" id='FUNDO'>
            <div class="card-body text-center">
              <h5 class="card-title">Casas - Alugar</h5>
              <i class="bi bi-houses-fill"></i>
              <p class="card-text">Veja as opções de casas para alugar.</p>
              <Link to="/casasalug" class=" btn btn-outline-dark">Apartamentos</Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Home