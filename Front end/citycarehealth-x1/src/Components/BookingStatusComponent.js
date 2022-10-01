import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RequestServiceApi from "../Services/RequestServiceApi";

const BookingStatusComponent = () => {
  const [state, setState] = useState({
    requests: [],
    message: null,
  });

  useEffect(() => {
    const u = JSON.parse(localStorage.getItem("user"));
    RequestServiceApi.getAllRequestByUser(u.id)
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
        <Link to="/userdashboard">
          <bytton
            className="btn btn-secondary offset-10"
            style={{ minWidth: "12vw" }}
          >
            Back to Dashboard
          </bytton>
        </Link>
        <div>
          <h3>Request List</h3>
          <table className="table table-bordered">
            <thead className="bg-primary text-light">
              <tr>
                <th>bedtype</th>
                <th>symptoms</th>
                <th>timetoarrive</th>
                <th>status</th>
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

export default BookingStatusComponent;
