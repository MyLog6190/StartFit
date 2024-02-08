import { useRecoilValue } from "recoil";
import { ExerciseVolumeList, filterList } from "../../../types/exercisePlan";
import {
  ExercisePlanItemContainer,
  ExercisePlanItem,
  ExercisePlanHeader,
  ExerciseCategory,
  ExerciseInfoContainer,
  ExerciseItemImage,
  ExerciseSetsContainer,
  ExerciseSetContainer,
  ExerciseSetInputContainer,
  ExerciseSetInput,
  ExerciseSetLable,
  ActionButtonsContainer,
  CheckBox,
  AddSetBtn,
} from "./ExercisePlanList.style";
import { Trash } from "react-bootstrap-icons";

const ExerciseVolumeListContainer = ({ plan }: any) => {
  const volumes = useRecoilValue(ExerciseVolumeList);
  const filteredVolumes = volumes.filter((prop) => prop.planId === plan.id);

  const renderExerciseVolume = (volume: any) => (
    <ExerciseSetContainer key={"S" + volume.id}>
      <ExerciseSetInputContainer>
        <ExerciseSetInput value={volume.set} readOnly />
        <ExerciseSetLable>SET</ExerciseSetLable>
        <ExerciseSetInput type="number" defaultValue={volume.rep} min="0" />
        <ExerciseSetLable>REP</ExerciseSetLable>
        <ExerciseSetInput type="number" defaultValue={volume.kg} min="0" />
        <ExerciseSetLable>KG</ExerciseSetLable>
      </ExerciseSetInputContainer>
      <ActionButtonsContainer>
        <CheckBox type="checkbox" defaultChecked={volume.check} />
        <Trash size="25px" />
      </ActionButtonsContainer>
    </ExerciseSetContainer>
  );

  return (
    <ExerciseSetsContainer>
      {filteredVolumes.map((volume) => renderExerciseVolume(volume))}
    </ExerciseSetsContainer>
  );
};

function ExercisePlanListComponent() {
  const planList = useRecoilValue(filterList);

  return (
    <ExercisePlanItemContainer>
      {planList.map((plan) => (
        <ExercisePlanItem key={"E" + plan.id}>
          <ExercisePlanHeader>
            <ExerciseCategory>
              {plan.exerciseName + " | " + plan.categoryName}
            </ExerciseCategory>
            <Trash size="25px" />
          </ExercisePlanHeader>
          <hr />
          <ExerciseInfoContainer>
            <ExerciseItemImage />
            <ExerciseVolumeListContainer plan={plan} />
          </ExerciseInfoContainer>
          <AddSetBtn>세트 추가</AddSetBtn>
        </ExercisePlanItem>
      ))}
    </ExercisePlanItemContainer>
  );
}

export default ExercisePlanListComponent;
