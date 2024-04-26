package startfit.auth.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import startfit.auth.dto.request.SignInRequestDto;
import startfit.auth.dto.request.SignUpRequestDto;
import startfit.auth.dto.response.EmailCertificationResponseDto;
import startfit.auth.dto.response.LogoutResponseDto;
import startfit.auth.dto.response.SignInResponseDto;
import startfit.auth.dto.response.SignUpResponseDto;
import startfit.auth.service.AuthService;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("sign-up")
    public ResponseEntity<? super SignUpResponseDto> signUp(@RequestBody @Valid SignUpRequestDto requestBody) {

        ResponseEntity<? super SignUpResponseDto> response = authService.signUp(requestBody);
        return response;
    }

    @GetMapping("confirm")
    public ResponseEntity<? super EmailCertificationResponseDto> emailCertification(
            @RequestParam(name = "token") String token) {
        ResponseEntity<? super EmailCertificationResponseDto> response = authService.emailCertification(token);
        return response;
    }

    @PostMapping("login")
    public ResponseEntity<? super SignInResponseDto> signIn(@RequestBody @Valid SignInRequestDto requestBody) {
        ResponseEntity<? super SignInResponseDto> response = authService.singIn(requestBody);
        return response;
    }

    @GetMapping("logout")
    public ResponseEntity<? super LogoutResponseDto> logout(HttpServletResponse response) {
        ResponseEntity<? super LogoutResponseDto> responseBody = authService.logout(response);
        return responseBody;
    }

}
