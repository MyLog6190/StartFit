import {
  Wrapper,
  MainContainer,
  Benner,
  BennerItem,
  OverView,
  Title,
  TitleOfArticle,
  SideComponent,
  CommunityRuleContainer,
  CommunityRuleContent,
} from "./Community.style";

import PopularWriting from "../../../components/community/communityHome/PopularWriting/PopularWriting";
import LatestWriting from "../../../components/community/communityHome/LatestWriting/LatestWriting";
import CommunityNav from "../../../components/layout/Header/CommunityNav/CommunityNav";

function Community() {
  return (
    <>
      <CommunityNav />
      <Wrapper>
        <MainContainer>
          <Benner>
            <BennerItem>
              <OverView>공지사항</OverView>
            </BennerItem>
            <BennerItem>
              <OverView>이벤트</OverView>
            </BennerItem>
            <BennerItem>
              <OverView>인증하기</OverView>
            </BennerItem>
          </Benner>
          <Title>오늘의 인기 글</Title>
          <PopularWriting />
          <Title>최신 글</Title>
          <LatestWriting />
        </MainContainer>
        <SideComponent>
          <CommunityRuleContainer>
            <TitleOfArticle>커뮤니티 사용 규칙</TitleOfArticle>
            <hr />
            <CommunityRuleContent>
              <p>
                <strong>StartFit 커뮤니티에 오신걸 환영합니다.</strong>
                <br />
                <br />
                운동 루틴이나, 식단, 매일 운동한 모습을 인증하면서 등 운동을 더
                즐겁게 할 수 있도록 다른 사람들과 소통해보세요. <br />
                커뮤니티 관련 규칙들을 지키며 모든 사람들이 즐겁게 사용할 수
                있도록 도와주세요.
              </p>
              <ul>
                <li>1. 운동에 관련된 내용만 올려주세요.</li>
                <li>2. 개인의 대한 공격을 삼가해 주세요.</li>
                <li>3. 도움이 된 글에는 좋아요를 눌러주세요.</li>
                <li>
                  4. 개인 정보(전화번호, 주소, 계정)을 노출 <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;시키지 안 도록 조심해 주세요.
                </li>
              </ul>
            </CommunityRuleContent>
          </CommunityRuleContainer>
        </SideComponent>
      </Wrapper>
    </>
  );
}

export default Community;
