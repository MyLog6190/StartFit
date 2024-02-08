import styled from "styled-components";
import imageURL from "../../asset/png/programs/stl.png";

export const Wrapper = styled.div`
  width: 100%;
  padding: 145px 250px;
  min-width: 576px;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  overflow: hidden;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.text};
  font-weight: bold;
  font-size: 40px;
  margin-bottom: 30px;
`;

export const Subtitle = styled.p`
  margin-bottom: 70px;
`;

export const FlexBox = styled.div`
  width: 100%;
  min-width: 420px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 50px;
  background-color: ${(props) => props.theme.main};
  color: ${(props) => props.theme.text};
  @media (min-width: 800px) {
  }
`;

export const ProgramContentsBox = styled.div`
  flex: 1;
  text-align: center;
  min-width: 400px;
  min-height: 400px;
  padding: 40px 40px;
  @media (min-width: 1350px) {
    flex: 0 0 50%;
  }
`;

export const ProgramLevel = styled.h1`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 75px;
`;

export const ProgramTitle = styled.h3`
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 15px;
`;

export const ProgramSummary = styled.p`
  word-wrap: break-word;
`;

export const ProgramInfoBtn = styled.button`
  margin-top: 50px;
  padding: 5px 10px;
  font-size: 20px;
  height: 50px;
  border-radius: 20px;
  background-color: #355dff;
  border: none;
  color: ${(props) => props.theme.text};
`;

export const ProgramImg = styled.div`
  flex: 1;
  min-width: 400px;
  min-height: 400px;
  background-image: url(${imageURL});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @media (min-width: 1350px) {
    flex: 0 0 50%;
  }
`;
