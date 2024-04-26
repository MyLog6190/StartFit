package startfit.user.service.implement;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;

import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityNotFoundException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import startfit.auth.jwt.JwtTokenProvider;
import startfit.user.dto.request.AddSetRequestDto;
import startfit.user.dto.request.CreatePlanRequestDto;
import startfit.user.dto.request.DeleteExerciseSetRequestDto;
import startfit.user.dto.request.DeletePlanRequestDto;
import startfit.user.dto.request.FindByDayRequestDto;
import startfit.user.dto.request.GetPlanRequestDto;
import startfit.user.dto.request.PlanInfoRequestDto;
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
import startfit.user.entity.MyPlanEntity;
import startfit.user.entity.PlanInfoEntity;
import startfit.user.entity.UserEntity;
import startfit.user.repository.MyPlanRepository;
import startfit.user.repository.PlanInfoRepository;
import startfit.user.repository.UserRepository;
import startfit.user.service.UserService;

@Service
@RequiredArgsConstructor
public class UserServiceImplement implements UserService {

    private final JwtTokenProvider jwtTokenProvider;
    private final MyPlanRepository myPlanRepository;
    private final PlanInfoRepository planInfoRepository;
    private final EntityManager entityManager;
    private final UserRepository userRepository;

    @Override
    public ResponseEntity<? super CreatePlanResponseDto> createPlan(HttpServletRequest request,
            @RequestBody @Valid List<CreatePlanRequestDto> requestBody) {
        try {
            String token = getToken(request);

            if (token == null)
                CreatePlanResponseDto.certificationFail();

            boolean isValidated = jwtTokenProvider.validateToken(token);
            if (!isValidated)
                return CreatePlanResponseDto.validationFail();

            String email = jwtTokenProvider.getPayload(token);

            for (CreatePlanRequestDto requestPlan : requestBody) {
                MyPlanEntity myPlan = new MyPlanEntity(email, requestPlan.getExerciseName(), requestPlan.getDate());

                for (PlanInfoRequestDto requestPlanInfo : requestPlan.getPlanInfos()) {
                    PlanInfoEntity planInfo = new PlanInfoEntity();
                    planInfo.setSetNum(requestPlanInfo.getSetNum());
                    planInfo.setReps(requestPlanInfo.getReps());
                    planInfo.setWeight(requestPlanInfo.getWeight());
                    planInfo.setDoChecked(requestPlanInfo.isDoChecked());
                    planInfo.setMyPlan(myPlan);
                    myPlan.getPlanInfos().add(planInfo);
                }
                myPlanRepository.save(myPlan);
            }

            return CreatePlanResponseDto.success();
        } catch (Exception e) {
            e.printStackTrace();
            return CreatePlanResponseDto.databaseError();
        }
    }

    @Override
    public ResponseEntity<? super GetPlanResponseDto> getPlan(HttpServletRequest request,
            @RequestBody @Valid GetPlanRequestDto requestBody) {
        try {
            String token = getToken(request);

            if (token == null)
                GetPlanResponseDto.certificationFail();

            boolean isValidated = jwtTokenProvider.validateToken(token);
            if (!isValidated)
                return GetPlanResponseDto.validationFail();

            String email = jwtTokenProvider.getPayload(token);
            String date = requestBody.getDate().substring(0, 7);

            List<MyPlanEntity> myPlanList = myPlanRepository.findByMonthAndYear(
                    date, email);
            return GetPlanResponseDto.success(myPlanList);

        } catch (Exception e) {
            e.printStackTrace();
            return GetPlanResponseDto.databaseError();
        }
    }

    @Override
    public ResponseEntity<? super DeleteExerciseSetResponseDto> deleteExerciseSet(HttpServletRequest request,
            @RequestBody @Valid DeleteExerciseSetRequestDto requestBody) {

        try {
            String token = getToken(request);

            String email = jwtTokenProvider.getPayload(token);
            String date = requestBody.getDate().substring(0, 7);

            planInfoRepository.deleteById(requestBody.getId());

            List<MyPlanEntity> myPlanList = myPlanRepository.findByMonthAndYear(
                    date, email);

            System.out.println(myPlanList);
            return DeleteExerciseSetResponseDto.success(myPlanList);

        } catch (Exception e) {
            e.printStackTrace();
            return DeleteExerciseSetResponseDto.databaseError();
        }
    }

    @Override
    public ResponseEntity<? super DeletePlanResponseDto> deletePlan(HttpServletRequest request,
            @RequestBody @Valid DeletePlanRequestDto requestBody) {

        try {
            String token = getToken(request);
            String email = jwtTokenProvider.getPayload(token);
            String date = requestBody.getDate().substring(0, 7);

            myPlanRepository.deleteById(requestBody.getId());

            List<MyPlanEntity> myPlanList = myPlanRepository.findByMonthAndYear(
                    date, email);
            System.out.println(myPlanList);
            return DeletePlanResponseDto.success(myPlanList);
        } catch (Exception e) {
            e.printStackTrace();
            return DeletePlanResponseDto.databaseError();
        }
    }

