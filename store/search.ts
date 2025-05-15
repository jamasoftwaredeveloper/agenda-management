import { defineStore } from "pinia";
import axios from "axios";
import type { DoctorDTO } from "@/utils/types/search";

const baseURL = process.env.VUE_APP_API_URL ?? "http://localhost:4000";

interface ParametersSearchDoctors {
  search: string;
}

export const useSearchDoctorsStore = defineStore("searchForDoctors", {
  state: () => ({
    searchForDoctors: [] as DoctorDTO[],
  }),
  getters: {
    getSearchDoctors(state) {
      return state.searchForDoctors;
    },
  },
  actions: {
    async searchForDoctorsDoctors({ search }: ParametersSearchDoctors): Promise<DoctorDTO[]> {
      try {
        const response = await axios.get<DoctorDTO[]>(`${baseURL}/doctors/search/${encodeURIComponent(search)}`);
        
        if (Array.isArray(response.data)) {
          this.searchForDoctors = response.data;
          return response.data;
        }

        console.warn("Formato de respuesta no esperado:", response.data);
        this.searchForDoctors = [];
        return [];
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          console.error("Error de Axios al obtener doctores:", error.message);
        } else {
          console.error("Error inesperado al obtener doctores:", error);
        }
        this.searchForDoctors = [];
        return [];
      }
    },
  },
});
