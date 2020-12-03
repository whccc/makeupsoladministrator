import styled from 'styled-components'


export const Input = styled.input`
    outline:none;
    padding:5px;
    &:focus{
        border:none;
        box-shadow:0px 0px 5px 1px var(--bg-primary-blue);
    }
`