package startfit.auth.jwt.filter;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.lang.NonNull;
import org.springframework.security.authentication.AbstractAuthenticationToken;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import startfit.auth.jwt.JwtTokenProvider;
import startfit.user.entity.UserEntity;
import startfit.user.repository.UserRepository;

@Component
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final UserRepository userRepository;
    private final JwtTokenProvider jwtTokenProvider;

    @Override
    protected void doFilterInternal(@NonNull HttpServletRequest request, @NonNull HttpServletResponse response,
            @NonNull FilterChain filterChain)
            throws ServletException, IOException {
        try {
            HttpServletRequest httpRequest = (HttpServletRequest) request;
            String jwtToken = null;
            Cookie[] cookies = httpRequest.getCookies();
            if (cookies == null) {
                filterChain.doFilter(request, response);
                return;
            }

            for (Cookie cookie : cookies) {
                if ("authorization".equals(cookie.getName())) {
                    jwtToken = cookie.getValue().replace("Bearer ", "");
                    System.out.println("JWT Token found in cookie: " + jwtToken);
                }
            }
            System.out.println(jwtToken);
            boolean isValidated = jwtTokenProvider.validateToken(jwtToken);
            if (!isValidated) {
                filterChain.doFilter(request, response);
                return;
            }

            String email = jwtTokenProvider.getPayload(jwtToken);
            UserEntity userEntity = userRepository.findByEmail(email);
            String role = userEntity.getRoles();
            List<GrantedAuthority> authorities = new ArrayList<>();
            authorities.add(new SimpleGrantedAuthority(role));

            // Spring Security의 SecurityContext에 인증 정보를 설정
            SecurityContext securityContext = SecurityContextHolder.createEmptyContext();
            AbstractAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(email, null,
                    authorities);

            //
            authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
            securityContext.setAuthentication(authenticationToken);
            SecurityContextHolder.setContext(securityContext);

        } catch (Exception e) {
            e.printStackTrace();
        }

        filterChain.doFilter(request, response);
    }

}
