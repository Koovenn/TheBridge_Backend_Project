import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 10000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Allow-Control-Allow-Origin": "*",
    "Allow-Control-Allow-Credentials": true,
  },
});

export default api;
