import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import HospitalServiceApi from "../Services/HospitalServiceApi";

const AddOxygenComponents = () => {
  const [oxygenavailable, setOxygenAvailable] = useState(null);
  const [message, setMessage] = useState("");
  const [i, setI] = useState(0); 
  const navigate=useNavigate();

  useEffect(() => {
    const hosp = JSON.parse(localStorage.getItem("hospital"));
    setI(hosp.id);
  }, []);

  const saveOxygen = (e) => {
    if (oxygenavailable === null) {
      Swal.fire({
        title: "All Fields are Mandatory",
        icon: "warning",
        confirmButtonText: "Ok",
      });
      return false;
    }
    e.preventDefault();
    const hospital = {
      oxygenavailable,
    };

    HospitalServiceApi.addOxygen(i, hospital).then((res) => {
      setMessage("Oxygen details updated successfully.");
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
      <div className="container my-4">
        <Link to="/hospitaldashboard">
          <button
            className="btn btn-secondary my-2 offset-10"
            style={{ minWidth: "12vw" }}
          >
            Back To Dashboard
          </button>
        </Link>
        <h3>Add Oxygen</h3>
        <form className="mb-5">
          <div className="form-group row my-3 justify-content-center">
            <label htmlFor="oxygenavailable" className="col-2 col-form-label">
              OxygenAvailable
            </label>
            <div className="col-5">
              <input
                type="number"
                id="oxygenavailable"
                className="form-control"
                placeholder="OxygenAvailable"
                name="oxygenavailable"
                value={oxygenavailable}
                onChange={(e) => setOxygenAvailable(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-group row justify-content-center">
            <div className="offset-9">
              <button
                className="btn btn-primary text-uppercase mt-3"
                onClick={saveOxygen}
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

export default AddOxygenComponents;
