package startfit.auth.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;

@Getter
public class SignInRequestDto {
    @Email
    @NotBlank
    String email;

    @NotBlank
    String password;
}
