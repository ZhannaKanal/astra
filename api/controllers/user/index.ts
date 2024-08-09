import { type AxiosInstance } from 'axios';
import * as types from './types';

export class UserApi {
  private request: AxiosInstance;

  constructor(request: AxiosInstance) {
    this.request = request;
  }

  async login(loginData: types.LoginData) {
    const { data } = await this.request<{ token: string }>({
      url: '/tokens',
      method: 'POST',
      data: loginData,
    });
    return data;
  }
}
