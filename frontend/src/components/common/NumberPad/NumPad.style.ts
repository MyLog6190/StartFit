import styled from "styled-components";

export const NumPadContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding: 20px;
  background-color: ${(props) => props.theme.main};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const NumButton = styled.button`
  padding: 20px;
  font-size: 24px;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  border: 2px solid ${(props) => props.theme.border};
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.selected_button_bg_color};
    color: ${(props) => props.theme.main};
  }
`;

export const DeleteButton = styled(NumButton)`
  background-color: ${(props) => props.theme.btnBg};
  color: ${(props) => props.theme.body};

  &:hover {
    background-color: ${(props) => props.theme.second};
  }
`;
