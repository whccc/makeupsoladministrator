import styled, { keyframes } from "styled-components";

export const ContainerProducto = styled.div`
  text-align: center;
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 1px #ddd;
  width: 98%;
  margin-right: auto;
  margin-left: auto;
`;

export const ContainerPage = styled.section`
  & h2 {
    font-weight: 600;
  }
  & > div {
    margin: auto;
    max-width: 1500px;
    padding-top: 20px;
  }
`;
const rotate = keyframes`
  0% {
    box-shadow:0px 0px 0px 0px var(--bg-primary-blue);
  }
  50% {
    box-shadow:0px 0px 8px 2px var(--bg-primary-blue);
  }
  100%{
    box-shadow:0px 0px 0px 0px var(--bg-primary-blue);
  }
`;

export const Button = styled.button`
  border-radius: 100%;
  border: none;
  background-color: var(--bg-primary-blue);
  color: #fff;
  width: 50px;
  height: 50px;
  font-size: 25px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  animation: ${rotate} 2s linear infinite;
  &:hover {
    opacity: 0.9;
  }
`;
export const ContainerPager = styled.div`
  display: flex;
  width: 98%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  justify-content: flex-end;
  align-items: center;
  & p {
    display: inline-block;
    padding: 10px;
    background-color: #eee;
    margin: 0px;
  }
  & svg {
    color: #000;
    cursor: pointer;
    width: 60px;
    font-size: 20px;
    display: block;
  }
`;

export const Section = styled.section`
  padding-top: 20px;
  max-width: 1500px;
  margin: auto;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;
