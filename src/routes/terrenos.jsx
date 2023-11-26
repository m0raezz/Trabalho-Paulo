import React from 'react';
import Footer from '../components/Footer';
function Terrenos() {
  return <div>

    <nav className="menu">
            <ul>
            <li><a href="home">Home</a></li>
            <li><a href="contato.html">Contato</a></li>
            <li><a href="clientes_pesquisar.php">Casas</a></li>
            <li><a href="contas_inserir.php">Apartamentos</a></li>
            <li><a href="contas_pesquisar.php">Terrenos</a></li>
            <li><a href="login.html">Sair</a></li>
            </ul>
        </nav>

        <h1> TERRENOS </h1>
        <div className="terrenos">
            <img src="imagens/terreno1.jpg" alt="" />
            <p><h5>Terreno em Bebedouro - SP, 10m x 30m</h5></p>
            <div className="preço">R$ 67.000,00</div>
            <br />

            <img src="imagens/terreno2.jpg" alt="" />
            <p><h5>Terreno em Bebedouro - SP, 20m x 30m</h5></p>
            <div className="preço">R$ 74.350,00</div>
        </div>
        <Footer />
  </div>
}

export default Terrenos;