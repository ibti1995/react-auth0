import axios from "axios";
const INSTRUCTOR = "admin";
const COURSE_API_URL = "http://localhost:4040";
const INSTRUCTOR_API_URL = `${COURSE_API_URL}/${INSTRUCTOR}`;

class PermisAutoService {
  autoPermisListPermis(name) {
    return axios.get(`${INSTRUCTOR_API_URL}/showpermis`);
  }
  deletePermis(name, id) {
    //console.log('executed service')
    return axios.delete(`${INSTRUCTOR_API_URL}/permis/${id}`);
  }
}

export default new PermisAutoService();
