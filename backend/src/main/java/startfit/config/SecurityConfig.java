package startfit.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.CsrfConfigurer;
import org.springframework.security.config.annotation.web.configurers.HttpBasicConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import lombok.RequiredArgsConstructor;
import startfit.auth.jwt.filter.JwtAuthenticationFilter;
import startfit.auth.oauth.handler.OAuth2SuccessHandler;
import startfit.auth.service.OAuth2UserService;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

        private final JwtAuthenticationFilter jwtAuthenticationFilter;
        private final OAuth2SuccessHandler oAuth2SuccessHandler;
        private final OAuth2UserService oAuth2UserService;
        private final CorsConfig corsFilter;

        @Bean
        public BCryptPasswordEncoder passwordEncoder() {
                return new BCryptPasswordEncoder();
        }

        @Bean
        public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
                http
                                .csrf(CsrfConfigurer::disable)
                                .httpBasic(HttpBasicConfigurer::disable)
                                .cors(cors -> cors
                                                .configurationSource(corsFilter.corsFilter()))
                                .sessionManagement(sessionManagement -> sessionManagement
                                                .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                                .authorizeHttpRequests(request -> request
                                                .requestMatchers("/", "/api/v1/**", "/api/v1/exercise/**",
                                                                "/oauth2/**")
                                                .permitAll()
                                                .requestMatchers("/api/v1/auth/user/**").hasRole("USER")
                                                .anyRequest().authenticated())
                                .oauth2Login(oauth2 -> oauth2
                                                .authorizationEndpoint(endpoint -> endpoint
                                                                .baseUri("/api/v1/auth/oauth2"))
                                                .redirectionEndpoint(endpoint -> endpoint
                                                                .baseUri("/oauth2/callback/*"))
                                                .userInfoEndpoint(endpoint -> endpoint
                                                                .userService(oAuth2UserService))
                                                .successHandler(oAuth2SuccessHandler))
                                .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
                ;

                return http.build();
        }
}
