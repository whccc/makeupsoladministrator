import styled from 'styled-components';

export const Container = styled.section`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: radial-gradient(
        circle at 100% 0%,
        #ab9fe9 0,
        #7a77a8 25%,
        #4d4d68 50%,
        #26262d 75%,
        #000000 100%
    );
    & div {
        padding: 20px;
        background-color: #ffff;
        border: 1px solid #000;
        text-align: center;
        box-shadow: 0px 0px 10px #000;
        max-width: 270px;
        & img {
            width: 200px;
        }
        & button {
            display: block;
            margin-bottom: 10px;
            width: 100%;
            background-color: #000;
            padding: 5px;
            width: 100%;
            border: none;
            color: #fff;
        }
    }
`;

export const Input = styled.input`
    padding: 5px;
    margin-bottom: 5px;
    display: block;
    width: 100%;
    border: 1px solid ${(props) => (props.validate ? '#ff4566' : '#000')};
    transition: all ease-in-out 0.5s;
    &:focus {
        outline: none;
    }
`;
