import axios from "axios";

export const apiClient = axios.create({
  baseURL: `http://localhost:8000`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Authorization":"Bearer "+localStorage.getItem("jwt-token")
  }
});

export default {
  getDrivers() {
    return apiClient.get("/api/all");
  },
  login(payload) {
    console.log(payload);
    return apiClient.post("/login/login_check", payload);
  }
};
