import Head from 'next/head';

import styles from '../styles/pages/Home.module.css';
import { MainContainer, LogoContainer, SectionsContainer } from '../styled'; 



export default function Home()  {
  return (
    <MainContainer>
      <LogoContainer>
        <img src="codonto_image.png" alt=""/>
      </LogoContainer>
      <SectionsContainer>
        <h1>Bem vindo ao Codonto</h1>
        <div className="section-one">
          <div className="left">
            <p className="book-text">
              Um projeto de Extensão
            </p>
            <button className="book-button">
              Agendar Consulta
            </button>
          </div>
          <div className="right">
            <img src="codonto_people.svg"  alt=""/>
          </div>
        </div>

      </SectionsContainer>
    </MainContainer>
  )
}


// export default function Home()  {
//   return (
//     <div className={styles.container}>
//       <div className={styles.logo_container}>
//         <img src="codonto_image.png" alt=""/>
//       </div>
//       <div className={styles.sections_container}>
//         <h1>Bem vindo ao Codonto</h1>
//         <div className={styles.section}>
//           <div className={style}></div>
//         </div>
//       </div>
//     </div>
//   )
// }