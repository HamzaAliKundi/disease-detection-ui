import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import baseUrl from "../Assets/Apis/Apis";
import "./login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmitLogin = async (e) => {
    e.preventDefault();

    const loginObj = {
      userName: username,
      password: password,
    };

    await axios
      .post(`${baseUrl}/api/account/login`, loginObj)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/prediction");
      })
      .catch((ex) => {
        if (ex.response && ex.response.status === 400) {
          setError(ex.response.data.message);
        }
      });
  };
  return (
    <>
      <div className="mainWrapper">
        <div className="left">
          <div className="leftInnerDesign">
            <div className="title">Login to your account!</div>
            <form onSubmit={handleSubmitLogin}>
              <div className="inputGruoup">
                <div className="label">Username</div>
                <input
                  type="text"
                  className="inputDesign"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="inputGruoup" style={{ marginTop: "22px" }}>
                <div className="label">Password</div>
                <input
                  type="password"
                  className="inputDesign"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <span className="text-danger mt-2">{error}</span>

              <button className="loginButton">
                <span className="loginTextDesign">Login to continue</span>
              </button>
            </form>
            <div className="d-flex mt-4">
              <span className="dontHaveAccount">Don't have an account ?</span>
              &nbsp;
              <Link to="/signup" className="registerYourself">
                Register Yourself
              </Link>
            </div>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </>
  );
};

export default Login;
