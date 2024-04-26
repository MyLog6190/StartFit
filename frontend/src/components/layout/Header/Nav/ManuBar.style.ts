import styled from "styled-components";
import { motion } from "framer-motion";
import image from "@/asset/png/logo/Logo.png";

export const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 70px;
  top: 0px;
  padding: 15px 70px;
  z-index: 99;
  @media (max-width: 576px) {
    padding: 15px 20px;
  }
`;

export const Logo = styled.div`
  background: url(${image});
  background-size: contain;
  background-repeat: no-repeat;
  width: 130px;
  height: 45px;
`;

export const Items = styled.ul`
  display: flex;
  align-items: center;
`;

export const Item = styled.li`
  padding: 2px;
  color: white;
  width: 90px;
  height: 20px;
  text-align: center;
  cursor: pointer;
`;
