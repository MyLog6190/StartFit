package startfit.user.dto.request;

import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class UpdateUserInfoRequestDto {
    private String name;
    private int height;
    private int weight;

}
