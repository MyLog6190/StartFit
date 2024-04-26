import styled from "styled-components";
import imageURL from "@/asset/png/programs/stl.png";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
  background-color: ${(props) => props.theme.body};
  min-height: 100vh;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: ${(props) => props.theme.text};
  margin-bottom: 1rem;
`;

export const Subtitle = styled.h2`
  font-size: 1.75rem;
  color: ${(props) => props.theme.second};
  margin-bottom: 2rem;
`;

export const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 2rem;
`;

export const ProgramContentsBox = styled.div`
  flex: 1 1 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 100px;
  background: ${(props) => props.theme.main};
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: ${(props) => props.theme.text};
`;

export const ProgramLevel = styled.h1`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 75px;
`;

export const ProgramTitle = styled.h3`
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 15px;
`;

export const ProgramSummary = styled.p`
  word-wrap: break-word;
`;

export const ProgramInfoBtn = styled.button`
  margin-top: 50px;
  padding: 5px 10px;
  font-size: 20px;
  height: 50px;
  border-radius: 20px;
  background-color: #355dff;
  border: none;
  color: ${(props) => props.theme.text};
`;

export const ProgramImg = styled.div`
  width: 100%;
  height: 300px;
  background-image: url(${imageURL});
  background-size: cover;
  background-position: center;
  border-radius: 10px;
`;

export const ProgramInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
`;

export const ExerciseBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.main};
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: ${(props) => props.theme.text};
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
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
  margin-top: 35px;
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
