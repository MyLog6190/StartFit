package startfit.exercise.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import startfit.exercise.dto.response.GetAllProgramContentsResponseDto;
import startfit.exercise.dto.response.GetExerciseInfoResponseDto;
import startfit.exercise.dto.response.GetExersiceProgramsResponseDto;
import startfit.exercise.dto.response.GetProgramContentsResponseDto;
import startfit.exercise.service.ExerciseService;

@RestController
@RequestMapping("/api/v1/exercise")
@RequiredArgsConstructor
public class ExerciseController {
    private final ExerciseService exerciseService;

    @GetMapping("lib")
    public ResponseEntity<? super GetExerciseInfoResponseDto> getExerciseInfo() {
        ResponseEntity<? super GetExerciseInfoResponseDto> response = exerciseService.getExerciseInfo();
        return response;
    }

    @GetMapping("programs")
    public ResponseEntity<? super GetExersiceProgramsResponseDto> getExercisePrograms() {
        ResponseEntity<? super GetExersiceProgramsResponseDto> response = exerciseService.getExercisePrograms();
        return response;
    }

    @GetMapping("program/{id}")
    public ResponseEntity<? super GetProgramContentsResponseDto> getProgramContents(@PathVariable("id") String id) {
        ResponseEntity<? super GetProgramContentsResponseDto> response = exerciseService
                .getProgramContents(Integer.parseInt(id));
        return response;
    }

    @GetMapping("/programsInfo")
    public ResponseEntity<? super GetAllProgramContentsResponseDto> getAllProgramcontents() {
        ResponseEntity<? super GetAllProgramContentsResponseDto> response = exerciseService.getAllProgramContents();
        return response;
    }

}
