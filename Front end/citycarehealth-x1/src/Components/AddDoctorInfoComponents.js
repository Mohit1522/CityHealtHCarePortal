import React, { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import HospitalServiceApi from "../Services/HospitalServiceApi.js";
import { Link, useNavigate, useNavigation } from "react-router-dom";

const AddDoctorInfoComponents = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [qualification, setQualification] = useState("");
  const [specialization, SetSpecialization] = useState("");
  const [message, setMessage] = useState("");
  const [i, setI] = useState(0);
  const navigate=useNavigate();
  const emailVr = useRef();
  const emailVr2 = useRef();

  useEffect(() => {
    const hosp = JSON.parse(localStorage.getItem("hospital"));
    console.log(hosp.id);
    setI(hosp.id);
  });

  const saveDoctorinfo = (e) => {
    if (
      name === "" ||
      email === "" ||
      qualification === "" ||
      specialization === ""
    ) {
      Swal.fire({
        title: "All Fields are Mandatory",
        icon: "warning",
        confirmButtonText: "Ok",
      });
      return false;
    }
    e.preventDefault();
    const doctor = {
      name,
      email,
      qualification,
      specialization,
    };

    HospitalServiceApi.addDoctorinfo(i, doctor).then((res) => {
      setMessage("Doctor details added successfully.");
      Swal.fire({
        title: message,
        icon: "success",
        confirmButtonText: "Ok",
      });
      navigate("/hospitaldashboard");
    });
  };

  const validateEmail = () => {
    const email = emailVr.current.value;

    const regexEmail = /\S+@\S+\.\S+/;
    if (regexEmail.test(email) === true) {
      emailVr2.current.innerHTML = "";
      return true;
    } else {
      emailVr2.current.innerHTML = "email format should be 'abc@gmail.com'";
    }
  };
  const removeWarnings = () => {
    emailVr2.current.innerHTML = "";
  };

  return (
    <>
      <div className="container my-1">
        <Link to="/hospitaldashboard">
          <button
            className="btn btn-secondary my-2 offset-10"
            style={{ minWidth: "12vw" }}
          >
            Back To Dashboard
          </button>
        </Link>
        <h3>Add DoctorInfo</h3>
        <form className="mb-5">
          <div className="form-group row my-3 justify-content-center">
            <label htmlFor="name" className="col-2 col-form-label">
              Name
            </label>
            <div className="col-5">
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
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
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={removeWarnings}
                onBlur={validateEmail}
                ref={emailVr}
                required
              />
              <span style={{ color: "red" }} id="emailVr" ref={emailVr2}></span>
            </div>
          </div>
          <div className="form-group row my-3 justify-content-center">
            <label htmlFor="qualification" className="col-2 col-form-label">
              Qualification
            </label>
            <div className="col-5">
              <input
                type="text"
                id="qualification"
                className="form-control"
                placeholder="Qualification"
                name="qualification"
                value={qualification}
                onChange={(e) => setQualification(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-group row my-3 justify-content-center">
            <label htmlFor="specialization" className="col-2 col-form-label">
              Specilization
            </label>
            <div className="col-5">
              <input
                type="text"
                id="specialization"
                className="form-control"
                placeholder="specialization"
                name="specialization"
                value={specialization}
                onChange={(e) => SetSpecialization(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-group row justify-content-center">
            <div className="offset-9">
              <button
                className="btn btn-primary text-uppercase mt-3"
                onClick={saveDoctorinfo}
              >
                ADD
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddDoctorInfoComponents;
