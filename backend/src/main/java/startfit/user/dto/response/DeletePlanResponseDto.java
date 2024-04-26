package startfit.user.dto.response;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import lombok.Getter;
import startfit.common.ResponseCode;
import startfit.common.ResponseDto;
import startfit.common.ResponseMessage;
import startfit.user.entity.MyPlanEntity;

@Getter
public class DeletePlanResponseDto extends ResponseDto {

    List<MyPlanEntity> myPlanList;

    private DeletePlanResponseDto(List<MyPlanEntity> myPlanList) {
        super();
        this.myPlanList = myPlanList;
    };

    public static ResponseEntity<? super DeletePlanResponseDto> success(List<MyPlanEntity> myPlanList) {
        DeletePlanResponseDto responseBody = new DeletePlanResponseDto(myPlanList);
        return ResponseEntity.status(HttpStatus.OK).body(responseBody);
    }

    public static ResponseEntity<ResponseDto> certificationFail() {
        ResponseDto responseBody = new ResponseDto(ResponseCode.CERTIFICATION_FAIL, ResponseMessage.CERTIFICATION_FAIL);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(responseBody);
    }

}
