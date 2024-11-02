"use client"
import styled from "styled-components";

// css Menu.tsx
export const DivNavs = styled.div`

@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap');

nav {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    margin: 1em;
}

nav ul {
    display: flex;
    list-style: none;
}

nav ul li a {
    display: block;
    text-decoration: none;
    padding: 10px 30px;
    color: #082737;
    font-size: 1.2em;
}

.logo {
    min-width: 80px;
    max-width: 140px;
}

.Nav_Celular {
    display: none;
}

@media screen and (max-width: 670px) {
    nav ul li a {
        font-size: 1.1rem;
        padding-right: 10px;
        padding-left: 20px;
    }
}

@media screen and (max-width: 580px) {
    .NavHome {
        display: none;
    }

    .Nav_Celular {
        width: 100%;
        display: flex;
        margin: 0;
        border-bottom: 4px solid black;
        height: 60px;
        padding: 0;
    }

    .hamburger {
        display: block;
        font-size: 44px;
        padding-right: 10px;
        border: none;
        background: none;
        color: black;
    }

    .nav-links {
        display: none;
        flex-direction: column;
        position: fixed;
        top: 0;
        list-style: none;
        left: 0;
        width: 100%;
        height: 60%;
        justify-content: center;
        align-items: center;
        background-color: #001A28;
        opacity: 1;
        padding-top: 20px;
        padding-bottom: 20px;
    }

    nav {
        width: 100%;
        margin: 0;
        height: 80px;
        margin-top: -10px;
    }
    
    .nav-links li {
        margin: 20px 0;
    }

    .nav-links a {
        color: #ffffff;
        font-size: 24px;
        text-decoration: none;
        padding: 2px;
    }

    .nav-links.active {
        display: flex;
    }

    .menu-hamburger {
        display: flex;
        width: 100%;
        justify-content: space-between;
        height: 60px;
        padding: 0;
        margin-top: 10px;
    }

    .close-menu {
        position: absolute;
        top: 20px;
        right: 20px;
        font-size: 32px;
        border: none;
        background: none;
        color: #ffffff;
        cursor: pointer;
    }
}
`;

// css login.tsx e cadastro.tsx
export const MainCont = styled.main`

    max-height: 130vh;
    min-height: 80vh;

    form {
        max-width: 40%;
        margin: 30px auto;
        margin-top: 50px;
    }

    fieldset {
        border: 3px solid #001a28d5;
        border-radius: 7px;
        padding: 1.5em;
    }

    h1 {
        color: #082737;
        font-size: 2em;
        margin-bottom: 5%;
    }

    label {
        font-size: 1.2em;
    }

    input {
        font-size: 1em;
        padding: 10px;
        margin: 10px 0;
        border: 2px solid #9D9D9D;
        border-radius: 5px;
        width: 95%;
        cursor: pointer;
    }

    input[type="submit"] {
        margin-top: 25px;
    }

    input[type="submit"],
    input[type="reset"] {
        background-color: #082737;
        color: white;
        border: none;
        font-size: 1.2em;
    }

    input[type="reset"] {
        margin-bottom: 30px;
    }

    p {
        padding: 2px;
    }

    fieldset>a {
        color: #0267A2;
        text-decoration: none;
    }

    @media screen and (max-width: 700px) {
        form {
            max-width: 70%;
            margin: 20px auto;
        }
    }
    @media screen and (max-width: 580px) {
        form {
            max-width: 85%;
            margin: 20px auto;
        } 
    }

    .div_button{
        text-align: center;
        margin-bottom: 30px;

        button{
        font-size: 1.1em;
        background-color: white;
        padding: 10px;
        font-weight: bolder;
        border-radius: 5px;
        border: solid 2px #013351;

            a{
                color: #013351;
                text-decoration: none;
            }
        }
    }

    button:hover{
        background-color: #013351;
        
        a{
            color: white;
        }
    }
`;

