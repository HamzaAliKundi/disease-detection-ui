import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <>
      <h1> AboutUs</h1>
    </>
  );
};

export default AboutUs;
