import { DashBar } from '../styled/Dashbar';
export function Dashbar(){
  return(
    <DashBar>
        <li>
          <ul className="item">Fila</ul>
          <ul className="item">Agendamento</ul>
          <ul className="item">Não aptos</ul>
        </li>
        <div className="profile"> 
            <img src="https://github.com/amslimaa.png" alt="Amós Lima"/>
            <span>
              <strong>Amós Lima</strong>
            </span>
        </div>
    </DashBar>
  )
}