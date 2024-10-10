import { ChatBotStyle } from "../../styled";
import arrow from "@/app/img/arrow_circle_up.png"
import Image from "next/image";

export default function chatbot() {
    return (
        <ChatBotStyle>
            <section className="container2">
                <h1>ChatCar</h1>
            </section>
            <section className="container3">
                <h2>Como posso te ajudar?</h2>
            </section>
            <section className="container4">
                <h3>Problemas Comuns</h3>
            </section>
            <section className="container5">
                <div className="bloco">
                    <h4>Bateria</h4>
                    <p>Se seu carro está com dificuldade para dar partida, o problema pode estar na bateria.</p>
                    <Image src={arrow} alt="Seta para cima" />
                </div>
            </section>
            <section className="container6">
                <div className="bloco">
                    <h4>Freio</h4>
                    <p>Está sentindo o pedal de freio mais duro ou com pouca resposta? Podemos te ajudar a verificar.</p>
                    <Image src={arrow} alt="Seta para cima" />
                </div>
            </section>
            <section className="container7">
                <div className="bloco">
                    <h4>Motor</h4>
                    <p>Problemas no motor podem variar de barulhos estranhos a perda de potência. Vamos encontrar a causa.</p>
                    <Image src={arrow} alt="Seta para cima" />
                </div>
            </section>
            <section className="container8">
                <form action="mensagem" method="post">
                    <input 
                        type="text" 
                        placeholder="Digite as características do seu problema automotivo." 
                    />
                </form>
            </section>
        </ChatBotStyle>
    );
}