import styled from 'styled-components'


export const Container=styled.section`
    background-color:#fff;
    padding:10px;
        &  input:nth-child(2){
            display:block;
            margin-bottom:10px;
        }
        & > svg{
            font-size:38px;
            position:relative;
            top:-1px;
            padding:5px;
            cursor: pointer;
            background-color:var(--bg-primary-blue);
            color:#fff;
            :hover{
                opacity:.9;
            } 
        } 
      
        & table{
            margin-top:10px;
            text-align:center;
            & svg {
                cursor: pointer;
                font-size:23px;
                margin-right:2px;
            }
            svg:nth-child(1){
                color:var(--bg-primary-blue);
            }
            svg:nth-child(2){
                color:var(--bg-primary-verde);
            }
            svg:nth-child(3){
                color:var(--bg-primary-tomato);
            }

        } 
    @media (min-width:768px){
        margin:10px; 
        border-radius:10px;
        box-shadow:0px 0px 5px 1px #ddd;
    }
        
`