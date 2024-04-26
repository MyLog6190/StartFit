import { ResponseDto } from "@/types/response/dto";
import { AxiosResponse } from "axios";

export const responseHandler = <T,>(response: AxiosResponse<T>) => {
  const responseBody: T = response.data;
  return responseBody;
};

export const errorHandler = (error: any) => {
  if (!error.response || !error.response.data) return null;
  const responseBody: ResponseDto = error.response.data;
  return responseBody;
};
