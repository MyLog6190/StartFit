package startfit.exercise.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import startfit.exercise.dto.ExerciseDto;
import startfit.exercise.entity.ExerciseEntity;

public interface ExerciseRepository extends JpaRepository<ExerciseEntity, Integer> {
    @Query("SELECT new startfit.exercise.dto.ExerciseDto(e.id, e.exerciseName, c.exerciseCategory, e.exerciseImg, e.exerciseDescription) "
            +
            "FROM ExerciseEntity e " +
            "JOIN e.category c")
    List<ExerciseDto> findAllWithCategory();
}
