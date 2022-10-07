import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminServiceApi from '../Services/AdminServiceApi';
import Loading from './Loading';

const AdminAllHospitalBloodComponent = () => {
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
                <th>a_pos</th>
                <th>a_neg</th>
                <th>b_pos</th>
                <th>b_neg</th>
                <th>ab_pos</th>
                <th>ab_neg</th>
                <th>o_pos</th>
                <th>o_neg</th>
              </tr>
            </thead>
            <tbody>
              {state.hospitals.map((hospital) => (
                <tr key={hospital.hospid}>
                  <td className="visually-hidden">{hospital.hospid}</td>
                  <td>{hospital.hospitalname}</td>
                  <td>{hospital.a_pos}</td>
                  <td>{hospital.a_neg}</td>
                  <td>{hospital.b_pos}</td>
                  <td>{hospital.b_neg}</td>
                  <td>{hospital.ab_pos}</td>
                  <td>{hospital.ab_neg}</td>
                  <td>{hospital.o_pos}</td>
                  <td>{hospital.o_neg}</td>
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

export default AdminAllHospitalBloodComponent
