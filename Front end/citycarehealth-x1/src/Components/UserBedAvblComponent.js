import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import AdminServiceApi from "../Services/AdminServiceApi";
import HospitalServiceApi from "../Services/HospitalServiceApi";

const UserBedAvblComponent = () => {
  const [hospid, setHospid] = useState("");
  const [hospitalname, setHospitalname] = useState("");
  const [ventilator, setVentilator] = useState(null);
  const [oxygen, setOxygen] = useState(null);
  const [normal, setNormal] = useState(null);
  const [message, setMessage] = useState("Please select the Hospital Name");
  const [id, setId] = useState(0);
  const [state,setState] = useState({
    hospitals: [],
    message1: null,
});
  const navigate=useNavigate();
  const searchVl = useRef();
  const hospitalnameVr = useRef();

  const search = (e) => {
    if (hospitalname === "") {
      Swal.fire({
        text: "Please select the Hospital",
        icon: "warning",
        confirmButtonText: "Ok",

      });
    }
    e.preventDefault();

    HospitalServiceApi.getByHospname(hospitalname).then((response) => {
      console.log(hospitalname);
      const hospital = response.data;
      setHospid(hospital.hospid);
      setVentilator(hospital.ventilator);
      setOxygen(hospital.oxygen);
      setNormal(hospital.normal);
      setMessage("Hospitals list rendered successfully");
      setId(hospital.hospid);
      localStorage.setItem("id", hospital.hospid);
    });
  };

 
  const gotobedbook = () => {
    if (ventilator === "") {
      Swal.fire({
        title: "Warning",
        text: "Please Enter the Hospital Name",
        icon: "warning",
        confirmButtonText: "Ok",
      });
      return false;
    }
    navigate("/userbedbook");
  };

  useEffect(()=>{
    AdminServiceApi.fetchAllHospitals().then((resp) => {
        setState({
          hospitals: resp.data,
          message: "Hospitals list rendered successfully",
    });
}).catch(error=>{
     console.log(state.message1);
    })
 },[])

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

        <form>
          <div className="form-group row mt-3 justify-content-center">
            <label
              htmlFor="hospitalname"
              className="col-2 col-form-label"
              style={{ fontWeight: "bold" }}
            >
              Hospital Name
            </label>
            <div className="col-5">
               <select
              id="hospitalname"
              className="form-select"
              name="bedtype"
              value={hospitalname}
              onChange={(e) => setHospitalname(e.target.value)}
            >   <option value="">select the hospital</option>
                {state.hospitals.map((hospital) => (
                      <option value={hospital.hospitalname}>{hospital.hospitalname}</option>
                  ))}
            </select>
              <span
                style={{ color: "red" }}
                id="searchVl"
                ref={searchVl}
              ></span>
            </div>
          </div>
          <button className="btn btn-primary mt-3 offset-6" onClick={search}>
            Search
          </button>
        </form>

        <h3>Available Bed Quantity</h3>

        <table className="table table-bordered">
          <thead className="bg-primary text-light">
            <tr>
              <th>Hospital Name</th>
              <th>Ventilator</th>
              <th>Oxygen</th>
              <th>Normal</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{hospitalname}</td>
              <td>{ventilator}</td>
              <td>{oxygen}</td>
              <td>{normal}</td>
              <td>
                <Link to="/userbedbook">
                  <button
                    className="btn btn-primary text-light"
                    onClick={gotobedbook}
                  >
                    Book
                  </button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <br /><br /><br /><br />
    </>
    
  );
};

export default UserBedAvblComponent;
