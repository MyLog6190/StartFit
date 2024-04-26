import {
  addSet,
  deleteExerciseSet,
  deletePlan,
  getPlan,
  updateSet,
} from "@/api/user";
import { ResponseCode } from "@/common/enum";
import { serverErrorMessage } from "@/common/error/error-message";
import { filterByPlanDate, myPlanAtom, selectedDate } from "@/store/atom";
import { DeleteIdRequestDto } from "@/types/request/user";
import { ResponseBody } from "@/types/response";
import {
  AddSetResponseDto,
  DeleteExerciseSetResponseDto,
  DeletePlanResponseDto,
  GetPlanResponseDto,
  UpdateSetResponseDto,
} from "@/types/response/user";
import { PlanInfo } from "@/types/user";
import { MyPlan } from "@/types/user/user.type";
import { MouseEvent, useEffect, useRef, useState } from "react";
import { Trash } from "react-bootstrap-icons";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  ActionButtonsContainer,
  AddSetBtn,
  CheckBox,
  ConfirmButton,
  DeleteButton,
  DisplayContainer,
  ExerciseCategory,
  ExerciseInfoContainer,
  ExerciseItemImage,
  ExercisePlanHeader,
  ExercisePlanItem,
  ExercisePlanItemContainer,
  ExerciseSetContainer,
  ExerciseSetInput,
  ExerciseSetInputContainer,
  ExerciseSetLable,
  ExerciseSetsContainer,
  NumButton,
  NumPadContainer,
  NumPadWrapper,
} from "./ExercisePlanList.style";
import { Temporal } from "@js-temporal/polyfill";
import { useOutsideClick } from "@/hooks/useOutsideClick";

