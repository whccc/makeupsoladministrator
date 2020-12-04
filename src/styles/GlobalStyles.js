import styled,{createGlobalStyle} from 'styled-components'

//Estilos globales
export const GlobalStyle=createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  body {
    background: #f3f3f4;
    font-family:Arial, Helvetica, sans-serif;
  }
  :root{
    --bg-primary-blue:#3578E5;
    --bg-primary-tomato:tomato;
    --bg-primary-verde:green;
  }
  button{
    outline:none !important;
    }
`
export const Container=styled.div`
    min-height:100vh;
    position:relative;
    top:47px;
    transition:all ease-in-out .5s;
  @media (min-width:1024px){
 
  margin-left:200px;
  width:calc(100% - 200px);
  }
`