import axios from "axios";

const API = axios.create({
 baseURL: "https://workbridge-mzl2.onrender.com"
});

// 🔐 attach token
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export default API;