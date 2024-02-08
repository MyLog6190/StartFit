import styled from "styled-components";

export const LatestWritingContainer = styled.div`
  background-color: ${(prop) => prop.theme.body};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

export const LatestWritingContainerItem = styled.div`
  padding: 15px 20px;
  min-width: 100px;
  height: 70px;
  background-color: ${(prop) => prop.theme.main};
  border-radius: 10px;
`;
