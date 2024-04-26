import styled from "styled-components";
import { motion } from "framer-motion";

export const Overlay = styled(motion.div)`
  top: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: grid;
  place-items: center;
  z-index: 900;
`;

export const SelectionContainer = styled.div`
  padding: 30px 100px;
  background-color: ${(prop) => prop.theme.body};
  width: 60vw;
  min-width: 700px;
  height: auto; // 높이를 auto로 설정하여 내용에 따라 조정되도록 함
  max-height: 95vh; // 화면 높이의 85%를 최대 높이로 설정
  border-radius: 10px;
  overflow-y: auto; // 내용이 넘칠 경우 스크롤바 표시
  @media (max-width: 992px) {
    width: 80vw;
    padding: 30px 50px;
  }
`;

export const Tabs = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 2px solid ${(props) => props.theme.border};
  margin-bottom: 20px;
  padding-bottom: 5px;
`;

export const Tab = styled.div<{ isSelected: boolean }>`
  padding: 10px 30px;
  cursor: pointer;
  color: ${(props) => props.theme.text};
  font-weight: ${(props) => (props.isSelected ? "700" : "500")};
  background-color: ${(props) =>
    props.isSelected ? props.theme.hover : "transparent"};
  border-top: 3px solid
    ${(props) => (props.isSelected ? props.theme.circle : "transparent")};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.hover};
    color: ${(props) => props.theme.body};
  }
`;

export const ProgramsContainer = styled.div``;
