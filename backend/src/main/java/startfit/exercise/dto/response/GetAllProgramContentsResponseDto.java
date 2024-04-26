package startfit.exercise.dto.response;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import lombok.Getter;
import startfit.common.ResponseDto;
import startfit.exercise.dto.ProgramContentsDto;
import startfit.exercise.entity.ExerciseProgramEntity;

@Getter
public class GetAllProgramContentsResponseDto extends ResponseDto {
    private List<ExerciseProgramEntity> programs;
    private List<ProgramContentsDto> programContentsList;
    private String[] programFilter;

    private GetAllProgramContentsResponseDto(List<ExerciseProgramEntity> programs,
            List<ProgramContentsDto> programContentsList, String[] programFilter) {
        super();
        this.programs = programs;
        this.programContentsList = programContentsList;
        this.programFilter = programFilter;
    }

    public static ResponseEntity<? super GetAllProgramContentsResponseDto> success(List<ExerciseProgramEntity> programs,
            List<ProgramContentsDto> programContentsList, String[] programFilter) {
        GetAllProgramContentsResponseDto response = new GetAllProgramContentsResponseDto(programs, programContentsList,
                programFilter);
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }
}
