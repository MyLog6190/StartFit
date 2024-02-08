import styled from "styled-components";

export const PopularWritingContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: 180px;
  margin-bottom: 40px;
  overflow: hidden;
  place-items: center;
  gap: 10px;
  position: relative;
`;

export const PopularWritingContainerItem = styled.div`
  width: 240px;
  height: 160px;
  background-color: white;
  padding: 30px 20px 20px 20px;
  border-radius: 15px;
  background-color: ${(prop) => prop.theme.main};
`;

export const PopularWritingContent = styled.div`
  margin-top: 9px;
  font-size: 14px;
  height: 40px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  color: ${(prop) => prop.theme.text};
`;

export const ArrowLeftWrapper = styled.div`
  position: absolute;
  left: 0;
`;

export const ArrowRightWrapper = styled.div`
  position: absolute;
  right: 0;
`;
