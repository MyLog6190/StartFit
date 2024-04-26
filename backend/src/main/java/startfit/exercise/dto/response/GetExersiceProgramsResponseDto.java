package startfit.exercise.dto.response;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import lombok.Getter;
import startfit.common.ResponseDto;
import startfit.exercise.entity.ExerciseProgramEntity;

@Getter
public class GetExersiceProgramsResponseDto extends ResponseDto {
    private List<ExerciseProgramEntity> programEntities;

    private GetExersiceProgramsResponseDto(List<ExerciseProgramEntity> programEntities) {
        super();
        this.programEntities = programEntities;
    }

    public static ResponseEntity<? super GetExersiceProgramsResponseDto> success(
            List<ExerciseProgramEntity> programEntities) {
        GetExersiceProgramsResponseDto response = new GetExersiceProgramsResponseDto(programEntities);
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }
}
