package startfit.exercise.service.implement;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import startfit.exercise.dto.ExerciseDto;
import startfit.exercise.dto.ProgramContentsDto;
import startfit.exercise.dto.response.GetAllProgramContentsResponseDto;
import startfit.exercise.dto.response.GetExerciseInfoResponseDto;
import startfit.exercise.dto.response.GetExersiceProgramsResponseDto;
import startfit.exercise.dto.response.GetProgramContentsResponseDto;
import startfit.exercise.entity.ExerciseProgramEntity;
import startfit.exercise.repository.ExerciseCategoryRepository;
import startfit.exercise.repository.ExerciseProgramRepository;
import startfit.exercise.repository.ExerciseRepository;
import startfit.exercise.repository.ProgramContentsRepository;
import startfit.exercise.service.ExerciseService;

@Service
@RequiredArgsConstructor
public class ExerciseServiceImplement implements ExerciseService {

    private final ExerciseRepository exerciseRepository;
    private final ExerciseCategoryRepository exerciseCategoryRepository;
    private final ExerciseProgramRepository exerciseProgramRepository;

    private final ProgramContentsRepository programContentsRepository;

    @Override
    public ResponseEntity<? super GetExerciseInfoResponseDto> getExerciseInfo() {
        try {
            List<ExerciseDto> exerciseEntities = exerciseRepository.findAllWithCategory();
            List<String> categories = exerciseCategoryRepository.findAllCategory();
            return GetExerciseInfoResponseDto.success(exerciseEntities, categories);
        } catch (Exception e) {
            e.printStackTrace();
            return GetExerciseInfoResponseDto.databaseError();
        }
    }

    @Override
    public ResponseEntity<? super GetExersiceProgramsResponseDto> getExercisePrograms() {
        try {
            List<ExerciseProgramEntity> programEntities = exerciseProgramRepository.findAll();
            return GetExersiceProgramsResponseDto.success(programEntities);
        } catch (Exception e) {
            e.printStackTrace();
            return GetExersiceProgramsResponseDto.databaseError();
        }
    }

    @Override
    public ResponseEntity<? super GetProgramContentsResponseDto> getProgramContents(int id) {
        try {
            List<ProgramContentsDto> programContentsList = programContentsRepository.findByProgramId(id);
            System.out.println(programContentsList);
            return GetProgramContentsResponseDto.success(programContentsList);
        } catch (Exception e) {
            e.getMessage();
            return GetProgramContentsResponseDto.databaseError();
        }

    }

    @Override
    public ResponseEntity<? super GetAllProgramContentsResponseDto> getAllProgramContents() {
        try {
            List<ExerciseProgramEntity> programs = exerciseProgramRepository.findAll();
            List<ProgramContentsDto> programContentsList = programContentsRepository.findAllProgramContents();
            List<String> programLevelList = exerciseProgramRepository.findAllLevels();
            String[] programFilter = programLevelList
                    .toArray(new String[3]);
            return GetAllProgramContentsResponseDto.success(programs, programContentsList, programFilter);
        } catch (Exception e) {
            e.printStackTrace();
            return GetAllProgramContentsResponseDto.databaseError();
        }
    }

}
