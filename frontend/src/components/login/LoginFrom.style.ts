import styled from "styled-components";

export const LoginFormContainer = styled.div`
  width: 365px;
  padding: 20px;
  background-color: ${(props) => props.theme.login_form_bg};
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.border};
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.main};
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background-color: ${(props) => props.theme.btnBg};
  color: white;
`;
