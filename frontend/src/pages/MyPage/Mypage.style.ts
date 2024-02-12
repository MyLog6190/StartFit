import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 1100px;
  background-color: ${(prop) => prop.theme.body};
  padding: 100px 250px;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10px;
  background-color: ${(prop) => prop.theme.main};
  border: 1px solid ${(prop) => prop.theme.text};
  border-radius: 10px;
  padding: 50px;
  width: 710px;
  margin-bottom: 30px;
`;

export const Profile = styled.div`
  min-width: 200px;
  min-height: 200px;
  border-radius: 100px;
  background-color: white;
  margin-right: 40px;
`;

export const UserInfo = styled.div`
  padding: 5px;
`;

export const UserName = styled.div`
  font-size: 30px;
  padding: 3px;
  color: ${(prop) => prop.theme.text};
  white-space: nowrap;
  margin-bottom: 15px;
`;

export const BodyDataContainer = styled.div`
  display: flex;
`;

export const BodyDataBox = styled.div`
  display: grid;
  place-items: center;
  color: ${(prop) => prop.theme.text};
  width: 100px;
  height: 100px;
  border: 1px solid ${(prop) => prop.theme.text};
  font-size: 20px;
  padding: 16px;
  border-radius: 10px;
  margin-right: 15px;
`;

export const Category = styled.div`
  white-space: nowrap;
  font-size: 18px;
  font-weight: 600;
`;

export const BodyData = styled.div`
  white-space: nowrap;
`;

export const ChartContainer = styled.div`
  background-color: ${(prop) => prop.theme.main};
  color: white;
  border-radius: 10px;
  padding: 50px;
  border: 1px solid ${(prop) => prop.theme.text};
  width: 710px;
`;

export const ChartTabs = styled.div`
  display: flex;
`;

export const Tab = styled.div`
  padding: 12px;
  border: 1px solid ${(prop) => prop.theme.text};
  cursor: pointer;
  color: ${(prop) => prop.theme.text};
`;
