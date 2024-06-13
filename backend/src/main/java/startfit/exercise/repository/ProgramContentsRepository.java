package startfit.exercise.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import startfit.exercise.dto.ProgramContentsDto;
import startfit.exercise.entity.ProgramContentsEntity;
import startfit.exercise.entity.ProgramContentsId;

public interface ProgramContentsRepository extends JpaRepository<ProgramContentsEntity, ProgramContentsId> {
        @Query("SELECT new startfit.exercise.dto.ProgramContentsDto(pc.programId, new startfit.exercise.dto.ExerciseDto(e.id, e.exerciseName, ec.exerciseCategory, e.exerciseImg, e.exerciseDescription), pc.setNum, pc.reps, pc.weight) "
                        +
                        "FROM ProgramContentsEntity pc " +
                        "JOIN pc.exercise e " +
                        "JOIN e.category ec " +
                        "WHERE pc.programId = :id")
        List<ProgramContentsDto> findByProgramId(@Param("id") int id);

        @Query("SELECT new startfit.exercise.dto.ProgramContentsDto(pc.programId, new startfit.exercise.dto.ExerciseDto(e.id, e.exerciseName, ec.exerciseCategory, e.exerciseImg, e.exerciseDescription), pc.setNum, pc.reps, pc.weight) "
                        +
                        "FROM ProgramContentsEntity pc " +
                        "JOIN pc.exercise e " +
                        "JOIN e.category ec")
        List<ProgramContentsDto> findAllProgramContents();

}