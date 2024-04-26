import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
`;

export const ExerciseCategories = styled.div`
  display: flex;
  justify-content: center;
  color: ${(prop) => prop.theme.text};
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const CategoryItem = styled.div<{ isSelectedLevel: boolean }>`
  padding: 10px 20px;
  background-color: ${(props) =>
    props.isSelectedLevel
      ? props.theme.selected_button_bg_color
      : "transparent"};
  border: 2px solid
    ${(props) =>
      props.isSelectedLevel
        ? props.theme.selected_button_bg_color
        : props.theme.border};
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.hover};
    border-color: ${(props) => props.theme.hover};
  }
`;

export const ProgramBox = styled.div`
  background-color: ${(props) => props.theme.main};
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s;
  width: 700px;
  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const ProgramImg = styled.div`
  width: 100%;
  max-width: 200px;
  height: 200px;
  background-color: black;
  border-radius: 8px;
  background-size: cover;
  background-position: center;
`;

export const ProgramInfoContainer = styled.div`
  padding: 20px;
`;

export const ProgramLevel = styled.h2`
  color: ${(props) => props.theme.second};
  margin-bottom: 10px;
`;

export const ProgramTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: ${(props) => props.theme.text};
`;

export const ProgramSummary = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.second};
`;

export const ProgramExerciseList = styled.div`
  margin-top: 20px;
  background-color: ${(prop) => prop.theme.main};
  color: ${(prop) => prop.theme.text};
  border-radius: 10px;
  border: 1px solid ${(prop) => prop.theme.text};
  padding: 10px;
`;

export const Title = styled.div`
  font-size: 25px;
  font-weight: 600;
  color: ${(prop) => prop.theme.text};
  margin-top: 20px;
`;

export const ExerciseBox = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
`;

export const ExerciseImg = styled.div`
  width: 100px;
  height: 100px;
  background-color: black;
  border-radius: 10px;
`;

export const ExerciseInfoContainer = styled.div`
  padding: 10px;
`;

export const ExerciseTitle = styled.div`
  color: ${(prop) => prop.theme.text};
  font-size: 22px;
  font-weight: 600px;
  line-height: 40px;
  margin-bottom: 10px;
`;

export const ExerciseSet = styled.div`
  color: ${(prop) => prop.theme.text};
`;

export const SelectionContainerFooter = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px;
`;

export const CreateBtn = styled.button`
  padding: 15px 50px;
  font-size: 18px;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.btnBg};
  border: none; // 테두리 제거
  border-radius: 20px; // 버튼의 모서리를 둥글게
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s; // 색상 변화에 애니메이션 적용

  &:hover {
    background-color: ${(props) => props.theme.hover}; // 호버 시 배경색 변경
    color: ${(props) => props.theme.body}; // 호버 시 텍스트 색상 변경
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2); // 호버 시 그림자 효과
  }
`;
