import { SubmitHandler, useForm } from "react-hook-form";
import {
  Message,
  SignUpContainer,
  SignUpForm,
  SignUpInput,
  SubmitButton,
  Title,
  Wrapper,
} from "./SignUpPage.style";

import { signUpRequest } from "@/api/auth";
import { ResponseCode } from "@/common/enum";
import { SignUpRequestDto } from "@/types/request/auth";
import { ResponseBody } from "@/types/response";
import { SignUpReponseDto } from "@/types/response/auth";

import {
  requestErrorMessage,
  serverErrorMessage,
} from "@/common/error/error-message";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface FormValues {
  email: string;
  name?: string;
  password: string;
  confirm_password: string;
  height?: number;
  weight?: number;
}

function SignUpPage() {
  // register form요소(input, select 등등)를 react-hook-form에 등록
  // watch 등록된 필드값을 실시간으로 관찰
  // handleSubmit form이 유효성 검사 후 문제가 없으면 실행
  // formState 폼의 현재 상태를 담고 있는 객체
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const navigate = useNavigate();

  const signUpResponse = (responseBody: ResponseBody<SignUpReponseDto>) => {
    if (!responseBody) return serverErrorMessage("서버가 응답이 없습니다.");
    console.log(responseBody);

    const { code } = responseBody;
    if (ResponseCode.DUPLICATE_ID === code)
      return requestErrorMessage("이미 사용중인 이메일입니다.");
    if (ResponseCode.MAIL_FAIL === code)
      return serverErrorMessage("인증 메일 전송에 실패했습니다.");
    if (ResponseCode.DATABASE_ERROR === code)
      return serverErrorMessage("서버 오류 입니다.");
    if (ResponseCode.SUCCESS !== code) return;

    toast(
      <h3 style={{ fontWeight: "bold" }}>
        이메일 인증을 하시면 회원가입이 완료됩니다.
      </h3>,
      {
        onClose: () => {
          navigate("/");
        },
      }
    );
  };

  const onValid: SubmitHandler<FormValues> = async (
    requestBody: SignUpRequestDto
  ) => {
    toast(<h3 style={{ fontWeight: "bold" }}>잠시만 기다려 주세요.</h3>);
    signUpRequest(requestBody).then(signUpResponse);
  };

  const emailPattern: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordPattern: RegExp =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,13}$/;

  return (
    <Wrapper>
      <SignUpContainer>
        <Title>회원가입</Title>
        <SignUpForm onSubmit={handleSubmit(onValid)}>
          <SignUpInput
            {...register("email", {
              required: { value: true, message: "이메일을 입력해 주세요." },
              pattern: {
                value: emailPattern,
                message: "올바른 이메일 형식이 아닙니다.",
              },
            })}
            placeholder="이메일"
            type="email"
          />
          {errors.email ? <Message>{errors.email.message}</Message> : null}
          <SignUpInput
            {...register("name", {
              minLength: {
                value: 2,
                message: "최소 2글자 이상으로 만들어주세요.",
              },
              maxLength: {
                value: 8,
                message: "최대 8글자입니다.",
              },
            })}
            placeholder="닉네임"
          />
          {errors.name ? <Message>{errors.name.message}</Message> : null}
          <SignUpInput
            {...register("password", {
              required: { value: true, message: "비밀번호를 입력해 주세요." },
              pattern: {
                value: passwordPattern,
                message:
                  "비밀번호는 최소 8자 이상이며, 대소문자, 숫자, 특수문자를 포함해야 합니다.",
              },
            })}
            placeholder="비밀번호"
            type="password"
          />
          {errors.password ? (
            <Message>{errors.password.message}</Message>
          ) : null}

          <SignUpInput
            {...register("confirm_password", {
              required: {
                value: true,
                message: "비밀번호가 정확한지 확인해 주세요.",
              },
              validate: (value) =>
                value === watch("password")
                  ? true
                  : "비밀번호가 일치하지 않습니다.",
            })}
            placeholder="비밀번호 확인"
            type="password"
          />
          {errors.confirm_password ? (
            <Message>{errors.confirm_password.message}</Message>
          ) : null}
          <SignUpInput
            {...register("height")}
            placeholder="키(cm)"
            type="number"
          />
          <SignUpInput
            {...register("weight")}
            placeholder="몸무게(kg)"
            type="number"
          />
          <SubmitButton type="submit">가입하기</SubmitButton>
        </SignUpForm>
      </SignUpContainer>
    </Wrapper>
  );
}

export default SignUpPage;
