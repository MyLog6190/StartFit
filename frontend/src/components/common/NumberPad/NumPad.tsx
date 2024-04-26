import React from "react";
import { NumPadContainer, NumButton, DeleteButton } from "./NumPad.style";

type NumPadProps = {
  onNumberClick: (num: number | string) => void; // 숫자 키를 눌렀을 때 호출되는 함수
  onDeleteClick: () => void; // 삭제 버튼을 눌렀을 때 호출되는 함수
};

const NumPad: React.FC<NumPadProps> = ({ onNumberClick, onDeleteClick }) => {
  return (
    <NumPadContainer>
      {Array.from({ length: 9 }, (_, i) => (
        <NumButton key={i + 1} onClick={() => onNumberClick(i + 1)}>
          {i + 1}
        </NumButton>
      ))}
      <DeleteButton onClick={onDeleteClick}>Delete</DeleteButton>
      <NumButton onClick={() => onNumberClick(0)}>0</NumButton>
      <NumButton onClick={() => onNumberClick(".")}>.</NumButton>
    </NumPadContainer>
  );
};

export default NumPad;
