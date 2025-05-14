<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import type { Doctor } from '@/types/types';

defineProps<{ doctor: Doctor }>();
const emits = defineEmits<{ close: () => void }>();

const closeModal = () => {
  emits('close');
};
</script>

<template>
  <div
    class="modal-backdrop"
    role="dialog"
    aria-labelledby="modal-title"
    aria-modal="true"
  >
    <div class="modal-content">
      <h2 id="modal-title">Detalles del Doctor</h2>
      <p><strong>Nombre:</strong> {{ doctor.name }}</p>
      <p><strong>Especialidad:</strong> {{ doctor.specialty }}</p>
      <p><strong>Ubicación:</strong> {{ doctor.location }}</p>
      <p><strong>Calificación:</strong> {{ doctor.rating }} ({{ doctor.reviewCount }} reviews)</p>
      <p><strong>Tarifa:</strong> {{ doctor.fee }}</p>
      <button @click="closeModal" class="btn-close">Cerrar</button>
    </div>
  </div>
</template>