// css Apresentacao.tsx
export const DivApresentacao = styled.div`
    
    display: flex;
    
    .texto_apresentacao {
        width: 45%;
        background-color: #013351;
        color: white;
        min-height: 90vh;
    }

    .texto_apresentacao>img {
        max-width: 100%;
        padding: 15px;
    }

    .banner {
        width: 55%;
        display: flex;
        justify-content:center;
        align-items: center;
    }

    .banner>img {
        max-width: 90%;
        height: auto;

    }

    .h2 {
        background-color: #ABCEE4;
    }
    p.esconder{

        margin-top: 50px;

    }
    .h2>h2 {
        font-size: 3.3rem;
        max-width: 40%;
        color: #013351;
        justify-content: flex-start;
        padding-top: 40px;
        margin-left: 20px;
        padding-bottom: 40px;
        font-weight: bolder;
        text-transform: uppercase;
        margin-top: 160px;
    }

    .texto_apresentacao>h3 {
        margin-left: 0.8em;
        margin-bottom: 3%;
        text-transform: uppercase;
        font-weight: 500;
        font-size: 1.6em;
    }

    hr {
        width: 55%;
        margin-bottom: 3%;
        padding: 0;
        margin: 0;
        margin-left: 1em;
    }

    #espacinho {
        width: 0;
        height: 0;
        padding: 0;
        margin: 0;
        margin-top: 100px;
    }   

    .texto_apresentacao>p {
        font-size: 1.1em;
        margin-left: 1em;
        margin-bottom: 50px;
        margin-right: 3px;
    }
    
    .texto_apresentacao a {
        font-size: 1.1em;
        background-color: white;
        color: #013351;
        text-decoration: none;
        padding: 10px;
        font-weight: bolder;
        border-radius: 5px;
        margin-bottom: 50px;
        margin-left: 1em;
    }

    .mostrar {
        display: none;
    }

    h3.esconder{
        padding: 0;
        margin: 20px;
        margin-top: 80px;
    }
@media screen and (max-width: 950px) {

    .h2 h2 {
        font-size: 2rem;
        margin-left: 0;
        width: 15%;
        padding-top: 50px;
        padding-bottom: 50px;
        padding-left: 15px;
    } 

}
@media screen and (max-width: 580px) {

    display: block;
    .texto_apresentacao{
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .esconder{

        display: none;

    }
    .mostrar{

        display: block;

    }
    .omg {
        text-align: center;
        grid-area: textoalt;
    }

    .texto_apresentacao {
        min-height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .texto_apresentacao>h2 {
        font-size: 1.5rem;
        text-align: center;
    }

    h3 {
        font-size: 1.6rem;
        margin: 0;
        padding: 0;
    }

    hr {
        padding-bottom: 1px;
        background-color: #000;
        margin: 0 auto;
        margin-top: 20px;
        margin-bottom: 14px;
    }

    p {
        margin: 0;
        padding: 0;
        font-size: 1.1rem;
    }

    .mostrar {
        display: block;
    }

    #botaoSaibaMais {
        font-size: 1.1em;
        width: 200px;
        margin: 0 auto;
        margin-top: 30px;
        padding: 10px;
        background-color: #013351;
        color: white;
        text-decoration: none;
        font-weight: bolder;
        border-radius: 5px;
    }
    .banner{
        margin-top: 30px;
        width: 100%;
        margin-bottom: 30px;

    }
    .banner>img {
        max-width: 70%;
        max-height: 70%;
    }
    p{
        text-align: center;
        width: 90%;
        margin: 0 auto;

    }
}   
`;

