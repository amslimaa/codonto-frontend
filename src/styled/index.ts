import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    margin: 0 auto;
    flex-direction: column;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const SectionsContainer = styled.div`
    display:flex;
    flex: 1;
    flex-direction: column;
    h1 {
      text-align: center;
      color: var(--orange);
    }
    .section-one {
      display: flex;
      flex: 1;
      flex-direction: row;
      background-color: red;
      .left {
        flex: 1;
        padding: 50px;
        background-color: red;
        flex-direction: column;
        text-align: center;
        .book-text{
          font-size: 1rem;
          color: #000000;
          text-align: center;
        }
        .book-button {
          padding: 20px;
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
        flex: 1;
        background-color: blue;
      }
    }
    
`;