import React, { useRef, useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import AdminServiceApi from '../Services/AdminServiceApi';
import UserServiceApi from '../Services/UserServiceApi';

const DoctorInfoComponent = () => {
    const[hospitalname ,seHospitalname]=useState("");
    const[state,setState] =useState({
        doctors: [],
        message: null,
      });
      const [state1,setState1] = useState({
        hospitals: [],
        message: null,
    });
  
    const search = (e) => {
      if (hospitalname === "") {
        Swal.fire({
          title: "Warning",
          text: "Please Enter the Hospital Name",
          icon: "warning",
          confirmButtonText: "Ok",
        });
        return false;
      }
      e.preventDefault();
  
      UserServiceApi.getByHospname(hospitalname).then((response) => {
        console.log(hospitalname);
        setState({
          doctors: response.data,
          message: "Doctors list rendered successfully",
        });
        console.log(response.data);
      });
    };
    useEffect(()=>{
      AdminServiceApi.fetchAllHospitals().then((resp) => {
          setState1({
            hospitals: resp.data,
            message: "Hospitals list rendered successfully",
      });
  }).catch(error=>{
    console.log(error);
      })
   },[])
  return (
    <>
    <div className="container my-4">
    <Link to='/userdashboard'>
      <bytton
        className="btn btn-secondary offset-10"
        style={{ minWidth: "12vw" }}
      >
        Back to Dashboard
      </bytton></Link>
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
              id="bedtype"
              className="form-select"
              name="hospitalname"
              value={hospitalname}
              onChange={(e)=>seHospitalname(e.target.value)}
              required
            >

                <option value="">select the hospital</option>
                {state1.hospitals.map((hospital) => (
                      <option value={hospital.hospitalname}>{hospital.hospitalname}</option>
                  ))}
            </select>
            <span style={{ color: "red" }} id="searchVl"></span>
          </div>
        </div>
        <button
          className="btn btn-primary mt-3 offset-6"
          onClick={search}
        >
          Search
        </button>
      </form>
      <h3>Doctor Information List</h3>
      <form className="mb-5">
        <table className="table table-bordered">
          <thead className="bg-primary text-light">
            <tr>
              <th className="visually-hidden">Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Qualification</th>
              <th>Specilization</th>
            </tr>
          </thead>
          <tbody>
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
  )
}

export default DoctorInfoComponent