// css Recepcao.tsx
export const MainRecepcao = styled.main`
    
        display: grid;
        grid-template-columns: 55vw 44.1vw;
        grid-template-areas:
            'titulo_bemvindo titulo_bemvindo'
            'subtitulo_bemvindo subtitulo_bemvindo'
            'conteudo_descricao img_apresentacao';
        margin-top: 10px;
        margin-bottom: 50px;

    .titulo_bemvindo {
        grid-area: titulo_bemvindo;
        color: #001A28;
        font-size: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
        margin-right: 0;
        margin-bottom: 15px;
        padding: 5px;
    }

    .subtitulo_bemvindo {
        grid-area: subtitulo_bemvindo;
        color: #000;
        font-size: 1.2em;
        margin-bottom: 40px;
        text-align: center;
       
    }
    .subtitulo_bemvindo>h3 {
        font-weight: 200;
        margin: 0;
        padding: 0;
    }

    .conteudo_descricao {
        grid-area: conteudo_descricao;
        margin: 0 10%;
    }

    .conteudo_descricao>h4 {
        font-size: 1.8rem;
        margin-bottom: 15px;
    }

    .conteudo_descricao>p {
        font-size: 1.3rem;
        margin-bottom: 10%;
    }

    .center>a {
        font-size: 1.1rem;
        background-color: #013351;
        color: white;
        text-decoration: none;
        padding: 10px;
        font-weight: bolder;
        border-radius: 5px;
    }

    .img_apresentacao {
        grid-area: img_apresentacao;
        margin: 0 10%;
    }

    .img_apresentacao img {
        width: 100%;
        height: auto;
    }

    span {
        color: #40B9FD;
    }

@media screen and (max-width: 1150px) {

    .titulo_bemvindo>h2 {
        margin: 0;
        font-size: 1.3em;
        text-align: center;
    }

    .subtitulo_bemvindo>h3 {
        font-size: 1.4em;
    }

    .conteudo_descricao h4 {
        text-align: justify;
        font-size: 1.3rem;
        margin: 0;
        margin-top: 15px;
    }

    .conteudo_descricao p {
        text-align: justify;
        font-size: 1.2rem;
        margin: 0;
        margin-top: 15px;
        margin-bottom: 40px;
    }
    .img_apresentacao{

        display: flex;
        justify-content: center;
        align-items: center;
    }
}

@media screen and (max-width: 750px) {

        grid-template-columns: 100vw;
        grid-template-areas:
            'titulo_bemvindo'
            'subtitulo_bemvindo'
            'img_apresentacao'
            'conteudo_descricao';
    

    .titulo_bemvindo {
        align-items: center;
        text-align: center;
    }

    .titulo_bemvindo>h2 {
        margin: 0;
        font-size: 2.2rem;
        text-align: center;
    }

    .subtitulo_bemvindo {
        padding: 5px;
    }

    .subtitulo_bemvindo>h3 {
        font-size: 1.4rem;
    }

    .conteudo_descricao h4 {
        text-align: center;
        font-size: 1.4rem;
        margin: 0;
        margin-top: 15px;
    }

    .conteudo_descricao p {
        text-align: justify;
        font-size: 1.2rem;
        margin: 0;
        margin-top: 30px;
        margin-bottom: 30px;
    }
    .center {
        display: flex;
        justify-content: center;
    }
    .img_apresentacao {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        margin-bottom: 10px;
        padding: 0;
    }
    #img_apre {
        width: 90%;
        height: auto;
        margin-bottom: 0;
        padding-bottom: 0;
    }
}
`;

// css MotivosUso.tsx
export const Motivo = styled.main`

    display: grid;
    grid-template-columns: 33.3% 33.3% 33.3%;
    grid-template-areas:
        'titulo_motivo titulo_motivo titulo_motivo'
        'conteudo_motivo1 conteudo_motivo2 conteudo_motivo3';
    margin-bottom: 100px;
    
    .titulo_motivo {
        grid-area: titulo_motivo;
        color: white;
        display: flex;
        align-items: center;
        font-size: 1.4rem;
        background-color: #013351;
        font-weight: lighter;
        text-align: center;
        justify-content: center;
        margin-bottom: 40px;
        padding: 3%;
    }

    .conteudo_motivo1,
    .conteudo_motivo2,
    .conteudo_motivo3 {
        text-align: center;
        margin-top: 30px;
    }

    .conteudo_motivo1>h3,
    .conteudo_motivo2>h3,
    .conteudo_motivo3>h3 {
        margin-top: 20px;
        font-size: 1.3em;
        color: #001A28;
    }

    .conteudo_motivo1>img,
    .conteudo_motivo2>img,
    .conteudo_motivo3>img {
        width: 25vw;
        max-height: 300px;
    }

    .conteudo_motivo1>p,
    .conteudo_motivo2>p,
    .conteudo_motivo3>p {
        max-width: 60%;
        margin: 20px auto;
        font-size: 1.1rem;
    }
    img{
        height: auto;
    }

@media screen and (max-width: 800px) {
    .titulo_motivo {
        font-size: 1rem;
        justify-content: center;
    }  
}

@media screen and (max-width: 590px) {

    display: grid;
    grid-template-columns: 100vw;
    grid-template-areas:
        'titulo_motivo'
        'conteudo_motivo1'
        'conteudo_motivo2'
        'conteudo_motivo3';

    .titulo_motivo {
        text-align: center;
        }
.conteudo_motivo1>img,
.conteudo_motivo2>img,
.conteudo_motivo3>img {
    width: 65vw;
    }
}

@media screen and (max-width: 380px) {

    display: grid;
    grid-template-columns: 100vw;
    grid-template-areas:
        'titulo_motivo'
        'conteudo_motivo1'
        'conteudo_motivo2'
        'conteudo_motivo3';

.titulo_motivo {
    grid-area: titulo_motivo;
    color: white;
    display: flex;
    align-items: center;
    font-size: 1rem;
}

.conteudo_motivo1>img,
.conteudo_motivo2>img,
.conteudo_motivo3>img {
    width: 75vw;
    height: auto;
}
}
`;

