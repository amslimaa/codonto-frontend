import styled from 'styled-components';

export const MainContainer = styled.div`
  background-color: #E6F1F7;
  display: flex;
  flex-direction: column;
  

  .section {
    height: 100vh;
    display: flex;
    @media (max-width: 620px){
    align-items:center;
    flex-direction: column;
    }
    .left{
      h2{
        text-align: center;
        font-size: 2rem;
        padding-bottom: 3rem;
        color: var(--white);
      }
      display: flex;
      flex: 25;
      flex-direction: column;
      padding: 20px;
      
      
      align-items: center;
      justify-content: center;

      background-color: #3B8DBF;

      form input {
        width: 100%;
        height: 60px;
        color: #333;
        border: 1px solid #dcdce6;
        border-radius: 8px;
        padding: 0 24px;
        margin-bottom: 1rem;
      }
      label{      
        color: var(--white);
      }
    }
    .right{
      @media(max-width: 620px){
        display: none;
      }
      display:flex;
      flex: 75;
      
      flex-direction:column;

      justify-content:center;

      align-items: center;

      img{
        width: rem;
      }
    }
  }
`; 