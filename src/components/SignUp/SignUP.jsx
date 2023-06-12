import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";

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
      <div className="banner d-flex justify-content-center">
        <div>
          <div>
            <span className="title">Register for Disease</span>
          </div>
          <div className="underTitle">
            <span>Detection</span>
          </div>
        </div>
      </div>

      <div className="container bg-info">
        <div className="row">
          <div className="col-lg-6">23</div>
          <div className="col-lg-6">213</div>
        </div>
      </div>
      <h1>Header</h1>
    </>
  );
};

export default SignUP;