// css Faq.tsx
export const MainFaq = styled.main`
    .conteudoFAQ {
        width: 80%;
        margin: 0 auto;
        margin-bottom: 40px;
    }

    .conteudoFAQ>h2 {
        font-size: 1.8em;
        text-align: center;
    }

    .duvidaFAQ {
        display: flex;
        align-items: center;
        margin-bottom: 15px;
    }

    .duvidaFAQ>h3 {
        font-size: 1.2em;
        flex: 1;
    }

    .duvidaFAQ>img {
        width: auto;
        height: 13px;
    }

    .conteudoFAQ>section {
        padding: 15px;
        border: 2px solid #014D79;
        max-width: 90%;
        margin: 2em auto;
        border-radius: 4px;
    }
`;

// css sobrenos.tsx
export const SobreNosStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    min-height: 100vh; 
    text-align: center;

    header {
        color: #082737;
        margin-top: 20px;
    }
    
    img { height: auto; }

    h1 {
        font-size: 2.4em;
        padding: 15px;
    }

    main {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        flex-grow: 1; 
    }

    h2 {
        font-size: 1.6em;
        font-weight: 300;
        padding: 5px;
    }

    .logo-figma {
        max-width: 100px;
        padding: 20px;
        display: flex;
        margin: 0 auto;
    }

    a {
        color: #014D79;
        font-size: 1.2em;
    }

    section {
        justify-content: space-between;
        margin: 5px 3em;
        padding: 40px;
    }

    section > img {
        margin-top: 5%;
        max-width: 200px;
        border-radius: 50%;
    }

    section > h3 {
        text-align: center;
        font-size: 1.2em;
        font-weight: 800;
        padding: 5px;
    }

    section > h4 {
        font-size: 1.1em;
        font-weight: 800;
        color: #014D79;
    }

    section > p {
        font-size: 1.2em;
        padding: 5px;
        color: #013351;
    }
`;
// css chatbot.tsx
export const ChatBotStyle = styled.div`

    display: grid;
    grid-template-columns:  33.3% 33.3% 33.3%;
    grid-template-areas:
        'titulo           titulo           titulo'
        'subtitulo        subtitulo        subtitulo'
        'tituloPrincipal  tituloPrincipal  tituloPrincipal'
        'conteudo1        conteudo2        conteudo3'
        'chat             chat             chat'
    ;

.container1 {
    grid-area: sidebar;
    border-right: 5px solid #ABCEE4;
    background-color: #fff;
    height: 100vh;

}

.container1 nav {
    height: 100vh;
}

.container1 nav ul {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
    height: 100%;
    align-items: center;
    list-style: none;
}

.container2 {
    grid-area: titulo;
}

.container3 {
    grid-area: subtitulo;
}

.container4 {
    grid-area: tituloPrincipal;
    text-align: center;
}

