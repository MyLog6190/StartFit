package startfit.auth.oauth;

import java.util.Collection;
import java.util.Map;

import org.springframework.security.core.GrantedAuthority;

public class GoogleUserInfo implements OAuthUserInfo {

    private Map<String, Object> attributes;

    public GoogleUserInfo(Map<String, Object> attributes) {
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
        return (String) attributes.get("sub");
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
