import React, { useEffect, useState } from "react";
import { UseSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Protected({ childeren, authentication = true }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    // todo make it more easy to understand
    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }
    setLoader(false);
  }, [authStatus, navigate, authentication]);

  return loader ? <div>loading...</div> : <>{childeren}</>;
}
