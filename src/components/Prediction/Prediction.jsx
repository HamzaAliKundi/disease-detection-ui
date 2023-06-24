import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./prediction.css";
import axios from "axios";
import baseUrl from "../Assets/Apis/Apis";

const Prediction = () => {
  const [age, setAge] = useState("");
  const [chestPain, setChestPain] = useState("");
  const [majorVessels, setMajorVessels] = useState("");
  const [cholesterol, setCholesterol] = useState("");
  const [thalassemia, setThalassemia] = useState("");
  const [heartRate, setHeartRate] = useState("");
  const [depression, setDepression] = useState("");
  const [prediction, setPrediction] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  const handleSubmitPrediction = async (e) => {
    e.preventDefault();

    const predictionObj = {
      age: parseInt(age),
      cp: chestPain,
      ca: parseInt(majorVessels),
      chol: parseInt(cholesterol),
      thal: parseInt(thalassemia),
      thalach: parseFloat(heartRate),
      oldpeak: parseFloat(depression),
    };

    console.log("Obj : ", predictionObj);

    await axios
      .post(`http://localhost:5000/predict`, predictionObj)
      .then((res) => {
        console.log("Res : ", res.data);
        setPrediction(res.data.prediction);
      })
      .catch((err) => {
        console.log("Error : ", err);
      });
  };

  return (
    <>
      <div className="image">
        <span className="headerText">Enter Your Detail</span>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-3">
            <div className="form-group">
              <label htmlFor="age" className="labelDesignPrediction">
                Age
              </label>
              <input
                type="number"
                id="age"
                className="form-control shadow-sm"
                placeholder="0"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
          </div>

          <div className="col-lg-3">
            <div className="form-group">
              <label htmlFor="age" className="labelDesignPrediction">
                Chest Pain
              </label>
              <select
                id="age"
                className="form-control shadow-sm"
                value={chestPain}
                onChange={(e) => setChestPain(e.target.value)}
              >
                <option value="typical angina">Typical Angina</option>
                <option value="atypical angina">Atypical Angina</option>
                <option value="non-anginal pain">Non-anginal Pain</option>
                <option value="asymptomatic">Asymptomatic</option>
              </select>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="form-group">
              <label htmlFor="vessels" className="labelDesignPrediction">
                Major Vessels
              </label>
              <select
                id="vessels"
                className="form-control shadow-sm"
                value={majorVessels}
                onChange={(e) => setMajorVessels(e.target.value)}
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="form-group">
              <label htmlFor="Cholesterol" className="labelDesignPrediction">
                Cholesterol (mg/dl)
              </label>
              <input
                type="number"
                id="Cholesterol"
                min="10"
                className="form-control shadow-sm"
                defaultValue="10"
                placeholder="10"
                value={cholesterol}
                onChange={(e) => setCholesterol(e.target.value)}
              />
            </div>
          </div>

          <div className="col-lg-3 mt-4">
            <div className="form-group">
              <label htmlFor="Thalassemia" className="labelDesignPrediction">
                Thalassemia
              </label>
              <select
                id="Thalassemia"
                className="form-control shadow-sm"
                value={thalassemia}
                onChange={(e) => setThalassemia(e.target.value)}
              >
                <option value="3">3: Normal</option>
                <option value="6">6: Fixed</option>
                <option value="7">7: Reversable</option>
              </select>
            </div>
          </div>

          <div className="col-lg-3 mt-4">
            <div className="form-group">
              <label htmlFor="Heartrate" className="labelDesignPrediction">
                Heart Rate (bpm)
              </label>
              <input
                type="number"
                id="Heartrate"
                min="30"
                placeholder="30"
                className="form-control shadow-sm"
                defaultValue="30"
                value={heartRate}
                onChange={(e) => setHeartRate(e.target.value)}
              />
            </div>
          </div>

          <div className="col-lg-3 mt-4">
            <div className="form-group">
              <label htmlFor="Depression" className="labelDesignPrediction">
                ST Depression(mm)
              </label>
              <input
                type="number"
                id="Depression"
                min="0"
                placeholder="0"
                className="form-control shadow-sm"
                defaultValue="0"
                value={depression}
                onChange={(e) => setDepression(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center mt-5">
          <div className="predictButton" onClick={handleSubmitPrediction}>
            <span className="predictButtonText">Predict</span>
          </div>
          <span className="text-danger">{prediction}</span>
        </div>
      </div>
      <div className="footer"></div>
    </>
  );
};

export default Prediction;
