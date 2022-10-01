import React, { useEffect, useState } from 'react'
import AdminServiceApi from '../Services/AdminServiceApi';
import { Link } from 'react-router-dom';
import Loading from '../Components/Loading'

const ViewHospitals = () => {

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
                    <th>Address</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>AmbulanceContact</th>
                  </tr>
                </thead>
                <tbody>
                  {state.hospitals.map((hospital) => (
                    <tr key={hospital.hospid}>
                      <td className="visually-hidden">{hospital.hospid}</td>
                      <td>{hospital.hospitalname}</td>
                      <td>{hospital.address}</td>
                      <td>{hospital.email}</td>
                      <td>{hospital.contact}</td>
                      <td>{hospital.ambulancecontact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </>
  )
                  }
export default ViewHospitals
