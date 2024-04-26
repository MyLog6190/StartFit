package startfit.exercise.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;

@Getter
@Entity
@Table(name = "PROGRAM_CONTENTS")
@IdClass(ProgramContentsId.class)
public class ProgramContentsEntity {
    @Id
    @Column(name = "program_id")
    private int programId;

    @Id
    @Column(name = "exercise_id")
    private int exerciseId;

    @ManyToOne
    @JoinColumn(name = "exercise_id", referencedColumnName = "id")
    private ExerciseEntity exercise;

    @Column(name = "set_num")
    private int setNum;
    private int reps;
    private int weight;
}