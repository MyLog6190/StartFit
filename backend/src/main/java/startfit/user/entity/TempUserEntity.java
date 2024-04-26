package startfit.user.entity;

import java.util.UUID;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import lombok.Getter;
import lombok.NoArgsConstructor;
import startfit.auth.dto.request.SignUpRequestDto;

@Getter
@Entity(name = "TEMP_USER")
@Table(name = "TEMP_USER")
@NoArgsConstructor
public class TempUserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Email
    private String email;
    private String password;
    private String name;
    private int height;
    private int weight;
    private String roles;

    public TempUserEntity(SignUpRequestDto dto) {
        this.email = dto.getEmail();
        this.password = dto.getPassword();

        if (dto.getName() != null && dto.getName() != "") {
            this.name = dto.getName();
        } else {
            this.name = ("Guest_" + UUID.randomUUID().toString());
        }

        this.height = dto.getHeight();
        this.weight = dto.getWeight();

        this.roles = "ROLE_USER";
    }
}
