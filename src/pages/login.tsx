import Head from 'next/head'

import { MainContainer } from '../styled/login';
export default function Login(){

  return (
    <MainContainer>
      <Head>
        <title>Agendamento CE - UFPI</title>
      </Head>
       
      <div className="section">
        <div className="left">
          <img src="ufpi.svg" alt=""/>
          <h2>Autenticação Clinica Escola - UFPI</h2>
          <form>
            <label htmlFor="user">Usuário</label>
            <input type="text" name="user" placeholder="Usuário" />

            <label htmlFor="password">Senha</label>
            <input type="password" name="password" placeholder="Senha"/>

            <button className="button" type="submit">Login</button>
          </form>
        </div>
        <div className="right">
          <img src="Codonto-logo.svg" alt="Cadastro img"/>
        </div>
      </div>
    </MainContainer> 
  )
}