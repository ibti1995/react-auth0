import axios from "axios";

const INSTRUCTOR = "admin";
const COURSE_API_URL = "http://localhost:1254";
const INSTRUCTOR_API_URL = `${COURSE_API_URL}/instructors/${INSTRUCTOR}`;

class CourseDataService {
  retrieveAllCourses(name) {
    return axios.get(`${INSTRUCTOR_API_URL}/courses`);
  }
}

export default new CourseDataService();
