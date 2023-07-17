import { useLocation } from "react-router-dom";
import { redirect } from "../utils/redirect";
import { useEffect } from "react";

const AuthenticationML = () => {
  const query = useLocation().search;

  useEffect(() => {
    const url = new URLSearchParams(query);
    if (url.get("code")) redirect(query);
  }, [query]);
  
  return (
    <>
      <button onClick={() => redirect()}>test ml</button>
    </>
  );
};

export default AuthenticationML