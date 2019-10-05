import axios from "axios";

const INSTRUCTOR = "admin";
const USER_API_URL = "http://localhost:4040";
const INSTRUCTOR_API_URL = `${USER_API_URL}/${INSTRUCTOR}`;

class UserService {
  subscribe(user) {
    return axios.post(`${INSTRUCTOR_API_URL}/subscribe`, user);
  }
  login() {}
}

export default new UserService();
