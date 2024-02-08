import styled from "styled-components";
import { motion } from "framer-motion";

export const Nav = styled(motion.div)`
  display: flex;
  width: 100%;
  min-width: 576px;
  height: 50px;
  padding: 5px 60px;
  background-color: ${(prop) => prop.theme.barBg};
  z-index: 999;
  @media (max-width: 576px) {
    padding: 15px 10px;
  }
`;

export const Items = styled.ul`
  display: flex;
  align-items: center;
`;

export const Item = styled.li`
  padding: 2px;
  color: white;
  width: 70px;
  height: 20px;
  text-align: center;
`;
