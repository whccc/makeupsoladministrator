import styled, { css } from 'styled-components'


export const Ull = styled.ul`
    max-height:0px;
    overflow:hidden;
    transition:all ease-in-out .5s;
    opacity:0;
    padding-left:10px;
    ${props => props.show && css`
        max-height:500px;
        overflow:visible;
        opacity:1;
        background:#2e2e2e;
    `
    }
    & svg{
        font-size:15px !important;
    }       
`