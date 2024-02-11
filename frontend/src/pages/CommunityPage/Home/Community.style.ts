import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${(prop) => prop.theme.second};
  padding: 30px 250px;
  display: flex;
  justify-content: center;
  min-width: 576px;
  min-height: 1100px;
  @media (max-width: 992px) {
    padding: 30px 50px;
  }
`;

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(prop) => prop.theme.body};
  border-radius: 20px;
  padding: 30px;
  min-width: 600px;

  @media (max-width: 768px) {
    min-width: 500px;
  }
`;

export const Benner = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
`;

export const BennerItem = styled.div`
  position: relative;
  background-color: pink;
  width: 100%;
  max-width: 270px;
  padding-bottom: 100%;
  border-radius: 10px;
`;

export const OverView = styled.p`
  position: absolute;
  bottom: 10px;
  width: 100%;
  height: 20%;
  font-size: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 50%;
  transform: translate(-50%, 0%);
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
  color: ${(prop) => prop.theme.text};
`;

export const TitleOfArticle = styled.h1`
  font-size: 16px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  color: ${(prop) => prop.theme.text};
`;

export const SideComponent = styled.div`
  display: fiexd;
  margin-left: 15px;
  @media (max-width: 992px) {
    display: none;
  }
`;

export const CommunityRuleContainer = styled.div`
  background-color: ${(prop) => prop.theme.body};
  border-radius: 15px;
  width: 360px;
  height: 400px;
  padding: 30px;
`;

export const CommunityRuleContent = styled.div`
  color: ${(prop) => prop.theme.text};
  & > p {
    border: solid 1px;
    font-size: 15px;
    line-height: 1.5;
    padding: 10px;
    & > strong {
      font-weight: 600;
      font-size: 16px;
    }
  }
  & > ul {
    margin-top: 15px;
    & > li {
      margin-top: 5px;
    }
  }
`;
