import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 1100px;
  padding: 50px 20px; // 여백 조정
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  overflow: hidden;
`;

export const ExercisesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%; // 전체 너비 대비 적절한 여백 유지
  padding: 30px; // 내부 패딩 증가
  background-color: ${(props) => props.theme.main};
  border-radius: 10px;
  margin-bottom: 20px; // 여백 추가
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1); // 그림자 추가
`;

export const SearchBar = styled.input`
  width: 85%; // 서치바 너비 조정
  padding: 12px 15px; // 패딩 조정
  margin-bottom: 25px; // 마진 증가
  font-size: 16px; // 글꼴 크기 조정
  border: 1px solid ${(props) => props.theme.border}; // 테두리 스타일 조정
  border-radius: 20px; // 둥근 테두리
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); // 그림자 추가
`;

export const ExerciseCategories = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px; // 항목 사이 갭 증가
  margin-bottom: 20px;
`;

export const CategoryItem = styled.div<{ isSelectCategory: boolean }>`
  padding: 10px 15px; // 패딩 조정
  background-color: ${(props) =>
    props.isSelectCategory ? props.theme.hover : "transparent"};
  color: ${(props) =>
    props.isSelectCategory ? props.theme.body : props.theme.text};
  border-radius: 25px; // 더 둥근 테두리
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.hover};
  }
`;

export const ExerciseBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px; // 내부 패딩 증가
  margin-bottom: 20px; // 아래쪽 여백 증가
  background-color: ${(props) => props.theme.main};
  border-radius: 15px; // 둥근 테두리
`;

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const CheckBox = styled.input`
  font-size: 20px;
  margin-right: 20px;
  cursor: pointer;
  flex-shrink: 0; // 축소 방지
`;

export const ExerciseImage = styled.div`
  width: 100px;
  height: 100px;
  background-color: black;
  border-radius: 15px; // 둥근 테두리
  margin-right: 10px; // 이미지와 타이틀 간 거리 증가
`;

export const ExerciseTitle = styled.div`
  font-size: 18px;
  color: ${(props) => props.theme.text};
  flex-grow: 1;
  padding: 0 10px;
`;

export const IconBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70px; // 아이콘 박스 너비 조정
`;

export const SelectionContainerFooter = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

export const CreateBtn = styled.button`
  padding: 20px 60px; // 버튼 크기 증가
  font-size: 20px; // 글꼴 크기 증가
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.btnBg};
  border-radius: 20px; // 둥근 테두리
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); // 그림자 추가로 입체감 향상
`;
