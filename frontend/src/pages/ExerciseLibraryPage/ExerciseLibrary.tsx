import { getExercisesInfoRequest } from "@/api/exercise";
import { ResponseCode } from "@/common/enum";
import { serverErrorMessage } from "@/common/error/error-message";
import ExerciseBox from "@/components/excercise/box/ExerciesBox";
import { exerciseFilterItems, exercisesAtom } from "@store/atom";
import { Exercise } from "@/types/exercise";
import { ResponseBody } from "@/types/response";
import { ExercisesInfoResponseDto } from "@/types/response/execise";
import { filterExercises } from "@/util/Filter";
import { AnimatePresence } from "framer-motion";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Search } from "react-bootstrap-icons";
import { Outlet } from "react-router-dom";
import { useRecoilState } from "recoil";
import {
  ExerciseBoxContainer,
  ExerciseFilterContainer,
  ExerciseFilterLabal,
  FilterRadioBtn,
  Finder,
  FinderContainer,
  Title,
  Warraper,
} from "./ExerciseLibary.style";

function ExerciseLibrary() {
  const [exercises, setExercises] = useRecoilState(exercisesAtom);
  const [filter, setfilter] = useRecoilState(exerciseFilterItems);

  const [displayedExercises, setDisplayedExercises] = useState<Exercise[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [searchKeyword, setSearchKeyword] = useState<string>("");

  //* ----- request -----
  useEffect(() => {
    getExercisesInfoRequest().then(getExerciseInfoResponse);
  }, []);

  // * ------ Response -------
  const getExerciseInfoResponse = (
    responseBody: ResponseBody<ExercisesInfoResponseDto>
  ) => {
    console.log(responseBody);
    if (responseBody === null)
      return serverErrorMessage("서버에 응답이 없습니다.");

    const { code } = responseBody;

    if (ResponseCode.DATABASE_ERROR === code)
      return serverErrorMessage("서버 오류 입니다.");

    if (ResponseCode.SUCCESS !== code) return;

    if ("exerciseInfos" in responseBody && "categories" in responseBody) {
      const { categories, exerciseInfos } = responseBody;
      setExercises(exerciseInfos);
      setfilter(["ALL", "북마크", ...categories]);
    }
  };

  //* ---- Filter & Search ----
  useEffect(() => {
    setDisplayedExercises(
      filterExercises(exercises, selectedCategory, searchKeyword)
    );
  }, [exercises, selectedCategory, searchKeyword]);

  //* onChange Handler
  const handleCategoryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedCategory(event.target.value);
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(event.target.value);
  };

  return (
    <Warraper>
      <Title>운동 라이브러리</Title>
      <FinderContainer>
        <Search />
        <Finder
          onChange={handleSearchChange}
          placeholder="찾으시는 운동을 검색해보세요."
        ></Finder>
      </FinderContainer>
      <ExerciseFilterContainer>
        {
          Object.values(filter as string[])?.map((option, index) => (
            <React.Fragment key={"EF" + index}>
              <FilterRadioBtn
                id={"F" + index}
                type="radio"
                value={option}
                name="filterItem"
                onChange={handleCategoryChange}
              />
              <ExerciseFilterLabal
                htmlFor={"F" + index}
                checked={selectedCategory === option}
              >
                {option}
              </ExerciseFilterLabal>
            </React.Fragment>
          )) as any
        }
      </ExerciseFilterContainer>
      <AnimatePresence>
        <ExerciseBoxContainer>
          {displayedExercises?.map((exercise) => (
            <ExerciseBox exercise={exercise} key={"EB" + exercise.id} />
          ))}
        </ExerciseBoxContainer>
      </AnimatePresence>
      <Outlet />
    </Warraper>
  );
}

export default ExerciseLibrary;
