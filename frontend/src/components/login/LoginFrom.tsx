import { signInReqeuest } from "@/api/auth";
import { ResponseCode } from "@/common/enum";
import {
  requestErrorMessage,
  serverErrorMessage,
} from "@/common/error/error-message";
import { isLoggedInState } from "@/store/atom";
import { SignInRequestDto } from "@/types/request/auth";
import { ResponseBody } from "@/types/response";
import { SignInResponseDto } from "@/types/response/auth";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSetRecoilState } from "recoil";
import { Input, LoginFormContainer, SubmitButton } from "./LoginFrom.style";

function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const setLoggedIn = useSetRecoilState(isLoggedInState);
  const navigate = useNavigate();

  //* =========== Response ============
  const signInResponse = (responsebody: ResponseBody<SignInResponseDto>) => {
    if (!responsebody) return;

    if (!responsebody) return serverErrorMessage("서버가 응답이 없습니다.");
    console.log(responsebody);

    const { code } = responsebody;
    if (ResponseCode.SIGN_IN_FAIL === code)
      return requestErrorMessage("아이디와 비밀번호를 확인해주세요.");

    if (ResponseCode.TOKEN_CREATE_ERROR === code)
      return serverErrorMessage("서버 오류 입니다.");

    if (ResponseCode.DATABASE_ERROR === code)
      return serverErrorMessage("서버 오류 입니다.");

    if (ResponseCode.SUCCESS !== code) return;

    setLoggedIn(true);
    toast(<h3 style={{ fontWeight: "bold" }}>로그인이 완료 되었습니다.</h3>);
    navigate("/");
  };

  //** ========= Change Handler =========
  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEmail(value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPassword(value);
  };

  // * ======= KeyDown Handler =======
  const handleEmailKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter") return;

    handleSignInClick();
  };
  const handlePasswordKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key !== "Enter") return;
    handleSignInClick();
  };

  //* ====== Click Handler ======
  const handleSignInClick = () => {
    if (email === "") return requestErrorMessage("이메일을 입력해 주세요.");
    if (password === "")
      return requestErrorMessage("비밀번호를 입력해 주세요.");

    const reqeuestBody: SignInRequestDto = {
      email,
      password,
    };
    //* Request
    signInReqeuest(reqeuestBody).then(signInResponse);
  };

  return (
    <LoginFormContainer>
      <Input
        type="email"
        placeholder="이메일"
        onChange={handleChangeEmail}
        onKeyDown={handleEmailKeyDown}
        required
      />
      <Input
        type="password"
        placeholder="비밀번호"
        onChange={handlePasswordChange}
        onKeyDown={handlePasswordKeyDown}
        required
      />
      <SubmitButton onClick={handleSignInClick} type="submit">
        로그인
      </SubmitButton>
    </LoginFormContainer>
  );
}

export default LoginForm;
