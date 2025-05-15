<script setup lang="ts">
import { ref } from 'vue';
import type { Doctor } from '@/types/types';
import DoctorModal from './DoctorModal.vue';
import './modal.css';

defineProps<{ doctor: Doctor }>();

// Estado para controlar el modal
const showModal = ref(false);

// Alterna la visibilidad del modal
const toggleModal = () => {
  showModal.value = !showModal.value;
};
</script>

<template>
  <div class="card">
    <img :src="doctor.imageSrc" :alt="doctor.imageAlt" class="object-cover rounded-t-lg" />
    <div class="p-6">
      <h3><strong>{{ doctor.firstName }}</strong></h3>
      <p>{{ doctor.specialty }}</p>
      <a :href="doctor.href" class="block mt-4 text-indigo-500 hover:underline" @click="toggleModal">
        Ver más detalles
      </a>
    </div>
    <!-- Modal con transición -->
    <transition name="fade">
      <DoctorModal v-if="showModal" :doctor="doctor" @close="toggleModal" />
    </transition>
  </div>
</template>
