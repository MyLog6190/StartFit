package startfit.user.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import startfit.auth.oauth.OAuthUserInfo;

@Getter
@Setter
@Entity(name = "USER")
@Table(name = "USER")
@NoArgsConstructor
public class UserEntity {
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

    public UserEntity(TempUserEntity dto) {
        this.email = dto.getEmail();
        this.password = dto.getPassword();
        this.name = dto.getName();
        this.height = dto.getHeight();
        this.weight = dto.getWeight();
        this.roles = dto.getRoles();
    }

    public UserEntity(OAuthUserInfo info) {
        this.email = info.getEmail();
        this.password = info.getPassword();
        this.name = info.getNickName();
        this.height = 0;
        this.weight = 0;
        this.roles = "ROLE_USER";
    }
}
