import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import RequestServiceApi from "../Services/RequestServiceApi";

const UserBedBookComponent = () => {
  const [bedtype, setBedtype] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [timetoarrive, setTimetoarrive] = useState(null);
  const [status, setStatus] = useState("pending");
  const [message, setMessage] = useState("");
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);
  const navigate=useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setI(user.id);
    const id = JSON.parse(localStorage.getItem("id"));
    setJ(id);
  });

  const saveRequest = (e) => {
    if (bedtype === "" || symptoms === "" || timetoarrive === null) {
      Swal.fire({
        title: "All Fields are Mandatory",
        icon: "warning",
        confirmButtonText: "Ok",
      });
      return false;
    }
    e.preventDefault();
    const request = {
      bedtype,
      symptoms,
      timetoarrive,
      status,
    };
    RequestServiceApi.addRequest(i, j, request).then((res) => {
      setMessage("Request send successfully.");
      Swal.fire({
        title: message,
        icon: "success",
        confirmButtonText: "Ok",
      });
      navigate("/userdashboard");
    });
  };
  return (
    <div className="container ">
      <div className="row my-3">
        <div className="col-sm-6"></div>

        <div className="col-sm-6">
          <Link to="/bedavailability">
            <button className="btn btn-link btn-primary text-light offset-10 text-uppercase text-decoration-none ">
              Back
            </button>
          </Link>
        </div>
      </div>
      <div>
        <h3>Bed Booking</h3>
        <h5>Please, fill all required details given below.</h5>
      </div>

      <form className="mb-5">
        <div className="form-group row my-3 justify-content-center">
          <label for="bedtype" className="col-2 col-form-label">
            BedType
          </label>
          <div className="col-5">
            <select
              id="bedtype"
              className="form-select"
              name="bedtype"
              value={bedtype}
              onChange={(e) => setBedtype(e.target.value)}
              required
            >
              <option value="">Select the Bedtype</option>
              <option value="ventilator">Ventilator</option>
              <option value="oxygen">Oxygen</option>
              <option value="normal">Normal</option>
            </select>
          </div>
        </div>
        <div className="form-group row my-3 justify-content-center">
          <label htmlFor="symptoms" className="col-2 col-form-label">
            Symtomps
          </label>
          <div className="col-5">
            <input
              type="text"
              id="symptoms"
              className="form-control"
              placeholder="Symptoms"
              name="symptoms"
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="form-group row my-3 justify-content-center">
          <label htmlFor="timetoarrive" className="col-2 col-form-label">
            Time to arrive
          </label>
          <div className="col-5">
            <input
              type=""
              id="timetoarrive"
              className="form-control"
              placeholder="Time to arrive"
              name="timetoarrive"
              value={timetoarrive}
              onChange={(e) => setTimetoarrive(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="form-group row justify-content-center">
          <div className="offset-9">
            <button
              className="btn btn-primary text-uppercase mt-3"
              onClick={saveRequest}
            >
              BOOK
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserBedBookComponent;
