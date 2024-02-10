import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Wrapper, CreateBtn } from "./Excercise.style";
import Calendar from "../../components/exercisePlan/Calendar/Calendar";
import ExercisePlanListComponent from "../../components/exercisePlan/ExercisePlan/ExercisePlanListComponent";
import CreatePlan from "../../components/exercisePlan/CreatePlan/CreatePlan";
import { useSetRecoilState } from "recoil";
import { isShowing } from "../../types/atom";

function ExercisePlan() {
  const setShowing = useSetRecoilState(isShowing);

  return (
    <>
      <Wrapper>
        <Calendar />
        <Link to={"/plan/create/exercise"}>
          <CreateBtn onClick={() => setShowing(true)}>운동 계획하기</CreateBtn>
        </Link>
        <ExercisePlanListComponent />
      </Wrapper>

      <CreatePlan />
    </>
  );
}

export default ExercisePlan;
