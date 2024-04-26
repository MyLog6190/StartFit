package startfit.auth.service;

import org.springframework.http.ResponseEntity;

import jakarta.servlet.http.HttpServletResponse;
import startfit.auth.dto.request.SignInRequestDto;
import startfit.auth.dto.request.SignUpRequestDto;
import startfit.auth.dto.response.EmailCertificationResponseDto;
import startfit.auth.dto.response.LogoutResponseDto;
import startfit.auth.dto.response.SignInResponseDto;
import startfit.auth.dto.response.SignUpResponseDto;

public interface AuthService {

    ResponseEntity<? super SignInResponseDto> singIn(SignInRequestDto dto);

    ResponseEntity<? super SignUpResponseDto> signUp(SignUpRequestDto dto);

    ResponseEntity<? super LogoutResponseDto> logout(HttpServletResponse response);

    ResponseEntity<? super EmailCertificationResponseDto> emailCertification(String token);

}
