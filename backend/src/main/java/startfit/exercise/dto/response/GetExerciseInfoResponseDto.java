package startfit.exercise.dto.response;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import lombok.Getter;
import startfit.common.ResponseDto;
import startfit.exercise.dto.ExerciseDto;

@Getter
public class GetExerciseInfoResponseDto extends ResponseDto {

    List<ExerciseDto> exerciseInfos;
    List<String> categories;

    private GetExerciseInfoResponseDto(List<ExerciseDto> exerciseInfos,
            List<String> categories) {
        super();
        this.exerciseInfos = exerciseInfos;
        this.categories = categories;
    }

    public static ResponseEntity<? super GetExerciseInfoResponseDto> success(List<ExerciseDto> exerciseInfos,
            List<String> categories) {
        GetExerciseInfoResponseDto response = new GetExerciseInfoResponseDto(exerciseInfos, categories);
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }
}
