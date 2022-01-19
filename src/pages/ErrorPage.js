import react, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  let navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  });

  return (
      <h1>404 Error</h1>
  )
}

export default ErrorPage;
