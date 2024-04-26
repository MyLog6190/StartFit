package startfit.user.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "PLAN_INFO")
public class PlanInfoEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // ID 자동 생성
    private long id;

    @ManyToOne
    @JoinColumn(name = "plan_id", referencedColumnName = "id")
    @JsonIgnore // 이 필드를 JSON 변환에서 제외
    private MyPlanEntity myPlan;

    private int reps;
    @Column(name = "set_num")
    private int setNum;
    private int weight;
    @Column(name = "do_checked")
    private boolean doChecked;

}
