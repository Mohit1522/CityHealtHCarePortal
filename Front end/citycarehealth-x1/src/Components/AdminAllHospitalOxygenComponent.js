import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminServiceApi from '../Services/AdminServiceApi';
import Loading from './Loading';

const AdminAllHospitalOxygenComponent = () => {
    const [state,setState] = useState({
        hospitals: [],
        message: null,
    });
    
    useEffect(()=>{
        AdminServiceApi.fetchAllHospitals().then((resp) => {
            setState({
              hospitals: resp.data,
              message: "Hospitals list rendered successfully",
        });
    }).catch(error=>{
         console.log(state.message);
        })
     },[])
  return (
    <>
    <div className="container my-4">
    <Link to='/admindashboard'>
      <button
        className="btn btn-secondary my-2 offset-11"
        style={{ minWidth: "13vw" }}
      >
        Back To Dashboard
      </button></Link>
      {state.hospitals.length === 0 ? (
       <Loading/>
      ) : (
        <div>
          <h3>Hospital List</h3>
          <table className="table table-bordered">
            <thead className="bg-primary text-light">
              <tr>
                <th className="visually-hidden">Id</th>
                <th>HospitalName</th>
                <th>Oxygen Available</th>
              </tr>
            </thead>
            <tbody>
              {state.hospitals.map((hospital) => (
                <tr key={hospital.hospid}>
                  <td className="visually-hidden">{hospital.hospid}</td>
                  <td>{hospital.hospitalname}</td>
                  <td>{hospital.oxygenavailable}{" Ltrs"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
    <br /><br /><br /><br />
    <br /><br /><br /><br />
  </>
  )
}

export default AdminAllHospitalOxygenComponent
