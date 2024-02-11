import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 1100px;
  background-color: ${(prop) => prop.theme.body};
  padding: 30px 250px;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  border-radius: 10px;
  background-color: ${(prop) => prop.theme.main};
  border: 1px solid ${(prop) => prop.theme.text};
  border-radius: 10px;
  padding: 50px 50px;
`;

export const Profile = styled.div`
  min-width: 200px;
  min-height: 200px;
  border-radius: 100px;
  background-color: white;
  margin-right: 10px;
`;

export const UserInfo = styled.div`
  padding: 5px;
  border: 1px solid ${(prop) => prop.theme.text};
`;

export const UserName = styled.div`
  padding: 10px;
  font-size: 35px;
  color: ${(prop) => prop.theme.text};
`;

export const ChartContainer = styled.div``;
