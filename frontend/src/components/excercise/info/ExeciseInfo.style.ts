import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.8); /* 블러 효과 */
  z-index: 998;
  top: 0;
  left: 0;
`;

export const ExerciseInfoContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 50px;
  gap: 35px;
  background-color: ${(props) => props.theme.main};
  width: 450px;
  height: auto; /* 높이를 auto로 조정하여 내용에 맞게 조절 */
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 그림자 추가 */
  position: fixed;
  transform: translate(-50%, -50%);
  font-family: "Roboto", sans-serif; /* 글꼴 지정 */
`;

export const ExerciseImg = styled.img`
  /* 이미지 요소로 변경 */
  width: 350px;
  height: 200px;
  object-fit: cover; /* 이미지 비율 유지 */
  border-radius: 10px; /* 이미지 모서리 둥글게 */
`;

export const ExerciseName = styled.h2`
  /* div 대신 h2 사용 */
  text-align: center;
  color: ${(props) => props.theme.text};
  font-size: 30px;
  font-weight: 550;
`;

export const ExerciseDescription = styled.p`
  /* div 대신 p 사용 */
  color: ${(props) => props.theme.text};
  font-size: 16px; /* 글꼴 크기 조정 */
  line-height: 1.5; /* 줄 간격 조정 */
  text-align: justify; /* 양쪽 정렬 */
`;

export const CloseButton = styled.button`
  cursor: pointer;
  background-color: #ff6b6b; /* 배경색 */
  color: white; /* 텍스트 색상 */
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-weight: bold;
  margin-top: 20px; /* 상단 여백 추가 */
  transition: background-color 0.3s ease; /* 배경색 변경시 애니메이션 */

  &:hover {
    background-color: #ff4757; /* 호버 상태 색상 변경 */
  }
`;
