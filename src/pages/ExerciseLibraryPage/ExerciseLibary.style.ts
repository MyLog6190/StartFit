import styled from "styled-components";

export const Warraper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 576px;
  padding: 145px 250px;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  overflow: hidden;
`;

export const Title = styled.h1`
  background-color: ${(props) => props.theme.main};
  border: 1px solid ${(props) => props.theme.hover};
  color: ${(props) => props.theme.text};
  width: max(60vw, 600px);
  height: 5rem;
  text-align: center;
  line-height: 5rem;
  border-radius: 50px;
  font-size: 3rem;
  margin-bottom: 50px;
`;

export const FinderContainer = styled.div`
  width: 40vw;
  min-width: 400px;
  height: 3rem;
  border: 1px solid ${(props) => props.theme.text};
  border-radius: 15px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.main};
  margin-bottom: 20px;
`;

export const Finder = styled.input`
  width: 35vw;
  min-width: 350px;
  text-align: left;
  height: 2.5rem;
  border: none;
  margin-left: 10px;
  padding: 0;
  box-sizing: border-box;
  background-color: transparent;
  color: ${(props) => props.theme.text};
  outline: none;
`;

export const ExerciseFilterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }
  gird-gap: 20px;
  padding: 20px;
`;

export const ExerciseFilterLabal = styled.label`
  type: radio;
  margin: 10px 20px;
  background-color: ${(props) => props.theme.main};
  width: 200px;
  height: 3rem;
  line-height: 3rem;
  font-size: 1.5rem;
  border-radius: 20px;
  box-shadow: var(--shadow);
  color: ${(props) => props.theme.text};
  text-align: center;
`;

export const FilterRadioBtn = styled.input`
  display: none;
  box-sizing: border-box;
`;

export const ExerciseBoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  @media (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
`;

export const ExerciseBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 25px;
  background-color: ${(props) => props.theme.main};
  padding: 15px;
  line-height: 2.5rem;
  font-size: 2rem;
  width: 15rem;
  height: 300px;
  color: ${(props) => props.theme.text};
  text-align: center;
  border-radius: 20px;
  cursor: pointer;
  z-index: 1 !important;
`;

export const ExerciseImg = styled.div`
  width: 210px;
  height: 160px;
  background-color: black;
`;

export const ExerciseNameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 210px;
  height: 115px;
  padding-top: 20px;
`;

export const ExerciseName = styled.div`
  width: 100%;
  max-width: 240px;
  word-wrap: break-word;
  font-size: 20px;
  font-weight: 600;
  padding: 4px;
  color: ${(props) => props.theme.text};
`;
