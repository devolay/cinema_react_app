import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
`;

export const StyledButton = styled.button`
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
  border: 2px solid #97aabd;
  border-radius: 0.6em;
  color: #97aabd;
  cursor: pointer;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  align-self: center;
  font-size: 1rem;
  line-height: 1;
  margin: 10px;
  padding: 0.7em 1.5em;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  position: relative;
  overflow: hidden;
  z-index: 1;
  -webkit-transition: color 150ms ease-in-out;
  transition: color 150ms ease-in-out;
  &:after {
    content: "";
    position: absolute;
    display: block;
    top: 0;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 0;
    height: 100%;
    background: #97aabd;
    z-index: -1;
    -webkit-transition: width 150ms ease-in-out;
    transition: width 150ms ease-in-out;
  }
  &:hover {
    color: #fff;
  }
  &:hover::after {
    width: 110%;
  }
`;
