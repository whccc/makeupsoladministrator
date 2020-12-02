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

    & svg {
        font-size:25px;
        cursor: pointer;
    }
    &:nth-child(2){
        text-align:center;
    }
    &:nth-child(3){
        text-align:center;
    }
`