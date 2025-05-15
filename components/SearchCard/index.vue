<script setup lang="ts">
import { ref } from 'vue';
import Modal from '../Modal/index.vue';
import DoctorAvailabilityTable from './DoctorAvailabilityTable/index.vue';
import './assets/css/modal.css';

import type { DoctorDTO } from '../../utils/types/search';

defineProps<{ doctor: DoctorDTO }>();

// Estado para controlar el modal
const showModal = ref(false);

// Alterna la visibilidad del modal
const toggleModal = () => {
  showModal.value = !showModal.value;
};
</script>

<template>
  <div class="card">
    <div class="p-6">
      <h3><strong>Dr. {{ doctor.firstName }}</strong></h3>
      <p>{{ doctor.specialty }}</p>
      <a class="block mt-4 text-indigo-500 hover:underline" @click="toggleModal">
        Ver más detalles
      </a>
    </div>
    <!-- Modal con transición -->
    <transition name="fade">
      <Modal v-if="showModal" :doctor="doctor" @close="toggleModal">
        <div class="flex justify-center items-center bg-gray-100 p-4">
          <img src="./assets/imgs/doctor.png" alt="Doctor"
            class="w-40 h-40 object-cover object-center rounded-t-sm mx-auto" />
        </div>
        <p><strong>Dr. {{ doctor.firstName }} {{ doctor.lastName }}</strong></p>
        <p class="text-gray-500">{{ doctor.specialty }}</p>
        <p class="text-gray-500">{{ doctor.clinicAddress }}</p>
        <p class="text-gray-500">Teléfono: {{ doctor.phoneNumber }}</p>
        <p class="text-gray-500">Costo de cita: {{ doctor.billing.totalAmount }}</p>
        <DoctorAvailabilityTable :availabilities="doctor.DoctorAvailabilities" />
      </Modal>
    </transition>
  </div>
</template>
