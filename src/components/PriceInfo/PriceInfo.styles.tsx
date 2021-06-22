import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px;
  width: 140px;
  height: 100px;
  border-radius: 10px;
  background-color: #314455;
  box-shadow: 5px 5px 30px 7px #644e5b;
  transition: 0.4s;
`;

export const Label = styled.label`
  color: white;
  font-size: 25px;
  padding: 10px;
`;

export const Price = styled.text`
  color: white;
  font-size: 25px;
  padding: 10px;
`;
