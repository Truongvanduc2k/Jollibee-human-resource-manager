import axios from "axios";
import { WEB_SERVER_URL } from "../config/serverURL";
import { getUserFromLocalStorage } from "./localStorage";

const api = axios.create({
  baseURL: WEB_SERVER_URL,
});

api.interceptors.request.use(
  (config) => {
    const user = getUserFromLocalStorage();
    if (user !== null) {
      config.headers.Authorization = `Bearer ${user.token}`;
      return config;
    }
    else
      return config;
  },
  (error) => {
    console.log("Erro na Requisição: ", error);
    return Promise.reject(error);
  }
);

export default api;
