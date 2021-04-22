import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`
export const Heading = styled.div`
  margin-bottom: 2rem;
  img{
    width: 100%;

  }
  
`

export const FormDiv = styled.div`
  max-width: 350px;
  flex-direction: row;
  input {
    width: 100%;
    height: 60px;
    color: #333;
    border: 1px solid #dcdce6;
    border-radius: 8px;
    padding: 0 24px;
    margin-bottom: 1rem;
  }


`