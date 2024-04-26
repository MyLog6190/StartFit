import styled from "styled-components";

export const Warraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 576px;
  min-height: 1000px;
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
  gap: 10px;
  padding: 20px;
`;

export const ExerciseFilterLabal = styled.label<{ checked: boolean }>`
  margin: 10px 20px;
  background-color: ${(props) =>
    props.checked
      ? (props) => props.theme.selected_button_bg_color
      : (props) => props.theme.main};
  width: 200px;
  height: 3rem;
  line-height: 3rem;
  font-size: 1.5rem;
  border-radius: 20px;
  box-shadow: var(--shadow);
  color: ${(props) => props.theme.text};
  text-align: center;
  cursor: pointer;
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
  }
  @media (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
