import { Link } from "react-router-dom";
import { Wrapper, LoginContainer, Logo, LoginBtn } from "./LoginPage.style";
import naverLoginImage from "@asset/png/login-btn/naver_login_button.png";
import kakaoLoginImage from "@asset/png/login-btn/kakao_login_button.png";

function LoginPage() {
  return (
    <Wrapper>
      <LoginContainer>
        <Link to="/">
          <Logo />
        </Link>
        <LoginBtn $image="">이메일 로그인</LoginBtn>
        <LoginBtn $image={naverLoginImage} />
        <LoginBtn $image={kakaoLoginImage} />
      </LoginContainer>
    </Wrapper>
  );
}

export default LoginPage;
