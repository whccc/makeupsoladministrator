import styled,{createGlobalStyle} from 'styled-components'

//Estilos globales
export const GlobalStyle=createGlobalStyle`
  body {
    background: #f3f3f4;
    font-family:Arial, Helvetica, sans-serif;
  
  }
`
export const Container=styled.div`
    border:1px solid yellow;
    min-height:100vh;
    position:relative;
    top:47px;
    transition:all ease-in-out .5s;
  @media (min-width:1024px){
 
  margin-left:200px;
  width:calc(100% - 200px);
  }
`