import { useState } from "react";
import {
  Wrapper,
  ExerciseCategories,
  CategoryItem,
  ProgramBox,
  FlexBox,
  ProgramImg,
  ProgramInfoContainer,
  ProgramLevel,
  ProgramTitle,
  ProgramSummary,
  ProgramExerciseList,
  Title,
  ExerciseBox,
  ExerciseImg,
  ExerciseInfoContainer,
  ExerciseTitle,
  ExerciseSet,
  SelectionContainerFooter,
  CreateBtn,
} from "./SelectPrograms.style";

function SelectProgram() {
  const [showing, setShowing] = useState(false);

  return (
    <Wrapper>
      <ExerciseCategories>
        <CategoryItem>초급</CategoryItem>
        <CategoryItem>중급</CategoryItem>
        <CategoryItem>고급</CategoryItem>
      </ExerciseCategories>
      <ProgramBox>
        <FlexBox onClick={() => setShowing(!showing)}>
          <ProgramImg />
          <ProgramInfoContainer>
            <ProgramLevel>초급</ProgramLevel>
            <ProgramTitle>Strong Lift 5 by 5</ProgramTitle>
            <ProgramSummary>
              메인 운동 모든 세트 성공 시 다음 워크 아웃마다 과부하하여 진행.
              메인 운동 수행 중 연속 3세트 5회 실패 시 10%씩 중량 감소 시켜
              디로딩.
            </ProgramSummary>
          </ProgramInfoContainer>
        </FlexBox>
        {showing ? (
          <ProgramExerciseList>
            <Title>운동 리스트</Title>
            <ExerciseBox>
              <ExerciseImg />
              <ExerciseInfoContainer>
                <ExerciseTitle>스쿼트</ExerciseTitle>
                <ExerciseSet>Set 10 X Reps 10</ExerciseSet>
              </ExerciseInfoContainer>
            </ExerciseBox>
            <ExerciseBox>
              <ExerciseImg />
              <ExerciseInfoContainer>
                <ExerciseTitle>스쿼트</ExerciseTitle>
                <ExerciseSet>Set 10 X Reps 10</ExerciseSet>
              </ExerciseInfoContainer>
            </ExerciseBox>
            <ExerciseBox>
              <ExerciseImg />
              <ExerciseInfoContainer>
                <ExerciseTitle>스쿼트</ExerciseTitle>
                <ExerciseSet>Set 10 X Reps 10</ExerciseSet>
              </ExerciseInfoContainer>
            </ExerciseBox>
            <ExerciseBox>
              <ExerciseImg />
              <ExerciseInfoContainer>
                <ExerciseTitle>스쿼트</ExerciseTitle>
                <ExerciseSet>Set 10 X Reps 10</ExerciseSet>
              </ExerciseInfoContainer>
            </ExerciseBox>
            <SelectionContainerFooter>
              <CreateBtn>운동계획 생성</CreateBtn>
            </SelectionContainerFooter>
          </ProgramExerciseList>
        ) : null}
      </ProgramBox>
      <ProgramBox>
        <FlexBox onClick={() => setShowing(!showing)}>
          <ProgramImg />
          <ProgramInfoContainer>
            <ProgramLevel>초급</ProgramLevel>
            <ProgramTitle>Strong Lift 5 by 5</ProgramTitle>
            <ProgramSummary>
              메인 운동 모든 세트 성공 시 다음 워크 아웃마다 과부하하여 진행.
              메인 운동 수행 중 연속 3세트 5회 실패 시 10%씩 중량 감소 시켜
              디로딩.
            </ProgramSummary>
          </ProgramInfoContainer>
        </FlexBox>
        {showing ? (
          <ProgramExerciseList>
            <Title>운동 리스트</Title>
            <ExerciseBox>
              <ExerciseImg />
              <ExerciseInfoContainer>
                <ExerciseTitle>스쿼트</ExerciseTitle>
                <ExerciseSet>Set 10 X Reps 10</ExerciseSet>
              </ExerciseInfoContainer>
            </ExerciseBox>
            <ExerciseBox>
              <ExerciseImg />
              <ExerciseInfoContainer>
                <ExerciseTitle>스쿼트</ExerciseTitle>
                <ExerciseSet>Set 10 X Reps 10</ExerciseSet>
              </ExerciseInfoContainer>
            </ExerciseBox>
            <ExerciseBox>
              <ExerciseImg />
              <ExerciseInfoContainer>
                <ExerciseTitle>스쿼트</ExerciseTitle>
                <ExerciseSet>Set 10 X Reps 10</ExerciseSet>
              </ExerciseInfoContainer>
            </ExerciseBox>
            <ExerciseBox>
              <ExerciseImg />
              <ExerciseInfoContainer>
                <ExerciseTitle>스쿼트</ExerciseTitle>
                <ExerciseSet>Set 10 X Reps 10</ExerciseSet>
              </ExerciseInfoContainer>
            </ExerciseBox>
            <SelectionContainerFooter>
              <CreateBtn>운동계획 생성</CreateBtn>
            </SelectionContainerFooter>
          </ProgramExerciseList>
        ) : null}
      </ProgramBox>
    </Wrapper>
  );
}

export default SelectProgram;
