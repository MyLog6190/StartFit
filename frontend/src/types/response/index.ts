import { ResponseDto } from "./dto";

type ResponseBody<T> = T | ResponseDto | null;

export type { ResponseBody };
