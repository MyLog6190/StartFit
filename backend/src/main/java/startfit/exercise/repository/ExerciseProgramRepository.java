package startfit.exercise.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.lang.NonNull;

import startfit.exercise.entity.ExerciseProgramEntity;

public interface ExerciseProgramRepository extends JpaRepository<ExerciseProgramEntity, Integer> {
    @NonNull
    List<ExerciseProgramEntity> findAll();

    @Query("SELECT ep.level FROM ExerciseProgramEntity ep")
    List<String> findAllLevels();
}
