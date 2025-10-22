import axios from "axios"

const API = axios.create({
  //baseURL: "https://akmal-bc.karyakreasi.id/api",
  baseURL: "http://127.0.0.1:8000/api",
});

const token = localStorage.getItem("token");
if (token) {
  API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export default API