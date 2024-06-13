import { Link, Outlet, useNavigate, useParams } from "react-router-dom";

import { getProgramContents } from "@/api/exercise";
import { ResponseCode } from "@/common/enum";
import { serverErrorMessage } from "@/common/error/error-message";
import { programsAtom } from "@/store/atom";
import { ResponseBody } from "@/types/response";
import { ProgramContentsResponseDto } from "@/types/response/execise";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import {
  ExerciseBox,
  ExerciseImg,
  ExerciseSetInfo,
  ExerciseTitle,
  FlexBox,
  ProgramContentsBox,
  ProgramImg,
  ProgramInfo,
  ProgramInfoBtn,
  ProgramLevel,
  ProgramSummary,
  ProgramTitle,
  Rep,
  Set,
  Subtitle,
  Title,
  Weight,
  Wrapper,
} from "./ProgramDetail.style";
import { ExerciseProgram, ProgramContents } from "@/types/exercise";

function ProgramDetaile() {
  const { programId } = useParams();
  const programs = useRecoilValue(programsAtom);
  const [program, setProgram] = useState<ExerciseProgram>();
  const [programContents, setProgramContents] = useState<ProgramContents[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (programId === undefined) return;
    getProgramContents(programId).then(getProgramContentsResponse);
  }, [programId]);

  const getProgramContentsResponse = (
    responseBody: ResponseBody<ProgramContentsResponseDto>
  ) => {
    console.log(responseBody);
    if (!responseBody) return serverErrorMessage("서버의 응답이 없습니다.");
    const { code } = responseBody;
    if (ResponseCode.DATABASE_ERROR == code)
      return serverErrorMessage("서버 오류입니다.");
    if (ResponseCode.SUCCESS !== code) return;
    if ("programContentsList" in responseBody) {
      const { programContentsList } = responseBody;
      setProgramContents(programContentsList);
    }
    if (programs !== null)
      setProgram(
        programs.find((program) => program.id.toString() === programId)
      );
  };

  return (
    <Wrapper>
      <FlexBox>
        <ProgramImg />
        <ProgramContentsBox>
          <ProgramLevel>{program?.level}</ProgramLevel>
          <ProgramTitle>{program?.programName}</ProgramTitle>
          <ProgramSummary>
            ({program?.programCycle}){" " + program?.programDescription}
          </ProgramSummary>
          <Link to={"/"}>
            <ProgramInfoBtn>운동 시작하기 &#5125;</ProgramInfoBtn>
          </Link>
        </ProgramContentsBox>
      </FlexBox>
      <Title>운동 리스트</Title>
      <Subtitle>프로그램에 따라 추천하는 운동리스트</Subtitle>
      <ProgramInfo>
        <AnimatePresence>
          {programContents.map((item) => (
            <ExerciseBox
              layoutId={item.exerciseDto.id.toString()}
              layout
              key={item.exerciseDto.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => navigate("./" + item.exerciseDto.id)}
            >
              <ExerciseImg />
              <ExerciseSetInfo>
                <ExerciseTitle>{item.exerciseDto.exerciseName}</ExerciseTitle>
                <Set>세트 : {item.setNum}</Set>
                <Rep>반복수 : {item.reps}</Rep>
                <Weight>
                  무게 : {item.weight === 0 ? "자유" : item.weight}
                </Weight>
              </ExerciseSetInfo>
            </ExerciseBox>
          ))}
        </AnimatePresence>
      </ProgramInfo>
      <Outlet />
    </Wrapper>
  );
}

export default ProgramDetaile;
