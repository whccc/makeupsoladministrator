import styled from 'styled-components';

/*Modal*/
export const ContainerModal = styled.div`
    @media (min-width: 1024px) {
        display: flex;
        flex-direction: row;
        & > div:nth-child(1),
        & > div:nth-child(2) {
            width: 50%;
        }
    }
`;

export const ContainerImg = styled.div`
    text-align: center;
    input[type='file'] {
        display: none;
    }
    label {
        cursor: pointer;
        padding: 10px;
        border-radius: 10px;
        background-color: var(--bg-primary-blue);
        color: #fff;
    }
    & > label img {
        width: 100%;
        height: auto;
        object-fit: cover;
        border: 1px solid #ddd;
        padding: 5px;
        margin-bottom: 5px;
    }
    progress {
        width: 100%;
    }
`;
export const ContainerDataImg = styled.div`
    padding: 5px;
    button {
        background-color: var(--bg-primary-blue);
        border: none;
        color: #fff;
        padding: 5px;
    }
    input,
    textarea,
    select {
        width: 100%;
        margin-bottom: 5px;
        resize: none;
    }
`;
export const ContainerPullImages = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 5px;
    & > div {
        width: 50px;
        height: 50px;
        position: relative;
        text-align: center;
        img {
            width: 100%;
            height: 100%;
            margin-bottom: 5px;
            padding: 5px;
            border: 1px solid #ddd;
            cursor: pointer;
            position: relative;
        }
        &:hover div {
            opacity: 1;
        }
        & div {
            position: absolute;
            width: 20px;
            height: 20px;
            border-radius: 100%;
            top: 2px;
            right: 2px;
            opacity: 0;
            background-color: rgba(0, 0, 0, 1);
            transition: background-color ease-in-out 0.5s, z-index ease-in-out 0.5s,
                opacity ease-in-out 0.5s;
            cursor: pointer;
            color: #fff;
        }
    }
`;
