import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(prop) => prop.theme.body};
  height: 1000px;
  padding: 30px 250px;
`;

export const LoginContainer = styled.div`
  display: grid;
  place-items: center;
  border: 1px solid ${(prop) => prop.theme.text};
  background-color: ${(prop) => prop.theme.main};
  border-radius: 10px;
  padding: 60px 150px;
`;

export const Logo = styled.div`
  width: 400px;
  height: 300px;
  background: url(${(prop) => prop.theme.logImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-color: ${(prop) => prop.theme.main};
`;

export const LoginBtn = styled.div<{ $image: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  width: 365px;
  height: 50px;
  font-size: 23px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  background-color: #7112ff;
  color: white;
  background-image: url(${(props) => props.$image});
  background-size: cover;
  background-repeat: no-repeat;
`;
