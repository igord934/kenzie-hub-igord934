import axios from "axios";
let token = window.localStorage.getItem("@TOKEN");
const Api = axios.create({
  baseURL: `https://kenziehub.herokuapp.com`,
  timeout: 2000,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default Api;
