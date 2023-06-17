import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./about.css";

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
      <div className="titleAboutUs">About Us</div>
      <div className="infoAboutUs">
        our mission is to improve the health and well-being of individuals by
        harnessing the power of artificial intelligence and predictive
        analytics. We have developed a cutting-edge Heart Disease Prediction
        System that utilizes state-of-the -art machine learning algorithms to
        accurately assess the risk of heart disease in individuals.
      </div>
      <div className="ourMissionTitle">Our Mission</div>
      <div className="infoOurMission">
        Our dedicated team of data scientists, healthcare professionals, and
        software engineers have combined their expertise to create a robust and
        reliable system that empowers users to proactively manage their
        cardiovascular health.
      </div>
      <div className="aboutUsWrapper">
        <div className="aboutUs"></div>
      </div>
      <div className="footer"></div>
    </>
  );
};

export default AboutUs;
