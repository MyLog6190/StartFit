import { isLoggedInState } from "@/store/atom";
import {
  Box,
  ContentTitle,
  Description,
  Grid,
  Subtitle,
  Title,
  Wrapper,
} from "./Home.style";

import {
  Calendar2Week,
  HddRack,
  PersonVideo3,
  Wechat,
} from "react-bootstrap-icons";

import { Link, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { toast } from "react-toastify";

function Home() {
  const loggedIn = useRecoilValue(isLoggedInState);
  const navigate = useNavigate();

  const handleMyPlanClick = () => {
    if (!loggedIn) {
      toast(<h2>로그인이 필요합니다.</h2>, {
        onClose: () => {
          navigate("/auth/login");
        },
      });
    } else {
      navigate("/user/myplan");
    }
  };
  return (
    <Wrapper>
      <Title>StartFit</Title>
      <Subtitle>운동을 시작해보세요.</Subtitle>
      <Grid>
        <Box onClick={handleMyPlanClick}>
          <Calendar2Week size="60" />
          <ContentTitle>오늘의 운동계획</ContentTitle>
          <Description>오늘 어떤 운동을 할 지 미리 계획해 보세요.</Description>
        </Box>
        <Link to="exercise/lib">
          <Box>
            <HddRack size="60" />
            <ContentTitle>라이브러리</ContentTitle>
            <Description>운동 이름과 설명을 볼 수 있는 라이브러리</Description>
          </Box>
        </Link>
        <Link to="exercise/programs">
          <Box>
            <PersonVideo3 size="60" />
            <ContentTitle>운동 프로그램</ContentTitle>
            <Description>운동 추천을 받고 운동을 시작해 보세요.</Description>
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
