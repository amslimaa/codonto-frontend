import styled from 'styled-components';

export const MainContainer = styled.div`
  background-color: #E6F1F7;
  display: flex;
  flex-direction: column;
  

  .section {
    height: 100vh;
    display: flex;
    .left{
      h2{
        padding-bottom: 4rem;
      }
      display: flex;
      flex: 25;
      flex-direction: column;
      padding: 20px;
      
      
      align-items: center;
      justify-content: center;

      background-color: #F2C185;

      form input {
        width: 100%;
        height: 60px;
        color: #333;
        border: 1px solid #dcdce6;
        border-radius: 8px;
        padding: 0 24px;
      }
      
    }
    .right{
      
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