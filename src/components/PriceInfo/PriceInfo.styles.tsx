import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: 30px;
  width: 100px;
  height: 60px;
  padding: 10px;
  border-radius: 10px;
  background-color: #97aabd;
  //box-shadow: 5px 5px 30px 7px #644e5b;
  transition: 0.4s;
`;

export const Label = styled.label`
  color: #644e5b;
  font-size: 18px;
  padding: 10px;
  font-weight: bold;
`;

export const Price = styled.text`
  color: #644e5b;
  font-size: 18px;
  padding: 10px;
  font-weight: bold;
`;
