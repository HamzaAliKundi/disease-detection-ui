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
      <div className="headerImage">
        <span className="headerTitle">
          <u> Our Team Purpose</u>
        </span>
      </div>
      <div className="container">
        <div className="row d-flex mt-5 justify-content-center">
          <div className="col-lg-6">
            <h1 className="mb-0"> About Us</h1>
            <p className="mt-0">
              our mission is to improve the health and well-being of individuals
              by harnessing the power of artificial intelligence and predictive
              analytics. We have developed a cutting-edge Heart Disease
              Prediction System that utilizes state-of-the -art machine learning
              algorithms to accurately assess the risk of heart disease in
              individuals.
            </p>
            <h1 className="mt-4 mb-0">Our Mission</h1>
            <p className="mt-0">
              Our dedicated team of data scientists, healthcare professionals,
              and software engineers have combined their expertise to create a
              robust and reliable system that empowers users to proactively
              manage their cardiovascular health.
            </p>
          </div>
        </div>
      </div>
      <div className="footer"></div>
    </>
  );
};

export default AboutUs;
