package startfit.auth.dto.request;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SignUpRequestDto {
    @NotBlank
    private String email;
    @NotBlank
    private String password;
    private String name;
    private int height;
    private int weight;
}
