import { Exercise } from "@/types/exercise";
import { Bookmark } from "react-bootstrap-icons";
import {
  Box,
  ExerciseImg,
  ExerciseName,
  ExerciseNameContainer,
} from "./ExerciseBox.style";
import { useNavigate } from "react-router-dom";

const ExerciseBox: React.FC<{ exercise: Exercise }> = ({ exercise }) => {
  const navigate = useNavigate();

  return (
    <Box
      layoutId={exercise.id.toString()}
      layout
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => navigate(`/exercise/lib/${exercise.id}`)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ExerciseImg />
      <ExerciseNameContainer>
        <ExerciseName>{exercise.exerciseName}</ExerciseName>
        <Bookmark size="25"></Bookmark>
      </ExerciseNameContainer>
    </Box>
  );
};

export default ExerciseBox;
