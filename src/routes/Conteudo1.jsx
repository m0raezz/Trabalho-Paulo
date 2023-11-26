import React from 'react'
import Footer from '../components/Footer';
import ap1 from '../imagens/ap1.png';
import ap2 from '../imagens/ap 2.png';
import ap3 from '../imagens/ap3.jpg';
import ap4 from '../imagens/ap4.jpg';



const Cont1 = () => {
    return (
        <div>

            <h1>APARTAMENTOS</h1>
            <div class='apartamentos'>
                <div class='polaroid'>
                    <img src={ap1} alt='img'/>

                    <h5>Terreno em Bebedouro - SP, 122 m²<br></br>
                        Área útil <br></br>
                        132 m² <br></br>
                        Área privativa,<br></br>
                        - 3 Quartos, <br></br>
                        - 3 Suítes, <br></br>
                        - 4 Banheiros, <br></br>
                        - 2 Vagas<br></br>
                        <br></br>
                        Preço: R$ 67.000,00</h5>


                </div>

                <div class='polaroid'>
                    <img src={ap2} alt='img'/>

                    <h5>Terreno em Bebedouro - SP, 20m x 30m<br></br>
                        Área útil  84 m²<br></br>
                        Área total<br></br>
                        4.183 m²m² <br></br>
                        Área privativa,<br></br>
                        - 3 Quartos, <br></br>
                        - 1 Suít <br></br>
                        - 2 Banheiros, <br></br>
                        - 2 Vagas<br></br>
                        <br></br>
                        Preço: R$ 74.350,00</h5>


                </div>
            </div>

            <div class='apartamentos'>
                <div class='polaroid'>
                    <img src={ap3} alt='img'/>

                    <h5>Terreno em Bebedouro - SP, 20m x 30m<br></br>
                        Área útil  57 m²<br></br>
                        Área total 57 m² <br></br>
                        Área privativa,<br></br>
                        - 2 Quartos<br></br>
                        - 1 Suíte<br></br>
                        - 1 Banheiros<br></br>
                        - 1 Vagas<br></br>
                        <br></br>
                        Preço: R$ 63.540,00</h5>


                </div>

                <div class='polaroid'>
                    <img src={ap4} alt='img'/>

                    <h5>Terreno em Bebedouro - SP, 20m x 30m<br></br>
                        Área útil  560 m² <br></br>
                        Área total 4.183 m² <br></br>
                        Área privativa,<br></br>
                        - 3 Quartos <br></br>
                        - 1 Suíte <br></br>
                        - 3 Banheiros, <br></br>
                        - 2 Vagas<br></br>
                        <br></br>
                        Preço: R$ R$ 77.209,00</h5>


                </div>
            </div>



            <Footer />
        </div>

    )
}

export default Cont1