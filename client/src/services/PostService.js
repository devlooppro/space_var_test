import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://194.9.70.47:3001",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getPosts() {
    return apiClient.get("/posts");
  },
  postPost(message) {
    return apiClient.post("/posts", message);
  },
};
