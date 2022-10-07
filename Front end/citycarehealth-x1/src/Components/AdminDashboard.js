import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import AdminServiceApi from '../Services/AdminServiceApi';
import {useHistory } from "react-router-dom";


const AdminDashboard = (props) => {
    const [adminId, setAdminId]=useState(''); 
    const [firstName, SetFirstName]=useState('');

 useEffect(()=>{
        const admin = JSON.parse(localStorage.getItem("admin"));
        setAdminId(admin.id);
        SetFirstName(admin.name);
    },[]);

   const logout=()=> {
        AdminServiceApi.logoutAdmin();
      }


  return (
    
    <div className="container-fluid admindash">
    <div className="row py-3">
      <div className="col-sm-6">
        <h2 className="text-capitalize text-light">Hello, {firstName}</h2>
      </div>
      <div className="col-sm-6">
        <Link to='/'><button
          onClick={logout}
          className="btn btn-link btn-danger text-dark offset-10 text-uppercase text-decoration-none border-dark"
          style={{hover:"text-light"}}
        >
          Logout
        </button></Link>
      </div>
    </div>

    <div className="row py-5 justify-content-center">
      <div className="col-sm-3">
        <div
          className="card"
          style={{ backgroundColor: "rgba(255,255,255,0.9)" }}
        >
          <div className="card-body">
            <h5 className="card-title">Add Hospital</h5>
            <p className="card-text">
              Register a new Hospital to database.
            </p>
            <Link to='/addhospital'>
            <button className="btn btn-primary">
              ADD
            </button></Link>
          </div>
        </div>
      </div>
      <div className="col-sm-3">
        <div
          className="card"
          style={{ backgroundColor: "rgba(255,255,255,0.9)"}}
        >
          <div className="card-body">
            <h5 className="card-title">View Hospital List</h5>
            <p className="card-text">
              View details of all registered hospitals.
            </p>
            <Link to='/viewhospitals'>
            <button  className="btn btn-warning">
              VIEW
            </button></Link>
          </div>
        </div>
      </div>
      <div className="col-sm-3">
        <div
          className="card"
          style={{ backgroundColor: "rgba(255,255,255,0.9)" }}
        >
          <div className="card-body">
            <h5 className="card-title">View User List</h5>
            <p className="card-text">View details of all registered users.</p>
            <Link to='/viewuserlist'>
            <button className="btn btn-danger">
              VIEW
            </button></Link>
          </div>
        </div>
      </div>
    </div>
    <div className="row py justify-content-center">
      <div className="col-sm-3">
        <div
          className="card"
          style={{ backgroundColor: "rgba(255,255,255,0.9)" }}
        >
          <div className="card-body">
            <h5 className="card-title">View Bed available </h5>
            <p className="card-text">
            View bed available of all registered hospital.
            </p>
            <Link to='/allhospitalbed'>
            <button className="btn btn-danger">
            View Bed
            </button></Link>
          </div>
        </div>
      </div>
      <div className="col-sm-3">
        <div
          className="card"
          style={{ backgroundColor: "rgba(255,255,255,0.9)"}}
        >
          <div className="card-body">
            <h5 className="card-title">View Blood Avilble</h5>
            <p className="card-text">
            View blood available of all registered hospital.
            </p>
            <Link to='/allhospitalblood'>
            <button  className="btn btn-warning">
            View Blood
            </button></Link>
          </div>
        </div>
      </div>
      <div className="col-sm-3">
        <div
          className="card"
          style={{ backgroundColor: "rgba(255,255,255,0.9)" }}
        >
          <div className="card-body">
            <h5 className="card-title">View oxygen available</h5>
            <p className="card-text">View oxygen available of all registered hospital.</p>
            <Link to='/allhospitaloxygen'>
            <button className="btn btn-danger">
              VIEW
            </button></Link>
          </div>
        </div>
      </div>
    </div>

  </div>

  )
}

export default AdminDashboard