const ExerciseVolumeListContainer = ({
  planInfo,
  index,
}: {
  planInfo: PlanInfo;
  index: number;
}) => {
  const setMyPlan = useSetRecoilState(myPlanAtom);
  const selectDate = useRecoilValue<Temporal.PlainDate>(selectedDate);

  const [activeInput, setActiveInput] = useState<string | null>(null);
  const [exerciseValues, setExerciseValues] = useState({
    reps: planInfo.reps,
    weight: planInfo.weight,
  });

  const [displayValue, setDisplayValue] = useState<string>("0");
  const [showing, setShowing] = useState<boolean>(false);
  const numPadRef = useRef(null);

  const handleSetDeleteClick = (id: number) => {
    const requestBody: DeleteIdRequestDto = {
      id: id,
      date: selectDate.toString(),
    };
    deleteExerciseSet(requestBody).then((response) => {
      deleteExerciseSetResponse(response);
    });
  };

  const deleteExerciseSetResponse = (
    responseBody: ResponseBody<DeleteExerciseSetResponseDto>
  ) => {
    if (!responseBody) return serverErrorMessage("서버에 응답이 없습니다.");
    const { code } = responseBody;

    if (ResponseCode.DATABASE_ERROR === code)
      serverErrorMessage("서버 오류입니다.");

    if (ResponseCode.SUCCESS !== code) return;

    if ("myPlanList" in responseBody) {
      const { myPlanList } = responseBody;
      setMyPlan(myPlanList);
    }
  };

  const closeNumPad = () => setShowing(false);
  useOutsideClick(numPadRef, closeNumPad);

  const openNumPad = (fieldType: string) => {
    setActiveInput(fieldType);
    setDisplayValue("0");
    setShowing(true);
  };

  const handleNumberClick = (clickedNumber: string) => {
    setDisplayValue((prev) => {
      if (prev.slice(0, 1) === "0") return clickedNumber;
      return (prev + clickedNumber).slice(0, 3);
    });
  };

  const handleNumPadDeleteButtonClick = () => {
    setDisplayValue((prev) => prev.slice(0, -1) || "0");
  };

  const handleSetChange = (info: PlanInfo) => {
    const requestBody = {
      id: info.id,
      setNum: info.setNum,
      reps: info.reps,
      weight: info.weight,
      doChecked: info.doChecked,
      date: selectDate.toString(),
    };

    if (requestBody !== undefined)
      updateSet(requestBody).then(updateSetResponse);
  };

  const handleRepsChange = (info: PlanInfo) => {
    const requestBody = {
      id: info.id,
      setNum: info.setNum,
      reps: info.reps,
      weight: info.weight,
      doChecked: info.doChecked,
      date: selectDate.toString(),
    };

    if (requestBody !== undefined)
      updateSet(requestBody).then(updateSetResponse);
  };

  const handleWeightChange = (info: PlanInfo) => {
    const requestBody = {
      id: info.id,
      setNum: info.setNum,
      reps: info.reps,
      weight: info.weight,
      doChecked: info.doChecked,
      date: selectDate.toString(),
    };

    if (requestBody !== undefined)
      updateSet(requestBody).then(updateSetResponse);
  };

  const handleDoCheckChange = (info: PlanInfo) => {
    const requestBody = {
      id: info.id,
      setNum: info.setNum,
      reps: info.reps,
      weight: info.weight,
      doChecked: info.doChecked,
      date: selectDate.toString(),
    };

    if (requestBody !== undefined)
      updateSet(requestBody).then(updateSetResponse);
  };

  const saveInputValue = () => {
    if (activeInput && displayValue) {
      setExerciseValues((prev) => ({
        ...prev,
        [activeInput]: parseInt(displayValue),
      }));
    }
  };

  const handleConfirmClick = () => {
    saveInputValue(); // 현재 선택된 값으로 상태 업데이트
    const updatedInfo = {
      id: planInfo.id,
      setNum: index + 1,
      reps:
        activeInput === "reps" ? parseInt(displayValue) : exerciseValues.reps,
      weight:
        activeInput === "weight"
          ? parseInt(displayValue)
          : exerciseValues.weight,
      doChecked: planInfo.doChecked,
      date: selectDate.toString(),
    };
    updateSet(updatedInfo).then(updateSetResponse); // 서버에 업데이트 요청
    setShowing(false); // 숫자 패드 닫기
  };

  const updateSetResponse = (
    responseBody: ResponseBody<UpdateSetResponseDto>
  ) => {
    if (!responseBody) return serverErrorMessage("서버가 응답이 없습니다.");
    const { code } = responseBody;
    if (ResponseCode.DATABASE_ERROR === code)
      serverErrorMessage("서버 오류입니다.");

    if (ResponseCode.SUCCESS !== code) return;

    if ("myPlanList" in responseBody) {
      const { myPlanList } = responseBody;
      setMyPlan(myPlanList);
    }

    console.log(responseBody);
  };

  const renderExerciseVolume = (exerciseSet: any) => (
    <>
      <ExerciseSetContainer key={"S" + exerciseSet.id}>
        <ExerciseSetInputContainer>
          <ExerciseSetInput
            value={index + 1}
            onChange={() =>
              handleSetChange({
                id: exerciseSet.id,
                setNum: index + 1,
                reps: exerciseValues.reps,
                weight: exerciseValues.weight,
                doChecked: exerciseSet.check,
              })
            }
            readOnly
          />
          <ExerciseSetLable>SET</ExerciseSetLable>
          <ExerciseSetInput
            type="number"
            value={exerciseValues.reps}
            min="0"
            onClick={() => openNumPad("reps")}
            onChange={() =>
              handleRepsChange({
                id: exerciseSet.id,
                setNum: index + 1,
                reps: exerciseValues.reps,
                weight: exerciseValues.weight,
                doChecked: exerciseSet.check,
              })
            }
            readOnly
          />
          <ExerciseSetLable>REP</ExerciseSetLable>
          <ExerciseSetInput
            type="number"
            value={exerciseValues.weight}
            min="0"
            onClick={() => openNumPad("weight")}
            onChange={() =>
              handleWeightChange({
                id: exerciseSet.id,
                setNum: index + 1,
                reps: exerciseValues.reps,
                weight: exerciseValues.weight,
                doChecked: exerciseSet.check,
              })
            }
            readOnly
          />
          <ExerciseSetLable>KG</ExerciseSetLable>
        </ExerciseSetInputContainer>
        <ActionButtonsContainer>
          <CheckBox
            type="checkbox"
            checked={exerciseSet.doChecked}
            onChange={(e) =>
              handleDoCheckChange({
                id: exerciseSet.id,
                setNum: index + 1,
                reps: exerciseValues.reps,
                weight: exerciseValues.weight,
                doChecked: e.target.checked,
              })
            }
          />
          <Trash
            size="25px"
            cursor="pointer"
            onClick={() => handleSetDeleteClick(exerciseSet.id)}
          />
        </ActionButtonsContainer>
      </ExerciseSetContainer>
      {showing && (
        <NumPadWrapper ref={numPadRef}>
          <DisplayContainer>{displayValue}</DisplayContainer>
          <NumPadContainer>
            {Array.from({ length: 9 }, (_, i) => (
              <NumButton
                key={i + 1}
                onClick={() => handleNumberClick((i + 1).toString())}
              >
                {i + 1}
              </NumButton>
            ))}
            <DeleteButton onClick={handleNumPadDeleteButtonClick}>
              삭제
            </DeleteButton>
            <NumButton onClick={() => handleNumberClick("0")}>0</NumButton>
            <ConfirmButton onClick={handleConfirmClick}>확인</ConfirmButton>
          </NumPadContainer>
        </NumPadWrapper>
      )}
    </>
  );

  return (
    <>
      <ExerciseSetsContainer>
        {renderExerciseVolume(planInfo)}
      </ExerciseSetsContainer>
    </>
  );
};

