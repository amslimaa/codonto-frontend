import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    margin: 2rem auto;
    flex-direction: column;
    @media (max-width: 620px){
    align-items:center;
    max-width: 1024px;
  }
`;

export const LogoContainer = styled.div`

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  
`;

export const SectionsContainer = styled.div`
    padding: 2rem 2.5rem  2rem 2rem;
    display:flex;
    flex: 1;
    flex-direction: column;
    h1 {
      font-size: 3rem;
      text-align: center;
      color: var(--orange);
      padding-bottom: 50px;
    }
    .section {
      display: flex;
      flex: 1;
      flex-direction: row;
      padding-bottom: 15rem;
      .left {
        flex:1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .book-text{
          font-size: 1.5rem;
          color: var(--orange);
          font-weight: 700;
          text-align: center;
          padding-bottom: 50px;
        }
        .book-button {
          font-weight: 700;
          padding: 20px 70px 20px 70px;
          border-radius: 5px;
          border-style: none;
          background-color: var(--orange);
          transition: background-color 0.2s;
          color: var(--white);
          &:hover{
            background-color: var(--orange-dark);
          }
        }
      }
      .right {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
        img {
          width: 30rem;
          height: 30rem;
        }
      }
    }
    @media (max-width: 990px){
      text-align: center;
      .section {
      display: flex;
      flex: 1;
      flex-direction: row;
      padding-bottom: 5rem;
      .left {
        flex:1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .book-text{
          font-size: 1.2rem;
          color: var(--orange);
          font-weight: 700;
          text-align: center;
          padding-bottom: 50px;
        }
        .book-button {
          font-weight: 700;
          padding: 20px 70px 20px 70px;
          border-radius: 5px;
          border-style: none;
          background-color: var(--orange);
          transition: background-color 0.2s;
          color: var(--white);
          &:hover{
            background-color: var(--orange-dark);
          }
        }
      }
      .right {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
        img {
          width: 20rem;
          height: 20rem;
        }
      }
    }
    }
    @media (max-width: 620px){
      h1 {
      font-size: 2rem;
      text-align: center;
      color: var(--orange);
      padding-bottom: 50px;
    }
      text-align: center;
      .section {
      display: flex;
      flex: 1;
      flex-direction: column;
      padding-bottom: 5rem;
      .left {
        flex:1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .book-text{
          font-size: 1.2rem;
          color: var(--orange);
          font-weight: 700;
          text-align: center;
          padding-bottom: 50px;
        }
        .book-button {
          font-weight: 700;
          padding: 20px 70px 20px 70px;
          border-radius: 5px;
          border-style: none;
          background-color: var(--orange);
          transition: background-color 0.2s;
          color: var(--white);
          &:hover{
            background-color: var(--orange-dark);
          }
        }
      }
      .right {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
        img {
          width: 20rem;
          height: 20rem;
        }
      }
    }
    }
`;