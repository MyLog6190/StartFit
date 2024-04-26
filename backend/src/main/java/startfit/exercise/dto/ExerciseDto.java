package startfit.exercise.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class ExerciseDto {
    private int id;
    private String exerciseName;
    private String categoryName;
    private String exerciseImg;
    private String exerciseDescription;

}
