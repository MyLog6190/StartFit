package startfit.exercise.service;

import org.springframework.http.ResponseEntity;

import startfit.exercise.dto.response.GetAllProgramContentsResponseDto;
import startfit.exercise.dto.response.GetExerciseInfoResponseDto;
import startfit.exercise.dto.response.GetExersiceProgramsResponseDto;
import startfit.exercise.dto.response.GetProgramContentsResponseDto;

public interface ExerciseService {

    ResponseEntity<? super GetExerciseInfoResponseDto> getExerciseInfo();

    ResponseEntity<? super GetExersiceProgramsResponseDto> getExercisePrograms();

    ResponseEntity<? super GetProgramContentsResponseDto> getProgramContents(int id);

    ResponseEntity<? super GetAllProgramContentsResponseDto> getAllProgramContents();
}
