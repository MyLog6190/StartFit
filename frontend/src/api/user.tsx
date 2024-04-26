import {
  FindByDayPlanRequsetDto,
  GetPlanRequestDto,
  UpdateSetRequestDto,
} from "@/types/request/user";
import AddSetRequestDto from "@/types/request/user/add-set.reqeuset.dto";
import CreatePlanRequestDto from "@/types/request/user/create-plan.request.dto";
import DeleteIdRequestDto from "@/types/request/user/delete-id.request.dto";
import UpdateUserInfoRequestDto from "@/types/request/user/update-user-info.request.dto";
import {
  AddSetResponseDto,
  DeleteExerciseSetResponseDto,
  DeletePlanResponseDto,
  FindByDayPlanResponseDto,
  UpdateSetResponseDto,
} from "@/types/response/user";
import CreatePlanResponseDto from "@/types/response/user/create_plan.response.dto";
import GetPlanResponseDto from "@/types/response/user/get-plan.response.dto";
import UserInfoResponseDto from "@/types/response/user/get-user-info.response.dto";
import { errorHandler, responseHandler } from "@/util/api_handler";
import axios from "axios";

const DOMAIN = "http://localhost:8888";
const API_DOMAIN = `${DOMAIN}/api/v1/auth/user`;

const CREATE_MY_PLAN_DOMAIN = () => `${API_DOMAIN}/create_plan`;
const GET_PLAN_DOMAIN = () => `${API_DOMAIN}/get_plan`;
const DELETE_PLAN_DOMAIN = () => `${API_DOMAIN}/delete_plan`;
const DELETE_EXERCISE_SET_DOMAIN = () => `${API_DOMAIN}/delete_exercise_set`;
const ADD_SET_DOMAIN = () => `${API_DOMAIN}/add_set`;
const UPDATE_SET_DOMAIN = () => `${API_DOMAIN}/update_set`;
const GET_USER_INFO = () => `${API_DOMAIN}/mypage`;
const UPDATE_USER_INFO = () => `${API_DOMAIN}/mypage/edit`;
const FIND_BY_DAY_PLAN = () => `${API_DOMAIN}/mypage/getDayPlan`;
export const createPlan = async (requestBody: CreatePlanRequestDto[]) => {
  const result = await axios
    .post(CREATE_MY_PLAN_DOMAIN(), requestBody, { withCredentials: true })
    .then(responseHandler<CreatePlanResponseDto>)
    .catch(errorHandler);

  return result;
};

export const getPlan = async (requestBody: GetPlanRequestDto) => {
  const result = await axios
    .post(GET_PLAN_DOMAIN(), requestBody, {
      withCredentials: true,
    })
    .then(responseHandler<GetPlanResponseDto>)
    .catch(errorHandler);

  return result;
};

export const deletePlan = async (requestBody: DeleteIdRequestDto) => {
  const result = await axios
    .post(DELETE_PLAN_DOMAIN(), requestBody, { withCredentials: true })
    .then(responseHandler<DeletePlanResponseDto>)
    .catch(errorHandler);

  return result;
};

export const deleteExerciseSet = async (requestBody: DeleteIdRequestDto) => {
  const result = await axios
    .post(DELETE_EXERCISE_SET_DOMAIN(), requestBody, {
      withCredentials: true,
    })
    .then(responseHandler<DeleteExerciseSetResponseDto>)
    .catch(errorHandler);

  return result;
};

export const addSet = async (requestBody: AddSetRequestDto) => {
  const result = await axios
    .post(ADD_SET_DOMAIN(), requestBody, { withCredentials: true })
    .then(responseHandler<AddSetResponseDto>)
    .catch(errorHandler);

  return result;
};

export const updateSet = async (requestBody: UpdateSetRequestDto) => {
  const result = await axios
    .post(UPDATE_SET_DOMAIN(), requestBody, {
      withCredentials: true,
    })
    .then(responseHandler<UpdateSetResponseDto>)
    .catch(errorHandler);
  return result;
};

export const getUserInfo = async () => {
  const result = await axios
    .get(GET_USER_INFO(), { withCredentials: true })
    .then(responseHandler<UserInfoResponseDto>)
    .catch(errorHandler);
  return result;
};

export const updateUserInfo = async (requestBody: UpdateUserInfoRequestDto) => {
  const result = await axios
    .post(UPDATE_USER_INFO(), requestBody, {
      withCredentials: true,
    })
    .then(responseHandler<UserInfoResponseDto>)
    .catch(errorHandler);

  return result;
};

export const findByDayPlan = async (requestBody: FindByDayPlanRequsetDto) => {
  const result = await axios
    .post(FIND_BY_DAY_PLAN(), requestBody, {
      withCredentials: true,
    })
    .then(responseHandler<FindByDayPlanResponseDto>)
    .catch(errorHandler);

  return result;
};
