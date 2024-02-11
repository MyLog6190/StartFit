import styled from "styled-components";
import image from "../../../asset/png/background-1.png";

export const Banner = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 576px;
  height: 500px;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)),
    url(${image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: white;
`;

export const Overview = styled.p`
  font-size: 45px;
  text-align: center;
`;
