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
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background-color: ${(prop) => prop.theme.main};
  border: 1px solid ${(prop) => prop.theme.text};
  border-radius: 10px;
  padding: 20px 50px 40px 50px;
  width: 710px;
  margin-bottom: 30px;
`;

export const UserInfoHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex; /* 좌우 정렬을 위해 space-between 사용 */
  align-items: center;
  padding: 10px 0px; /* 패딩 조정 */
  border-bottom: 1px solid ${(prop) => prop.theme.border};
  margin-bottom: 30px;
`;

export const EditButton = styled.button`
  margin-left: auto; /* 이 버튼을 오른쪽으로 밀어낸다 */
  padding: 6px 12px;
  background-color: ${(prop) => prop.theme.btnBg};
  color: ${(prop) => prop.theme.text};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(prop) => prop.theme.selected_button_bg_color};
  }
`;
export const UserInfoBody = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 0px 50px;
  width: 710px;
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
  padding: 20px;
  border: 1px solid ${(prop) => prop.theme.text};
  width: 710px;
  position: relative; /* 상대 위치 설정 */
`;

export const ControlContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px 0;
`;

// 네비게이션 버튼 그룹
export const ButtonGroup = styled.div`
  display: flex;
`;

export const Button = styled.button`
  padding: 8px 16px;
  margin-right: 10px;
  background-color: ${(props) => props.theme.btnBg};
  color: ${(props) => props.theme.text};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
`;

export const Tabs = styled.div`
  display: flex;
`;

export const Tab = styled.div`
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 5px;
  color: ${(props) => props.theme.text};
  margin-left: 10px;
`;
