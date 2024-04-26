package startfit.auth.oauth;

import java.util.Collection;
import java.util.Map;

import org.springframework.security.core.GrantedAuthority;

public class KakaoUserInfo implements OAuthUserInfo {

    Map<String, Object> attributes;

    public KakaoUserInfo(Map<String, Object> attributes) {
        this.attributes = attributes;
    }

    @Override
    public Map<String, Object> getAttributes() {
        return null;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public String getName() {
        return "Kakao_" + attributes.get("id");
    }

    @Override
    public String getEmail() {
        return "OAuth_User_Kakao_" + attributes.get("id") + "@kakao.com";
    }

    @Override
    public String getNickName() {
        Map<String, Object> properties = (Map<String, Object>) attributes.get("properties");
        return (String) properties.get("nickname");
    }

}
