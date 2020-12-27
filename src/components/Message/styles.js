import styled, { css, keyframes } from 'styled-components';

const Animation = keyframes`
    0%{
        right:-10px;
    }
    50%{
        left:-10px;
    }
    100%{
        left:0px;
    }

`;

export const Container = styled.span`
    background-color: #ff6581;
    display: none;
    border: 1px solid #ff4566;
    position: relative;
    animation: ${Animation} 0.2s linear infinite;
    animation-iteration-count: 1;
    ${(props) =>
        props.blnShow &&
        css`
            display: block;
            left: 0px;
        `}
    color: #fff;
    border-radius: 3px;
    margin-bottom: 5px;
`;
