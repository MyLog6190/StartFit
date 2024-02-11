import { Link } from "react-router-dom";
import {
  Wrapper,
  Title,
  Subtitle,
  FlexBox,
  ProgramImg,
  ProgramContentsBox,
  ProgramLevel,
  ProgramTitle,
  ProgramSummary,
  ProgramInfoBtn,
} from "./ExerciseProgram.style";

function ExercisePrograms() {
  return (
    <Wrapper>
      <Title>프로그램</Title>
      <Subtitle>
        운동을 처음 하시는 분을 위해 수준에 맞체 운동을 추천 드립니다.
      </Subtitle>
      {[1, 2, 3, 4].map((item, index) =>
        index % 2 === 0 ? (
          <FlexBox key={index}>
            <ProgramImg />
            <ProgramContentsBox>
              <ProgramLevel>초급</ProgramLevel>
              <ProgramTitle>Stl</ProgramTitle>
              <ProgramSummary>
                메인 운동 모든 세트 성공 시 다음 워크 아웃마다 과부하하여 진행.
                메인 운동 수행 중 연속 3세트 5회 실패 시 10%씩 중량 감소 시켜
                디로딩.
              </ProgramSummary>
              <Link to={"/exercise/program/" + index}>
                <ProgramInfoBtn>상세 정보 &#5125;</ProgramInfoBtn>
              </Link>
            </ProgramContentsBox>
          </FlexBox>
        ) : (
          <FlexBox key={index}>
            <ProgramContentsBox>
              <ProgramLevel>초급</ProgramLevel>
              <ProgramTitle>Stl</ProgramTitle>
              <ProgramSummary>
                메인 운동 모든 세트 성공 시 다음 워크 아웃마다 과부하하여 진행.
                메인 운동 수행 중 연속 3세트 5회 실패 시 10%씩 중량 감소 시켜
                디로딩.
              </ProgramSummary>
              <Link to={"/exercise/program/" + index}>
                <ProgramInfoBtn>상세 정보 &#5125;</ProgramInfoBtn>
              </Link>
            </ProgramContentsBox>
            <ProgramImg />
          </FlexBox>
        )
      )}
    </Wrapper>
  );
}

export default ExercisePrograms;
