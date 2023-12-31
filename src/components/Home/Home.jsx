import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/prediction");
    }
  }, [navigate]);
  return (
    <>
      <div className="wrapper">
        <div className="title">Welcome to Heart Disease Detection</div>
        <div className="imageWrapper">
          <div className="middleImage"></div>
        </div>
        <div className="subTitle">Want To Try Out Our Prediction Model? </div>
        <Link to="/login" className="buttonWrapper">
          <div className="button">
            <div>
              <span className="textDesign"> Let's Predict {">"} </span>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Home;
