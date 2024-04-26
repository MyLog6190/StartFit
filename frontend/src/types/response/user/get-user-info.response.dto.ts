import { User } from "@/types/user";
import { ResponseDto } from "../dto";

export default interface UserInfoResponseDto extends ResponseDto {
  userEntity: User;
}
