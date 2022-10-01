import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RequestServiceApi from "../Services/RequestServiceApi";

const ViewRequestComponent = () => {
  const [state, setState] = useState({
    requests: [],
    message: "",
  });

  useEffect(() => {
    const hosp = JSON.parse(localStorage.getItem("hospital"));
    console.log(hosp);
    RequestServiceApi.getAllRequestforHospital(hosp.id)
      .then((resp) => {
        setState({
          requests: resp.data,
          message: "Request list rendered successfully",
        });
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
        <div>
          <h3>Request List</h3>
          <table className="table table-bordered">
            <thead className="bg-primary text-light">
              <tr>
                <th>Bedtype</th>
                <th>Symptoms</th>
                <th>Timetoarrive</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {state.requests.map((request) => (
                <tr>
                  <td>{request.bedtype}</td>
                  <td>{request.symptoms}</td>
                  <td>{request.timetoarrive}</td>
                  <td>{request.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ViewRequestComponent;
