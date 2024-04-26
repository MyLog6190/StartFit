import Calendar from "@/components/user/myPlan/Calendar/Calendar";
import CreatePlan from "@/components/user/myPlan/CreatePlan/CreatePlan";
import ExercisePlanListComponent from "@/components/user/myPlan/ExercisePlan/ExercisePlanListComponent";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CreateBtn, Wrapper } from "./Excercise.style";

function ExercisePlan() {
  const [showing, setShowing] = useState(false);

  return (
    <>
      <Wrapper>
        <Calendar />
        <Link to={"create/exercise"}>
          <CreateBtn onClick={() => setShowing(true)}>운동 계획하기</CreateBtn>
        </Link>
        <ExercisePlanListComponent />
      </Wrapper>

      <CreatePlan showing={showing} setShowing={setShowing} />
    </>
  );
}

export default ExercisePlan;
