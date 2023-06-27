import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import userAccount from "../Assets/Images/userAccountPic.png";
import "./user.css";

const UserAccount = () => {
  const params = useParams();
  const predict = params.id;
  console.log("Predicst Parama : ", predict);

  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);
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
                  <td>Hamza Ali Kundi</td>
                </tr>
                <tr>
                  <th scope="row" className="tableHeaderTextDesign">
                    2
                  </th>
                  <td>Username</td>
                  <td>hamza.alee83@gamil.com</td>
                </tr>
                <tr>
                  <th scope="row" className="tableHeaderTextDesign">
                    3
                  </th>
                  <td>Age</td>
                  <td>23</td>
                </tr>
                <tr>
                  <th scope="row" className="tableHeaderTextDesign">
                    4
                  </th>
                  <td>Gender</td>
                  <td>Male</td>
                </tr>
                <tr>
                  <th scope="row" className="tableHeaderTextDesign">
                    5
                  </th>
                  <td>Email</td>
                  <td>hamza.alee83@gamil.com</td>
                </tr>
                <tr>
                  <th scope="row" className="tableHeaderTextDesign">
                    6
                  </th>
                  <td>City</td>
                  <td>Mianwali</td>
                </tr>
                <tr>
                  <th scope="row" className="tableHeaderTextDesign">
                    7
                  </th>
                  <td>Phone</td>
                  <td>+92 304 9068858</td>
                </tr>
                <tr>
                  <th scope="row" className="tableHeaderTextDesign">
                    8
                  </th>
                  <td className="text-danger">Disease Stage</td>
                  <td>
                    <b>{predict}</b>
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
        <span>
          <Link to="/about-us" className="footerLinkDesign">
            About Us
          </Link>
        </span>
      </div>
    </>
  );
};

export default UserAccount;
