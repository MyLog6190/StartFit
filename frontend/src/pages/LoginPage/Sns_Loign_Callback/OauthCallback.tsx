import { isLoggedInState } from "@/store/atom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

function OauthCallback() {
  const navigate = useNavigate();
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);
  useEffect(() => {
    setIsLoggedIn(true);
    navigate("/");
  });
  return <></>;
}

export default OauthCallback;
