package startfit.user.dto.response;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import startfit.common.ResponseCode;
import startfit.common.ResponseDto;
import startfit.common.ResponseMessage;
import startfit.user.entity.MyPlanEntity;

public class CreatePlanResponseDto extends ResponseDto {
    List<MyPlanEntity> myPlanList;

    private CreatePlanResponseDto() {
        super();
    }

    public static ResponseEntity<? super CreatePlanResponseDto> success() {
        CreatePlanResponseDto responseBody = new CreatePlanResponseDto();
        return ResponseEntity.status(HttpStatus.OK).body(responseBody);
    }

    public static ResponseEntity<ResponseDto> certificationFail() {
        ResponseDto responseBody = new ResponseDto(ResponseCode.CERTIFICATION_FAIL, ResponseMessage.CERTIFICATION_FAIL);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(responseBody);
    }
}
