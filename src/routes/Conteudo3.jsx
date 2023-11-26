import React from 'react'
import Footer from '../components/Footer';
import casa1 from '../imagens/casa1.jpg';
import casa2 from '../imagens/casa2.jpg';
import casa3 from '../imagens/casa3.jpg';
import casa4 from '../imagens/casa4.jpg';

const Cont3 = () => {
    return (
        <div>
            <h1>CASAS</h1>
            <div class='apartamentos'>
                <div class='polaroid'>
                    <img id="casas" src={casa1} alt='img'/>

                    <h5>Casa em Bebedouro - SP, 45m x 75m<br></br>
                        - Área total 483 m² <br/>
                        - 2 Quartos, <br/>
                        - 1 Suít <br/>
                        - 2 Banheiros, <br/>
                        - Garagem para 3 Carros<br/>
                        <br></br>
                        <strong>Preço: R$ 430.350,00</strong></h5>


                </div>

                <div class='polaroid'>
                    <img id="casas" src={casa2} alt='img'/>

                    <h5>Casa em Bebedouro - SP, 30m x 45m<br></br>
                        - Área total 783 m²m² <br/>
                        - 3 Quartos, <br/>
                        - 2 Suít <br/>
                        - 5 Banheiros, <br/>
                        - Garagem para 4 Carros<br/>
                        <br></br>
                        <strong>Preço: R$ 980.350,00</strong></h5>


                </div>
            </div>

            <div class='apartamentos'>
                <div class='polaroid'>
                    <img id="casas" src={casa3} alt='img'/>

                    <h5>Casa em Bebedouro - SP, 40m x 60m<br></br>
                        - Área total 650 m² <br/>
                        - 2 Quartos<br/>
                        - 1 Suíte<br/>
                        - 1 Banheiros<br/>
                        - Garagem para 3 Carros<br/>
                        <br/>
                        <strong>Preço: R$ 670.540,00</strong></h5>


                </div>

                <div class='polaroid'>
                    <img id="casas" src={casa4} alt='img'/>

                    <h5>Casa em Bebedouro - SP, 70m x 50m<br></br>
                        - Área total 883 m² <br></br>
                        - 3 Quartos <br></br>
                        - 1 Suíte <br></br>
                        - 3 Banheiros <br></br>
                        - Garagem para 3 Carros<br></br>
                        <br></br>
                        <strong>Preço: R$ R$ 560.209,00</strong></h5>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default Cont3