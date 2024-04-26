import styled from "styled-components";

export const ExercisePlanItemContainer = styled.div`
  display: grid;
  place-items: center;
`;

export const ExercisePlanItem = styled.div`
  text-align: center;
  color: ${(prop) => prop.theme.text};
  background-color: ${(prop) => prop.theme.main};
  border: solid 1px ${(prop) => prop.theme.text};
  border-radius: 15px;
  padding: 20px;
  margin-top: 40px;
`;

export const ExercisePlanHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

export const ExerciseCategory = styled.div`
  font-weight: 600;
`;

export const ExerciseInfoContainer = styled.div`
  display: flex;
`;

export const ExerciseItemImage = styled.div`
  margin-top: 20px;
  width: 200px;
  height: 200px;
  background-color: black;
  @media (max-width: 576px) {
    display: none;
  }
`;

export const ExerciseSetsContainer = styled.div`
  padding: 20px 10px 0px 25px;
`;

export const ExerciseSetContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 455px;
  margin-bottom: 10px;
`;

export const ExerciseSetInputContainer = styled.div`
  display: flex;
  width: 250px;
  align-items: center;
`;

export const ExerciseSetInput = styled.input`
  border: none;
  border-radius: 5px;
  color: ${(prop) => prop.theme.text};
  background-color: ${(prop) => prop.theme.body};
  width: 35px;
  height: 35px;
  text-align: center;
  padding: 2px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;

  &:first-child {
    caret-color: transparent;
  }
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const ExerciseSetLable = styled.label`
  font-size: 20px;
  margin: 0px 30px 0px 7px;
`;

export const ActionButtonsContainer = styled.div``;

export const CheckBox = styled.input`
  width: 25px;
  height: 25px;
  margin-right: 5px;
  cursor: pointer;
`;

export const AddSetBtn = styled.button`
  width: 500px;
  height: 40px;
  margin-top: 20px;
  border-radius: 15px;
  cursor: pointer;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  border: none;
`;

export const NumPadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.main};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

// 디스플레이 컨테이너
export const DisplayContainer = styled.div`
  width: 260px;
  height: 60px;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  text-align: right;
  padding: 15px;
  font-size: 24px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

// 숫자패드 컨테이너
export const NumPadContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 260px;
`;

// 숫자 및 삭제 버튼
export const NumButton = styled.button`
  background-color: ${(props) => props.theme.num_pad_btn};
  color: ${(props) => props.theme.text};
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.hover};
    color: ${(props) => props.theme.body};
  }
`;

// 삭제 버튼
export const DeleteButton = styled(NumButton)`
  background-color: #ef5350;
`;

export const ConfirmButton = styled(NumButton)`
  background-color: #3b5998;
`;
