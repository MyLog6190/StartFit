package startfit.user.dto.request;

import java.util.List;

import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class CreatePlanRequestDto {
    private String exerciseName;
    private String date;
    private List<PlanInfoRequestDto> planInfos;
}
