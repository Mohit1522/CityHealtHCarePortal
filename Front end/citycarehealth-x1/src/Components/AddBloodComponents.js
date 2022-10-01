import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import HospitalServiceApi from "../Services/HospitalServiceApi";

const AddBloodComponents = () => {
  const [a_pos, seta_pos] = useState(null);
  const [a_neg, seta_neg] = useState(null);
  const [b_pos, setb_pos] = useState(null);
  const [b_neg, setb_neg] = useState(null);
  const [ab_pos, setab_pos] = useState(null);
  const [ab_neg, setab_neg] = useState(null);
  const [o_pos, seto_pos] = useState(null);
  const [o_neg, seto_neg] = useState(null);
  const [message, setMessage] = useState(null);
  const [i, setI] = useState(null);
  const navigate=useNavigate();

  useEffect(() => {
    const hosp = JSON.parse(localStorage.getItem("hospital"));
    setI(hosp.id);
  });

  const saveBlood = (e) => {
    if (
      a_pos === null ||
      a_neg === null ||
      b_pos === null ||
      b_neg === null ||
      ab_pos === null ||
      ab_neg === null ||
      o_pos === null ||
      o_neg === null
    ) {
      Swal.fire({
        title: "All Fields are Mandatory",
        icon: "warning",
        confirmButtonText: "Ok",
      });
      return false;
    }

    e.preventDefault();
    const hospital = {
      a_pos,
      a_neg,
      b_pos,
      b_neg,
      ab_pos,
      ab_neg,
      o_pos,
      o_neg,
    };

    HospitalServiceApi.addBlood(i, hospital).then((res) => {
      setMessage("Blood details updated successfully.");
      Swal.fire({
        title: message,
        icon: "success",
        confirmButtonText: "Ok",
      });
      navigate("/hospitaldashboard");
    });
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
        <h3>Add Blood</h3>
        <form className="pb-5 overflow-hidden">
          <div className="form-group row my-3 justify-content-center">
            <label htmlFor="a_pos" className="col-2 col-form-label">
              A_pos
            </label>
            <div className="col-5">
              <input
                type="number"
                id="a_pos"
                className="form-control"
                placeholder="A_pos"
                name="a_pos"
                value={a_pos}
                onChange={(e) => seta_pos(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-group row my-3 justify-content-center">
            <label htmlFor="a_neg" className="col-2 col-form-label">
              A_Neg
            </label>
            <div className="col-5">
              <input
                type="number"
                id="a_neg"
                className="form-control"
                placeholder="A_Neg"
                name="a_neg"
                value={a_neg}
                onChange={(e) => seta_neg(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-group row my-3 justify-content-center">
            <label htmlFor="b_pos" className="col-2 col-form-label">
              B_pos
            </label>
            <div className="col-5">
              <input
                type="number"
                id="b_pos"
                className="form-control"
                placeholder="B_pos"
                name="b_pos"
                value={b_pos}
                onChange={(e) => setb_pos(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-group row my-3 justify-content-center">
            <label htmlFor="b_neg" className="col-2 col-form-label">
              B_Neg
            </label>
            <div className="col-5">
              <input
                type="number"
                id="b_neg"
                className="form-control"
                placeholder="B_Neg"
                name="b_neg"
                value={b_neg}
                onChange={(e) => setb_neg(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-group row my-3 justify-content-center">
            <label htmlFor="ab_pos" className="col-2 col-form-label">
              AB_pos
            </label>
            <div className="col-5">
              <input
                type="number"
                id="ab_pos"
                className="form-control"
                placeholder="AB_pos"
                name="ab_pos"
                value={ab_pos}
                onChange={(e) => setab_pos(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-group row my-3 justify-content-center">
            <label htmlFor="ab_neg" className="col-2 col-form-label">
              AB_Neg
            </label>
            <div className="col-5">
              <input
                type="number"
                id="ab_neg"
                className="form-control"
                placeholder="AB_Neg"
                name="ab_neg"
                value={ab_neg}
                onChange={(e) => setab_neg(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-group row my-3 justify-content-center">
            <label htmlFor="o_pos" className="col-2 col-form-label">
              O_pos
            </label>
            <div className="col-5">
              <input
                type="number"
                id="o_pos"
                className="form-control"
                placeholder="O_pos"
                name="o_pos"
                value={o_pos}
                onChange={(e) => seto_pos(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-group row my-3 justify-content-center">
            <label htmlFor="o_neg" className="col-2 col-form-label">
              O_Neg
            </label>
            <div className="col-5">
              <input
                type="number"
                id="o_neg"
                className="form-control"
                placeholder="O_Neg"
                name="o_neg"
                value={o_neg}
                onChange={(e) => seto_neg(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-group row justify-content-center">
            <div className="offset-9">
              <button
                className="btn btn-primary text-uppercase mt-3"
                onClick={saveBlood}
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

export default AddBloodComponents;
