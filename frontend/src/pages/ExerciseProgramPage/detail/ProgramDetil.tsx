import { Link } from "react-router-dom";
import {
  Wrapper,
  FlexBox,
  ProgramImg,
  ProgramContentsBox,
  ProgramLevel,
  ProgramTitle,
  ProgramSummary,
  ProgramInfoBtn,
} from "../ExerciseProgram.style";
import {
  Title,
  Subtitle,
  ProgramInfo,
  ExerciseBox,
  ExerciseImg,
  ExerciseSetInfo,
  ExerciseTitle,
  Set,
  Rep,
  Weight,
} from "./ProgramDetail.style";

function ProgramDetaile() {
  return (
    <Wrapper>
      <FlexBox>
        <ProgramImg />
        <ProgramContentsBox>
          <ProgramLevel>초급</ProgramLevel>
          <ProgramTitle>Stl</ProgramTitle>
          <ProgramSummary>
            메인 운동 모든 세트 성공 시 다음 워크 아웃마다 과부하하여 진행. 메인
            운동 수행 중 연속 3세트 5회 실패 시 10%씩 중량 감소 시켜 디로딩.
          </ProgramSummary>
          <Link to={"/"}>
            <ProgramInfoBtn>운동 시작하기 &#5125;</ProgramInfoBtn>
          </Link>
        </ProgramContentsBox>
      </FlexBox>
      <Title>운동 리스트</Title>
      <Subtitle>프로그램에 따라 추천하는 운동리스트</Subtitle>
      <ProgramInfo>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <ExerciseBox key={item}>
            <ExerciseImg></ExerciseImg>
            <ExerciseSetInfo>
              <ExerciseTitle>사이드 레터럴 레이즈</ExerciseTitle>
              <Set>세트 : 5</Set>
              <Rep>반복수 : 5</Rep>
              <Weight>무게 : 자유</Weight>
            </ExerciseSetInfo>
          </ExerciseBox>
        ))}
      </ProgramInfo>
    </Wrapper>
  );
}

export default ProgramDetaile;
