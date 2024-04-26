package startfit.user.entity;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@Entity
@Table(name = "MY_PLAN")
@ToString
@NoArgsConstructor
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class MyPlanEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // ID 자동 생성
    private long id;
    private String email;

    @Column(name = "exercise_name")
    private String exerciseName;
    private String date;

    @OneToMany(mappedBy = "myPlan", cascade = CascadeType.ALL)
    private List<PlanInfoEntity> planInfos = new ArrayList<>();

    public MyPlanEntity(String email, String exerciseName, String date) {
        this.email = email;
        this.exerciseName = exerciseName;
        this.date = date;
    }
}
