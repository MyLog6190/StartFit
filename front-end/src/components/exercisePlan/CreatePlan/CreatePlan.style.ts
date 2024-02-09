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
  height: 850px;
  border-radius: 10px;
  overflow: scroll;

  @media (max-width: 992px) {
    width: 80vw;
  }
`;

export const Tabs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 10px;
`;

export const Tab = styled.div`
  padding: 10px 20px;
  text-align: center;
  color: ${(prop) => prop.theme.text};
  font-size: 20px;
  font-weight: 600;
`;

export const ExercisesContainer = styled.div`
  text-align: center;
`;

export const SearchBar = styled.input`
  width: 100%;
  padding: 3px;
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
  min-width: 20px;
  min-height: 20px;
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
  font-size: 30px;
  color: ${(prop) => prop.theme.text};
  padding: 0px 15px;
`;

export const ProgramsContainer = styled.div``;
