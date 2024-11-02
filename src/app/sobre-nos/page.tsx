"use client"

import logoFigma from '@/app/img/Logo-figma.png';
import fotoHenrique from '@/app/img/fotoHenrique.jpg';
import fotoLaura from '@/app/img/fotoLaura.jpg';
import fotoLarissa from '@/app/img/fotoLarissa.jpg';
import Participantes from '../../components/Participante';
import { SobreNosStyle } from '../../styled';
import Image from 'next/image';

export default function SobreNos() {
  return (
    <SobreNosStyle>
      <h2>Turma: 1TDSPK</h2>
      
      <a 
        target="_blank" 
        rel="noopener noreferrer" 
        href="https://www.figma.com/file/whwMURtqIou1eqtucrqUzr/Prot%C3%B3tipo-Challenge?type=design&node-id=0%3A1&mode=design&t=iYevczBRwwXpuFpr-1"
      >
        <Image src={logoFigma} alt="Logo do Figma" className='logo-figma'/>
      </a>
      
      <a 
        target="_blank" 
        rel="noopener noreferrer" 
        href="https://github.com/Laura-Cintra/challenge-next"
      >
        <h3>Repositório Github</h3>
      </a>
      
      <main>
        <Participantes 
          foto={fotoHenrique} 
          nome="Henrique Garcia" 
          rm="558062" 
          funcao="Java e BD" 
          githubUrl="https://github.com/HenriqueDML" 
        />
        
        <Participantes 
          foto={fotoLarissa} 
          nome="Larissa Muniz" 
          rm="557197" 
          funcao="Python e IA" 
          githubUrl="https://github.com/larissa557197" 
        />
        
        <Participantes 
          foto={fotoLaura} 
          nome="Laura Cintra" 
          rm="558843" 
          funcao="Front e Software" 
          githubUrl="https://github.com/Laura-Cintra" 
        />
      </main>        
    </SobreNosStyle>
  );
}