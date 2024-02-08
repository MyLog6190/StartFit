import { Nav, Logo, Items, Item } from "./ManuBar.style";
import { useAnimation, useScroll, useMotionValueEvent } from "framer-motion";
import { useRecoilValue } from "recoil";
import { isDarkMode } from "../../../../types/atom";
import { Link } from "react-router-dom";

const navVariants = {
  top: {
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  scroll: (isDark: boolean) => ({
    backgroundColor: isDark ? "#3b5998" : "#b59369",
  }),
};

function ManuBar() {
  const navAni = useAnimation();
  const { scrollY } = useScroll();
  const isDark = useRecoilValue(isDarkMode);

  useMotionValueEvent(scrollY, "change", (Y) => {
    if (Y > 430) {
      navAni.start("scroll");
    } else {
      navAni.start("top");
    }
  });

  return (
    <Nav
      variants={navVariants}
      animate={navAni}
      custom={isDark}
      initial={"top"}
    >
      <Link to="/">
        <Logo />
      </Link>
      <Items>
        <Item>로그인</Item>
        <Item>회원가입</Item>
        <Item>공지사항</Item>
        <Item>마이페이지</Item>
      </Items>
    </Nav>
  );
}

export default ManuBar;
