import { Toggle } from "./Toggle.style";
import { isDarkMode } from "../../../types/atom";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { MoonStarsFill, BrightnessLowFill } from "react-bootstrap-icons";

function DarkMode() {
  const setDartkMode = useSetRecoilState(isDarkMode);
  const toggle = () => setDartkMode((prev: any) => !prev);
  const isDark = useRecoilValue(isDarkMode);

  return (
    <Toggle onClick={toggle}>
      {isDark ? (
        <BrightnessLowFill size="45" color="#FF8C00" />
      ) : (
        <MoonStarsFill size="30" color="#FFA500" />
      )}
    </Toggle>
  );
}

export default DarkMode;
