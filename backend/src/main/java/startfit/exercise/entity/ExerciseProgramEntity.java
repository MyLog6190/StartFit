package startfit.exercise.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;

@Getter
@Entity
@Table(name = "EXERCISE_PROGRAM")
public class ExerciseProgramEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "program_name")
    private String programName;
    private String level;
    @Column(name = "program_cycle")
    private String programCycle;
    @Column(name = "program_description")
    private String programDescription;
    @Column(name = "program_img")
    private String programImg;
}
