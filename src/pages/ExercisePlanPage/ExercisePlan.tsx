import { Wrapper } from "./Excercise.style";
import Calendar from "../../components/exercisePlan/Calendar/Calendar";
import ExercisePlanListComponent from "../../components/exercisePlan/ExercisePlan/ExercisePlanListComponent";

function ExercisePlan() {
  return (
    <Wrapper>
      <Calendar />
      <ExercisePlanListComponent />
    </Wrapper>
  );
}

export default ExercisePlan;
