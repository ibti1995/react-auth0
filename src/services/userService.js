import axios from "axios";

const INSTRUCTOR = "user";
const USER_API_URL = "http://localhost:1254";
const INSTRUCTOR_API_URL = `${USER_API_URL}/${INSTRUCTOR}`;

class UserService {
  subscribe(user) {
    return axios.post(`${INSTRUCTOR_API_URL}/subscribe`, user);
  }
  login(user) {
 return axios.post(`${INSTRUCTOR_API_URL}/login/${user.email}`, user);
  } 
}

export default new UserService();
