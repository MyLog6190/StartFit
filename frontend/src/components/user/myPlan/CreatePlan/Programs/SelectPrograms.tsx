import { getAllProgramContents } from "@/api/exercise";
import { ResponseCode } from "@/common/enum";
import { serverErrorMessage } from "@/common/error/error-message";
import { ExerciseProgram, ProgramContents } from "@/types/exercise";
import { ResponseBody } from "@/types/response";
import { SelectProgramContentsResponseDto } from "@/types/response/execise";
import { MouseEvent, useEffect, useState } from "react";
import {
  CategoryItem,
  CreateBtn,
  ExerciseBox,
  ExerciseCategories,
  ExerciseImg,
  ExerciseInfoContainer,
  ExerciseSet,
  ExerciseTitle,
  FlexBox,
  ProgramBox,
  ProgramExerciseList,
  ProgramImg,
  ProgramInfoContainer,
  ProgramLevel,
  ProgramSummary,
  ProgramTitle,
  SelectionContainerFooter,
  Title,
  Wrapper,
} from "./SelectPrograms.style";
import CreatePlanRequestDto from "@/types/request/user/create-plan.request.dto";
import { createPlan } from "@/api/user";
import CreatePlanResponseDto from "@/types/response/user/create_plan.response.dto";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { selectedDate } from "@/store/atom";

function SelectProgram() {
  const date = useRecoilValue(selectedDate);

  const [programs, setPrograms] = useState<ExerciseProgram[]>([]);
  const [programContents, setProgramContents] = useState<ProgramContents[]>([]);
  const [filter, setFilter] = useState<String[]>([]);
  const [selectedProgram, setSelectedProgram] = useState<{
    [key: number]: boolean;
  }>({});
  const [selectedLevel, setSelectedLevel] = useState<String>("ALL");
  const [displayedProgram, setDisplayedProgram] = useState<ExerciseProgram[]>(
    []
  );

  const navigate = useNavigate();

  useEffect(() => {
    getAllProgramContents().then(getAllProgramContensResponse);
  }, []);

  const getAllProgramContensResponse = (
    responseBody: ResponseBody<SelectProgramContentsResponseDto>
  ) => {
    if (!responseBody) return serverErrorMessage("서버에 응답이 없습니다.");
    const { code } = responseBody;

    if (ResponseCode.DATABASE_ERROR === code)
      return serverErrorMessage("서버 문제가 생겼습니다.");

    if (ResponseCode.SUCCESS !== code) return;

    if (
      "programs" in responseBody &&
      "programContentsList" in responseBody &&
      "programFilter" in responseBody
    ) {
      const { programs, programContentsList, programFilter } = responseBody;
      setPrograms(programs);
      setDisplayedProgram(programs);
      setProgramContents(programContentsList);
      setFilter(["ALL", ...programFilter]);
    }
  };

  const createPlanResponse = (
    responseBody: ResponseBody<CreatePlanResponseDto>
  ) => {
    if (!responseBody) return serverErrorMessage("서버에 응답이 없습니다.");
    const { code } = responseBody;
    console.log(code);
    if (ResponseCode.DATABASE_ERROR === code)
      return serverErrorMessage("서버 오류 입니다.");

    if (ResponseCode.VALIDATION_FAIL === code)
      return serverErrorMessage("인증 오류 입니다. 다시로그인 해주세요.");

    navigate("/user/myplan");
  };

  useEffect(() => {
    setDisplayedProgram(
      programs.filter(
        (program) => selectedLevel === "ALL" || program.level === selectedLevel
      )
    );
  }, [selectedLevel]);

  const toggleProgram = (programId: number) => {
    setSelectedProgram((prev) => ({ [programId]: !prev[programId] }));
  };

  const handleLevelClick = (event: MouseEvent<HTMLDivElement>) => {
    const level = event.currentTarget.getAttribute("data-value") || "";
    setSelectedLevel(level);
  };

  const handleCreateBtnClick = (id: number) => {
    const programExercise = programContents.filter(
      (exercise) => exercise.programId === id
    );

    const requestBody: CreatePlanRequestDto[] = programExercise.map(
      (exercise) => ({
        exerciseName: exercise.exerciseDto.exerciseName,
        date: date.toString(),
        planInfos: Array.from({ length: exercise.setNum }, (_, index) => ({
          setNum: index + 1,
          reps: exercise.reps,
          weight: exercise.weight,
          doChecked: false,
        })),
      })
    );

    createPlan(requestBody).then(createPlanResponse);
  };

  return (
    <Wrapper>
      <ExerciseCategories>
        {
          Object.values(filter as string[])?.map((option) => (
            <CategoryItem
              key={option}
              data-value={option}
              onClick={handleLevelClick}
              isSelectedLevel={selectedLevel === option}
            >
              {option}
            </CategoryItem>
          )) as any
        }
      </ExerciseCategories>
      {
        displayedProgram.map((program) => (
          <ProgramBox>
            <FlexBox
              onClick={() => {
                toggleProgram(program.id);
              }}
            >
              <ProgramImg />
              <ProgramInfoContainer>
                <ProgramLevel>{program.level}</ProgramLevel>
                <ProgramTitle>{program.programName}</ProgramTitle>
                <ProgramSummary>{program.programDescription}</ProgramSummary>
              </ProgramInfoContainer>
            </FlexBox>
            {selectedProgram[program.id] && (
              <>
                <Title>운동 리스트</Title>
                {programContents.map((programContents) =>
                  program.id === programContents.programId ? (
                    <ProgramExerciseList>
                      <ExerciseBox>
                        <ExerciseImg />
                        <ExerciseInfoContainer>
                          <ExerciseTitle>
                            {programContents.exerciseDto.exerciseName}
                          </ExerciseTitle>
                          <ExerciseSet>
                            Set {programContents.setNum} X Reps{" "}
                            {programContents.reps} X{" "}
                            {programContents.weight === 0
                              ? "무게자유"
                              : "Kg " + programContents.weight}
                          </ExerciseSet>
                        </ExerciseInfoContainer>
                      </ExerciseBox>
                    </ProgramExerciseList>
                  ) : null
                )}
                <SelectionContainerFooter>
                  <CreateBtn onClick={() => handleCreateBtnClick(program.id)}>
                    운동계획 생성
                  </CreateBtn>
                </SelectionContainerFooter>
              </>
            )}
          </ProgramBox>
        )) as any
      }
    </Wrapper>
  );
}

export default SelectProgram;
