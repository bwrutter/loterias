import axios from "axios";

const api = axios.create({
  baseURL: "https://loteriascaixa-api.herokuapp.com/api/",
  timeout: 25000,
});

export default api;
