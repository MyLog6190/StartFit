package startfit.exercise.dto.response;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import lombok.Getter;
import startfit.common.ResponseDto;
import startfit.exercise.dto.ProgramContentsDto;

@Getter
public class GetProgramContentsResponseDto extends ResponseDto {
    private List<ProgramContentsDto> programContentsList;

    private GetProgramContentsResponseDto(List<ProgramContentsDto> programContentsList) {
        super();
        this.programContentsList = programContentsList;
    }

    public static ResponseEntity<? super GetProgramContentsResponseDto> success(
            List<ProgramContentsDto> programContentsList) {
        GetProgramContentsResponseDto response = new GetProgramContentsResponseDto(programContentsList);
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }
}
