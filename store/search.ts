import { defineStore } from "pinia";
import axios from "axios";
import { type User as Doctor } from "@/utils/types/user";

//TODO: search for a better way to handle this, Jonthan
const baseURL = process.env.VUE_APP_API_URL || "http://localhost:4000";

export const useSearchDoctorsStore = defineStore("searchForDoctors", {
  state: () => ({ searchForDoctors: [] as Doctor[] }),
  getters: {
    getDoctors(state) {
      return state.searchForDoctors;
    },
  },
  actions: {
    async searchForDoctorsDoctors({
      specialty,
      firstName,
      lastName,
    }: ParametersSearchDoctors) {
      return axios
        .get(`${baseURL}/searchRoutes/${specialty}/${firstName}/${lastName}`)
        .then((response) => {
          this.searchForDoctors = response.data;

          return response.data;
        })
        .catch((error) => {
          return Promise.reject(error);
        });
    },
  },
});
