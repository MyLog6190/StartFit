import styled from "styled-components";

export const BoardPageHeaderComponent = styled.div`
  min-width: 190px;
  height: 100%;
  background-color: ${(prop) => prop.theme.main};
  border-radius: 20px;
  padding: 25px 20px;
  white-space: nowrap;

  @media (max-width: 992px) {
    display: none;
  }
`;

export const WritingBtn = styled.div`
  color: white;
  font-weight: 600;
  background-color: #3b5998;
  padding: 10px 50px;
  border-radius: 10px;
  cursor: pointer;
`;

export const HeaderMenu = styled.ul`
  font-size: 14px;
  margin: 20px 0px;
  color: ${(prop) => prop.theme.text};
`;

export const MenuTitle = styled.div`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const MenuItem = styled.div`
  display: flex;
  font-size: 14px;
  color: ${(prop) => prop.theme.text};
  cursor: pointer;
  margin-bottom: 4px;
`;
