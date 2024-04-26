package startfit.user.dto.response;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import lombok.Getter;
import startfit.common.ResponseDto;
import startfit.user.entity.MyPlanEntity;

@Getter
public class FindByDayPlanResponseDto extends ResponseDto {
    private List<MyPlanEntity> planList;

    private FindByDayPlanResponseDto(List<MyPlanEntity> planList) {
        super();
        this.planList = planList;
    }

    public static ResponseEntity<? super FindByDayPlanResponseDto> success(List<MyPlanEntity> planList) {
        FindByDayPlanResponseDto response = new FindByDayPlanResponseDto(planList);
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }
}