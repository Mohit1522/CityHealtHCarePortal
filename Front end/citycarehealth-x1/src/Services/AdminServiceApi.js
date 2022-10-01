import axios from "axios";

 const ADMIN_API_BASE_URL = "http://localhost:8080/admin";
//const ADMIN_API_BASE_URL = "/admin";
class AdminServiceApi {
  addHospital(hospital) {
    console.log(hospital);
    return axios.post(ADMIN_API_BASE_URL + "/addhospital", hospital);
  }

  fetchAllHospitals() {
    return axios.get(ADMIN_API_BASE_URL + "/allhospitals");
  }
  fetchAllUsers() {
    return axios.get(ADMIN_API_BASE_URL + "/allusers");
  }

  logoutAdmin() {
    localStorage.removeItem("admin");
  }
}

export default new AdminServiceApi();