    @Override
    public ResponseEntity<? super AddSetResponseDto> addSet(HttpServletRequest request,
            @RequestBody @Valid AddSetRequestDto requestBody) {
        try {

            MyPlanEntity myPlan = myPlanRepository.getReferenceById(requestBody.getId());

            System.out.println(myPlan);

            PlanInfoEntity newPlanInfo = new PlanInfoEntity();
            newPlanInfo.setMyPlan(myPlan); // 프록시 객체 참조 설정
            newPlanInfo.setReps(0);
            newPlanInfo.setSetNum(0);
            newPlanInfo.setWeight(0);
            newPlanInfo.setDoChecked(false);
            planInfoRepository.save(newPlanInfo);
            planInfoRepository.flush();
            entityManager.clear();

            String token = getToken(request);
            String email = jwtTokenProvider.getPayload(token);
            String date = requestBody.getDate().substring(0, 7);

            List<MyPlanEntity> myPlanList = myPlanRepository.findByMonthAndYear(
                    date, email);

            return AddSetResponseDto.success(myPlanList);
        } catch (Exception e) {
            e.printStackTrace();
            return AddSetResponseDto.databaseError();
        }
    }

    public String getToken(HttpServletRequest request) {

        String token = null;
        Cookie[] cookies = request.getCookies(); // 요청에서 쿠키 배열 가져오기
        if (cookies == null)
            return null;

        for (Cookie cookie : cookies) {
            if ("authorization".equals(cookie.getName())) { // 특정 쿠키 이름 검색
                token = cookie.getValue();
                System.out.println("token: " + token);

                if (token != null && token.startsWith("Bearer ")) {
                    token = token.substring(7);
                }
            }
        }
        return token;
    }

    @Override
    @Transactional
    public ResponseEntity<? super UpdateSetResponseDto> updateSet(HttpServletRequest request,
            @Valid UpdateSetRequestDto requestBody) {
        try {
            System.out.println(requestBody);

            PlanInfoEntity planInfo = planInfoRepository.findById(requestBody.getId()).orElseThrow(
                    () -> new EntityNotFoundException("PlanInfoEntity not found for id: " + requestBody.getId()));
            ;
            planInfo.setSetNum(requestBody.getSetNum());
            planInfo.setReps(requestBody.getReps());
            planInfo.setWeight(requestBody.getWeight());
            planInfo.setDoChecked(requestBody.isDoChecked());

            planInfoRepository.save(planInfo);

            entityManager.flush();
            entityManager.clear();

            String token = getToken(request);
            String email = jwtTokenProvider.getPayload(token);
            String date = requestBody.getDate().substring(0, 7);

            List<MyPlanEntity> myPlanList = myPlanRepository.findByMonthAndYear(
                    date, email);
            return UpdateSetResponseDto.success(myPlanList);
        } catch (Exception e) {
            e.printStackTrace();
            return UpdateSetResponseDto.databaseError();
        }
    }

    @Override
    public ResponseEntity<? super UserInfoResponseDto> getUserInfo(HttpServletRequest request) {
        try {
            String token = getToken(request);
            String email = jwtTokenProvider.getPayload(token);

            System.out.println(email);
            UserEntity user = userRepository.findByEmail(email);
            return UserInfoResponseDto.success(user);
        } catch (Exception e) {
            e.printStackTrace();
            return UserInfoResponseDto.databaseError();
        }

    }

    @Override
    @Transactional
    public ResponseEntity<? super UserInfoResponseDto> updateUserInfo(HttpServletRequest request,
            @RequestBody @Valid UpdateUserInfoRequestDto requestBody) {
        try {
            System.out.println(requestBody);
            String token = getToken(request);
            String email = jwtTokenProvider.getPayload(token);
            UserEntity user = userRepository.findByEmail(email);
            user.setName(requestBody.getName());
            user.setHeight(requestBody.getHeight());
            user.setWeight(requestBody.getWeight());
            userRepository.save(user);

            entityManager.flush();
            entityManager.clear();

            user = userRepository.findByEmail(email);

            return UserInfoResponseDto.success(user);
        } catch (Exception e) {
            e.printStackTrace();
            return UserInfoResponseDto.databaseError();
        }
    }

    @Override
    public ResponseEntity<? super FindByDayPlanResponseDto> findBydayPlan(HttpServletRequest request,
            @Valid FindByDayRequestDto requestBody) {

        try {
            String token = getToken(request);
            String email = jwtTokenProvider.getPayload(token);
            String date = requestBody.getDate();

            List<MyPlanEntity> planList = myPlanRepository.findByDay(date, email);
            return FindByDayPlanResponseDto.success(planList);
        } catch (Exception e) {
            e.printStackTrace();
            return FindByDayPlanResponseDto.databaseError();
        }

    }

}