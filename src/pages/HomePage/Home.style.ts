import styled from "styled-components";

// 메인 래퍼
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 1100px;
  min-width: 576px;
  padding: 145px 250px;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  overflow: hidden;

  @media (max-width: 1024px) {
    padding: 100px 100px;
  }
  @media (max-width: 567px) {
    padding: 100px 130px;
  }
`;

// 타이틀 스타일
export const Title = styled.h1`
  font-size: 45px;
  font-weight: 300;
`;

// 서브타이틀 스타일
export const Subtitle = styled.p`
  width: 200px;
  margin: 30px 0 70px 0;
`;

// 그리드 레이아웃
export const Grid = styled.div`
  display: grid;
  gap: 20px;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

// 박스 컴포넌트
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 330px;
  height: 330px;
  border: 1px solid;
  padding: 50px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.main};
  overflow: hidden;

  @media (max-width: 1024px) {
    min-width: 280px;
    height: 280px;
  }

  @media (max-width: 768px) {
    padding: 30px;
    min-width: 200px;
    height: 200px;
  }

  @media (max-width: 567px) {
    padding: 10px;
    min-width: 150px;
    height: 150px;
  }

  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

// 박스 콘텐츠 스타일
export const ContentTitle = styled.h3`
  margin-top: 40px;
  margin-bottom: 10px;
  font-weight: 900;

  @media (max-width: 576px) {
    margin-top: 20px;
    font-size: 15px;
  }
`;

export const Description = styled.p`
  text-align: center;
  @media (max-width: 768px) {
    display: none;
  }
`;
