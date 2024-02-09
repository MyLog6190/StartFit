import { useState } from "react";
import { Wrapper, CreateBtn } from "./Excercise.style";
import Calendar from "../../components/exercisePlan/Calendar/Calendar";
import ExercisePlanListComponent from "../../components/exercisePlan/ExercisePlan/ExercisePlanListComponent";
import CreatePlan from "../../components/exercisePlan/CreatePlan/CreatePlan";

function ExercisePlan() {
  const [showing, setShowing] = useState(false);

  return (
    <>
      <Wrapper>
        <Calendar />
        <CreateBtn onClick={() => setShowing(!showing)}>
          운동 계획하기
        </CreateBtn>
        <ExercisePlanListComponent />
      </Wrapper>
      {showing ? (
        <div onClick={() => setShowing(!showing)}>
          <CreatePlan />
        </div>
      ) : null}
    </>
  );
}

export default ExercisePlan;
