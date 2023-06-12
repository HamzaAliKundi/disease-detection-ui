import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignUP = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/prediction");
    }
  }, [navigate]);
  return (
    <>
      <h1>SignUP</h1>
    </>
  );
};

export default SignUP;
