import {
  Overlay,
  SelectionContainer,
  Tabs,
  Tab,
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
} from "./CreatePlan.style";
import { exerciseFilterItems } from "../../../types/atom";
import { useRecoilValue } from "recoil";
import { Bookmark, InfoCircle } from "react-bootstrap-icons";
import { isDarkMode } from "../../../types/atom";

function CreatePlan() {
  const categorisList = useRecoilValue(exerciseFilterItems);
  const isDark = useRecoilValue(isDarkMode);

  return (
    <Overlay>
      <SelectionContainer>
        <Tabs>
          <Tab>운동</Tab>
          <Tab>프로그램</Tab>
        </Tabs>
        <ExercisesContainer>
          <SearchBar />
          <ExerciseCategories>
            {categorisList.map((item) => (
              <CategoryItem>{item}</CategoryItem>
            ))}
          </ExerciseCategories>
        </ExercisesContainer>
        {Array.from(new Array(20), (i) => i + 1).map((item) => (
          <ExerciseBox key={"E" + item}>
            <FlexBox>
              <CheckBox type="checkbox" />
              <ExerciseImage />
              <ExerciseTitle>ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ</ExerciseTitle>
            </FlexBox>
            <IconBox>
              <Bookmark size={30} color={isDark ? "#f8fbff" : "#151426"} />
              <InfoCircle size={30} color={isDark ? "#f8fbff" : "#151426"} />
            </IconBox>
          </ExerciseBox>
        ))}
      </SelectionContainer>
    </Overlay>
  );
}

export default CreatePlan;
