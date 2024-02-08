import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${(prop) => prop.theme.second};
  padding: 30px 250px;
  display: flex;
  justify-content: center;
  min-width: 576px;
  @media (max-width: 992px) {
    padding: 30px 50px;
  }
`;

export const BoardMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(prop) => prop.theme.second};
  margin: 0px 20px;
  min-width: 740px;

  @media (max-width: 992px) {
    width: 900px;
  }
`;

export const BoardCategory = styled.div`
  font-size: 20px;
  color: ${(prop) => prop.theme.text};
  background-color: ${(prop) => prop.theme.main};
  border-radius: 20px;
  padding: 25px 30px;
`;

export const BoardMainContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0px;
`;

export const SortCategory = styled.ul`
  display: flex;
  justify-content: center;
  color: ${(prop) => prop.theme.text};
  & > li {
    margin-right: 5px;
  }
`;

export const SearchBarContainer = styled.div`
  display: flex;
`;

export const SearchSelector = styled.select`
  width: 100px;
  border-radius: 10px;
  padding: 10px 7px;
  margin-right: 5px;
  border-width: 0;
  & > option {
    font-size: 14px;
    padding: 5px;
  }
  &:focus {
    outline: none;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  width: 200px;
  position: relative;
  border-radius: 10px;
  background-color: white;
`;

export const KeywordInput = styled.input`
  width: 160px;
  border-radius: 10px;
  border-width: 0;
  font-size: 15px;
  padding: 8px;
  &:focus {
    outline: none;
  }
`;

export const SearchIcon = styled.div`
  position: absolute;
  padding: 10px 10px 10px 2px;
  right: 0px;
`;

export const BoardList = styled.div`
  diplay: flex;
  flex-direction: column;
  color: ${(prop) => prop.theme.text};
  background-color: ${(prop) => prop.theme.main};
  padding: 25px;
  border-radius: 10px;
`;

export const Post = styled.ul`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: 14px;
  padding: 5px 0px;
  @media (max-width: 992px) {
    flex-direction: column;
    justify-content: start;
  }
`;

export const PostTitleContainer = styled.div`
  display: flex;
`;

export const PostCategory = styled.span`
  font-size: 12px;
  padding: 4px 5px 2px;
  border-radius: 6px;
  background: ${(prop) => prop.theme.second};
  text-align: center;
  white-space: nowrap;
`;

export const PostTitle = styled.span`
  font-size: 14px;
  vertical-align: middle;
  padding: 2px 5px;
  width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
`;

export const PostInfoContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  @media (max-width: 992px) {
    margin-top: 7px;
  }
`;

export const PostWirter = styled.span`
  font-size: 13px;
  padding: 2px 5px;
  width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: 992px) {
    padding: 0px;
    width: auto;
    max-width: 150px;
  }
`;

export const DateOfWirting = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  width: 75px;
  @media (max-width: 992px) {
    width: auto;
    margin-right: 10px;
  }
`;

export const Hits = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 5px;
  font-size: 13px;
  width: 60px;
  @media (max-width: 992px) {
    width: auto;
    margin-right: 10px;
  }
`;

export const Like = styled.span`
  padding: 2px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  width: 60px;
  @media (max-width: 992px) {
    width: auto;
  }
`;
