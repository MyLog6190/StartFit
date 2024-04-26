import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRecoilValue } from "recoil";
import { ThemeProvider } from "styled-components";
import Router from "./router/Router";
import { dark, light } from "./styles/theme";
import { isDarkMode } from "./store/atom";

function App() {
  const isDark = useRecoilValue(isDarkMode);
  return (
    <ThemeProvider theme={isDark ? dark : light}>
      <Router />
      <ToastContainer
        position="top-center"
        style={{
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </ThemeProvider>
  );
}

export default App;
