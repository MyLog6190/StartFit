import { ResponseCode, ResponseMessage } from "@common/enum";

export default interface ResponseDto {
  code: ResponseCode;
  message: ResponseMessage;
}
