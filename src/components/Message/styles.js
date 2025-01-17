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
const Type = ({ Type }) => {
    if (Type == 'Danger') {
        return '#ff4566';
    }
    if (Type == 'Success') {
        return 'green';
    }
    return '';
};
export const Container = styled.span`
    background-color: ${(props) => {
        return Type(props);
    }};
    display: none;
    border: 1px solid
        ${(props) => {
            return Type(props);
        }};
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
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 3px;
`;
