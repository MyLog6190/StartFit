import ManuBar from "./Nav/ManuBar";
import { Banner, Overview } from "./Header.style";
function Header() {
  return (
    <>
      <ManuBar />
      <Banner>
        <Overview>Welcome to StartFit Exercise Planning.</Overview>
      </Banner>
    </>
  );
}

export default Header;
