package startfit.user.dto.request;

import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class UpdateSetRequestDto {
    private long id;
    private int setNum;
    private int reps;
    private int weight;
    private boolean doChecked;
    private String date;
}
