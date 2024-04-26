package startfit.auth.jwt;

import java.security.Key;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.nimbusds.jose.util.StandardCharset;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import jakarta.annotation.PostConstruct;
import startfit.user.entity.UserEntity;

@Component
public class JwtTokenProvider {
    @Value("${secret-key}")
    private String secretKey;

    private Key key;

    // 비밀키 생성
    @PostConstruct
    public void init() {
        key = Keys.hmacShaKeyFor(secretKey.getBytes(StandardCharset.UTF_8));
        System.out.println("TOKEN INIT : " + key);
    }

    public String createToken(UserEntity user) {

        Date expireDate = Date.from(Instant.now().plus(8, ChronoUnit.HOURS));

        return Jwts.builder()
                .setSubject(user.getEmail().toString())
                .setIssuedAt(new Date()) // 토큰 발급 시간
                .setExpiration(expireDate)// 토큰 만료 시간
                .signWith(key) // 토큰 비밀키
                .compact(); // 문자열로 반환

    }

    public String createToken(String email) {

        Date expireDate = Date.from(Instant.now().plus(24, ChronoUnit.HOURS));

        return Jwts.builder()
                .setSubject(email)
                .setIssuedAt(new Date()) // 토큰 발급 시간
                .setExpiration(expireDate)// 토큰 만료 시간
                .signWith(key) // 토큰 비밀키
                .compact(); // 문자열로 반환

    }

    // 토큰 유효성 검사
    public boolean validateToken(String token) {
        try {
            // 토큰을 파싱하고 서명을 검증합니다.
            Jws<Claims> claims = Jwts
                    .parserBuilder()
                    .setSigningKey(key) // 검증 시 사용할 서명 키를 설정
                    .build()
                    .parseClaimsJws(token);

            // 필요한 경우, 여기서 클레임을 추가로 예: 만료 시간
            // 예를 들어, 토큰의 만료 시간이 현재 시간보다 이후인지 확인합니다.
            return !claims.getBody().getExpiration().before(new Date());
        } catch (JwtException | IllegalArgumentException e) {
            // 토큰 파싱 또는 서명 검증 중 오류가 발생한 경우
            System.out.println("Invalid JWT token: " + e.getMessage());
            return false;
        }
    }

    public String getPayload(String token) {
        String subject = null;

        try {

            subject = Jwts
                    .parserBuilder()
                    .setSigningKey(key) // 검증 시 사용할 서명 키를 설정
                    .build()
                    .parseClaimsJws(token)
                    .getBody()
                    .getSubject();

        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }

        return subject;
    }
}
