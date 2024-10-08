import logoGithub from '../assets/img/Logo-github.png';
import { ParticipanteProps } from '../types';

export default function Participantes({ foto, nome, rm, funcao, githubUrl}: ParticipanteProps){
    return(
        <section>
        <img src={foto} alt={`Foto de ${nome}`} />
        <h3>{nome}</h3>
        <h4>RM - {rm}</h4>
        <p>{funcao}</p>
        <a target="_blank" rel="noopener noreferrer" href={githubUrl}>
          <img src={logoGithub} alt="Logo do Github" />
        </a>
      </section>
);
}