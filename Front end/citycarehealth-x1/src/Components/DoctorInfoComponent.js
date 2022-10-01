import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import UserServiceApi from '../Services/UserServiceApi';

const DoctorInfoComponent = () => {
    const[hospitalname ,seHospitalname]=useState("");
    const[state,setState] =useState({
        doctors: [],
        message: null,
      });

      const searchVl=useRef();
      const hospitalnameVr=useRef();
  
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
  
    const validateinput=()=> {
      const hospname = hospitalnameVr.current.value;
      if (hospname === "") {
        searchVl.current.innerHTML =
          "Please Enter Hospital Name";
        return true;
      }
    }
    const removeWarnings=()=> {
      searchVl.current.innerHTML = "";
    }

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
            <input
              type="text"
              id="hospitalname"
              ref={hospitalnameVr}
              className="form-control"
              placeholder="Hospital name"
              name="hospitalname"
              value={hospitalname}
              onChange={(e)=>seHospitalname(e.target.value)}
              onBlur={validateinput}
              onFocus={removeWarnings}
              required
            />
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
