import { SignInRequestDto, SignUpRequestDto } from "@/types/request/auth";
import {
  LogoutResponseDto,
  SignInResponseDto,
  SignUpReponseDto,
} from "@/types/response/auth";
import { errorHandler, responseHandler } from "@/util/api_handler";
import axios from "axios";

const DOMAIN = "http://localhost:8888";
const API_DOMAIN = `${DOMAIN}/api/v1/auth`;

export const SNS_SIGN_IN_DOMAIN = (type: "naver" | "kakao" | "google") =>
  `${API_DOMAIN}/oauth2/${type}`;
const SIGN_IN_DOMAIN = () => `${API_DOMAIN}/login`;
const LOGOUT_DOMAIN = () => `${API_DOMAIN}/logout`;
const SIGN_UP_DOMAIN = () => `${API_DOMAIN}/sign-up`;

export const signInReqeuest = async (requestBody: SignInRequestDto) => {
  const result = await axios
    .post(SIGN_IN_DOMAIN(), requestBody, { withCredentials: true })
    .then(responseHandler<SignInResponseDto>)
    .catch(errorHandler);
  return result;
};

export const signUpRequest = async (requestBody: SignUpRequestDto) => {
  const result = await axios
    .post(SIGN_UP_DOMAIN(), requestBody)
    .then(responseHandler<SignUpReponseDto>)
    .catch(errorHandler);
  return result;
};

export const logoutRequest = async () => {
  const result = await axios
    .get(LOGOUT_DOMAIN(), { withCredentials: true })
    .then(responseHandler<LogoutResponseDto>)
    .catch(errorHandler);
  return result;
};
