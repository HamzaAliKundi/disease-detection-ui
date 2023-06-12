import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserAccount = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <>
      <h1>UserAccount</h1>
    </>
  );
};

export default UserAccount;
