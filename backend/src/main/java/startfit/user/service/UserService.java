package startfit.user.service;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import startfit.user.dto.request.AddSetRequestDto;
import startfit.user.dto.request.CreatePlanRequestDto;
import startfit.user.dto.request.DeleteExerciseSetRequestDto;
import startfit.user.dto.request.DeletePlanRequestDto;
import startfit.user.dto.request.FindByDayRequestDto;
import startfit.user.dto.request.GetPlanRequestDto;
import startfit.user.dto.request.UpdateSetRequestDto;
import startfit.user.dto.request.UpdateUserInfoRequestDto;
import startfit.user.dto.response.AddSetResponseDto;
import startfit.user.dto.response.CreatePlanResponseDto;
import startfit.user.dto.response.DeleteExerciseSetResponseDto;
import startfit.user.dto.response.DeletePlanResponseDto;
import startfit.user.dto.response.FindByDayPlanResponseDto;
import startfit.user.dto.response.GetPlanResponseDto;
import startfit.user.dto.response.UpdateSetResponseDto;
import startfit.user.dto.response.UserInfoResponseDto;

public interface UserService {
        public ResponseEntity<? super CreatePlanResponseDto> createPlan(HttpServletRequest request,
                        @RequestBody @Valid List<CreatePlanRequestDto> requestBody);

        public ResponseEntity<? super GetPlanResponseDto> getPlan(HttpServletRequest request,
                        @RequestBody @Valid GetPlanRequestDto requestBody);

        public ResponseEntity<? super DeleteExerciseSetResponseDto> deleteExerciseSet(HttpServletRequest request,
                        @RequestBody @Valid DeleteExerciseSetRequestDto requestBody);

        public ResponseEntity<? super DeletePlanResponseDto> deletePlan(HttpServletRequest request,
                        @RequestBody @Valid DeletePlanRequestDto requestBody);

        public ResponseEntity<? super AddSetResponseDto> addSet(HttpServletRequest request,
                        @RequestBody @Valid AddSetRequestDto requestBody);

        public ResponseEntity<? super UpdateSetResponseDto> updateSet(HttpServletRequest request,
                        @RequestBody @Valid UpdateSetRequestDto requestBody);

        public ResponseEntity<? super UserInfoResponseDto> getUserInfo(HttpServletRequest request);

        public ResponseEntity<? super UserInfoResponseDto> updateUserInfo(HttpServletRequest request,
                        @RequestBody @Valid UpdateUserInfoRequestDto requestBody);

        public ResponseEntity<? super FindByDayPlanResponseDto> findBydayPlan(HttpServletRequest request,
                        @RequestBody @Valid FindByDayRequestDto requestBody);

}