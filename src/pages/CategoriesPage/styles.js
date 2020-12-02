import styled from 'styled-components'

export const Section=styled.section`
    padding-top:20px;
    min-height:100vh;
    max-width:1300px;
    margin:auto;
    width:100%;
    @media (min-width:1024px){
        display:flex;
        flex-direction:row;
        min-height:auto;
    }
`