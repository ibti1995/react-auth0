import axios from "axios";
const INSTRUCTOR = "admin";
const COURSE_API_URL = "http://localhost:4040";
const INSTRUCTOR_API_URL = `${COURSE_API_URL}/${INSTRUCTOR}`;

class TrainingService {
  showTrainingList() {
    return axios.get(`${INSTRUCTOR_API_URL}/showListTraining`);
  }
  addTraining(training) {
    return axios.post(`${INSTRUCTOR_API_URL}/addTraining`, training);
  }
  deleteTraining(name, id) {
    return axios.delete(`${INSTRUCTOR_API_URL}/entrainement/${id}`);
  }
}

export default new TrainingService();
