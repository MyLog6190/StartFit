import styled from "styled-components";

export const ExercisesContainer = styled.div`
  text-align: center;
`;

export const SearchBar = styled.input`
  width: 100%;
  padding: 10px;
  background-color: white;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  margin-bottom: 15px;
`;

export const ExerciseCategories = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: ${(prop) => prop.theme.text};
  margin-bottom: 10px;
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

export const ExerciseBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(prop) => prop.theme.main};
  padding: 15px 20px;
  border-radius: 10px;
  min-width: 500px;
  margin-bottom: 10px;
`;

export const FlexBox = styled.div`
  display: flex;
`;

export const IconBox = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 70px;
`;

export const CheckBox = styled.input`
  min-width: 25px;
  min-height: 25px;
  margin-right: 15px;
`;

export const ExerciseImage = styled.div`
  min-width: 120px;
  min-height: 120px;
  background-color: black;
  border-radius: 10px;
`;

export const ExerciseTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 25px;
  color: ${(prop) => prop.theme.text};
  padding: 0px 15px;
`;

export const SelectionContainerFooter = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${(prop) => prop.theme.body};
  width: 100%;
  margin-top: 10px;
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
