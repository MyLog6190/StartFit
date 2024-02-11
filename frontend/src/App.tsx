import { isDarkMode } from "./types/atom";
import { ThemeProvider } from "styled-components";
import { light, dark } from "./styles/theme";
import { useRecoilValue } from "recoil";
import Router from "./router/Router";

function App() {
  const isDark = useRecoilValue(isDarkMode);
  return (
    <ThemeProvider theme={isDark ? dark : light}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
