package startfit.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
public class CorsConfig {
    @Bean
    public CorsConfigurationSource corsFilter() {

        CorsConfiguration config = new CorsConfiguration();
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();

        config.setAllowCredentials(true); // 내서버가 응답을 할 때 Json을 자바스크립에서 처리할 수 있게 할지를 설정
        config.addAllowedOriginPattern("http://localhost:3000"); // ip 허용
        config.addAllowedHeader("*"); // 모든 Header에 응답을 허용
        config.addAllowedMethod("*"); // 모든 post, get, put, delete, patch 요청을 허용

        source.registerCorsConfiguration("/**", config); // CORS 설정 적용경로

        return source;
    }
}
