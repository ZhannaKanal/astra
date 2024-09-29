import { api } from "@/api/api";
import { type DataStore } from "./types";
import type { Categoriesdata, RegisterData } from "@/api/controllers/types";
export const useDataStore = defineStore("dataStore", {
  state: (): DataStore => ({
    api: api.user,
    user: {},
    categoryList: []
  }),
  actions: {
    async login(password: string, phoneNumber: string) {
      try {
        const response = await this.api.login({ password, phoneNumber });
        localStorage.setItem("ACCESS_TOKEN", response.token);
        navigateTo("/profile");
      } catch (error: any) {
        console.log("this is an error: ", error.response.data.exception);
      }
    },
    async register(formData: RegisterData) {
      try {
        await this.api.register(formData);
        return true;
      } catch (error: any) {
        console.log("this is an error: ", error.response.data.exception);
        return false;
      }
    },
    async getProfileData() {
      try {
        const response = await this.api.getProfileData();
        return response;
      } catch (error: any) {
        console.log("Erroor", error.response.data.exception);
      }
    },
    async getBonus() {
      try {
        const response = await this.api.getBonuses();
        return response;
      } catch (error: any) {
        console.log("Erroor", error.response.data.exception);
      }
    },
    async getCategories(data: Categoriesdata) {
      try {
        const response = await this.api.getCategories(data);
        this.categoryList = response.data
      } catch (error: any) {
        console.log("this is an error: ", error.response.data.exception);
      }
    },
  },
});
