import styled from 'styled-components'


export const Input = styled.input`
    outline:none;
    padding:5px;
    &:focus{
        border:2px solid transparent;
        box-shadow:0px 0px 5px 1px var(--bg-primary-blue);
    }
`