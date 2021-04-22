import styled from 'styled-components';

export const MainContainer = styled.div`
  background-color: #E6F1F7;
  display: flex;
  flex-direction: column;
  
  span{
    color: red;
    display: flex;
    margin-bottom: 0.5rem;
    font-size: 0.7rem;
  }
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
        margin-bottom: 1rem;
        
      }
      
      select {
        width: 100%;
        height: 60px;
        color: #333;
        border: 1px solid #dcdce6;
        border-radius: 8px;
        padding: 0 24px;
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