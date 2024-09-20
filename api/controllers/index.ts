import { type AxiosInstance } from "axios";
import * as types from "./types";

export class UserApi {
  private request: AxiosInstance;

  constructor(request: AxiosInstance) {
    this.request = request;
  }

  async login(loginData: types.LoginData) {
    const { data } = await this.request<{ token: string }>({
      url: "/tokens",
      method: "POST",
      data: loginData,
    });
    return data;
  }

  async register(registerData: types.RegisterData) {
    const { data } = await this.request<{ token: string }>({
      url: "/users/register",
      method: "POST",
      data: registerData,
    });
    return data;
  }
  async getProfileData() {
    const { data } = await this.request<types.ProfileData>({
      url: "/personal/profile",
      method: "GET",
    });
    return data;
  }
  async getBonuses() {
    const { data } = await this.request<types.Bonusdata>({
      url: "/v1/bonuses",
      method: "GET",
    });
    return data;
  }
}
