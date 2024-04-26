import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.body};
  height: 100vh;
  padding: 20px;
`;

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.main};
  border-radius: 20px;
  box-shadow: 0 4px 8px ${(props) => props.theme.border};
  padding: 40px;
  max-width: 400px;
  width: 100%;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.text};
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 20px; // 여백 조정
`;

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px; // 여백 간격 조정
  width: 100%;
`;

export const SignUpInput = styled.input`
  font-size: 16px;
  padding: 12px; // 패딩 조정
  border: 2px solid ${(props) => props.theme.border}; // 테두리 굵기 조정
  border-radius: 10px; // 둥근 모서리 조정
  &:focus {
    border-color: ${(props) => props.theme.hover};
    box-shadow: 0 0 0 2px ${(props) => props.theme.hover};
  }
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.barBg};
  color: white;
  padding: 12px 15px; // 패딩 조정
  border: none;
  border-radius: 10px; // 둥근 모서리 조정
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.2s;
  &:hover {
    background-color: ${(props) => props.theme.circle2};
  }
`;

export const Message = styled.p`
  color: #ff4757;
  font-size: 12px; // 메시지 폰트 크기 조정
  padding: 2px;
  font-weight: 600;
`;

export const SubmitButton = styled.button`
  background-color: ${(props) => props.theme.btnBg};
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: ${(props) => props.theme.circle2};
  }
`;
