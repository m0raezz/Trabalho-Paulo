import React from 'react'
import Footer from '../components/Footer';
import alug1 from '../imagens/alug.jpeg';
import alug2 from '../imagens/alug2.jpeg';
import alug3 from '../imagens/alug3.jpg';
import alug4 from '../imagens/alug4.JPG';



const Cont4 = () => {
    return (
        <div>

            <h1>CASAS - ALUGAR</h1>
            <div class='apartamentos'>
                <div class='polaroid'>
                    <img src={alug1} alt='img'/>

                    <h5>Casa em Bebedouro - SP, 95 m²<br></br>
                        Área útil 132 m² <br></br>
                        Área privativa,<br></br>
                        - 3 Quartos, <br></br>
                        - 3 Suítes, <br></br>
                        - 4 Banheiros, <br></br>
                        - 2 Vagas<br></br>
                        <br></br>
                        Preço: R$ 950,00 ao mês</h5>


                </div>

                <div class='polaroid'>
                    <img src={alug2} alt='img' />

                    <h5>Casa em Bebedouro - SP, 110 m²<br></br>
                        Área útil  84 m²<br></br>
                        Área privativa,<br></br>
                        - 3 Quartos, <br></br>
                        - 1 Suít <br></br>
                        - 2 Banheiros, <br></br>
                        - 2 Vagas<br></br>
                        <br></br>
                        Preço: R$ 980,00 ao mês</h5>


                </div>
            </div>

            <div class='apartamentos'>
                <div class='polaroid'>
                    <img src={alug3} alt='img'/>

                    <h5>Terreno em Bebedouro - SP, 150 m²<br></br>
                        Área útil  57 m²<br></br>
                        Área privativa,<br></br>
                        - 2 Quartos<br></br>
                        - 1 Suíte<br></br>
                        - 1 Banheiros<br></br>
                        - 1 Vagas<br></br>
                        <br></br>
                        Preço: R$ 950,00 ao mês</h5>


                </div>

                <div class='polaroid'>
                    <img src={alug4} alt='img'/>

                    <h5>Terreno em Bebedouro - SP, 190 m²<br></br>
                        Área útil  62 m² <br></br>
                        Área privativa,<br></br>
                        - 3 Quartos <br></br>
                        - 1 Suíte <br></br>
                        - 3 Banheiros, <br></br>
                        - 2 Vagas<br></br>
                        <br></br>
                        Preço: R$ 1000,00 ao mês</h5>


                </div>
            </div>



            <Footer />
        </div>

    )
}

export default Cont4