import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import AdminServiceApi from '../Services/AdminServiceApi';
import Loading from '../Components/Loading'

const ViewUserList = () => {
    const [state,setState] = useState({
        users: [],
        message: null,
    });

    
    useEffect(()=>{
            AdminServiceApi.fetchAllUsers().then((resp) => {
                setState({
                  users: resp.data,
                  message: "user list rendered successfully",
        });
    }).catch(error=>{
         console.log(error);
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
      {state.users.length === 0 ? (
        <Loading/>
      ) : (
        <div>
          <h3>User List</h3>
          <table className="table table-bordered">
            <thead className="bg-primary text-light">
              <tr>
                <th className="visually-hidden">Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Address</th>
                <th>Gender</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {state.users.map((user) => (
                <tr key={user.userid}>
                  <td className="visually-hidden">{user.userid}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.contact}</td>
                  <td>{user.address}</td>
                  <td>{user.gender}</td>
                  <td>{user.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
    <br /><br /><br /><br /><br /><br />
  </>
  )
}

export default ViewUserList
