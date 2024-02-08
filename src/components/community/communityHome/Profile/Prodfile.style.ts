import styled from "styled-components";

export const TitleOfArticle = styled.h1`
  font-size: 16px;
  font-weight: 600;
  color: ${(prop) => prop.theme.text};
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 7px;
  color: ${(prop) => prop.theme.text};
`;

export const WriterProfilePhoto = styled.div`
  width: 20px;
  height: 20px;
  background-color: pink;
  border-radius: 10px;
  margin-right: 3px;
`;

export const Writer = styled.span`
  font-size: 13px;
  height: 20px;
  padding: 2px;
  text-align: center;
  color: ${(prop) => prop.theme.second};
`;
