import styled from 'styled-components'

export const Container=styled.div`
    background-color:#fff;
    padding:10px;
    border-radius:20px;
    margin-left:5px;
    margin-right:5px;
    margin-bottom:10px;
    box-shadow:0px 0px 5px 1px #ddd;
    & img{
        width:100%;
        margin-bottom:10px;
        border-radius:10px;
    } 
    & p{
        line-height:8px;
    }
    & p:nth-child(1){
        font-weight:900;
    }
    & p:nth-child(3){
        font-weight:900;
    }
    & div:nth-child(2){
        text-align:center;
    }

    @media (min-width:768px){
        max-width:20%;
        flex:1 1 auto; 
      
    }
    @media (min-width:1024px){
        flex:1 1 auto;
        max-width:18%;
      
    }
`

export const Button=styled.button`
    background-color:${props=>props.Background};
    border-radius:100%;
    padding:6px;
    border:none;
    margin-right:5px;
    color:#fff;
    outline:none !important;
    box-shadow:0px 2px 5px 1px #ddd;
    &:hover{
        opacity:.9;
    }
    & svg{
        width:18px;
        height:18px ;
    }
    
`