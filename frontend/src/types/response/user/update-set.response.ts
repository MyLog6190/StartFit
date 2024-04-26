import { MyPlan } from "@/types/user/user.type";
import { ResponseDto } from "../dto";

export default interface UpdateSetResponseDto extends ResponseDto {
  myPlanList: MyPlan[];
}
