import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import UserServiceApi from '../Services/UserServiceApi';

const UserSignUpComponents = () => {
  

        const[name ,SetName] =useState("");
        const[email ,setEmail] =useState("");
        const[password ,setPassword] =useState("");
        const[contact ,setConatct] =useState("");
        const[message ,setMessage] =useState("successfully registered");
        const[gender ,setGender] =useState("");
        const[age ,setAge] =useState("");
        const[address ,setAddress] =useState("");
        const navigate=useNavigate();
          
        const nameVr=useRef();
        const nameVr2=useRef();
        const emailVr=useRef();
        const emailVr2=useRef();
        const passwordVr=useRef();
        const passwordVr2=useRef();
        const contactVr=useRef();
        const contactVr2=useRef();

      const validateName=()=> {
        const name = nameVr.current.value;
        console.log(name);
        const regexname = /^[a-zA-Z]+ [a-zA-Z]+$/;
        if (regexname.test(name) === true) {
          nameVr2.current.innerHTML = "";
          return true;
        } else {
          nameVr2.current.innerHTML =
            "Invaild name format.";
        }
      }
    const  validatePassword=()=> {
        const password = passwordVr.current.value;
        const regexPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z]).{5,}$/;
    
        if (regexPassword.test(password) === true) {
          passwordVr2.current.innerHTML = "";
          return true;
        } else {
          passwordVr2.current.innerHTML =
            "password must be alphanumeric and should contains at least a special character with length 5";
        }
      }
    
    const  validateEmail=()=> {
        const email = emailVr.current.value;
    
        const regexEmail = /\S+@\S+\.\S+/;
        if (regexEmail.test(email) === true) {
          emailVr2.current.innerHTML = "";
          return true;
        } else {
          emailVr2.current.innerHTML =
            "email format should be 'abc@gmail.com'";
        }
      }
    
    const  removeWarnings=()=> {
        nameVr2.current.innerHTML = "";
        passwordVr2.current.innerHTML = "";
        emailVr2.current.innerHTML = "";
        contactVr2.current.innerHTML = "";
      }
    
    const  validateMobileNumber=()=> {
        const number = contactVr.current.value;
        const regexMobile = /^\d{10}$/;
        if (regexMobile.test(number)) {
          contactVr2.current.innerHTML = "";
        } else {
          contactVr2.current.innerHTML =
            "Phone number must be 10 digits.";
    
          return false;
        }
      }
    
    const  signUp = (p) => {
      
        if (
          name === "" ||
          email === "" ||
          password === "" ||
          contact === "" ||
          address === "" ||
          gender === "" ||
          age === ""
        ) {
          Swal.fire({
            title: "All Fields are Mandatory",
            icon: "warning",
            confirmButtonText: "Ok",
          });
          return false;
        }
        const regexname = /^[a-zA-Z]+ [a-zA-Z]+$/;
        if (regexname.test(name) === false) {
          Swal.fire({
            title: "Enter valid name.",
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
        const regexPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z]).{5,}$/;
        if (regexPassword.test(password) === false) {
          Swal.fire({
            title: "Enter valid password",
            icon: "warning",
            confirmButtonText: "Ok",
          });
          return false;
        }
        const regexMobile = /^\(?([7-9]{1})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{4})$/;
        if (regexMobile.test(contact) === false) {
          Swal.fire({
            title: "Enter valid contact",
            icon: "warning",
            confirmButtonText: "Ok",
          });
          return false;
        }
    
        p.preventDefault();
        p.currentTarget.disabled = true;
        const user = {
          name,
          email,
          password,
          contact,
          address,
          gender,
          age,
        };
        UserServiceApi.addUser(user)
          .then((res) => {
            console.log(res.data);
            setMessage("successfully registered");
            console.log(message);
            Swal.fire({
              title:message,
              icon: "success",
              confirmButtonText: "Ok",
            });
            navigate("/");
           
          })
          .catch((error) => {
            console.error("in err ", error.response.data);
            Swal.fire({
              title: message,
              icon: "error",
              confirmButtonText: "Ok",
            });
          });
      };
  return (
    <>
    <div className="container-fluid signup row justify-content-center">
      <div
        className="col-sm-8 overflow-hidden border border-primary rounded"
        style={{ backgroundColor: "rgba(255,255,255,0.6)" }}
      >
        <div className="row py-3 ">
          <div className="col-sm-6 d-flex ">
            <h2 className="text-dark ">User Registration</h2> <Link to='/'>
            <button
              className="btn btn-dark text-uppercase offset-8"
            >
              Back
            </button></Link>
           </div>
         {/* <div className="col-sm-3">
           
          </div> */}
        </div>
        <form className="mb-5">
          <div className="form-group row my-3 justify-content-center h5">
            <label htmlFor="name" className="col-2 col-form-label">
              Full Name
            </label>
            <div className="col-5">
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Full Name"
                name="name"
                value={name}
                onChange={(e)=>SetName(e.target.value)}
                onFocus={removeWarnings}
                onBlur={validateName}
                ref={nameVr}
                required
              />
              <span style={{ color: "red" }} id="nameVr" ref={nameVr2}></span>
            </div>
          </div>
          <div className="form-group row my-3 justify-content-center h5">
            <label htmlFor="email" className="col-2 col-form-label">
              Email
            </label>
            <div className="col-5">
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="e.g. abc@xyz.com"
                name="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required
                onFocus={removeWarnings}
                onBlur={validateEmail}
                ref={emailVr}
              />
              <span style={{ color: "red" }} id="emailVr" ref={emailVr2}></span>
            </div>
          </div>
          <div className="form-group row my-3 justify-content-center h5">
            <label htmlFor="pwd" className="col-2 col-form-label">
              Password
            </label>
            <div className="col-5">
              <input
                type="password"
                id="pwd"
                className="form-control "
                placeholder="Enter Password"
                name="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                onBlur={validatePassword}
                onFocus={removeWarnings}
                ref={passwordVr}
                required
              />
              <span style={{ color: "red" }} id="passwordVr" ref={passwordVr2}></span>
            </div>
          </div>
          <div className="form-group row my-3 justify-content-center h5 h5">
            <label className="col-2 col-form-label">Gender</label>
            <div className="col-5 d-flex justify-content-between form-check">
              <div>
                <input className='form-check-input'
                  type="radio"
                  id="gender"
                  name="gender"
                  value="MALE"
                  onChange={(e)=>setGender(e.target.value)}
                />
                Male
              </div>
              <div>
                <input className='form-check-input'
                  type="radio"
                  id="gender"
                  name="gender"
                  value="FEMALE"
                  onChange={(e)=>setGender(e.target.value)}
                />
                Female
              </div>
              <div>
                <input className='form-check-input'
                  type="radio"
                  id="gender"
                  name="gender"
                  value="OTHER"
                  onChange={(e)=>setGender(e.target.value)}
                />
                Other
              </div>
            </div>
          </div>
          <div className="form-group row my-3 justify-content-center h5">
            <label htmlFor="contact" className="col-2 col-form-label">
              Contact No.
            </label>
            <div className="col-5">
              <input
                type="phone"
                id="contact"
                className="form-control"
                placeholder="Enter your contact details"
                name="contact"
                value={contact}
                onChange={(e)=>setConatct(e.target.value)}
                pattern="[0-9]{1}-[0-9]{5}-[0-9]{4}"
                onBlur={validateMobileNumber}
                onFocus={removeWarnings}
                ref={contactVr}
                required
              />
              <span id="contactVr" style={{ color: "red" }} ref={contactVr2}></span>
            </div>
          </div>

          <div className="form-group row mt-3 justify-content-center h5">
            <label htmlFor="age" className="col-2 col-form-label">
              Age
            </label>
            <div className="col-5">
              <input
                type="number"
                id="age"
                className="form-control"
                placeholder="Enter Age"
                name="age"
                value={age}
                onChange={(e)=>setAge(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-group row mt-3 justify-content-center h5">
            <label htmlFor="address" className="col-2 col-form-label">
              Address
            </label>
            <div className="col-5">
              <input
                type="text"
                id="address"
                className="form-control"
                placeholder="Enter Address "
                name="address"
                value={address}
                onChange={(e)=>setAddress(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-group row justify-content-center h5">
            <div className="offset-9">
              <button
                className="btn btn-lg btn-primary text-uppercase mt-3"
                onClick={signUp}
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </>
  )
}

export default UserSignUpComponents
