import React from 'react'
import Footer from '../components/Footer';
import Te1 from '../imagens/Te1.jpg';
import Te2 from '../imagens/Te2.jpg';
import Te3 from '../imagens/Te3.jpg';



const Cont2 = () => {
    return (
        <div>

            <h1>TERRENOS</h1>
            <div class='apartamentos'>
                <div class='polaroid'>
                    <img src={Te1} alt='img'/>

                    <h5>
                    Preço: R$150.000,00<br></br>
                    Tamanho: 300 m²<br></br>
                    Localização: Este amplo terreno residencial está localizado em um bairro tranquilo e amigável nos <br></br>
                    arredores da cidade. Com 300 metros quadrados, oferece espaço suficiente para construir a casa <br></br>
                    dos seus sonhos, cercado por uma atmosfera serena e familiar. Uma excelente oportunidade para <br></br>
                    quem busca uma vida mais calma, mantendo-se próximo às comodidades urbanas.<br></br>
                    </h5>


                </div>

                
            </div>

            <div class='apartamentos'>
                <div class='polaroid'>
                    <img src={Te2} alt='img'/>

                    <h5>
                    Preço: R$300.000,00<br></br>
                    Tamanho: 400 m²<br></br>
                    Localização: Este terreno exclusivo faz parte de um <br></br>
                    condomínio residencial fechado, oferecendo segurança <br></br>
                    e privacidade para seus futuros moradores. Com 400 <br></br>
                    metros quadrados, é o lugar perfeito para construir <br></br>
                    uma casa personalizada, aproveitando a infraestrutura de lazer do <br></br>
                    condomínio. Localizado em uma área nobre da cidade, <br></br>
                    proporciona acesso fácil a escolas, shoppings e áreas de entretenimento.<br></br>






                    </h5>


                </div>

                <div class='polaroid'>
                    <img src={Te3} alt='img'/>

                    <h5>
                    Preço: R$500.000,00<br></br>
                    Tamanho: 500 m²<br></br>
                    Localização: Este terreno comercial está estrategicamente <br></br>
                    posicionado no coração do distrito empresarial da cidade. <br></br>
                    Com 500 metros quadrados, é ideal para investidores que buscam<br></br>
                    construir escritórios, lojas ou empreendimentos comerciais. <br></br>
                    A proximidade a centros financeiros e de negócios faz deste <br></br>
                    terreno uma oportunidade única para quem busca expansão e <br></br>
                    visibilidade para seus empreendimentos.<br></br>
                    </h5>


                </div>
            </div>



            <Footer />
        </div>

    )
}

export default Cont2