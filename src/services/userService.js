import axios from "axios";

const INSTRUCTOR = "in28minutes";
const COURSE_API_URL = "http://localhost:4040";
const INSTRUCTOR_API_URL = `${COURSE_API_URL}/instructors/${INSTRUCTOR}`;

class UserService {
  retrieveAllCourses(name) {
    return axios.get(`${INSTRUCTOR_API_URL}/subscribe`);
  }
}

export default new UserService();
