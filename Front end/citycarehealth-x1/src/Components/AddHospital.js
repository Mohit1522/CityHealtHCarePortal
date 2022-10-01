import React, { useRef, useState } from 'react'
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
import AdminServiceApi from '../Services/AdminServiceApi';

const AddHospital = (props) => {
    const[hospitalname,setHospitalName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[contact,setContact]=useState('');
    const[address,setAddress]=useState('');
    const[ambulancecontact,setAbulanceContactNumber]=useState('');
    const navigate=useNavigate();

    const[message,setMessage]=useState("");
    const nameVr=useRef();
    const nameVr2=useRef();
    const emailVr=useRef();
    const passwordVr=useRef();
    const addressVr=useRef();
    const amcontactv=useRef();
    const contactVr=useRef();
    const contactVr2=useRef();
    

   const validatehospitalname=()=> {
        const hospname = hospitalname;
        if (hospname === "") {
          nameVr2.current.innerHTML =
            "Please Enter Hospital Name";
          return true;
        }
      }

    const validateAddress=()=> {
        const hosadd = address;
        if (hosadd === "") {
          addressVr.current.innerHTML =
            "Please Enter the Address";
          return true;
        }
      }
    
    const validatePassword=()=> {
        const hospass = password;
        var regexPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z]).{5,}$/;
    
        if (regexPassword.test(hospass) === true) {
          passwordVr.current.innerHTML = "";
          return true;
        } else {
          passwordVr.current.innerHTML =
            "password must be alphanumeric and should contains at least a special character with length 5";
        }
      }
    
    const validateEmail=()=> {
        const hosemail =email;
    
        var regexEmail = /\S+@\S+\.\S+/;
        if (regexEmail.test(hosemail) === true) {
          emailVr.current.innerHTML = "";
          return true;
        } else {
          emailVr.current.innerHTML =
            "Format should be 'abc@gmail.com'";
        }
      }
    const removeWarnings=()=> {
      passwordVr.current.innerHTML = "";
        emailVr.current.innerHTML= "";
        amcontactv.current.innerHTML = "";
        nameVr2.current.innerHTML = "";
        addressVr.current.innerHTML = "";
        contactVr2.current.innerHTML = "";
      }
    
    const validateMobileNumber=()=> {
        const number = contact;
        var regexMobile = /^\d{10}$/;
        if (regexMobile.test(number)) {
          contactVr2.current.innerHTML = "";
        } else {
          contactVr2.current.innerHTML =
            "Phone number must be 10 digits.";
    
          return false;
        }
      }


      const validateAmbulanceContact=()=> {
        const number = contact;
        var regexMobile = /^\d{10}$/;
        if (regexMobile.test(number)) {
          amcontactv.current.innerHTML = "";
        } else {
          amcontactv.current.innerHTML =
            "Phone number must be 10 digits.";
          return false;
        }
      }
////////////////////////////////////////
const addHospital = (h) => {
    if (
      hospitalname === "" ||
      email === "" ||
      password === "" ||
      contact === "" ||
      address === "" ||
      ambulancecontact === ""
    ) {
      Swal.fire({
        title: "All Fields are Mandatory",
        icon: "warning",
        confirmButtonText: "Ok",
      });
      return false;
    }
    var regexEmail = /\S+@\S+\.\S+/;
    if (regexEmail.test(email) === false) {
      Swal.fire({
        title: "Enter valid email",
        icon: "warning",
        confirmButtonText: "Ok",
      });
      return false;
    }
    var regexPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z]).{5,}$/;
    if (regexPassword.test(password) === false) {
      Swal.fire({
        title: "Enter valid password",
        icon: "warning",
        confirmButtonText: "Ok",
      });
      return false;
    }
    var regexContact = /^\(?([2-9]{1})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{4})$/;
    if (regexContact.test(contact) === false) {
      Swal.fire({
        title: "Enter valid Contact Number",
        icon: "warning",
        confirmButtonText: "Ok",
      });
      return false;
    }
    var regexMobile = /^\(?([7-9]{1})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{4})$/;
    if (regexMobile.test(ambulancecontact) === false) {
      Swal.fire({
        title: "Enter valid Ambulance-contact",
        icon: "warning",
        confirmButtonText: "Ok",
      });
      return false;
    }

    h.preventDefault();
    const hospital = {
      hospitalname,
      email,
      password,
      contact,
      address,
    ambulancecontact,
    };
    AdminServiceApi.addHospital(hospital)
      .then((res) => {
        console.log(res.data);
        setMessage("Hospital added successfully.");
        console.log(message);
        Swal.fire({
          title:message,
          icon: "success",
          confirmButtonText: "Ok",
        });
        navigate("/admindashboard");
        
      })
      .catch((error) => {
        console.error("in err ", error.response.data); 
      });
  };

