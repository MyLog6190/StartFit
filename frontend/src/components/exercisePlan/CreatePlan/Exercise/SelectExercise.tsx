import {
  SearchBar,
  ExercisesContainer,
  ExerciseCategories,
  CategoryItem,
  ExerciseBox,
  FlexBox,
  IconBox,
  CheckBox,
  ExerciseImage,
  ExerciseTitle,
  SelectionContainerFooter,
  CreateBtn,
} from "./SelectExercise.style";
import { Bookmark, InfoCircle } from "react-bootstrap-icons";
import { exerciseFilterItems } from "../../../../types/atom";
import { useRecoilValue } from "recoil";
import { isDarkMode } from "../../../../types/atom";

function SelectExercise() {
  const categorisList = useRecoilValue(exerciseFilterItems);
  const isDark = useRecoilValue(isDarkMode);
  return (
    <>
      <ExercisesContainer>
        <SearchBar placeholder="운동을 검색해보세요" />
        <ExerciseCategories>
          {categorisList.map((item) => (
            <CategoryItem key={item.toString()}>{item}</CategoryItem>
          ))}
        </ExerciseCategories>
      </ExercisesContainer>
      {Array.from(new Array(20), (i) => i + 1).map((item, index) => (
        <ExerciseBox key={"E" + index}>
          <FlexBox>
            <CheckBox type="checkbox" />
            <ExerciseImage />
            <ExerciseTitle>사이드 레터럴 레이즈</ExerciseTitle>
          </FlexBox>
          <IconBox>
            <Bookmark size={30} color={isDark ? "#f8fbff" : "#151426"} />
            <InfoCircle size={30} color={isDark ? "#f8fbff" : "#151426"} />
          </IconBox>
        </ExerciseBox>
      ))}
      <hr />
      <SelectionContainerFooter>
        <CreateBtn>운동계획 생성</CreateBtn>
      </SelectionContainerFooter>
    </>
  );
}

export default SelectExercise;
