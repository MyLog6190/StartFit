import { MyPlan } from "@/types/user/user.type";
import { ResponseDto } from "../dto";

export default interface DeleteExerciseSetResponseDto extends ResponseDto {
  myPlanList: MyPlan[];
}
