import { MyPlan } from "@/types/user/user.type";
import { ResponseDto } from "../dto";

export default interface AddSetResponseDto extends ResponseDto {
  myPlanList: MyPlan[];
}
