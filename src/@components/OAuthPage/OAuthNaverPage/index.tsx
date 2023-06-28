import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { routePaths } from "../../../core/routes/path";
import Loading from "../../@common/Loading";

export default function OAuthNaverPage() {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    if (code) {
      console.log("code:", code);
      navigate(`${routePaths.Join_}${routePaths.Join_Agree}`, { state: { isSocialLogin: true } });
    }
  });

  return <Loading backgroundColor="white" />;
}
