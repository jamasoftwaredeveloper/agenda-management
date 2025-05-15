<script setup lang="ts">

defineProps<{
  doctors: DoctorDTO[];
}>();
</script>

<template>
  <!-- Search Results -->
  <section>
    <div class="bg-white py-12">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900">
          Resultados de Búsqueda
        </h2>
        <div class="mt-8 grid gap-8 lg:grid-cols-3">
          <div v-for="doctor in doctors" :key="doctor.id" class="bg-white shadow-lg rounded-lg overflow-hidden">
            <SearchCard :doctor="doctor" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
