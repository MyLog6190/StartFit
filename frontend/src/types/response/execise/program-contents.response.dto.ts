import { ExerciseProgram, ProgramContents } from "@/types/exercise";
import { ResponseDto } from "../dto";

export default interface ProgramContentsResponseDto extends ResponseDto {
  programEntities: ExerciseProgram;
  programContentsList: ProgramContents[];
}
