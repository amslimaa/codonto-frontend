import Head from 'next/head'

import { MainContainer } from '../styled/booking';
export default function booking(){

  return (
    <MainContainer>
      <Head>
        <title>Agendamento CE - UFPI</title>
      </Head>
       
      <div className="section">
        <div className="left">
          <img src="ufpi.svg" alt=""/>
          <h2>Agendamento Clínica Escola UFPI</h2>
          <form action="">
            <label htmlFor="name">Nome</label>
            <input type="text" name="name" placeholder="Nome" />

            <label htmlFor="telefone">Telefone</label>
            <input type="text" name="telefone" placeholder="(00) 9 0000-0000"/>

            <label htmlFor="date-born">Data de Nascimento</label>
            <input type="date" name="date-born" placeholder="Data de nascimento"/>

            <label htmlFor="sex">Sexo</label>
            <select name="sex" >
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
            </select>

            <button className="button" type="submit">Continuar para anmnese</button>
          </form>
        </div>
        <div className="right">
          <img src="Cadastro.svg" alt="Cadastro img"/>
        </div>
      </div>
    </MainContainer> 
  )
}