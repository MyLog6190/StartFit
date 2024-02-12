import {
  Wrapper,
  UserInfoContainer,
  UserInfo,
  Profile,
  UserName,
  BodyDataContainer,
  BodyDataBox,
  Category,
  BodyData,
  ChartContainer,
  ChartTabs,
  Tab,
} from "./Mypage.style";
import ApexChart from "react-apexcharts";
import { isDarkMode } from "@/types/atom";
import { useRecoilValue } from "recoil";

function Mypage() {
  const isDark = useRecoilValue(isDarkMode);

  return (
    <Wrapper>
      <UserInfoContainer>
        <Profile />
        <UserInfo>
          <UserName>AS 님</UserName>
          <BodyDataContainer>
            <BodyDataBox>
              <Category>키</Category>
              <BodyData>170cm</BodyData>
            </BodyDataBox>
            <BodyDataBox>
              <Category>몸무게</Category>
              <BodyData>61kg</BodyData>
            </BodyDataBox>
            <BodyDataBox>
              <Category>체지방률</Category>
              {/* 체지방률 : (1.10 * 몸무게) - (128 * (몸무게 / 키))  */}
              <BodyData>
                {Math.floor((1.1 * 61 - 128 * (61 / 171)) * 10) / 10}%
              </BodyData>
            </BodyDataBox>
          </BodyDataContainer>
        </UserInfo>
      </UserInfoContainer>
      <ChartContainer>
        <ChartTabs>
          <Tab>일별</Tab>
          <Tab>주별</Tab>
          <Tab>월별</Tab>
        </ChartTabs>
        <ApexChart
          type="bar"
          series={[
            {
              name: "운동 이름",
              data: [44, 55, 57, 56, 61, 58, 63],
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
            xaxis: {
              labels: { style: { colors: isDark ? "#f8fbff" : "#151426" } },
              categories: ["월", "화", "수", "목", "금", "토", "일"],
            },
            yaxis: {
              labels: { style: { colors: isDark ? "#f8fbff" : "#151426" } },
            },
            fill: { opacity: 1 },
          }}
        />
      </ChartContainer>
    </Wrapper>
  );
}

export default Mypage;
