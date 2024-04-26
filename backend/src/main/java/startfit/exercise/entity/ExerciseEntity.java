package startfit.exercise.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;

@Getter
@Entity
@Table(name = "EXERCISE")
public class ExerciseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "exercise_name")
    private String exerciseName;

    @ManyToOne
    @JoinColumn(name = "category_id", referencedColumnName = "id")
    private ExerciseCategoryEntity category;

    @Column(name = "exercise_img")
    private String exerciseImg;
    @Column(name = "exercise_description")
    private String exerciseDescription;

}
