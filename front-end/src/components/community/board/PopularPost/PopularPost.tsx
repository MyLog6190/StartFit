import { useRecoilValue } from "recoil";
import { popularList } from "../../../../types/board";
import {
  PopularPostContainer,
  SideContainerTitle,
  PopularPostList,
} from "./PopularPost.style";
import { Dot } from "react-bootstrap-icons";

function PopularPost() {
  const popularPostList = useRecoilValue(popularList);

  return (
    <PopularPostContainer>
      <SideContainerTitle>게시판 인기글</SideContainerTitle>
      {popularPostList.map((item, index) => (
        <PopularPostList key={"p" + index}>
          <Dot /> {item.title}
        </PopularPostList>
      ))}
    </PopularPostContainer>
  );
}

export default PopularPost;
