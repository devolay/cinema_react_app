import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const Button = styled.button`
  display: block;
  margin: 40px;
  width: 180px;
  height: 60px;
  border: none;
  background-color: #314455;
  color: #fff;
  font-size: 18px;
  border-radius: 6px;
  outline: none;
  cursor: pointer;
  transition: 0.3s linear;
  &:hover {
    transform: rotateX(15deg);
    box-shadow: 0 15px 15px #644e5b;
  }
`;
