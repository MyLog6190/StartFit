import {
  Wrapper,
  Title,
  Subtitle,
  Grid,
  Box,
  ContentTitle,
  Description,
} from "./Home.style";

import {
  Calendar2Week,
  PersonVideo3,
  HddRack,
  Wechat,
} from "react-bootstrap-icons";

import { Link } from "react-router-dom";

function Home() {
  return (
    <Wrapper>
      <Title>StartFit</Title>
      <Subtitle>운동을 시작해보세요.</Subtitle>
      <Grid>
        <Link to="plan">
          <Box>
            <Calendar2Week size="60" />
            <ContentTitle>오늘의 운동계획</ContentTitle>
            <Description>
              오늘 어떤 운동을 할 지 미리 계획해 보세요.
            </Description>
          </Box>
        </Link>
        <Link to="exercise/programs">
          <Box>
            <PersonVideo3 size="60" />
            <ContentTitle>운동 프로그램</ContentTitle>
            <Description>운동 추천을 받고 운동을 시작해 보세요.</Description>
          </Box>
        </Link>
        <Link to="/exercise/lib">
          <Box>
            <HddRack size="60" />
            <ContentTitle>라이브러리</ContentTitle>
            <Description>운동 이름과 설명을 볼 수 있는 라이브러리</Description>
          </Box>
        </Link>
        <Link to="/community">
          <Box>
            <Wechat size="60" />
            <ContentTitle>커뮤니티</ContentTitle>
            <Description>다른 사람들과 의견을 공유해 보세요.</Description>
          </Box>
        </Link>
      </Grid>
    </Wrapper>
  );
}

export default Home;
