import { SNS_SIGN_IN_DOMAIN } from "@/api/auth";
import LoginForm from "@/components/login/LoginFrom";
import kakaoLoginImage from "@asset/png/login-btn/kakao_login_button.png";
import naverLoginImage from "@asset/png/login-btn/naver_login_button.png";
import googleLoginImage from "@asset/png/login-btn/google_login_button.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { LoginBtn, LoginContainer, Logo, Wrapper } from "./LoginPage.style";

function LoginPage() {
  const [showLogin, setShowLogin] = useState<boolean>(false);

  const toggleLoginForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <Wrapper>
      <LoginContainer>
        <Link to="/">
          <Logo />
        </Link>
        <LoginBtn onClick={toggleLoginForm} $image="">
          이메일 로그인
        </LoginBtn>
        {showLogin ? <LoginForm /> : null}
        <Link to={SNS_SIGN_IN_DOMAIN("naver")}>
          <LoginBtn $image={naverLoginImage} />
        </Link>
        <Link to={SNS_SIGN_IN_DOMAIN("kakao")}>
          <LoginBtn $image={kakaoLoginImage} />
        </Link>
        <Link to={SNS_SIGN_IN_DOMAIN("google")}>
          <LoginBtn $image={googleLoginImage} />
        </Link>
      </LoginContainer>
    </Wrapper>
  );
}

export default LoginPage;
