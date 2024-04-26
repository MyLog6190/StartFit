import { ResponseDto } from "../dto";
import { ExerciseProgram } from "@/types/exercise";

export interface ExerciseProgramsResponseDto extends ResponseDto {
  programEntities: ExerciseProgram[];
}
