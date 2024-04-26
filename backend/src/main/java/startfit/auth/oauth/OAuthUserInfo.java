package startfit.auth.oauth;

import java.util.UUID;

import org.springframework.security.oauth2.core.user.OAuth2User;

public interface OAuthUserInfo extends OAuth2User {

    public String getEmail();

    public String getNickName();

    public default String getPassword() {
        return UUID.randomUUID().toString();
    };

}
