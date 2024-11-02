"use client"

import Image from 'next/image';
import logoGithub from '@/app/img/Logo-github.png';
import { ParticipanteProps } from '../types';

export default function Participantes({ foto, nome, rm, funcao, githubUrl}: ParticipanteProps){
    return(
        <section>
        <Image src={foto} alt={`Foto de ${nome}`}/>
        <h3>{nome}</h3>
        <h4>RM - {rm}</h4>
        <p>{funcao}</p>
        <a target="_blank" rel="noopener noreferrer" href={githubUrl}>
          <Image src={logoGithub} alt="Logo do GitHub" className='flex ml-auto mr-auto'/>
        </a>
      </section>
);
}