package startfit.user.dto.request;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class PlanInfoRequestDto {
    private int setNum;
    private int weight;
    private int reps;
    private boolean doChecked;
}
