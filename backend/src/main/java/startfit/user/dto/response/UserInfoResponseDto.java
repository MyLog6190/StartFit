package startfit.user.dto.response;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import lombok.Getter;
import startfit.common.ResponseDto;
import startfit.user.entity.UserEntity;

@Getter
public class UserInfoResponseDto extends ResponseDto {

    UserEntity userEntity;

    private UserInfoResponseDto(UserEntity userEntity) {
        super();
        this.userEntity = userEntity;
    }

    public static ResponseEntity<? super UserInfoResponseDto> success(UserEntity userEntity) {
        UserInfoResponseDto responseBody = new UserInfoResponseDto(userEntity);
        return ResponseEntity.status(HttpStatus.OK).body(responseBody);
    }

}
