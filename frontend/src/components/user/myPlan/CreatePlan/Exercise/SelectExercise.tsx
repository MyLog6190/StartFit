import { getExercisesInfoRequest } from "@/api/exercise";
import { ResponseCode } from "@/common/enum";
import { serverErrorMessage } from "@/common/error/error-message";
import {
  exerciseFilterItems,
  exercisesAtom,
  isDarkMode,
  selectedDate,
} from "@/store/atom";
import { Exercise } from "@/types/exercise";
import { ResponseBody } from "@/types/response";
import { ExercisesInfoResponseDto } from "@/types/response/execise";
import { filterExercises } from "@/util/Filter";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { Bookmark, InfoCircle } from "react-bootstrap-icons";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  CategoryItem,
  CheckBox,
  CreateBtn,
  ExerciseBox,
  ExerciseCategories,
  ExerciseImage,
  ExerciseTitle,
  ExercisesContainer,
  FlexBox,
  IconBox,
  SearchBar,
  SelectionContainerFooter,
} from "./SelectExercise.style";
import { createPlan } from "@/api/user";
import CreatePlanRequestDto from "@/types/request/user/create-plan.request.dto";
import CreatePlanResponseDto from "@/types/response/user/create_plan.response.dto";
import { useNavigate } from "react-router-dom";

function SelectExercise() {
  const isDark = useRecoilValue(isDarkMode);
  const [exercises, setExercises] = useRecoilState(exercisesAtom);
  const [filter, setfilter] = useRecoilState(exerciseFilterItems);
  const date = useRecoilValue(selectedDate);

  const [displayedExercises, setDisplayedExercises] = useState<Exercise[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [checked, setChecked] = useState<{
    [key: number]: boolean;
  }>({});

  const navigate = useNavigate();

  //* ---- request ----
  useEffect(() => {
    getExercisesInfoRequest().then(getExerciseInfoResponse);
  }, []);

  // * ------ Response -------
  const getExerciseInfoResponse = (
    responseBody: ResponseBody<ExercisesInfoResponseDto>
  ) => {
    if (responseBody === null)
      return serverErrorMessage("서버에 응답이 없습니다.");

    const { code } = responseBody;

    if (ResponseCode.DATABASE_ERROR === code)
      return serverErrorMessage("서버 오류 입니다.");

    if (ResponseCode.SUCCESS !== code) return;

    if ("categories" in responseBody && "exerciseInfos" in responseBody) {
      const { categories, exerciseInfos } = responseBody;

      setExercises(exerciseInfos);

      setfilter(["ALL", "북마크", ...categories]);
    }
  };

  const createPlanResponse = (
    responseBody: ResponseBody<CreatePlanResponseDto>
  ) => {
    if (!responseBody) return serverErrorMessage("서버에 응답이 없습니다.");
    const { code } = responseBody;

    if (ResponseCode.DATABASE_ERROR === code)
      return serverErrorMessage("서버 오류 입니다.");

    if (ResponseCode.VALIDATION_FAIL === code)
      return serverErrorMessage("인증 오류 입니다. 다시 로그인 해주세요.");

    navigate("/user/myplan");
  };

  //* Exercise Filter
  useEffect(() => {
    setDisplayedExercises(
      filterExercises(exercises, selectedCategory, searchKeyword)
    );
  }, [exercises, selectedCategory, searchKeyword]);

  //* Click Handler
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(event.target.value);
  };

  const handleCategoryClick = (event: MouseEvent<HTMLInputElement>) => {
    const category = event.currentTarget.getAttribute("data-value") || "";
    setSelectedCategory(category);
  };

  const handleCreateBtnClick = () => {
    const checkedExercise = displayedExercises.filter((exercise) => {
      if (checked[exercise.id]) {
        return exercise;
      }
    });

    // 각 운동별로 별도의 계획을 생성하는 방식
    const requestBody: CreatePlanRequestDto[] = checkedExercise.map(
      (exercise) => ({
        exerciseName: exercise.exerciseName, // 각 운동 이름을 계획 이름으로 사용
        date: date.toString(), // 모든 계획에 대해 동일한 날짜 사용
        planInfos: [
          {
            setNum: 1, // 세트 번호, 여기서는 각 운동별로 1개의 세트 정보만 포함
            reps: 0, // 반복 횟수 기본값
            weight: 0, // 무게 기본값
            doChecked: false,
          },
        ],
      })
    );
    createPlan(requestBody).then(createPlanResponse);
  };

  //* Change Handler
  const handleCheckChange = (
    event: ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    setChecked((prev) => ({ ...prev, [id]: event.target.checked }));
  };

  return (
    <>
      <ExercisesContainer>
        <SearchBar
          placeholder="운동을 검색해보세요"
          onChange={handleSearchChange}
        />
        <ExerciseCategories>
          {filter.map((item) => (
            <CategoryItem
              key={item.toString()}
              data-value={item.toString()}
              onClick={handleCategoryClick}
              isSelectCategory={selectedCategory === item}
            >
              {item}
            </CategoryItem>
          ))}
        </ExerciseCategories>
      </ExercisesContainer>
      {displayedExercises.map((exercise) => (
        <ExerciseBox key={"E" + exercise.id}>
          <FlexBox>
            <CheckBox
              onChange={(event) => handleCheckChange(event, exercise.id)}
              type="checkbox"
            />
            <ExerciseImage />
            <ExerciseTitle>{exercise.exerciseName}</ExerciseTitle>
          </FlexBox>
          <IconBox>
            <Bookmark size={30} color={isDark ? "#f8fbff" : "#151426"} />
            <InfoCircle size={30} color={isDark ? "#f8fbff" : "#151426"} />
          </IconBox>
        </ExerciseBox>
      ))}
      <hr />
      <SelectionContainerFooter>
        <CreateBtn onClick={handleCreateBtnClick}>운동계획 생성</CreateBtn>
      </SelectionContainerFooter>
    </>
  );
}

export default SelectExercise;
