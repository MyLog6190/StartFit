import styled, { ThemeContext } from "styled-components";

export const EditContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  background: ${({ theme }) => theme.main};
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  color: ${({ theme }) => theme.text};
  max-width: 400px; // 적당한 최대 너비 설정
  width: 100%;
  position: fixed; // 고정 위치
  top: 50%; // 상단에서 50% 위치
  left: 50%; // 좌측에서 50% 위치
  transform: translate(-50%, -50%); // 자신의 크기의 반만큼 X축, Y축으로 이동
  z-index: 900;
`;

export const FormField = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  font-size: 18px;
  margin-bottom: 8px;
  display: block; // 라벨을 블록 요소로 만들어 줄 바꿈 효과
  color: ${({ theme }) => theme.text};
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 2px solid ${({ theme }) => theme.border};
  border-radius: 5px;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.body};
  font-size: 16px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  color: ${({ theme }) => theme.main};
  background-color: ${({ theme }) => theme.btnBg};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  width: 100%; // 버튼을 입력 필드와 같은 너비로 맞춤
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.selected_button_bg_color};
    color: #ffffff;
  }
`;
