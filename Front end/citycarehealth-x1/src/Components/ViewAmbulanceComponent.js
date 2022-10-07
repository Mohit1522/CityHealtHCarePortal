import { useEffect } from 'react';
import {React ,useRef,useState}from 'react'
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";
import AdminServiceApi from '../Services/AdminServiceApi';
import HospitalServiceApi from "../Services/HospitalServiceApi";

const ViewAmbulanceComponent = () => {
    const[hospitalname,setHospitalname]=useState("");
    const [state,setState] = useState({
        address: "",
        ambulancecontact: "",
        message: null,
      });
      const [state1,setState1] = useState({
        hospitals: [],
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
            address: hospital.address,
            ambulancecontact: hospital.ambulancecontact,
            message: "Hospitals list rendered successfully",
          });
        }
      );
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
              onChange={(e)=>setHospitalname(e.target.value)}
              required
            >

                <option value="">select the hospital</option>
                {state1.hospitals.map((hospital) => (
                      <option value={hospital.hospitalname}>{hospital.hospitalname}</option>
                  ))}
            </select>
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
      <h3>Ambulance Contact Details</h3>
      <form className="mb-5">
        <table className="table table-bordered">
          <thead className="bg-primary text-light">
            <tr>
              <th>Hospital Name</th>
              <th>Address</th>
              <th>AmbulanceContact</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{hospitalname}</td>
              <td>{state.address}</td>
              <td>{state.ambulancecontact}</td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
    <br /><br /><br /><br />
  </>
  )
}

export default ViewAmbulanceComponent
