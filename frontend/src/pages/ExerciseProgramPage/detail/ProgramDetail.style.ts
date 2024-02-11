import styled from "styled-components";

export const Title = styled.h1`
  font-size: 45px;
  margin: 100px 0px 30px 0px;
`;

export const Subtitle = styled.h4`
  margin-bottom: 70px;
`;

export const ProgramInfo = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
`;

export const ExerciseBox = styled.div`
  min-width: 420px;
  min-height: 520px;
  padding: 55px 40px;
  background-color: ${(props) => props.theme.main};
  color: ${(props) => props.theme.text};
`;

export const ExerciseImg = styled.div`
  width: 100%;
  height: 200px;
  background-color: black;
`;

export const ExerciseSetInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 45px;
  height: 150px;
`;

export const ExerciseTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
`;

export const Set = styled.p`
  font-size: 18px;
`;

export const Rep = styled.p`
  font-size: 18px;
`;

export const Weight = styled.p`
  font-size: 18px;
`;
