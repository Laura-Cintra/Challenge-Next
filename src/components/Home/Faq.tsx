"use client"

import expand_less from "@/app/img/expand_less.png";
import expand_more from "@/app/img/expand_more.png";
import { MainFaq } from '../../styled';
import Image from "next/image";

export default function Faq() {
    return (
        <MainFaq id="duvidas" className="faq">
            <section className="conteudoFAQ">
                <h2>Dúvidas Frequentes</h2>
                <section>
                    <div className="duvidaFAQ">
                        <h3>Dúvida 1</h3>
                        <Image src={expand_less} alt="seta para cima" />
                    </div>
                    <p>Você pode agendar uma revisão facilmente através do nosso assistente virtual. Basta informar o tipo de serviço que você precisa e escolher um horário conveniente.</p>
                </section>
                <section>
                    <div className="duvidaFAQ">
                        <h3>Dúvida 2</h3>
                        <Image src={expand_more} alt="seta para cima" />
                    </div>
                </section>
                <section>
                    <div className="duvidaFAQ">
                        <h3>Dúvida 3</h3>
                        <Image src={expand_more} alt="seta para cima" />
                    </div>
                </section>
                <section>
                    <div className="duvidaFAQ">
                        <h3>Dúvida 4</h3>
                        <Image src={expand_more} alt="seta para cima" />
                    </div>
                </section>
            </section>
        </MainFaq>
    );
}