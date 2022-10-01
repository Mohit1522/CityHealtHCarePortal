import React from "react";
import { Link } from "react-router-dom";
import cityCarelogo from "./images/cityCareLogo.jpg";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import useRef from 'react';

import { useEffect } from "react";
import { useState } from "react";
const HeaderComponents = (props) => {
 console.log(props.loginStatus);

  let loggedIn = false;
  if(localStorage.getItem("admin")||localStorage.getItem("user")||localStorage.getItem("hospital")){
  loggedIn = true;
  }
 

  return <>
            {loggedIn ? <HeaderComponents2 /> : <HeaderComponents1 />}

  
        </>;
};

function HeaderComponents1(props) {
console.log(props.loginStatus)
  return (
    <>
      <div className="row">
        <Navbar bg="light" expand="lg" variant="light">
          <Container fluid>
            <div className="col d-flex mx-2 overflow">
              <Link to="/">
                {" "}
                <img src={cityCarelogo} width="80px" height="80px" />
              </Link>

              <Navbar.Brand as={Link} to="/">
                <h3>
                  CITY HEALTH
                  <br /> CARE PORTAL
                </h3>
              </Navbar.Brand>
            </div>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0 offset-1"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link as={Link} to="/">
                  <h4>Home</h4>
                </Nav.Link>
                <Nav.Link as={Link} to="/aboutus">
                  <h4>About</h4>
                </Nav.Link>
                <Nav.Link as={Link} to="/">
                  <h4>Blogs</h4>
                </Nav.Link>
                <Nav.Link as={Link} to="/contactus">
                  <h4> Contact</h4>
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <h2>
                <Link to="/login">
                 <Button className="mx-5" variant="outline-dark"  >
                      Login
                    </Button>    
                    </Link>
                </h2>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

function HeaderComponents2() {
  const[timer,setTime]=useState(new Date().toLocaleString('en-GB'));
  // useEffect(()=>{
  //   setTime(moment().format("DD-MM-YYYY hh:mm:ss a"));
  // },1000);
  
  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleString('en-GB'
      ));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);



  return (
    <>
      <div className="row">
        <Navbar bg="light" expand="lg" variant="light">
          <Container fluid>
            <div className="col d-flex mx-2 overflow">
              <Link to="/">
                {" "}
                <img src={cityCarelogo} width="80px" height="80px" />
              </Link>

              <Navbar.Brand as={Link} to="/">
                <h3>
                  CITY HEALTH
                  <br /> CARE PORTAL
                </h3>
              </Navbar.Brand>
            </div>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0 h4"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                {timer}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default HeaderComponents;

