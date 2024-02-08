import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/layout/Header/Header";
import Footer from "../components/layout/Footer/Footer";
import DarkMode from "../components/common/DarkMode/DarkModeToggle";
import Home from "../pages/HomePage/Home";
import ExerciseLibrary from "../pages/ExerciseLibraryPage/ExerciseLibrary";
import ExercisePrograms from "../pages/ExerciseProgramPage/ExercisePrograms";
import ProgramDetaile from "../pages/ExerciseProgramPage/detail/ProgramDetil";
import ExercisePlan from "../pages/ExercisePlanPage/ExercisePlan";
import Community from "../pages/CommunityPage/Home/Community";
import CommunityBoard from "../pages/CommunityPage/Board/CommunityBoard";

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
        <Route path="/exercise/plan" element={<ExercisePlan />} />
        <Route path="/community" element={<Community />} />
        <Route path="/community/board" element={<CommunityBoard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
