import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./signup.css";
import axios from "axios";
import baseUrl from "../Assets/Apis/Apis";

const SignUP = () => {
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/prediction");
    }
  }, [navigate]);

  const handleSubmitRegister = async (e) => {
    e.preventDefault();

    const registerObj = {
      fullName: fullName,
      password: password,
      userName: userName,
      gender: gender,
      age: age,
      city: city,
      email: email,
      phone: phoneNumber,
    };

    await axios
      .post(`${baseUrl}/api/account/register`, registerObj)
      .then((res) => {
        console.log("res : ", res);
        localStorage.setItem("token", res.data.token);
        navigate("/prediction");
      })
      .catch((ex) => {
        console.log("ex : ", ex);
        if (ex.response && ex.response.status === 400) {
          setError(ex.response.data.message);
        }
      });
  };

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

      <div className="container">
        <form>
          <div className="row mx-5 d-flex justify-content-center mt-5">
            <div className="col-lg-6">
              <div className="form-group">
                <label htmlFor="fullName" className="labelDesign">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  className="form-control shadow-sm registerInputDesign"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label htmlFor="password" className="labelDesign">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control shadow-sm registerInputDesign"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="row mx-5 d-flex justify-content-center mt-3">
            <div className="col-lg-6">
              <div className="form-group">
                <label htmlFor="username" className="labelDesign">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="form-control shadow-sm registerInputDesign"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <span className="text-danger">{error}</span>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label htmlFor="gender" className="labelDesign">
                  Gender
                </label>
                <select
                  id="gender"
                  className="form-control registerInputDesign shadow-sm"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="" selected disabled>
                    Select Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
          </div>

          <div className="row mx-5 d-flex justify-content-center mt-3">
            <div className="col-lg-6">
              <div className="form-group">
                <label htmlFor="age" className="labelDesign">
                  Age
                </label>
                <input
                  type="number"
                  id="age"
                  className="form-control shadow-sm registerInputDesign"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label htmlFor="city" className="labelDesign">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  className="form-control shadow-sm registerInputDesign"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="row mx-5 d-flex justify-content-center mt-3">
            <div className="col-lg-6">
              <div className="form-group">
                <label htmlFor="email" className="labelDesign">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control shadow-sm registerInputDesign"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label htmlFor="phoneNumnber" className="labelDesign">
                  Phone Number
                </label>
                <input
                  type="number"
                  id="phoneNumnber"
                  className="form-control shadow-sm registerInputDesign"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="mt-5 d-flex justify-content-center">
            <div
              onClick={handleSubmitRegister}
              className="buttonDesign d-flex justify-content-center align-items-center"
            >
              <span className="buttonTextDesign">Create Account</span>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUP;
