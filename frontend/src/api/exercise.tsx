import {
  ExerciseProgramsResponseDto,
  ExercisesInfoResponseDto,
  ProgramContentsResponseDto,
  SelectProgramContentsResponseDto,
} from "@/types/response/execise";
import { errorHandler, responseHandler } from "@/util/api_handler";
import axios from "axios";

const DOMAIN = "http://localhost:8888";
const API_DOMAIN = `${DOMAIN}/api/v1/exercise`;

const GET_EXERCISES_INFO = () => `${API_DOMAIN}/lib`;
const GET_EXERCISE_PROGRAMS = () => `${API_DOMAIN}/programs`;
const GET_PROGRAM_CONTENTS = (id: string) => `${API_DOMAIN}/program/${id}`;
const GET_ALL_PROGRAM_CONTENTS = () => `${API_DOMAIN}/programsInfo`;

export const getExercisesInfoRequest = async () => {
  const result = await axios
    .get(GET_EXERCISES_INFO())
    .then(responseHandler<ExercisesInfoResponseDto>)
    .catch(errorHandler);
  return result;
};

export const getExerciseProgramRequest = async () => {
  const result = await axios
    .get(GET_EXERCISE_PROGRAMS())
    .then(responseHandler<ExerciseProgramsResponseDto>)
    .catch(errorHandler);
  return result;
};

export const getProgramContents = async (id: string) => {
  const result = await axios
    .get(GET_PROGRAM_CONTENTS(id))
    .then(responseHandler<ProgramContentsResponseDto>)
    .catch(errorHandler);
  return result;
};

export const getAllProgramContents = async () => {
  const result = await axios
    .get(GET_ALL_PROGRAM_CONTENTS())
    .then(responseHandler<SelectProgramContentsResponseDto>)
    .catch(errorHandler);
  return result;
};
