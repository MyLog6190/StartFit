import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 576px;
  min-height: 1100px;
  padding: 145px 100px;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  overflow: hidden;
  flex-shrink: 0;
  @media (max-width: 992px) {
    padding: 50px 10px;
  }
`;
