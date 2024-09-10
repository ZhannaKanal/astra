import { api } from "@/api/api";
import { type DataStore } from "./types";
import type { RegisterData } from "@/api/controllers/types";
export const useDataStore = defineStore("dataStore", {
  state: (): DataStore => ({
    api: api.user,
    user: {},
  }),
  actions: {
    async login(password: string, phoneNumber: string) {
      try {
        const response = await this.api.login({ password, phoneNumber });
        localStorage.setItem("ACCESS_TOKEN", response.token);
      } catch (error: any) {
        console.log("this is an error: ", error.response.data.exception);
      }
    },
    async register(formData: RegisterData) {
      try {
        await this.api.register(formData);
        return true
      } catch (error: any) {
        console.log("this is an error: ", error.response.data.exception);
        return false
      }
    },
  },
});
