import React from 'react'
import { useRecoilValue } from 'recoil'
import {
  Warraper,
  Title,
  FinderContainer,
  Finder,
  ExerciseFilterContainer,
  ExerciseFilterLabal,
  FilterRadioBtn,
  ExerciseBoxContainer,
  ExerciseBox,
  ExerciseImg,
  ExerciseName,
  ExerciseNameContainer,
} from './ExerciseLibary.style'
import { exerciseFilterItems } from '@/types/atom'
import { Search, Bookmark } from 'react-bootstrap-icons'

function ExerciseLibrary() {
  const filterItems = useRecoilValue(exerciseFilterItems)

  return (
    <Warraper>
      <Title>운동 라이브러리</Title>
      <FinderContainer>
        <Search />
        <Finder placeholder="찾으시는 운동을 검색해보세요."></Finder>
      </FinderContainer>
      <ExerciseFilterContainer>
        {
          Object.values(filterItems as string[])?.map((item, index) => (
            <React.Fragment key={'f' + index}>
              <FilterRadioBtn key={'item' + index} type="radio" id={item} name="filterItem" />
              <ExerciseFilterLabal key={'la' + index} id={item}>
                {item}
              </ExerciseFilterLabal>
            </React.Fragment>
          )) as any
        }
      </ExerciseFilterContainer>
      <ExerciseBoxContainer>
        {
          [1, 2, 3, 4, 5]?.map((item, index) => (
            <ExerciseBox key={item}>
              <ExerciseImg />
              <ExerciseNameContainer>
                <ExerciseName>사이드 레터럴 레이즈</ExerciseName>
                <Bookmark size="20"></Bookmark>
              </ExerciseNameContainer>
            </ExerciseBox>
          )) as any
        }
      </ExerciseBoxContainer>
    </Warraper>
  )
}

export default ExerciseLibrary
