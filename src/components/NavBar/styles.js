import styled from 'styled-components'

export const Nav = styled.nav`
    display:flex;
    position:fixed;
    z-index:1;
    width:100%;
    flex-direction:row;
    background:#3a3a3a;
`
export const Container = styled.div`
    flex:1 1 auto;
   padding:10px;
    color:#fff;
    height:47px;
    & svg {
        font-size:25px;
        cursor: pointer;
    }
    &:nth-child(2){
        text-align:center;
        & span{
            font-weight:900;
            font-size:20px;
        }
    }
    &:nth-child(3){
        text-align:right;
        & span{
            border-bottom:1px solid #fff;
            cursor: pointer;
        }
    }
    @media (min-width:1024px){
        &:nth-child(1){
         display:none;
        }
        &:nth-child(2){
         text-align:left;
        }
        & svg{
            display:none;
        }
    }
  
`