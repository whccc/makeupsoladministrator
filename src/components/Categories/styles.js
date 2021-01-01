import styled from 'styled-components';

export const Button = styled.button`
    background: #3578e5;
    color: #fff;
    border: none;
    height: 40px;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    outline: none;
`;

export const Section = styled.section`
    margin: 5px;
    background: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1),
        0 4px 4px rgba(0, 0, 0, 0.1), 0 8px 8px rgba(0, 0, 0, 0.1), 0 16px 16px rgba(0, 0, 0, 0.1);
    & div:nth-child(1) {
        margin-bottom: 10px;
        & div {
            width: 100%;
            text-align: right;
            margin-bottom: 5px;
        }
    }
    & table {
        text-align: center;
        & tbody {
            & tr {
                & td:nth-child(3) {
                    & svg {
                        font-size: 20px;
                        cursor: pointer;
                    }
                    & svg:nth-child(1) {
                        color: tomato;
                    }

                    & svg:nth-child(2) {
                        color: #3578e5;
                    }
                }
            }
        }
    }
    @media (min-width: 1024px) {
        flex: 1 1 50%;
        height: auto;
        margin-top: 0px;
    }
`;

export const ContainerTable = styled.div`
    max-height: 220px;

    overflow: auto;
`;

export const ContainerModal = styled.div`
    text-align: center;
`;
