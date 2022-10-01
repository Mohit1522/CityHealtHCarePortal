import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import HospitalServiceApi from '../Services/HospitalServiceApi';
const HospitalDashboard = () => {
    const navigate = useNavigate();
    const[state,setState] = useState({
        hospitalId: "",
        Name: "",
      });

    useEffect(()=>{
        const hospital = JSON.parse(localStorage.getItem("hospital"));
        setState({
        hospitalId: hospital.id,
       Name: hospital.name,
      });
    },[]);


  
    const logout=() =>{
      HospitalServiceApi.logoutHospital();
      navigate('/');
    }
    
  return (
      <div className="container-fluid hospitaldash pb-5">
        <div className="row py-3">
          <div className="col-sm-6">
            <h2 className="text-capitalize" style={{color:'white'}}>Welcome, {state.Name}</h2>
          </div>
          <div className="col-sm-6">
            <Link to="/"> 
            <button
            onClick={logout}
              className="btn btn-link btn-danger text-light offset-10 text-uppercase text-decoration-none"
            >
              Logout
            </button></Link>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-sm-4">
            <div
              className="card"
              style={{ backgroundColor: "rgba(255,255,255,0.6)" }}
            >
              <div className="card-body">
                <h5 className="card-title">Add Bed</h5>
                <p className="card-text">Add bed details to database.</p>
                <Link to='/addbed'>
                <button className="btn btn-success">
                  ADD
                </button></Link>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div
              className="card"
              style={{ backgroundColor: "rgba(255,255,255,0.6)" }}
            >
              <div className="card-body">
                <h5 className="card-title">View Bed List</h5>
                <p className="card-text">
                  View details of all Beds in hospitals.
                </p>
                <Link to='/bedlist'>
                <button className="btn btn-primary" >
                  View
                </button></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-3 justify-content-center">
          <div className="col-sm-4">
            <div
              className="card"
              style={{ backgroundColor: "rgba(255,255,255,0.6)" }}
            >
              <div className="card-body">
                <h5 className="card-title">Add Blood</h5>
                <p className="card-text">Add Blood details of hospitals.</p>
                <Link to='/addblood'>
                <button className="btn btn-success" >
                  ADD
                </button></Link>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div
              className="card"
              style={{ backgroundColor: "rgba(255,255,255,0.6)" }}
            >
              <div className="card-body">
                <h5 className="card-title">View Blood List</h5>
                <p className="card-text">
                  View details of all Blood in hospitals.
                </p>
                <Link to='/bloodlist'>
                <button className="btn btn-primary" >
                  View
                </button></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-3 justify-content-center">
          <div className="col-sm-4">
            <div
              className="card"
              style={{ backgroundColor: "rgba(255,255,255,0.6)" }}
            >
              <div className="card-body">
                <h5 className="card-title">Add Oxygen</h5>
                <p className="card-text">Add Oxygen details of hospitals.</p>
                <Link to='/addoxygen'>
                <button className="btn btn-success">
                  ADD
                </button></Link>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div
              className="card"
              style={{ backgroundColor: "rgba(255,255,255,0.6)" }}
            >
              <div className="card-body">
                <h5 className="card-title">View Oxygen List</h5>
                <p className="card-text">
                  View details of all Oxygen in hospitals.
                </p>
                <Link to='/oxygenlist'>
                <button className="btn btn-primary">
                  View
                </button></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-3 justify-content-center">
          <div className="col-sm-4">
            <div
              className="card"
              style={{ backgroundColor: "rgba(255,255,255,0.6)" }}
            >
              <div className="card-body">
                <h5 className="card-title">Add DoctorInfo</h5>
                <p className="card-text">Add Doctor details of hospitals.</p>
                <Link to='/adddoctorinfo'>
                <button
                  className="btn btn-success"
                >
                  ADD
                </button></Link>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div
              className="card"
              style={{ backgroundColor: "rgba(255,255,255,0.6)" }}
            >
              <div className="card-body">
                <h5 className="card-title">View DoctorInfo List</h5>
                <p className="card-text">
                  View details of all Blood in hospitals.
                </p>
                <Link to='/doctorinfolist'>
                <button
                  className="btn btn-primary"
                >
                  View
                </button></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3 mb-5 justify-content-center">
          <div className="col-sm-4">
            <div
              className="card"
              style={{ backgroundColor: "rgba(255,255,255,0.6)" }}
            >
              <div className="card-body">
                <h5 className="card-title">Action on Request</h5>
                <p className="card-text">Approve or Reject the Requests.</p>
                <Link to='/approverejectrequest'>
                <button
                  className="btn btn-primary"
                >
                  View
                </button></Link>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div
              className="card"
              style={{ backgroundColor: "rgba(255,255,255,0.6)" }}
            >
              <div className="card-body">
                <h5 className="card-title">View Request</h5>
                <p className="card-text">View Request details of hospitals.</p>
                <Link to='/viewrequest'>
                <button className="btn btn-primary">
                  View
                </button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  )

  }
export default HospitalDashboard
