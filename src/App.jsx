import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound";
import Login from "./components/Login/Login";
import SignUP from "./components/SignUp/SignUP";
import AboutUs from "./components/AboutUs/AboutUs";
import Prediction from "./components/Prediction/Prediction";
import UserAccount from "./components/UserAccount/UserAccount";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/user-account" element={<UserAccount />} />
          <Route path="/prediction" element={<Prediction />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/signup" element={<SignUP />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found" replace />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
