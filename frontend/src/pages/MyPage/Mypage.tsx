import {
  Wrapper,
  UserInfoContainer,
  UserInfo,
  Profile,
  UserName,
} from "./Mypage.style";

function Mypage() {
  return (
    <Wrapper>
      <UserInfoContainer>
        <Profile />
        <UserInfo>
          <UserName>aaaaaa님</UserName>
        </UserInfo>
      </UserInfoContainer>
    </Wrapper>
  );
}

export default Mypage;
