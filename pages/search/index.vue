<script setup lang="ts">
import { ref } from "vue";

import { useSearchDoctorsStore } from "~/store/search";
import { storeToRefs } from "pinia";
import type { DoctorDTO } from "@/utils/types/search";

const doctorSearchStore = useSearchDoctorsStore();

const { getSearchDoctors } = storeToRefs(doctorSearchStore);
const { searchForDoctorsDoctors } = doctorSearchStore;
const searchQuery = ref("");
const doctors = ref<DoctorDTO[]>([]);
/*
const filteredDoctors = computed(() =>
  doctors.value.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      doctor.specialty
        .toLowerCase()
        .includes(searchQuery.value.toLowerCase()) ||
      doctor.location.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
);
*/
const onSearch = async (form: { searchQuery: string }) => {
  searchQuery.value = form.searchQuery;
  try {
    await searchForDoctorsDoctors({ search: searchQuery.value });
    // Verificar el contenido de getSearchDoctors
    if (getSearchDoctors.value && Array.isArray(getSearchDoctors.value)) {
      doctors.value = getSearchDoctors.value;
    } else {
      doctors.value = [];  // Deja la lista vacía si no hay resultados
    }
  } catch (error) {
    doctors.value = [];  // Deja la lista vacía si ocurre un error
  }
};

</script>

<template>
  <div class="bg-gray-900 min-h-screen">
    <!-- Header -->
    <LandingHeader />
    <!-- SearchForm -->
    <SearchInput :doctors-count="doctors.length" @search="onSearch" />
    <!-- Search Results -->
    <SearchResult :doctors="doctors" />
  </div>
</template>
