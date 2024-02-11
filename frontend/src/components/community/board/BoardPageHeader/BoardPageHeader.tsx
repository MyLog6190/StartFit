import {
  BoardPageHeaderComponent,
  WritingBtn,
  HeaderMenu,
  MenuTitle,
  MenuItem,
} from "./BoardPageHeader.style";
import { FileTextFill, Dot } from "react-bootstrap-icons";

function BoardPageHeader() {
  return (
    <BoardPageHeaderComponent>
      <WritingBtn>글쓰기</WritingBtn>
      <HeaderMenu>
        <li>
          <MenuItem>
            <FileTextFill />
            전체 게시글
          </MenuItem>
        </li>
      </HeaderMenu>
      <hr />
      <HeaderMenu>
        <li>
          <MenuTitle>주요소식</MenuTitle>
        </li>
        <li>
          <MenuItem>
            <Dot />
            공지사항
          </MenuItem>
        </li>
        <li>
          <MenuItem>
            <Dot />
            개발자노트
          </MenuItem>
        </li>
      </HeaderMenu>
      <hr />
      <HeaderMenu>
        <MenuTitle>커뮤니티</MenuTitle>
        <li>
          <MenuItem>
            <Dot />
            자유게시판
          </MenuItem>
        </li>
        <li>
          <MenuItem>
            <Dot />
            질문&답변
          </MenuItem>
        </li>
      </HeaderMenu>
      <hr />
      <HeaderMenu>
        <MenuTitle>이벤트</MenuTitle>
        <li>
          <MenuItem>
            <Dot />
            진행중인 이벤트
          </MenuItem>
        </li>
        <li>
          <MenuItem>
            <Dot />
            종료된 이벤트
          </MenuItem>
        </li>
      </HeaderMenu>
      <hr />
      <HeaderMenu>
        <MenuTitle>인증하기</MenuTitle>
        <li>
          <MenuItem>
            <Dot />
            운동인증
          </MenuItem>
        </li>
        <li>
          <MenuItem>
            <Dot />
            식단인증
          </MenuItem>
        </li>
      </HeaderMenu>
    </BoardPageHeaderComponent>
  );
}

export default BoardPageHeader;
