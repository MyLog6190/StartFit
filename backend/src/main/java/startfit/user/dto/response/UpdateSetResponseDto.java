package startfit.user.dto.response;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import lombok.Getter;
import startfit.common.ResponseDto;
import startfit.user.entity.MyPlanEntity;

@Getter
public class UpdateSetResponseDto extends ResponseDto {
    List<MyPlanEntity> myPlanList;

    private UpdateSetResponseDto(List<MyPlanEntity> myPlanList) {
        super();
        this.myPlanList = myPlanList;
    }

    public static ResponseEntity<? super UpdateSetResponseDto> success(List<MyPlanEntity> myPlanList) {
        UpdateSetResponseDto responseBody = new UpdateSetResponseDto(myPlanList);
        return ResponseEntity.status(HttpStatus.OK).body(responseBody);
    }
}
