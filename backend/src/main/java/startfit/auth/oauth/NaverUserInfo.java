package startfit.auth.oauth;

import java.util.Collection;
import java.util.Map;

import org.springframework.security.core.GrantedAuthority;

public class NaverUserInfo implements OAuthUserInfo {

    private Map<String, Object> attributes;

    public NaverUserInfo(Map<String, Object> attributes) {
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
        String id = (String) attributes.get("id");
        String name = "naver_" + id.substring(0, 14);
        return name;

    }

    @Override
    public String getEmail() {
        return "OAuth_User_" + (String) attributes.get("email");
    }

    @Override
    public String getNickName() {
        return (String) attributes.get("name");
    }

}