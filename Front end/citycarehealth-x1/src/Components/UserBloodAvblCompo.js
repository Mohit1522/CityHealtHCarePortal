import React, { useRef, useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import AdminServiceApi from '../Services/AdminServiceApi';
import HospitalServiceApi from '../Services/HospitalServiceApi';

const UserBloodAvblCompo = () => {
    const[hospitalname,setHospitalname]=useState("");
    const[state,setState] =useState({
        a_pos: "",
        a_neg: "",
        b_pos: "",
        b_neg: "",
        ab_pos: "",
        ab_neg: "",
        o_pos: "",
        o_neg: "",
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
      
      HospitalServiceApi.getByHospname(hospitalname).then(
        (response) => {
          const hospital = response.data;
          setState({
            a_pos: hospital.a_pos,
            a_neg: hospital.a_neg,
            b_pos: hospital.b_pos,
            b_neg: hospital.b_neg,
            ab_pos: hospital.ab_pos,
            ab_neg: hospital.ab_neg,
            o_pos: hospital.o_pos,
            o_neg: hospital.o_neg,
            message: "Hospitals list rendered successfully",
          });
          console.log(response.data);
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
      <Link to='/userdashboard'><button
        className="btn btn-secondary my-2 offset-10"
        style={{ minWidth: "13vw" }}
      >
        Back To Dashboard
      </button></Link>

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
          </div>
        </div>
        <button
          className="btn btn-primary mt-3 offset-6"
          onClick={search}
        >
          Search
        </button>
      </form>

      <div>
        <h3>Available Blood List</h3>
        <table className="table table-bordered" class="table">
          <thead className="bg-primary text-light">
            <tr>
              <th>Hospital Name</th>
              <th>A_pos</th>
              <th>A_Neg</th>
              <th>B_pos</th>
              <th>B_Neg</th>
              <th>AB_pos</th>
              <th>AB_Neg</th>
              <th>O_pos</th>
              <th>O_Neg</th>
            </tr>
          </thead>
          <tbody style={{ backgroundColor: "rgba(255,255,255,0.8)" }} >
            <tr>
              <td>{hospitalname}</td>
              <td>{state.a_pos}</td>
              <td>{state.a_neg}</td>
              <td>{state.b_pos}</td>
              <td>{state.b_neg}</td>
              <td>{state.ab_pos}</td>
              <td>{state.ab_neg}</td>
              <td>{state.o_pos}</td>
              <td>{state.o_neg}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <br /><br /><br /><br />
  </>
  )
}

export default UserBloodAvblCompo
