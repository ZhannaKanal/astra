import axios from "axios";
import { type AxiosInstance } from "axios";
import * as controller from "./index";

class Api {
  private instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: import.meta.env.VITE_BASE_URL,
    });

    this.instance.interceptors.request.use((request) => {
      if (localStorage["ACCESS_TOKEN"]) {
        request.headers.Authorization = `Bearer ${localStorage["ACCESS_TOKEN"]}`;
      }
      return request;
    });

    this.user = new controller.UserApi(this.instance);
  }

  user: controller.UserApi;
}

export const api = new Api();
