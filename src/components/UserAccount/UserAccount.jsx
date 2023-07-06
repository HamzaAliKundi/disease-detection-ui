import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import userAccount from "../Assets/Images/userAccountPic.png";
import jwtDecode from "jwt-decode";
import "./user.css";

const UserAccount = () => {
  const params = useParams();
  const predict = params.id;

  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  const token = localStorage.getItem("token");
  const user = jwtDecode(token);

  console.log("User : ", user);
  return (
    <>
      <div className="header">
        <span className="headerText">User Account Detail</span>
      </div>

      <div className="content">
        <div className="rightContent d-flex justify-content-center ">
          <div className="width" style={{ width: "500px" }}>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col" className="tableHeaderTextDesign">
                    #
                  </th>
                  <th scope="col" className="tableHeaderTextDesign">
                    0
                  </th>
                  <th scope="col" className="tableHeaderTextDesign">
                    1
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="tableHeaderTextDesign">
                    1
                  </th>
                  <td>Full Name</td>
                  <td>{user.fullName}</td>
                </tr>
                <tr>
                  <th scope="row" className="tableHeaderTextDesign">
                    2
                  </th>
                  <td>Username</td>
                  <td>{user.userName}</td>
                </tr>
                <tr>
                  <th scope="row" className="tableHeaderTextDesign">
                    3
                  </th>
                  <td>Age</td>
                  <td>{user.age}</td>
                </tr>
                <tr>
                  <th scope="row" className="tableHeaderTextDesign">
                    4
                  </th>
                  <td>Gender</td>
                  <td>{user.gender}</td>
                </tr>
                <tr>
                  <th scope="row" className="tableHeaderTextDesign">
                    5
                  </th>
                  <td>Email</td>
                  <td>{user.email}</td>
                </tr>
                <tr>
                  <th scope="row" className="tableHeaderTextDesign">
                    6
                  </th>
                  <td>City</td>
                  <td>{user.city}</td>
                </tr>
                <tr>
                  <th scope="row" className="tableHeaderTextDesign">
                    7
                  </th>
                  <td>Phone</td>
                  <td>{user.phone}</td>
                </tr>
                <tr>
                  <th scope="row" className="tableHeaderTextDesign bg-info">
                    8
                  </th>
                  <td className="text-danger bg-info text-dark mt-2">
                    <b> Disease Stage</b>
                  </td>
                  <td className="bg-info">
                    <b style={{ fontSize: "25px" }}>{predict}</b>
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="diseaseStage">Angiographic Disease Status </p>
            <p className="stage0">
              Stage 0: Angiographic Diameter Narrowing Less than 50%
            </p>
            <p className="stage1-4">
              Stage 1-4: Diameter Narrowing Greater than 50%{" "}
            </p>
          </div>
        </div>
        <div className="leftContent">
          <img src={userAccount} width="675px" height="500px" alt="" />
        </div>
      </div>

      <div className="footer">
        <div>
          <span>
            <Link to="/about-us" className="footerLinkDesign">
              About Us
            </Link>
          </span>
          <br />
          <Link
            style={{ cursor: "pointer" }}
            to="/logout"
            className="footerLinkDesign"
          >
            Logout
          </Link>
        </div>
      </div>
    </>
  );
};

export default UserAccount;
