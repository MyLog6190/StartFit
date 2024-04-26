package startfit.auth.service.implement;

import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import jakarta.mail.internet.MimeMessage;
import jakarta.servlet.http.HttpServletResponse;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import startfit.auth.dto.request.SignInRequestDto;
import startfit.auth.dto.request.SignUpRequestDto;
import startfit.auth.dto.response.EmailCertificationResponseDto;
import startfit.auth.dto.response.LogoutResponseDto;
import startfit.auth.dto.response.SignInResponseDto;
import startfit.auth.dto.response.SignUpResponseDto;
import startfit.auth.jwt.JwtTokenProvider;
import startfit.auth.service.AuthService;
import startfit.user.entity.TempUserEntity;
import startfit.user.entity.UserEntity;
import startfit.user.repository.TempUserRepository;
import startfit.user.repository.UserRepository;

@Log4j2
@Service
@RequiredArgsConstructor
public class AuthServiceImplements implements AuthService {

    private final JavaMailSender mailSender;

    private final JwtTokenProvider jwtTokenProvider;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    private final UserRepository userRepository;
    private final TempUserRepository tempUserRepository;

    @Override
    public ResponseEntity<? super SignInResponseDto> singIn(SignInRequestDto dto) {
        String token = null;
        try {
            UserEntity user = userRepository.findByEmail(dto.getEmail());
            if (user == null)
                return SignInResponseDto.signFail();

            String enteredPassword = dto.getPassword();
            String password = user.getPassword();

            boolean isMatched = bCryptPasswordEncoder.matches(enteredPassword, password);
            if (!isMatched)
                return SignInResponseDto.signFail();

            token = jwtTokenProvider.createToken(user);
            if (token == null)
                return SignInResponseDto.tokenCreateError();

        } catch (Exception e) {
            e.printStackTrace();
            return SignInResponseDto.databaseError();
        }

        return SignInResponseDto.success(token);
    }

    @Override
    public ResponseEntity<? super LogoutResponseDto> logout(HttpServletResponse response) {
        return LogoutResponseDto.success(response);
    }

    @Override
    public ResponseEntity<? super SignUpResponseDto> signUp(SignUpRequestDto dto) {

        try {
            String token = jwtTokenProvider.createToken(dto.getEmail());
            log.info("Request : " + dto.getEmail());

            boolean isExistEmail = idCheck(dto.getEmail());
            if (isExistEmail)
                return SignUpResponseDto.duplicateId();

            TempUserEntity deleteEntity = tempUserRepository.findByEmail(dto.getEmail());

            if (deleteEntity != null) {
                tempUserRepository.delete(deleteEntity);
            } else {
                dto.setPassword((bCryptPasswordEncoder.encode(dto.getPassword())));
                TempUserEntity tempUserEntity = new TempUserEntity(dto);
                tempUserRepository.save(tempUserEntity);
            }

            boolean isSuccessed = sendEmail(dto.getEmail(), token);
            if (!isSuccessed)
                return SignUpResponseDto.sendMailFail();

        } catch (Exception e) {
            e.printStackTrace();
            return SignUpResponseDto.databaseError();
        }

        return SignUpResponseDto.success();
    }

    private boolean idCheck(String email) {

        try {
            boolean isExistEmail = userRepository.existsByEmail(email);
            if (!isExistEmail)
                return false;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }

        return true;
    }

    private boolean sendEmail(@NonNull String email, String token) {

        try {

            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper messageHelper = new MimeMessageHelper(message, true);
            messageHelper.setFrom("testerkh2020@gmail.com");

            String htmlContent = mailContent(token);

            messageHelper.setTo(email);
            messageHelper.setSubject("[StartFit 회원가입] 인증메일입니다.");
            messageHelper.setText(htmlContent, true);
            mailSender.send(message);

        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
        return true;
    }

    private String mailContent(String token) {
        String url = "http://localhost:8888/api/v1/auth/confirm?token=" + token;

        String mailContent = "";
        mailContent += "<div style='padding: 40px; background-color: #f7f7f7; color: #333; font-family: Arial, sans-serif;'>";
        mailContent += "<div style='max-width: 600px; margin: auto; padding: 20px; background-color: #ffffff; border-radius: 10px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);'>";
        mailContent += "<h1 style='text-align: center; color: #444;'>[Start Fit] 회원가입</h1>";
        mailContent += "<p style='font-size: 16px; text-align: center; margin-bottom: 40px;'>인증 버튼을 누르면 회원가입이 완료됩니다.</p>";
        mailContent += "<div style='text-align: center;'><a href='" + url
                + "' style='padding: 10px 20px; background-color: #4CAF50; color: white; text-decoration: none; border-radius: 5px; font-size: 16px;'>인증하기</a></div>";
        mailContent += "</div>";
        mailContent += "</div>";

        return mailContent;
    }

    @Override
    public ResponseEntity<? super EmailCertificationResponseDto> emailCertification(String token) {

        try {

            boolean isCertification = jwtTokenProvider.validateToken(token);
            if (!isCertification)
                return EmailCertificationResponseDto.certificationFail();

            String email = jwtTokenProvider.getPayload(token);

            TempUserEntity dto = tempUserRepository.findByEmail(email);

            UserEntity user = new UserEntity(dto);
            userRepository.save(user);

            tempUserRepository.delete(dto);

        } catch (Exception e) {

            e.printStackTrace();
            return EmailCertificationResponseDto.databaseError();

        }

        return EmailCertificationResponseDto.success();
    }

}
