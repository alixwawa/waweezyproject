import axios from "axios";

export const axiosRoutes = {
  // Saves a post to the database
  saveInfo: function(postData) {
    return axios.post("http://localhost:3001/info", postData);
  }
};

export default axiosRoutes