import styled from "styled-components";

export const PopularPostContainer = styled.div`
  width: 300px;
  height: 100%;
  background-color: ${(prop) => prop.theme.main};
  border-radius: 20px;
  padding: 30px 10px;
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const SideContainerTitle = styled.div`
  white-space: nowrap;
  color: ${(prop) => prop.theme.text};
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 20px;
`;

export const PopularPostList = styled.div`
  font-size: 16px;
  margin: 5px 0px;
  color: ${(prop) => prop.theme.text};
  white-space: nowrap;
`;
