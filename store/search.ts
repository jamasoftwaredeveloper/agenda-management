import { defineStore } from "pinia";
import axios from "axios";
import type { DoctorDTO } from "@/utils/types/search";

//TODO: search for a better way to handle this, Jonthan
const baseURL = process.env.VUE_APP_API_URL || "http://localhost:4000";

export const useSearchDoctorsStore = defineStore("searchForDoctors", {
  state: () => ({ searchForDoctors: [] as DoctorDTO[] }),
  getters: {
    getSearchDoctors(state) {
      return state.searchForDoctors;
    },
  },
  actions: {
    async searchForDoctorsDoctors({ search }: ParametersSearchDoctors) {
      try {
        const response = await axios.get(`${baseURL}/doctors/search/${search}`);
        // Verificar si la respuesta tiene el formato correcto
        if (response.data && Array.isArray(response.data)) {
          this.searchForDoctors = response.data;
          return response.data;
        } else {
          console.error("Respuesta inesperada de la API:", response.data);
          this.searchForDoctors = [];
          return [];
        }
      } catch (error) {
        console.error("Error al obtener doctores:", error);
        this.searchForDoctors = [];
        return [];
      }
    },
  },
});
