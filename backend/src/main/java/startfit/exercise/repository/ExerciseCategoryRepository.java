package startfit.exercise.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.lang.NonNull;

import startfit.exercise.entity.ExerciseCategoryEntity;

public interface ExerciseCategoryRepository extends JpaRepository<ExerciseCategoryEntity, Integer> {
    @NonNull
    List<ExerciseCategoryEntity> findAll();

    @Query("SELECT ec.exerciseCategory FROM ExerciseCategoryEntity ec")
    List<String> findAllCategory();
}
