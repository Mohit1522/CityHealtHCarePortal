import { React, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import LoginApi from "../Services/LoginApi.js";

const LoginComponents = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("Invalid user Id or password");

  const emailVR = useRef();

  const validateEmail = () => {
    const emailId = email;
    const emailRegex = /\S+@\S+\.\S+/;
    if (emailRegex.test(emailId) === true || email === "") {
      return true;
    } else {
      emailVR.current.innerHTML = "Email format should be abc@xyz.com";
      return false;
    }
  };
  const removeAlert = () => {
    emailVR.current.innerHTML = "";
  };
  console.log(email);
  console.log(password);
  /////////////////////////////////////////////////////////////////////////////
  const login = (e) => {
    if (password === "" || email === "") {
      Swal.fire({
        title: "Please fill the Credentials",
        icon: "warning",
        confirmButtonText: "Ok",
      });
      return false;
    }
    e.preventDefault();
    const user = {
      email,
      password,
    };
    console.log(user.email);
    LoginApi.loginUser(user)
      .then((response) => {
        console.log(response.data.role);
        console.log(response.data);
        setMessage("Login successful.");
        console.log(message);
        if (response.data.role === "admin") {
          // localStorage.setItem("admin", JSON.stringify(response.data));
          localStorage.setItem("admin", JSON.stringify(response.data));
          console.log(response.data);
          //this.props.history.push("/adminDashboard");
          navigate("/admindashboard");
        } else if (response.data.role === "hospital") {
          localStorage.setItem("hospital", JSON.stringify(response.data));
          console.log(response.data);
          //this.props.history.push("/hospitalDashboard");
          navigate("/hospitaldashboard");
        } else {
          localStorage.setItem("user", JSON.stringify(response.data));
          //this.props.history.push("/userDashboard");
          navigate("/userdashboard");
        }
      })
      .catch((error) => {
        console.error("in err ", error.response.data);
        setMessage("Invalid user Id or password");
        Swal.fire({
          title: message,
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };

  ///////////////////////////////////////////////////

  //
  return (
  //   <div>
  //     <div className="container-fluid login p-0 m-0 row">
  //       <div className="pt-5 ">
  //         <form
  //           className="container pt-2 border  border-primary shadow-lg p-3 mb-5 bg-white rounded col-lg-4 col-sm-8  "
           
  //         >
  //           <h2 className="text-muted text-center mb-4">Login</h2>
  //           <div className="form-group">
  //             <input
  //               id="email"
  //               type="email"
  //               className="form-control text-center mt-3"
  //               placeholder="Email"
  //               value={email}
  //               onChange={(e) => setEmail(e.target.value)}
  //               onBlur={validateEmail}
  //               onFocus={removeAlert}
  //               name="email"
  //               required
  //             />
  //             <span style={{ color: "red" }} id="emailVR" ref={emailVR}></span>
  //           </div>
  //           <div className="form-group my-3">
  //             <input
  //               type="password"
  //               className="form-control text-center"
  //               name="password"
  //               value={password}
  //               onChange={(e) => setPassword(e.target.value)}
  //               placeholder="Password"
  //               required
  //             />
  //           </div>
  //           <div className="row my-3">
  //             <div className="col-sm">
  //               <button
  //                 className="btn btn-primary btn-lg text-light mb-3 offset-lg-4"
  //                 onClick={login}
  //               >
  //                 LOGIN
  //               </button>
  //             </div>
  //           </div>
  //           Don't have an account ?{" "}
  //           <Link to="/usersignup" class="link" style={{ color: "blue" }}>
  //             Signup here
  //           </Link>
  //         </form>

  //         <span id="span"></span>
  //       </div>
  //     </div>
  //   </div>
  // );

  <div>
     <div className="container-fluid login p-0 m-0 row">
        <div className="pt-5">
          <form
            className="container pt-2 border border-primary shadow-lg p-3 mb-5 bg-white rounded col-lg-4 col-sm-8"
            // style={{ width: "30vw" }} 
          >
            <h2 className="text-muted text-center mb-4">Login</h2>
            <div className="form-group">
              <input
                id="email"
                type="email"
                className="form-control text-center mt-3"
                placeholder="Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                onBlur={validateEmail}
                onFocus={removeAlert}
                name="email"
                required
              />
              <span style={{ color: "red" }} id="emailVR" ref={emailVR}></span>
            </div>
            <div className="form-group my-3">
              <input
                type="password"
                className="form-control text-center"
                name="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="Password"
                required
              />
            </div>
            <div className="row my-3">
              <div className="col-sm d-flex justify-content-center">
                 <button 
                  className="btn btn-primary  btn-lg text-light mb-3 "
                onClick={login}>
                  LOGIN
                </button>
              </div>
            </div>
         <center>Don't have an account ? <Link  to='/usersignup' class="link" style={{ color: "blue" }}>Signup here</Link></center> 
          </form>
         
          <span id="span"></span>
        </div>
      </div>
  </div>
  );
};
export default LoginComponents;
