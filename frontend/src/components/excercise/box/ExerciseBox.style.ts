import { motion } from "framer-motion";
import styled from "styled-components";

export const Box = styled(motion.div)`
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
