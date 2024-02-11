import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import DarkMode from "../components/common/DarkMode/DarkModeToggle";
import Home from "../pages/HomePage/Home";
import ExerciseLibrary from "../pages/ExerciseLibraryPage/ExerciseLibrary";
import ExercisePrograms from "../pages/ExerciseProgramPage/ExercisePrograms";
import ProgramDetaile from "../pages/ExerciseProgramPage/detail/ProgramDetil";
import ExercisePlan from "../pages/ExercisePlanPage/ExercisePlan";
import Community from "../pages/CommunityPage/Home/Community";
import CommunityBoard from "../pages/CommunityPage/Board/CommunityBoard";
import SelectExercise from "../components/exercisePlan/CreatePlan/Exercise/SelectExercise";
import SelectPrograms from "../components/exercisePlan/CreatePlan/Programs/SelectPrograms";
import Mypage from "../pages/MyPage/Mypage";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <DarkMode />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/lib" element={<ExerciseLibrary />} />
        <Route path="/exercise/programs" element={<ExercisePrograms />} />
        <Route path="/exercise/program/:id" element={<ProgramDetaile />} />
        <Route path="/plan" element={<ExercisePlan />} />
        <Route path="/plan/create" element={<ExercisePlan />}>
          <Route path="exercise" element={<SelectExercise />} />
          <Route path="programs" element={<SelectPrograms />} />
        </Route>
        <Route path="/community" element={<Community />} />
        <Route path="/community/board" element={<CommunityBoard />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
