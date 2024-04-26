package startfit.user.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
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
import startfit.user.service.UserService;

@RestController
@RequestMapping("/api/v1/auth/user")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @PostMapping("/create_plan")
    public ResponseEntity<? super CreatePlanResponseDto> createPlan(HttpServletRequest request,
            @RequestBody List<CreatePlanRequestDto> requestBody) {
        ResponseEntity<? super CreatePlanResponseDto> response = userService.createPlan(request, requestBody);
        return response;
    }

    @PostMapping("/get_plan")
    public ResponseEntity<? super GetPlanResponseDto> getPlan(HttpServletRequest request,
            @RequestBody @Valid GetPlanRequestDto requestBody) {
        ResponseEntity<? super GetPlanResponseDto> response = userService.getPlan(request, requestBody);
        return response;
    }

    @PostMapping("/delete_plan")
    public ResponseEntity<? super DeletePlanResponseDto> deletePlan(HttpServletRequest request,
            @RequestBody @Valid DeletePlanRequestDto requestBody) {
        ResponseEntity<? super DeletePlanResponseDto> response = userService.deletePlan(request, requestBody);
        return response;
    }

    @PostMapping("/delete_exercise_set")
    public ResponseEntity<? super DeleteExerciseSetResponseDto> deleteExerciseSet(HttpServletRequest request,
            @RequestBody @Valid DeleteExerciseSetRequestDto requestBody) {
        ResponseEntity<? super DeleteExerciseSetResponseDto> response = userService
                .deleteExerciseSet(request, requestBody);
        return response;
    }

    @PostMapping("/add_set")
    public ResponseEntity<? super AddSetResponseDto> addSet(HttpServletRequest request,
            @RequestBody @Valid AddSetRequestDto requestBody) {
        ResponseEntity<? super AddSetResponseDto> response = userService.addSet(request, requestBody);
        return response;
    }

    @PostMapping("/update_set")
    public ResponseEntity<? super UpdateSetResponseDto> updateSet(HttpServletRequest request,
            @RequestBody @Valid UpdateSetRequestDto requestBody) {
        ResponseEntity<? super UpdateSetResponseDto> response = userService.updateSet(request, requestBody);
        return response;
    }

    @GetMapping("/mypage")
    public ResponseEntity<? super UserInfoResponseDto> getUserInfo(HttpServletRequest request) {
        ResponseEntity<? super UserInfoResponseDto> response = userService.getUserInfo(request);
        return response;
    }

    @PostMapping("/mypage/edit")
    public ResponseEntity<? super UserInfoResponseDto> UpdateUserInfo(HttpServletRequest request,
            @RequestBody @Valid UpdateUserInfoRequestDto requestBody) {
        ResponseEntity<? super UserInfoResponseDto> response = userService.updateUserInfo(request, requestBody);
        return response;
    }

    @PostMapping("/mypage/getDayPlan")
    public ResponseEntity<? super FindByDayPlanResponseDto> findDyDayPlan(HttpServletRequest request,
            @RequestBody @Valid FindByDayRequestDto requestBody) {
        ResponseEntity<? super FindByDayPlanResponseDto> response = userService.findBydayPlan(request, requestBody);
        return response;
    }
}
