import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HospitalServiceApi from "../Services/HospitalServiceApi";

const ViewOxygenComponents = () => {
  const [state, setState] = useState({
    hospitalname: "",
    oxygenavailable: null,
    message: "",
  });

  useEffect(() => {
    const hosp = JSON.parse(localStorage.getItem("hospital"));
    HospitalServiceApi.getHospitalById(hosp.id)
      .then((resp) => {
        const hospital = resp.data;
        setState({
          hospitalname: hospital.hospitalname,
          oxygenavailable: hospital.oxygenavailable,
          message: "Hospitals list rendered successfully",
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
        <h3>Oxygen List</h3>
        <form className="mb-5">
          <table className="table table-bordered">
            <thead className="bg-primary text-light">
              <tr>
                <th>Hospital Name</th>
                <th>Oxygen Available</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{state.hospitalname}</td>
                <td>{state.oxygenavailable}</td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </>
  );
};

export default ViewOxygenComponents;
