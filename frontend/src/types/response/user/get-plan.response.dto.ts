import { MyPlan } from "@/types/user/user.type";
import { ResponseDto } from "../dto";

export default interface GetPlanResponseDto extends ResponseDto {
  myPlanList: MyPlan[];
}
