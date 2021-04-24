import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  height: 80vh;
  flex-direction: column;
  align-items: center;
  margin: 2rem auto;
`
export const Heading = styled.div`
  margin-bottom: 1.5rem;
  img{
    width: 100%;
  }
`
export const FormDiv = styled.div`
  max-width: 350px;
  flex-direction: row;
  
  form select {
    width: 100%;
    height: 60px;
    color: #333;
    border: 1px solid #dcdce6;
    border-radius: 8px;
    padding: 0 24px;
    margin-bottom: 1rem;
    background-color: #fff
  }
  form textarea {
    width: 100%;
    height: 60px;
    color: #333;
    border: 1px solid #dcdce6;
    border-radius: 8px;
    padding: 0 24px;
    margin-bottom: 1rem;
    max-width: 350px;
  }
  input {
    width: 100%;
    height: 60px;
    color: #333;
    border: 1px solid #dcdce6;
    border-radius: 8px;
    padding: 0 24px;
    margin-bottom: 1rem;
  }
  span {
    width: 100%;
    flex-direction: row;
    display: flex;
    color: red;
    margin-bottom: 2rem;
  }
  button{
    
  }
`