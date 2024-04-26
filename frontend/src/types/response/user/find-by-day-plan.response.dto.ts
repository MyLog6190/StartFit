import { MyPlan } from "@/types/user";
import { ResponseDto } from "../dto";

export default interface FindByDayPlanResponseDto extends ResponseDto {
  planList: MyPlan[];
}
