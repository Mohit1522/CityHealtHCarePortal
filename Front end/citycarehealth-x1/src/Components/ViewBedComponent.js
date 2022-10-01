import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HospitalServiceApi from "../Services/HospitalServiceApi";

const ViewBedComponent = () => {
  const [state, setState] = useState({
    hospitalname: "",
    ventilator: "",
    oxygen: "",
    normal: "",
    message: null,
  });

  useEffect(() => {
    const hosp = JSON.parse(localStorage.getItem("hospital"));
    console.log(hosp);
    HospitalServiceApi.getHospitalById(hosp.id)
      .then((resp) => {
        const hospital = resp.data;
        setState({
          hospitalname: hospital.hospitalname,
          ventilator: hospital.ventilator,
          oxygen: hospital.oxygen,
          normal: hospital.normal,
          message: "Bed list rendered successfully",
        });
      })
      .catch((error) => {
        console.log(state.message);
        console.log(error);
      });
  }, []);

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
        <h3>Bed List</h3>
        <form className="mb-5">
          <table className="table table-bordered">
            <thead className="bg-primary text-light">
              <tr>
                <th>Hospital Name</th>
                <th>Ventilator</th>
                <th>Oyygen</th>
                <th>Normal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{state.hospitalname}</td>
                <td>{state.ventilator}</td>
                <td>{state.oxygen}</td>
                <td>{state.normal}</td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </>
  );
};

export default ViewBedComponent;
