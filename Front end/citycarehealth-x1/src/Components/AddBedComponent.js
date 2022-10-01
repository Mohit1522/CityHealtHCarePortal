import React, { useEffect, useState } from "react";
import { Link, redirect, Route, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import HospitalServiceApi from "../Services/HospitalServiceApi";

const AddBedComponent = () => {
  const [oxygen, setOxygen] = useState(null);
  const [normal, setNormal] = useState(null);
  const [ventilator, setVentilator] = useState(null);
  const [message, setMessage] = useState("");
  const [i, setI] = useState(0);
  const navigate=useNavigate();

  useEffect(() => {
    const hosp = JSON.parse(localStorage.getItem("hospital"));
    setI(hosp.id);
  }, []);

  const saveBed = (e) => {
    if (ventilator === null || oxygen === null || normal === null) {
      Swal.fire({
        title: "All Fields are Mandatory",
        icon: "warning",
        confirmButtonText: "Ok",
      });
      return false;
    }

    e.preventDefault();
    const hospital = {
      ventilator,
      oxygen,
      normal,
    };

    HospitalServiceApi.addBed(i, hospital).then((res) => {
      setMessage("Bed details updated successfully.");
      Swal.fire({
        title: message,
        icon: "success",
        confirmButtonText: "Ok",
      });
      navigate("/hospitaldashboard");
    });
  };

  return (
    <>
      <div className="container my-4" class="addbed">
        <Link to="/hospitaldashboard">
          <button
            className="btn btn-secondary my-2 offset-10"
            style={{ minWidth: "12vw" }}
          >
            Back To Dashboard
          </button>
        </Link>
        <h3>Add Bed</h3>
        <form className="mb-5">
          <div className="form-group row my-3 justify-content-center">
            <label htmlFor="ventilator" className="col-2 col-form-label">
              Ventilator
            </label>
            <div className="col-5">
              <input
                type="number"
                id="ventilator"
                className="form-control"
                placeholder="Ventilator"
                name="ventilator"
                value={ventilator}
                onChange={(e) => setVentilator(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-group row my-3 justify-content-center">
            <label htmlFor="oxygen" className="col-2 col-form-label">
              Oxygen
            </label>
            <div className="col-5">
              <input
                type="number"
                id="oxygen"
                className="form-control"
                placeholder="Oxygen"
                name="oxygen"
                value={oxygen}
                onChange={(e) => setOxygen(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-group row my-3 justify-content-center">
            <label htmlFor="normal" className="col-2 col-form-label">
              Normal
            </label>
            <div className="col-5">
              <input
                type="number"
                id="normal"
                className="form-control"
                placeholder="Normal"
                name="normal"
                value={normal}
                onChange={(e) => setNormal(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-group row justify-content-center">
            <div className="offset-9">
              <button
                className="btn btn-primary text-uppercase mt-3"
                onClick={saveBed}
              >
                ADD
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddBedComponent;
