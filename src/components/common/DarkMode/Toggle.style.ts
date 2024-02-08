import styled from "styled-components";

export const Toggle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 50px;
  height: 50px;
  right: 30px;
  bottom: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.toggleBg};
  z-index: 999;
`;

export const Svg = styled.svg`
  width: 100%;
  height: 100%;
  fill: #ffd700;

  path {
    stroke-width: 4;
  }
`;
