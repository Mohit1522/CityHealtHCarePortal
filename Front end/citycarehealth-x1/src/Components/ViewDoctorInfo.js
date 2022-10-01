import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HospitalServiceApi from "../Services/HospitalServiceApi";

const ViewDoctorInfo = () => {
  const [state, setState] = useState({
    doctors: [],
    message: null,
  });

  useEffect(() => {
    let hosp = JSON.parse(localStorage.getItem("hospital"));
    HospitalServiceApi.getDoctorsByHospId(hosp.id)
      .then((resp) => {
        setState({
          doctors: resp.data,
          message: "Doctors list rendered successfully",
        });
        console.log(this.state.message);
      })
      .catch((error) => {
        console.log(state.message);
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
        <h3>Doctor Information List</h3>
        <form className="mb-5">
          <table className="table table-bordered">
            <thead className="bg-info text-light">
              <tr>
                <th className="visually-hidden">Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Qualification</th>
                <th>Specilization</th>
              </tr>
            </thead>
            <tbody style={{ backgroundColor: "white" }}>
              {state.doctors.map((doctor) => (
                <tr key={doctor.doctorid}>
                  <td className="visually-hidden">{doctor.doctorid}</td>
                  <td>{doctor.name}</td>
                  <td>{doctor.email}</td>
                  <td>{doctor.qualification}</td>
                  <td>{doctor.specialization}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </form>
      </div>
    </>
  );
};

export default ViewDoctorInfo;
