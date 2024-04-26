import { isDarkMode, isLoggedInState } from "@store/atom";
import { useAnimation, useMotionValueEvent, useScroll } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilValue, useRecoilState } from "recoil";
import { Item, Items, Logo, Nav } from "./ManuBar.style";
import { toast } from "react-toastify";
import { logoutRequest } from "@/api/auth";
import { ResponseBody } from "@/types/response";
import { LogoutResponseDto } from "@/types/response/auth";
import { serverErrorMessage } from "@/common/error/error-message";
import { ResponseCode } from "@/common/enum";

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
  const [isLoggedIn, setLoggedIn] = useRecoilState(isLoggedInState);
  const navigate = useNavigate();

  useMotionValueEvent(scrollY, "change", (Y) => {
    if (Y > 430) {
      navAni.start("scroll");
    } else {
      navAni.start("top");
    }
  });

  const logoutResponse = (response: ResponseBody<LogoutResponseDto>) => {
    if (!response) return serverErrorMessage("서버가 응답이 없습니다.");
    if (ResponseCode.SUCCESS !== response.code) return;
    setLoggedIn(false);
  };

  const onClickLogoutHandler = () => {
    logoutRequest().then(logoutResponse);
  };

  const onClickMessage = () => {
    toast(<h2>로그인이 필요합니다.</h2>, {
      onClose: () => {
        navigate("/auth/login");
      },
    });
  };

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
        {isLoggedIn ? (
          <Item onClick={onClickLogoutHandler}>로그아웃</Item>
        ) : (
          <Link to="/auth/login">
            <Item>로그인</Item>
          </Link>
        )}
        {isLoggedIn ? null : (
          <Link to="/auth/sign-up">
            <Item>회원가입</Item>
          </Link>
        )}

        <Item>공지사항</Item>
        {isLoggedIn ? (
          <Link to="/user/mypage">
            <Item>마이페이지</Item>
          </Link>
        ) : (
          <Item onClick={onClickMessage}>마이페이지</Item>
        )}
      </Items>
    </Nav>
  );
}

export default ManuBar;
