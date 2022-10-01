import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserServiceApi from "../Services/UserServiceApi";
const UserDashBoradComponent = () => {
  const [userId, SetUserID] = useState("");
  const [Name, setName] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    SetUserID(user.id);
    setName(user.name);
  });

  const logout = () => {
    UserServiceApi.logoutUser();
  };

  return (
    <div className="container-fluid userdash pb-5">
      <div className="row py-3">
        <div className="col-sm-6">
          <h2 className="text-capitalize text-light">Hello, {Name}</h2>
        </div>
        <div className="col-sm-6">
          <Link to="/">
            <button
              onClick={logout}
              className="btn btn-link btn-danger text-light offset-10 text-uppercase text-decoration-none "
            >
              Logout
            </button>
          </Link>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-sm-4">
          <div
            className="card"
            style={{ backgroundColor: "rgba(255,255,255,0.8)" }}
            //style={{ backgroundColor: "black" }}
          >
            <div className="card-body">
              <h5 className="card-title">Book Bed</h5>
              <p className="card-text">View Bed Availability in the Hospital</p>
              <Link to="/bedavailability">
                <button className="btn btn-success">Book Now</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="col-sm-4">
          <div
            className="card"
            style={{ backgroundColor: "rgba(255,255,255,0.8)" }}
          >
            <div className="card-body">
              <h5 className="card-title">View Blood Availability</h5>
              <p className="card-text">
                View Blood Availability in the Hospital
              </p>
              <Link to="/bloodavailability">
                <button className="btn btn-primary">VIEW</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-3 justify-content-center">
        <div className="col-sm-4">
          <div
            className="card"
            style={{ backgroundColor: "rgba(255,255,255,0.8)" }}
          >
            <div className="card-body">
              <h5 className="card-title">View Booking status</h5>
              <p className="card-text">View Booking History</p>
              <Link to="/bookingstatus">
                <button className="btn btn-primary">VIEW</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div
            className="card"
            style={{ backgroundColor: "rgba(255,255,255,0.8)" }}
          >
            <div className="card-body">
              <h5 className="card-title">View Oxygen Availability</h5>
              <p className="card-text">
                View Oxygen Availability in the Hospital
              </p>
              <Link to="/oxygenavailability">
                <button className="btn btn-primary">VIEW</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3 justify-content-center">
        <div className="col-sm-4">
          <div
            className="card"
            style={{ backgroundColor: "rgba(255,255,255,0.8)" }}
          >
            <div className="card-body">
              <h5 className="card-title">View Ambulance Contact details</h5>
              <p className="card-text">
                View Ambulance Contact Details of the Hospital
              </p>
              <Link to="/ambulancecontact">
                <button className="btn btn-primary">VIEW</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div
            className="card"
            style={{ backgroundColor: "rgba(255,255,255,0.8)" }}
          >
            <div className="card-body">
              <h5 className="card-title">View DoctorInfo Details</h5>
              <p className="card-text">
                View Doctors Info Available at the Hospital
              </p>
              <Link to="/doctorinfo">
                <buttn className="btn btn-primary">VIEW</buttn>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashBoradComponent;
