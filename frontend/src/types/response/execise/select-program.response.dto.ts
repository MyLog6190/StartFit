import { ExerciseProgram, ProgramContents } from "@/types/exercise";
import { ResponseDto } from "../dto";

export default interface SelectProgramContentsResponseDto extends ResponseDto {
  programs: ExerciseProgram[];
  programContentsList: ProgramContents[];
  programFilter: String[];
}
