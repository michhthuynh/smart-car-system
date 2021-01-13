import axios from "axios";

export default axios.create({
  baseURL: 'http://localhost:5000/api',
  responseType: "json",
  headers: {
    "Content-Type": "application/json"
  }
});