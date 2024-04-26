import DarkMode from "@/components/common/DarkMode/DarkModeToggle";
import ExerciseInfo from "@/components/excercise/info/ExerciseInfo";
import SelectExercise from "@/components/user/myPlan/CreatePlan/Exercise/SelectExercise";
import SelectPrograms from "@/components/user/myPlan/CreatePlan/Programs/SelectPrograms";
import Footer from "@/components/layout/Footer/Footer";
import Header from "@/components/layout/Header/Header";
import CommunityBoard from "@/pages/CommunityPage/Board/CommunityBoard";
import Community from "@/pages/CommunityPage/Home/Community";
import ExerciseLibrary from "@/pages/ExerciseLibraryPage/ExerciseLibrary";
import ExercisePlan from "@/pages/ExercisePlanPage/ExercisePlan";
import ExercisePrograms from "@/pages/ExerciseProgramPage/ExercisePrograms";
import ProgramDetaile from "@/pages/ExerciseProgramPage/detail/ProgramDetail";
import Home from "@/pages/HomePage/Home";
import LoginPage from "@/pages/LoginPage/LoginPage";
import OauthCallback from "@/pages/LoginPage/Sns_Loign_Callback/OauthCallback";
import Mypage from "@/pages/MyPage/Mypage";
import SignUpPage from "@/pages/SignUpPage/SignUpPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <DarkMode />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/auth">
          <Route path="login" element={<LoginPage />} />
          <Route path="sign-up" element={<SignUpPage />} />
          <Route path="oauth2/success" element={<OauthCallback />} />
        </Route>

        <Route path="/user">
          <Route path="mypage" element={<Mypage />} />
          <Route path="myplan" element={<ExercisePlan />}>
            <Route path="create">
              <Route path="exercise" element={<SelectExercise />} />
              <Route path="programs" element={<SelectPrograms />} />
            </Route>
          </Route>
        </Route>

        <Route path="/exercise">
          <Route path="lib" element={<ExerciseLibrary />}>
            <Route path=":id" element={<ExerciseInfo />} />
          </Route>
          <Route path="programs" element={<ExercisePrograms />} />
          <Route path="program/:programId" element={<ProgramDetaile />}>
            <Route path=":id" element={<ExerciseInfo />} />
          </Route>
        </Route>

        <Route path="/community" element={<Community />} />
        <Route path="/community/board" element={<CommunityBoard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
