import { exercisesAtom } from "@/store/atom";
import { AnimatePresence } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import {
  CloseButton,
  ExerciseDescription,
  ExerciseImg,
  ExerciseInfoContainer,
  ExerciseName,
  Wrapper,
} from "./ExeciseInfo.style";

function ExerciseInfo() {
  const { id } = useParams();
  const exercises = useRecoilValue(exercisesAtom);
  const excercise = exercises.find((exercise) => exercise.id.toString() === id);
  const navigete = useNavigate();

  const handleWrapperClick = () => {
    navigete("../"); // Wrapper 클릭 시 실행되는 로직
  };

  const handleCloseButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation(); // 이벤트 전파 중지
    navigete("../"); // 예를 들어 페이지 이동이 필요하다면 여기에 추가
  };

  return (
    <AnimatePresence>
      <Wrapper onClick={handleWrapperClick}>
        <ExerciseInfoContainer
          layoutId={id}
          onClick={(event) => event.stopPropagation()}
        >
          <ExerciseImg />
          <ExerciseName>{excercise?.exerciseName}</ExerciseName>
          <ExerciseDescription>
            {excercise?.exerciseDescription}
          </ExerciseDescription>
          <CloseButton onClick={handleCloseButtonClick}>Close</CloseButton>
        </ExerciseInfoContainer>
      </Wrapper>
    </AnimatePresence>
  );
}

export default ExerciseInfo;
