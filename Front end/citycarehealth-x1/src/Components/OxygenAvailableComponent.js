import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import HospitalServiceApi from '../Services/HospitalServiceApi';

const OxygenAvailableComponent = () => {
    const[hospitalname,setHospitalname]=useState("");
    const[state,setState] =useState({
        oxygenavailable: "",
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
  
      HospitalServiceApi.getByHospname(hospitalname).then(
        (response) => {
          console.log(hospitalname);
          const hospital = response.data;
          setState({
            oxygenavailable: hospital.oxygenavailable,
            message: "Hospitals list rendered successfully",
          });
          console.log();
        }
      );
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
      searchVl.current.innerHTML  = "";
    }
  

  return (
    <>
        <div className="container ">
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
                  className="form-control"
                  placeholder="Hospital name"
                  name="hospitalname"
                  value={hospitalname}
                  ref={hospitalnameVr}
                  onChange={(e)=>setHospitalname(e.target.value)}
                  onBlur={validateinput}
                  onFocus={removeWarnings}
                  required
                />
                <span style={{ color: "red" }} id="searchVl" ref={searchVl}></span>
              </div>
            </div>
            <button
              className="btn btn-primary mt-3 offset-6"
              onClick={search}
            >
              Search
            </button>
          </form>
          <h3>Oxygen Availability</h3>
          <form className="mb-5">
            <table className="table table-bordered">
              <thead className="bg-primary text-light">
                <tr>
                  <th>Hospital Name</th>
                  <th>Oxygen Available</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{hospitalname}</td>
                  <td>{state.oxygenavailable}</td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </>
  )
}

export default OxygenAvailableComponent
