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

export const ProgramsContainer = styled.div``;
