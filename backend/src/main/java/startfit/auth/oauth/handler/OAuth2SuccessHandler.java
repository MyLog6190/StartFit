package startfit.auth.oauth.handler;

import java.io.IOException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;

import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import startfit.auth.jwt.JwtTokenProvider;
import startfit.auth.oauth.OAuthUserInfo;

@Component
@RequiredArgsConstructor
public class OAuth2SuccessHandler extends SimpleUrlAuthenticationSuccessHandler {
    private final JwtTokenProvider jwtTokenProvider;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
            Authentication authentication) throws IOException, ServletException {

        OAuthUserInfo oAuth2User = (OAuthUserInfo) authentication.getPrincipal();

        String userId = oAuth2User.getEmail();
        String token = jwtTokenProvider.createToken(userId);

        int expirationTimeInSeconds = 8 * 3600;
        String encodedToken = URLEncoder.encode(token, StandardCharsets.UTF_8.toString());
        // 토큰을 위한 쿠키 생성
        Cookie tokenCookie = new Cookie("authorization", encodedToken);
        tokenCookie.setHttpOnly(true);
        tokenCookie.setMaxAge(expirationTimeInSeconds);
        tokenCookie.setPath("/");

        // 토큰 만료 시간을 위한 쿠키 생성
        Cookie expirationCookie = new Cookie("token-expiration-time",
                String.valueOf(System.currentTimeMillis() + expirationTimeInSeconds));
        expirationCookie.setMaxAge(expirationTimeInSeconds);
        expirationCookie.setPath("/");

        // 응답에 쿠키 추가
        response.addCookie(tokenCookie);
        response.addCookie(expirationCookie);

        response.sendRedirect("http://localhost:3000/auth/oauth2/success");
    }

}
