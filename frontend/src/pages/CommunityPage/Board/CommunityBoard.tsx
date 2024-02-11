import React from "react";
import CommunityNav from "../../../components/layout/Header/CommunityNav/CommunityNav";
import {
  Wrapper,
  BoardMainContainer,
  BoardCategory,
  BoardMainContainerHeader,
  SortCategory,
  SearchBarContainer,
  SearchSelector,
  SearchBar,
  KeywordInput,
  SearchIcon,
  BoardList,
  Post,
  PostTitleContainer,
  PostCategory,
  PostTitle,
  PostInfoContainer,
  PostWirter,
  DateOfWirting,
  Hits,
  Like,
} from "./CommunityBoard.style";
import BoardPageHeader from "../../../components/community/board/BoardPageHeader/BoardPageHeader";
import PopularPost from "../../../components/community/board/PopularPost/PopularPost";
import { Search, Dot, Eye, HandThumbsUp } from "react-bootstrap-icons";
function CommunityBoard() {
  return (
    <>
      <CommunityNav />
      <Wrapper>
        <BoardPageHeader />
        <BoardMainContainer>
          <BoardCategory>전체 게시글</BoardCategory>
          <BoardMainContainerHeader>
            <SortCategory>
              <li>인기순</li>
              <li>최신순</li>
              <li>버프순</li>
            </SortCategory>
            <SearchBarContainer>
              <SearchSelector>
                <option>제목 + 내용</option>
                <option>제목</option>
                <option>내용</option>
              </SearchSelector>
              <SearchBar>
                <KeywordInput placeholder="게시판 검색"></KeywordInput>
                <SearchIcon>
                  <Search fontSize="18" />
                </SearchIcon>
              </SearchBar>
            </SearchBarContainer>
          </BoardMainContainerHeader>
          <BoardList>
            <Post>
              <li>
                <PostTitleContainer>제목</PostTitleContainer>
              </li>
              <li>
                <PostInfoContainer>
                  <PostWirter>작성자</PostWirter>
                  <DateOfWirting>작성일</DateOfWirting>
                  <Hits>조회수</Hits>
                  <Like>추천수</Like>
                </PostInfoContainer>
              </li>
            </Post>
            <hr />

            {Array.from(new Array(20), (i) => i + 1).map((item, index) => (
              <React.Fragment key={index}>
                <Post>
                  <li>
                    <PostTitleContainer>
                      <PostCategory>자유게시판</PostCategory>
                      <PostTitle>
                        졸라 긴 제목 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                      </PostTitle>
                    </PostTitleContainer>
                  </li>
                  <li>
                    <PostInfoContainer>
                      <PostWirter>작성자 이름</PostWirter>
                      <Dot />
                      <DateOfWirting>24시간 전</DateOfWirting>
                      <Eye />
                      <Hits>1234</Hits>
                      <HandThumbsUp />
                      <Like>8</Like>
                    </PostInfoContainer>
                  </li>
                </Post>
                <hr />
              </React.Fragment>
            ))}
          </BoardList>
        </BoardMainContainer>
        <PopularPost />
      </Wrapper>
    </>
  );
}

export default CommunityBoard;
