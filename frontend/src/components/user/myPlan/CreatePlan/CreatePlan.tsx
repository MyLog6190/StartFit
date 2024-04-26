import { motion } from "framer-motion";
import { MouseEvent, useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  Overlay,
  SelectionContainer,
  ProgramsContainer,
  Tab,
  Tabs,
} from "./CreatePlan.style";

const overlayVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function CreatePlan({
  showing,
  setShowing,
}: {
  showing: boolean;
  setShowing: (showing: boolean) => void;
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<string>("exercise");

  useEffect(() => {
    if (location.pathname === "/user/myplan") {
      setShowing(false);
    }
  }, [location.pathname]);

  const handleOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setShowing(false);
    navigate("/user/myplan");
  };
  const stopPropagation = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation(); // 내부 클릭 이벤트 전파 방지
  };
  return (
    <>
      {showing && (
        <Overlay
          variants={overlayVariant}
          initial="hidden"
          animate="visible"
          onClick={handleOverlayClick}
        >
          <motion.div onClick={stopPropagation}>
            <SelectionContainer>
              <Tabs>
                <Link to="create/exercise">
                  <Tab
                    isSelected={activeTab === "exercise"}
                    onClick={() => setActiveTab("exercise")}
                  >
                    운동
                  </Tab>
                </Link>
                <Link to="create/programs">
                  <Tab
                    isSelected={activeTab === "programs"}
                    onClick={() => setActiveTab("programs")}
                  >
                    프로그램
                  </Tab>
                </Link>
              </Tabs>
              <ProgramsContainer>
                <Outlet />
              </ProgramsContainer>
            </SelectionContainer>
          </motion.div>
        </Overlay>
      )}
    </>
  );
}

export default CreatePlan;