.container5 {
    grid-area: conteudo1;
    height: 550px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container6 {
    grid-area: conteudo2;
    height: 550px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container7 {
    grid-area: conteudo3;
    height: 550px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container8 {
    grid-area: chat;
    text-align: center;
}

input {
    background-color: #013351;
    color: white;
    padding: 30px;
    height: 40px;
    width: 90%;
    font-size: 1.1em;
    border-radius: 42px;
    border: none;
    margin-bottom: 50px;
}

::-webkit-input-placeholder {
    color: white;
    font-size: 1.5rem;
    padding-left: 20px;
}

.bloco {
    width: 60%;
    height: 60%;
    background-color: #ABCEE4;
}

h1 {
    color: #01273D;
    font-size: 3em;
    margin-left: 20px;
    margin-top: 20px;
}

h2 {
    color: #001a28ce;
    font-weight: 600;
    font-size: 2em;
    margin-left: 20px;
}

h3 {
    text-align: center;
    color: #001A28;
    margin-top: 30px;
    font-size: 2.5em;
}

.bloco {
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
    background-color: #5196BE;
    border-radius: 10px;
    color: #FAFAFA;
    font-weight: lighter;
    padding: 20px;
}

.bloco>h4 {
    font-size: 2rem;
}

p {
    font-size: 1.6rem;
}

@media screen and (max-width: 1000px) {
    h3 {
        font-size: 1.9rem;
    }

    .bloco>h4 {
        font-size: 1.6rem;
    }

    p {
        font-size: 1.2rem;
    }

}

@media screen and (max-width: 590px) {

        display: grid;
        grid-template-columns: 50vw 50vw;
        grid-template-areas:
            'navcel navcel'
            'titulo titulo'
            'subtitulo subtitulo'
            'tituloPrincipal tituloPrincipal'
            'conteudo1  conteudo2'
            'conteudo3  conteudo3'
            'chat chat'
        ;
    
    .container1 {
        display: none;
    }

    .container2 {
        font-size: 0.7rem;
    }

    .container3 {
        font-size: 0.7rem;
    }

    .container4 {
        margin-top: 20px;
    }

    .container4 h3 {
        font-size: 1.6rem;
        color: #022033;
    }

    .container5,
    .container6,
    .container7 {
        height: 300px;
        text-align: justify;
    }

    .container5 p,
    .container6 p,
    .container7 p {
        font-size: 0.9rem;
    }

    .container5 h4,
    .container6 h4,
    .container7 h4 {
        font-size: 1.1rem;
    }

    form {
        margin-bottom: 20px;
    }

    input {
        height: 34px;
    }

    ::-webkit-input-placeholder {
        color: white;
        font-size: 0.9rem;
        padding: 0;
        text-align: center;
    }

    #logocarro {
        width: 180px;
        height: 46px;
        margin-top: 7px;
    }
}   
`

// css Footer.tsx
export const StyleFooter = styled.footer`
    position: relative; 
    bottom: 0; 
    width: 100%;
    background-color: #013351;
    color: white;
    text-align: center;
    padding: 10px 0;
    margin-top: 20px;
    
    p {
        margin: 0;
        padding: 10px;
    }
`;

export const StyledTable = styled.div`
    max-width: 800px;
    margin: auto;
    padding: 20px;
    min-height: 100vh;

    h1 {
        color: #082737;
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 20px;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        background: white;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        overflow-x: auto;
    }

    thead, tfoot {
        background: #013351;
        color: white;
    }

    th, td {
        padding: 20px;
        border-bottom: 1px solid #ccc;
        min-width: 120px;
        text-align: center;
    }

    tbody tr:hover {
        background: #f1f1f1;
    }

    .actions {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }

    .edit, .delete {
        background: none;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
    }

    .icon {
        font-size: 1.5rem; /* Aumentar o tamanho do ícone */
        transition: color 0.2s, transform 0.2s;
    }

    .edit .icon {
        color: #007bff;
    }

    .delete .icon {
        color: #dc3545;
    }

    .edit:hover .icon {
        color: #0056b3;
        transform: scale(1.1);
    }

    .delete:hover .icon {
        color: #c82333;
        transform: scale(1.1);
    }

    @media (max-width: 600px) {
        table {
            display: block;
            overflow-x: auto;
        }
        th, td {
            white-space: nowrap;
        }
    }
`;

export const Button = styled.button<{ variant: 'light' | 'danger' }>`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  font-weight: 600;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  margin-top: 0.5rem;
  
  background-color: ${({ variant }) => (variant === 'light' ? '#ffffff' : '#e3342f')};
  color: ${({ variant }) => (variant === 'light' ? '#6b7280' : '#ffffff')};

  &:hover {
    background-color: ${({ variant }) => (variant === 'light' ? '#f3f4f6' : '#c53030')};
  }
;`

export const ModalContainer = styled.div<{ open: boolean }>`

display: ${({ open }) => (open ? 'flex' : 'none')};
position: fixed;
inset: 0;
justify-content: center;
align-items: center;
background-color: rgba(0, 0, 0, 0.2);
transition: visibility 0.3s, opacity 0.3s;

.modal-content {
    background-color: #ffffff;
    border-radius: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0 1px 3px;
    padding: 1.5rem;
    transition: transform 0.3s, opacity 0.3s;
    transform: scale(${({ open }) => (open ? '1' : '1.25')});
    opacity: ${({ open }) => (open ? '1' : '0')};
}

.close-button {
    position: absolute;
    top: 0.25rem;
    right: 0.5rem;
    padding: 0.25rem;
    border-radius: 0.5rem;
    background-color: #ffffff;
    color: #a0aec0;

    &:hover {
    background-color: #f7fafc;
    color: #4a5568;
    }
}
; `