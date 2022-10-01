import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HospitalServiceApi from "../Services/HospitalServiceApi";

const ViewBloodComponents = () => {
  const [state, setState] = useState({
    hospitalname: "",
    a_pos: null,
    a_neg: null,
    b_pos: null,
    b_neg: null,
    ab_pos: null,
    ab_neg: null,
    o_pos: null,
    o_neg: null,
    message: "",
  });

  useEffect(() => {
    const hosp = JSON.parse(localStorage.getItem("hospital"));
    HospitalServiceApi.getHospitalById(hosp.id)
      .then((resp) => {
        const hospital = resp.data;
        setState({
          hospitalname: hospital.hospitalname,
          a_pos: hospital.a_pos,
          a_neg: hospital.a_neg,
          b_pos: hospital.b_pos,
          b_neg: hospital.b_neg,
          ab_pos: hospital.ab_pos,
          ab_neg: hospital.ab_neg,
          o_pos: hospital.o_pos,
          o_neg: hospital.o_neg,
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
        <h3>Blood List</h3>
        <form className="mb-5">
          <table className="table table-bordered">
            <thead className="bg-primary text-light">
              <tr>
                <th>Hospital Name</th>
                <th>A_pos</th>
                <th>A_Neg</th>
                <th>B_pos</th>
                <th>B_Neg</th>
                <th>AB_pos</th>
                <th>AB_Neg</th>
                <th>O_pos</th>
                <th>O_Neg</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{state.hospitalname}</td>
                <td>{state.a_pos}</td>
                <td>{state.a_neg}</td>
                <td>{state.b_pos}</td>
                <td>{state.b_neg}</td>
                <td>{state.ab_pos}</td>
                <td>{state.ab_neg}</td>
                <td>{state.o_pos}</td>
                <td>{state.o_neg}</td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </>
  );
};

export default ViewBloodComponents;
