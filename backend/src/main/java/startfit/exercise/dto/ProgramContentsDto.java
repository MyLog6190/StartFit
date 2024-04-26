
package startfit.exercise.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class ProgramContentsDto {
    private int programId;
    private ExerciseDto exerciseDto;
    private int setNum;
    private int reps;
    private int weight;

}