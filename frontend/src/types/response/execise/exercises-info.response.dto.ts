import { Exercise } from "@/types/exercise";
import { ResponseDto } from "../dto";

export default interface ExercisesInfoResponseDto extends ResponseDto {
  exerciseInfos: Exercise[];
  categories: String[];
}
