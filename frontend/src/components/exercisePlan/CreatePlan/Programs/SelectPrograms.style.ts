import styled from "styled-components";

export const Wrapper = styled.div``;

export const ExerciseCategories = styled.div`
  display: flex;
  justify-content: center;
  color: ${(prop) => prop.theme.text};
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const CategoryItem = styled.div`
  padding: 10px 10px;
  white-space: nowrap;
  background-color: ${(prop) => prop.theme.main};
  border-radius: 10px;
  min-width: 95px;
  text-align: center;
  font-size: 16px;
  margin-right: 5px;
  margin-bottom: 5px;
  cursor: pointer;
`;

export const ProgramBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  background-color: ${(prop) => prop.theme.main};
  border-radius: 10px;
  padding: 20px;
  min-width: 520px;
`;

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const ProgramImg = styled.div`
  min-width: 180px;
  min-height: 180px;
  background-color: black;
  border-radius: 10px;
`;

export const ProgramInfoContainer = styled.div`
  padding: 0px 10px;
  width: 500px;
  min-width: 300px;
`;

export const ProgramLevel = styled.div`
  color: ${(prop) => prop.theme.text};
  margin-bottom: 10px;
  font-size: 30px;
  font-weight: 800;
`;

export const ProgramTitle = styled.div`
  font-size: 25px;
  font-weight: 600;
  color: ${(prop) => prop.theme.text};
  margin-bottom: 10px;
`;

export const ProgramSummary = styled.div`
  color: ${(prop) => prop.theme.text};
  font-size: 16px;
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
  margin-bottom: 10px;
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
  padding: 10px;
`;

export const CreateBtn = styled.div`
  width: 100%;
  padding: 15px 50px;
  text-align: center;
  background-color: ${(prop) => prop.theme.barBg};
  color: ${(prop) => prop.theme.text};
  border-radius: 20px;
  cursor: pointer;
`;
