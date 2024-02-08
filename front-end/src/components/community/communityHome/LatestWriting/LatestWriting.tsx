import {
  LatestWritingContainer,
  LatestWritingContainerItem,
} from "./LatestWriting.style";
import {
  ProfileContainer,
  TitleOfArticle,
  Writer,
  WriterProfilePhoto,
} from "../Profile/Prodfile.style";

function LatestWriting() {
  return (
    <LatestWritingContainer>
      {[1].map((item) => (
        <LatestWritingContainerItem key={"LWC" + item}>
          <TitleOfArticle>가장 최신 글</TitleOfArticle>
          <ProfileContainer>
            <WriterProfilePhoto />
            <Writer>엄청나게긴닉네임</Writer>
          </ProfileContainer>
        </LatestWritingContainerItem>
      ))}
    </LatestWritingContainer>
  );
}

export default LatestWriting;
