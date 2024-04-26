package startfit.auth.dto.response;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import startfit.common.ResponseDto;

public class LogoutResponseDto extends ResponseDto {
    private LogoutResponseDto() {
        super();
    }

    public static ResponseEntity<? super LogoutResponseDto> success(HttpServletResponse response) {
        // 로그아웃을 위한 쿠키 삭제
        Cookie authorizationCookie = new Cookie("authorization", null);
        authorizationCookie.setPath("/");
        authorizationCookie.setHttpOnly(true);
        authorizationCookie.setMaxAge(0); // 쿠키를 즉시 만료시킵니다.
        response.addCookie(authorizationCookie);

        Cookie tokenExpirationTimeCookie = new Cookie("token-expiration-time", null);
        tokenExpirationTimeCookie.setPath("/");
        tokenExpirationTimeCookie.setHttpOnly(true);
        tokenExpirationTimeCookie.setMaxAge(0); // 쿠키를 즉시 만료시킵니다.
        response.addCookie(tokenExpirationTimeCookie);

        LogoutResponseDto responseBody = new LogoutResponseDto();
        return ResponseEntity.status(HttpStatus.OK).body(responseBody);
    }
}
