import { MyPlan } from "@/types/user/user.type";
import { ResponseDto } from "../dto";

export default interface DeletePlanResponseDto extends ResponseDto {
  myPlanList: MyPlan[];
}
