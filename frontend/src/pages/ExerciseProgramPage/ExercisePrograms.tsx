import { getExerciseProgramRequest } from "@/api/exercise";
import { ResponseCode } from "@/common/enum";
import { serverErrorMessage } from "@/common/error/error-message";
import { programsAtom } from "@/store/atom";
import { ResponseBody } from "@/types/response";
import { ExerciseProgramsResponseDto } from "@/types/response/execise/execise-programs.response.dto";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import {
  FlexBox,
  ProgramContentsBox,
  ProgramImg,
  ProgramInfoBtn,
  ProgramLevel,
  ProgramSummary,
  ProgramTitle,
  Subtitle,
  Title,
  Wrapper,
} from "./ExerciseProgram.style";

function ExercisePrograms() {
  const [programs, setPrograms] = useRecoilState(programsAtom);

  //* ==== Resquest ====
  useEffect(() => {
    getExerciseProgramRequest().then(getExerciseProgramsResponse);
  }, []);

  //* ==== Response ====
  const getExerciseProgramsResponse = (
    responseBody: ResponseBody<ExerciseProgramsResponseDto>
  ) => {
    if (!responseBody) return serverErrorMessage("서버가 응답이 없습니다.");
    const { code } = responseBody;

    if (ResponseCode.DATABASE_ERROR === code)
      return serverErrorMessage("서버에 에러가 생겼습니다.");

    if (ResponseCode.SUCCESS !== code) return;

    if ("programEntities" in responseBody) {
      const { programEntities } = responseBody;
      setPrograms(programEntities);
    }
  };

  return (
    <Wrapper>
      <Title>프로그램</Title>
      <Subtitle>
        운동을 처음 하시는 분을 위해 수준에 맞체 운동을 추천 드립니다.
      </Subtitle>
      {programs.map((program, index) =>
        index % 2 === 0 ? (
          <FlexBox key={"P" + program.id}>
            <ProgramImg />
            <ProgramContentsBox>
              <ProgramLevel>{program.level}</ProgramLevel>
              <ProgramTitle>{program.programName}</ProgramTitle>
              <ProgramSummary>{program.programDescription}</ProgramSummary>
              <Link to={`/exercise/program/${program.id}`}>
                <ProgramInfoBtn>상세 정보 &#5125;</ProgramInfoBtn>
              </Link>
            </ProgramContentsBox>
          </FlexBox>
        ) : (
          <FlexBox key={index}>
            <ProgramContentsBox>
              <ProgramLevel>{program.level}</ProgramLevel>
              <ProgramTitle>{program.programName}</ProgramTitle>
              <ProgramSummary>{program.programDescription}</ProgramSummary>
              <Link to={`/exercise/program/${program.id}`}>
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
