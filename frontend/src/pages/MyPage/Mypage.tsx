import { findByDayPlan, getUserInfo } from "@/api/user";
import { ResponseCode } from "@/common/enum";
import { serverErrorMessage } from "@/common/error/error-message";
import EditProfile from "@/components/user/myPage/EditProfile";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { isDarkMode, userInfo } from "@/store/atom";
import { ResponseBody } from "@/types/response";
import { FindByDayPlanResponseDto } from "@/types/response/user";
import UserInfoResponseDto from "@/types/response/user/get-user-info.response.dto";
import { MyPlan, User } from "@/types/user";
import { Temporal } from "@js-temporal/polyfill";
import { startTransition, useEffect, useRef, useState } from "react";
import ApexChart from "react-apexcharts";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  BodyData,
  BodyDataBox,
  BodyDataContainer,
  Button,
  ButtonGroup,
  Category,
  ChartContainer,
  ControlContainer,
  EditButton,
  Profile,
  Tab,
  Tabs,
  UserInfo,
  UserInfoBody,
  UserInfoContainer,
  UserInfoHeader,
  UserName,
  Wrapper,
} from "./Mypage.style";

function Mypage() {
  const isDark = useRecoilValue(isDarkMode);
  const today = Temporal.Now.plainDateISO();
  const [user, setUser] = useRecoilState(userInfo);
  const [myPlan, setMyPlan] = useState<MyPlan[]>([]);
  const [exercisesNams, setExerciseName] = useState<String[]>([]);
  const [performanceRate, setPerformanceRate] = useState<number[]>([]);
  const [showing, setShowing] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState(today);
  const editProfileRef = useRef(null);

  useEffect(() => {
    startTransition(() => {
      getUserInfo().then(UserInfoResponse);
      const requestBody = { date: selectedDate.toString() };
    });
  }, []);

  useEffect(() => {
    startTransition(() => {
      const requestBody = { date: selectedDate.toString() };
      findByDayPlan(requestBody).then(getPlanResponse);
    });
  }, [selectedDate]);

  const updateUser = (newUser: User) => {
    setUser(newUser);
  };

  const UserInfoResponse = (
    responseBody: ResponseBody<UserInfoResponseDto>
  ) => {
    if (!responseBody) return serverErrorMessage("서버의 응답이 없습니다.");
    const { code } = responseBody;

    if (ResponseCode.DATABASE_ERROR === code)
      serverErrorMessage("서버 오류입니다.");

    if (ResponseCode.SUCCESS !== code) return;

    if ("userEntity" in responseBody) {
      const { userEntity } = responseBody;
      updateUser(userEntity);
    }
  };

  const getPlanResponse = (
    responseBody: ResponseBody<FindByDayPlanResponseDto>
  ) => {
    if (!responseBody) return serverErrorMessage("서버에 응답이 없습니다.");
    const { code } = responseBody;

    if (ResponseCode.DATABASE_ERROR === code)
      return serverErrorMessage("서버 오류 입니다.");

    if (ResponseCode.VALIDATION_FAIL === code)
      return serverErrorMessage("인증 오류 입니다. 다시 로그인 해주세요.");

    if ("planList" in responseBody) {
      startTransition(() => {
        const { planList } = responseBody;
        setMyPlan(planList);
      });
    }

    console.log(responseBody);
  };

  useEffect(() => {
    setExerciseName(myPlan.map((plan) => plan.exerciseName));
    setPerformanceRate(
      myPlan.map((plan) => {
        const infoLength = plan.planInfos.length;
        const checkedInfo = plan.planInfos.filter(
          (info) => info.doChecked === true
        );
        const percentage = ((checkedInfo.length / infoLength) * 100).toFixed(1);
        return parseFloat(percentage);
      })
    );
  }, [myPlan]);

  const closeEditProfile = () => {
    setShowing(false);
  };
  const handlePrevDay = () => {
    setSelectedDate((prevDay) => prevDay.subtract({ days: 1 }));
  };

  const handleNextDay = () => {
    setSelectedDate((nextDay) => nextDay.add({ days: 1 }));
  };
  useOutsideClick(editProfileRef, closeEditProfile);
  return (
    <Wrapper>
      <UserInfoContainer>
        <UserInfoHeader>
          <EditButton
            onClick={() => {
              setShowing(true);
            }}
          >
            수정
          </EditButton>
        </UserInfoHeader>
        <UserInfoBody>
          <Profile />
          <UserInfo>
            <UserName>{user?.name}</UserName>
            <BodyDataContainer>
              <BodyDataBox>
                <Category>키</Category>
                <BodyData>{user?.height}cm</BodyData>
              </BodyDataBox>
              <BodyDataBox>
                <Category>몸무게</Category>
                <BodyData>{user?.weight}kg</BodyData>
              </BodyDataBox>
              <BodyDataBox>
                <Category>BMI</Category>
                {/*// 체지방률 : (1.10 * 몸무게) - (128 * (몸무게 제곱/ 키 제곱))  */}
                <BodyData>
                  {user?.weight === undefined && user?.height === undefined
                    ? null
                    : (user.weight / (user.height / 100) ** 2).toFixed(2)}
                  %
                </BodyData>
              </BodyDataBox>
            </BodyDataContainer>
          </UserInfo>
        </UserInfoBody>
      </UserInfoContainer>
      {showing && user !== undefined && <EditProfile ref={editProfileRef} />}
      <ChartContainer>
        <ControlContainer>
          <Tabs>
            <Tab>Day</Tab>
            <Tab>Week</Tab>
          </Tabs>
          <ButtonGroup>
            <Button onClick={handlePrevDay}>Prev</Button>
            <Button onClick={handleNextDay}>Next</Button>
          </ButtonGroup>
        </ControlContainer>
        <ApexChart
          type="bar"
          series={[
            {
              data: [...performanceRate],
            },
          ]}
          options={{
            chart: {
              toolbar: { show: false },
            },
            stroke: {
              show: true,
              width: 2,
            },
            title: {
              text: selectedDate.toString(),
              offsetX: 20,
              style: {
                color: isDark ? "#f8fbff" : "#151426",
                fontSize: "15px",
              },
            },
            xaxis: {
              labels: { style: { colors: isDark ? "#f8fbff" : "#151426" } },
              categories: [...exercisesNams],
            },
            yaxis: {
              title: {
                text: "수행률",
                style: {
                  color: isDark ? "#f8fbff" : "#151426",
                  fontSize: "15px",
                },
              },
              labels: {
                style: { colors: isDark ? "#f8fbff" : "#151426" },
                formatter: function (val) {
                  return `${val.toFixed(0)}%`; // 백분율 표시
                },
              },
            },
            fill: { opacity: 1 },
            noData: {
              text: "데이터가 없습니다",
              align: "center",
              verticalAlign: "middle",
              offsetX: 0,
              offsetY: 0,
              style: {
                color: isDark ? "#f8fbff" : "#151426",
                fontSize: "30px",
                fontFamily: undefined,
              },
            },
          }}
        />
      </ChartContainer>
    </Wrapper>
  );
}

export default Mypage;
