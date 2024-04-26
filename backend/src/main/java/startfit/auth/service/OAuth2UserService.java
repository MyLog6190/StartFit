package startfit.auth.service;

import java.util.Map;

import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import startfit.auth.oauth.GoogleUserInfo;
import startfit.auth.oauth.KakaoUserInfo;
import startfit.auth.oauth.NaverUserInfo;
import startfit.auth.oauth.OAuthUserInfo;
import startfit.user.entity.UserEntity;
import startfit.user.repository.UserRepository;

@Service
@RequiredArgsConstructor
public class OAuth2UserService extends DefaultOAuth2UserService {

    private final UserRepository userRepository;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        OAuth2User oAuth2User = super.loadUser(userRequest);
        OAuthUserInfo oAuthUserInfo = null;
        String clientName = userRequest.getClientRegistration().getClientName();

        if (clientName.equals("naver")) {
            oAuthUserInfo = new NaverUserInfo((Map<String, Object>) oAuth2User.getAttributes().get("response"));
        } else if (clientName.equals("kakao")) {
            oAuthUserInfo = new KakaoUserInfo((Map<String, Object>) oAuth2User.getAttributes());
        } else if (clientName.equals("Google")) {
            oAuthUserInfo = new GoogleUserInfo((Map<String, Object>) oAuth2User.getAttributes());
        }

        if (oAuthUserInfo == null)
            return null;

        boolean isExisted = userRepository.existsByEmail(oAuthUserInfo.getEmail());

        if (!isExisted) {
            UserEntity userEntity = new UserEntity(oAuthUserInfo);
            userRepository.save(userEntity);
        }

        return oAuthUserInfo;
    }

}
