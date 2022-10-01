import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import RequestServiceApi from "../Services/RequestServiceApi.js";
const ActionOnRequestComponent = () => {
  const [state, setState] = useState({
    requests: [],
    message: null,
  });
  const navigate=useNavigate();

  useEffect(() => {
    const hosp = JSON.parse(localStorage.getItem("hospital"));
    console.log(hosp);
    RequestServiceApi.getAllPendingRequestforHospital(hosp.id)
      .then((resp) => {
        setState({
          requests: resp.data,
          message: "Request list rendered successfully",
        });
      })
      .catch((error) => {
        console.log(state.message);
        console.log(error);
      });
  }, []);

  const acceptRequest = (reqid) => {
    console.log(reqid);
    console.log(typeof reqid);
    RequestServiceApi.acceptrejectPendingRequest("accepted", reqid).then(
      (res) => {
        setState({ message: "Request Accepted successfully." });
        Swal.fire({
          title: state.message,
          icon: "success",
          confirmButtonText: "Ok",
        });
        navigate("/hospitaldashboard");
      }
    );
  };

  const rejectRequest = (reqid) => {
    console.log(reqid);

    RequestServiceApi.acceptrejectPendingRequest("rejected", reqid).then(
      (res) => {
        setState({ message: "Request Rejected successfully." });
        console.log(state.message);
        Swal.fire({
          title: state.message,
          icon: "success",
          confirmButtonText: "Ok",
        });
        navigate("/hospitaldashboard");
      }
    );
  };

  return (
    <>
      <div className="container my-4">
        <Link to="/hospitaldashboard">
          <button
            className="btn btn-secondary offset-10"
            style={{ minWidth: "12vw" }}
          >
            Back to Dashboard
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
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {state.requests.map((request) => (
                <tr key={request.reqid}>
                  <td>{request.bedtype}</td>
                  <td>{request.symptoms}</td>
                  <td>{request.timetoarrive}</td>
                  <td>
                    <button
                      className="btn btn-success me-2"
                      onClick={() => acceptRequest(request.reqid)}
                    >
                      Accept
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => rejectRequest(request.reqid)}
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ActionOnRequestComponent;
