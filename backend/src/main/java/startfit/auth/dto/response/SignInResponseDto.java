package startfit.auth.dto.response;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import lombok.Getter;
import startfit.common.ResponseCode;
import startfit.common.ResponseDto;
import startfit.common.ResponseMessage;

@Getter
public class SignInResponseDto extends ResponseDto {

    private SignInResponseDto() {
        super();
    }

    public static ResponseEntity<SignInResponseDto> success(String token) {
        int expirationTimeInSeconds = 3600 * 8; // 8시간
        // 쿠키 생성
        String encodedToken = "";
        try {
            // 쿠키 생성
            encodedToken = URLEncoder.encode(token, StandardCharsets.UTF_8.name()); // 인코딩 예외 처리
        } catch (UnsupportedEncodingException e) {
            // UTF-8은 항상 지원되므로 이 블록은 실행되지 않습니다.
            // 그러나 형식적으로 예외 처리를 포함합니다.
            e.printStackTrace();
        }

        String cookieValue = "authorization=" + encodedToken + "; HttpOnly; Max-Age=" + expirationTimeInSeconds
                + "; Path=/";
        String expirationCookieValue = "token-expiration-time="
                + encodedToken + "; Max-Age="
                + expirationTimeInSeconds + "; Path=/";

        HttpHeaders headers = new HttpHeaders();
        headers.add("Set-Cookie", cookieValue);
        headers.add("Set-Cookie", expirationCookieValue);

        SignInResponseDto responseBody = new SignInResponseDto();
        return ResponseEntity.status(HttpStatus.OK).headers(headers).body(responseBody);
    }

    public static ResponseEntity<ResponseDto> signFail() {
        ResponseDto responseBody = new ResponseDto(ResponseCode.SIGN_IN_FAIL,
                ResponseMessage.SIGN_IN_FAIL);
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(responseBody);
    }

    public static ResponseEntity<ResponseDto> tokenCreateError() {
        ResponseDto responseBody = new ResponseDto(ResponseCode.TOKEN_CREATE_ERROR, ResponseMessage.TOKEN_CREATE_ERROR);
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(responseBody);
    }

}
