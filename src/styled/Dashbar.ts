import styled from 'styled-components';

export const DashBar = styled.nav`
display: flex;
align-items: center;
background-color: #649DB4;
padding: 1rem;
justify-content: center;
  li{
    list-style:none;
    display:flex;
    flex:1;
    ul{
      font-size: 1.5rem;
      color: #fff;
      margin-left: 3rem;
      justify-content: center;
    } 
  }
  .profile{

    align-self: flex-end;
    display: flex;
    align-items: center;
    
    img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    margin-right: 1rem;
    }

    strong {
      font-size: 1.5rem;
      font-weight: 600;
      color: #fff;
    }
  }

`;