function ExercisePlanListComponent() {
  const setMyPlan = useSetRecoilState(myPlanAtom);
  const displayPlan = useRecoilValue(filterByPlanDate);
  const selectDate = useRecoilValue<Temporal.PlainDate>(selectedDate);

  const handlePlanDeleteClick = (id: number) => {
    const requestBody: DeleteIdRequestDto = {
      id: id,
      date: selectDate.toString(),
    };

    deletePlan(requestBody).then((response) => {
      deletePlanResponse(response);
    });
  };

  const handleAddSetBtnClick = (id: number) => {
    const requestBody = { id: id, date: selectDate.toString() };
    addSet(requestBody).then(AddSetResponse);
  };

  const AddSetResponse = (responseBody: ResponseBody<AddSetResponseDto>) => {
    if (!responseBody) return serverErrorMessage("서버에 응답이 없습니다.");
    const { code } = responseBody;

    if (ResponseCode.DATABASE_ERROR === code)
      return serverErrorMessage("서버에 오류 입니다.");

    if (ResponseCode.SUCCESS !== code) return;

    if ("myPlanList" in responseBody) {
      const { myPlanList } = responseBody;
      setMyPlan(myPlanList);
    }
  };

  const deletePlanResponse = (
    responseBody: ResponseBody<DeletePlanResponseDto>
  ) => {
    if (!responseBody) return serverErrorMessage("서버에 응답이 없습니다.");
    const { code } = responseBody;

    if (ResponseCode.DATABASE_ERROR === code)
      serverErrorMessage("서버 오류입니다. ");

    if (ResponseCode.SUCCESS !== code) return;

    if ("myPlanList" in responseBody) {
      const { myPlanList } = responseBody;
      setMyPlan(myPlanList);
    }
  };

  return (
    <ExercisePlanItemContainer>
      {displayPlan.map((plan) => (
        <ExercisePlanItem key={"E" + plan.id}>
          <ExercisePlanHeader>
            <ExerciseCategory>{plan.exerciseName}</ExerciseCategory>
            <Trash
              size="25px"
              cursor="pointer"
              onClick={() => handlePlanDeleteClick(plan.id)}
            />
          </ExercisePlanHeader>
          <hr key={"k" + plan.id} />
          <ExerciseInfoContainer>
            <ExerciseItemImage key={"I" + plan.id} />
            <ExerciseSetsContainer>
              {plan.planInfos.map((planInfo, index) => (
                <ExerciseVolumeListContainer
                  key={planInfo.id}
                  planInfo={planInfo}
                  index={index}
                />
              ))}
            </ExerciseSetsContainer>
          </ExerciseInfoContainer>
          <AddSetBtn onClick={() => handleAddSetBtnClick(plan.id)}>
            세트 추가
          </AddSetBtn>
        </ExercisePlanItem>
      ))}
    </ExercisePlanItemContainer>
  );
}

export default ExercisePlanListComponent;
