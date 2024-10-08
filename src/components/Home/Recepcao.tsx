import { MainRecepcao } from '../../styled';
import automacao from "../assets/img/automacao.png";
import { Link } from 'react-router-dom';

export default function Recepcao() {
    return (
        <MainRecepcao id="bem-vindo">
            <section className="titulo_bemvindo">
                <h2>Bem vindo(a) ao <span>ChatCar</span>!</h2>
            </section>
            <section className="subtitulo_bemvindo">
                <h3>O melhor serviço de diagnóstico por IA</h3>
            </section> 
            <section className="conteudo_descricao">
                <h4>Somos a solução para acelerar o processo de manutenção do seu carro!</h4>
                <p>Com o ChatDiagnosticCar, você pode diagnosticar problemas, agendar revisões, solicitar orçamentos de peças e muito mais, tudo de forma rápida e fácil. Nossa inteligência artificial está pronta para oferecer suporte 24 horas por dia, 7 dias por semana. Temos atendimento personalizado, em que nossa inteligência artificial aprende com cada interação, oferecendo um serviço cada vez mais personalizado. Com base nas suas preferências, histórico de diagnósticos e problemas automotivos, o ChatDiagnosticCar fornece recomendações e soluções adaptadas às suas necessidades específicas. Isso garante que você receba o atendimento mais eficiente e relevante possível.</p>
                <div className="center">
                    <Link rel="noopener noreferrer" to="/chatbot">Usar Ferramenta</Link>
                </div>
            </section>
            <section className="img_apresentacao">
                <img id="img_apre" src={automacao} alt="imagem" />
            </section>
        </MainRecepcao>
    );
}