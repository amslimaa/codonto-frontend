import Head from 'next/head';

import Link  from 'next/link';

import { MainContainer, LogoContainer, SectionsContainer } from '../styled'; 

export default function Home()  {
  return (
    <MainContainer>
      <Head>
        <title>Codonto - UFPI</title>
      </Head>
      <LogoContainer>
        <img src="codonto_image.png" alt=""/>
      </LogoContainer>
      <SectionsContainer>
        <h1>Bem vindo ao Codonto</h1>
        <div className="section">
          <div className="left">
            <p className="book-text">
              Um projeto de extenção da Univeridade Federal do Piauí....
            </p>
            <p className="book-text">
              Agendar consulta nas clinicas escola...
            </p>
            <button className="book-button">
              <Link href="/booking" passHref>
                <a>Agendar consulta</a> 
              </Link>
            </button>
          </div>
          <div className="right">
            <img src="codonto_people.svg"  alt=""/>
          </div>
        </div>
        <div className="section">
          <div className="right">
           <img src="codonto-quiz.svg"  alt=""/>
          </div>
          <div className="left">
            <p className="book-text">
              Você sabe o que mudou nas medidas de biossegurança durante aa pandemia de COVID-19?
            </p>
            <p className="book-text">
            Teste seusconhecimentos com o Codonto Quiz, um jogo de perguntas e respostas que tem com o intuito a divulgação de conteúdos relacionados a Biossegurança em procedimentos odontológicos.
            </p> 
            <button className="book-button">
              Codonto Quiz
            </button>
          </div>
        </div>
        <div className="section">
          <div className="left">
            <p className="book-text">
              Acesse nosso Blog... 
            </p>
            <button className="book-button" disabled>
              Em breve
            </button>
          </div>
          <div className="right">
            <img src="codonto-blog.svg"  alt=""/>
          </div>
        </div>
      </SectionsContainer>
    </MainContainer>
  )
}
