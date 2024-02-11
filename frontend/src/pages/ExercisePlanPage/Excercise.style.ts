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

export const CreateBtn = styled.button`
  width: 500px;
  margin-top: 30px;
  padding: 10px 100px;
  font-size: 18px;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.barBg};
  border: ${(props) => props.theme.barBg};
  border-radius: 15px;
  cursor: pointer;
  white-space: nowrap;
`;