/////////////////////////////////

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
          <h3>Hospital Registration</h3>
          <form className="mb-5">
            <div className="form-group row my-3 justify-content-center">
              <label htmlFor="hospitalname" className="col-2 col-form-label">
                HospitalName
              </label>
              <div className="col-5">
                <input
                  type="text"
                  id="hospitalname"
                  className="form-control"
                  placeholder="HospitalName"
                  name="hospitalname"
                  value={hospitalname}
                  onChange={(e)=>setHospitalName(e.target.value)}
                  onBlur={validatehospitalname}
                  onFocus={removeWarnings}
                  ref={nameVr}
                  required
                />
                <span style={{ color: "red" }} id="nameVr" ref={nameVr2}></span>
              </div>
            </div>
            <div className="form-group row my-3 justify-content-center">
              <label htmlFor="email" className="col-2 col-form-label">
                Email
              </label>
              <div className="col-5">
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="e.g. abc@gmail.com"
                  name="email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  required
                  onFocus={removeWarnings}
                  onBlur={validateEmail}
                />
                <span style={{ color: "red" }} id="emailVr" ref={emailVr}></span>
              </div>
            </div>
            <div className="form-group row my-3 justify-content-center">
              <label htmlFor="password" className="col-2 col-form-label">
                Password
              </label>
              <div className="col-5">
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  onBlur={validatePassword}
                  onFocus={removeWarnings}
                  required
                />
                <span style={{ color: "red" }} id="passwordVr" ref={passwordVr}></span>
              </div>
            </div>
            <div className="form-group row my-3 justify-content-center">
              <label htmlFor="address" className="col-2 col-form-label">
                Address
              </label>
              <div className="col-5">
                <input
                  type="text"
                  id="address"
                  className="form-control"
                  placeholder="Address"
                  name="address"
                  value={address}
                  onChange={(e)=>setAddress(e.target.value)}
                  onBlur={validateAddress}
                  onFocus={removeWarnings}
                  required
                />
                <span style={{ color: "red" }} id="addressVr" ref={addressVr}></span>
              </div>
            </div>
            <div className="form-group row my-3 justify-content-center">
              <label htmlFor="contact" className="col-2 col-form-label">
                Contact
              </label>
              <div className="col-5">
                <input
                  type="text"
                  id="contact"
                  className="form-control"
                  placeholder="Contact"
                  name="contact"
                  value={contact}
                  onChange={(e)=>setContact(e.target.value)}
                  ref={contactVr}
                  onBlur={validateMobileNumber}
                  onFocus={removeWarnings}
                  required
                />
                <span style={{ color: "red" }} id="amcontactv" ref={contactVr2}></span>
              </div>
              
            </div>
            <div className="form-group row my-3 justify-content-center">
              <label
                htmlFor="ambulancecontact"
                className="col-2 col-form-label"
              >
                AmbulanceContact
              </label>
              <div className="col-5">
                <input
                  type="text"
                  id="ambulancecontact"
                  className="form-control"
                  placeholder="AmbulanceContact"
                  name="ambulancecontact"
                  value={ambulancecontact}
                  onChange={(e)=>setAbulanceContactNumber(e.target.value)}
                  onBlur={validateAmbulanceContact}
                  onFocus={removeWarnings}
                  required
                />
                <span style={{ color: "red" }} id="amcontactv" ref={amcontactv}></span>
              </div>
            </div>
            <div className="form-group row justify-content-center">
              <div className="offset-9">
                <button
                  className="btn btn-primary text-uppercase mt-3"
                  onClick={addHospital}
                >
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </>
  )
}

export default AddHospital
