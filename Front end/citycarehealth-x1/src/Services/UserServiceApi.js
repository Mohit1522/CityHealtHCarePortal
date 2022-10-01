import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/user";
//const USER_API_BASE_URL = "/user";

class UserServiceApi {
  addUser(user) {
    console.log(user);
    return axios.post(USER_API_BASE_URL + "/adduser", user);
  }

  getByHospname(hosname) {
    return axios.get(USER_API_BASE_URL + "/doctorinfo/" + hosname);
  }

  logoutUser() {
    localStorage.removeItem("user");
  }
}

export default new UserServiceApi();
